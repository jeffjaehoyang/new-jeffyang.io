---
category: 'blog'
cover: './heroku_django.png'
title: 'Django Channels 2.0, Postgres, Daphne, and Heroku'
description: 'A blog post on how to deploy a Django-ASGI application on heroku'
date: '2020-04-20'
tags: ['Web Development']
published: true
---

![Blog Post Thumbnail](./heroku_django.png)

**Disclaimer: This blog post is largely a quarantine coding production.** 

I already have a blog post on how to deploy a very simple Flask application on Heroku. In this blog post, I will explore more details of Heroku deployment, but this time with Django. I have been working on a Django & Channels side project, a web platform to enhance off-campus room searching experience for Northwestern students. As the application development was almost over and user testing seemed like the logical next step to take, I turned my eyes to Heroku (largely for their known simplicity compared to other services such as AWS or Linode). It turned out that there were a few curveballs thrown at me, largely due to Channels using an ASGI server rather than a traditional Python WSGI server. I hope this blog post serves as a future reference for myself, and for a few other friends out there that may be facing similar problems that I did.  

## 1. What is Heroku?
Heroku is an extremely popular Platform as a Service (PaaS). Heroku is very attractive for developers who need to deploy something quickly, without having to worry about the complications of building server-side infrastructure. Heroku has a free-tier, but only provides very limited resources. For small personal projects, the free-tier should get the job done, but for bigger projects, you may want to consider upgrading your plan to handle more traffic.  

## 2. Background
In this post, I will be writing specifically about how to deploy a Django Channels application on Heroku. For those of you who are unfamiliar with Django Channels, here's a brief introduction: simply put, Channels gracefully extends Django's boundaries beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more. It’s built on a Python specification called ASGI (Asynchronous Server Gateway Interface), which makes the deployment process slightly different from a Python WSGI application. This post will not be a Channels tutorial. If you are interested in learning more about Channels, take a look at their official [documentation](https://channels.readthedocs.io/en/latest/index.html). In moving forward, I will assume that you have a basic understanding of Python and Git version control, that you already have a working Django Channels application, and that you already have files such as `routing.py` and `consumers.py` already setup. This blog post will deal with deployment related content only.  

## 3. Configuring Django Settings
Environment variables play a big role in the separation of development and production environments. Rather than hard-coding environment variables (which is bad practice in general), setting separate environment variables in the local machine and Heroku deployment server makes life a lot easier for us developers. For macOS users, environment variables can be set in `.zshenv` or `.bash_profile` depending on your macOS version. The way I achieved a separation of settings for development and production environment was by conditionally setting production environment variables in a conditional where `DEBUG` is `False`. For this to work, the `DEBUG` value must be set to `True` in local settings, and to `False` in production. I used an environment variable named `DEBUG_VALUE` to dynamically assign the appropriate `DEBUG` value. You will also have to add an environment variable `SECRET_KEY`, which should not be hard-coded for production. We will deal with setting Heroku environment variables later. I also used `django_heroku`, which is an awesome package that automatically configures your Django application to work on Heroku. The use of `django_heroku` is in fact endorsed by Heroku, as it provides many niceties, including the reading of `DATABASE_URL`, logging configuration, a Heroku CI–compatible TestRunner, and an automatic configuration of ‘staticfiles’ to “just work” (according to Heroku).

```bash
$ pip install django_heroku
```

Because a Django Channels application requires an ASGI server, we are going to need something different than a standard WSGI server such as Gunicorn. The Channels project maintains an official ASGI HTTP/WebSocket server, Daphne, which I will be using in my project. However, there are alternatives such as [uvicorn](https://www.uvicorn.org/), which is also known to be stable. Because of this extra layer of complication, there are a few different ways one can go about configuring appropriate web servers depending on needs. For example, you may choose to keep running standard HTTP requests through a WSGI server and use Daphne only for things WSGI cannot do, like HTTP long-polling and WebSockets. You may also opt to utilize Daphne for all HTTP and WebSocket traffic, in which case Daphne auto-negotiates between HTTP and Websocket. For my own project, I decided to use Daphne as the only server to handle all requests.  

```bash
$ pip install daphne
```

### settings.py
```python
# settings.py
SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = (os.environ.get('DEBUG_VALUE') == 'True')

ALLOWED_HOSTS = ["localhost", "yourappname.herokuapp.com"]

ASGI_APPLICATION = 'yourappname.routing.application'

# you need channels_layers configured as follows, and channels_redis installed 
CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [os.environ.get('REDIS_URL', 'redis://localhost:6379')],
        },
    },
}

# Add the following at the end of settings.py
# Settings below are used for deployment
# Note that AWS settings are not required, but was needed for my application
if not DEBUG:
    import django_heroku
    AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
    AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
    AWS_S3_FILE_OVERWRITE = False
    DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
    S3_URL = f"http://{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/"
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')    
    django_heroku.settings(locals())
```

### asgi.py
Your `asgi.py` file should be located in the same directory as your `wsgi.py` file. 
```bash
$ touch asgi.py
```

<br/>

```python
# asgi.py
"""
ASGI entrypoint. Configures Django and then runs the application
defined in the ASGI_APPLICATION setting.
"""

import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "yourappname.settings")
django.setup()
application = get_default_application()
```
We are ready to move on to configuring Heroku now!  

## 4. Configuring Heroku
First, you will need to download the Heroku CLI. For more information, please take a look [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install). During this process, you should have been prompted to create a Heroku account (please make sure you do, you'll need that!) This first step should have been relatively simple and straightforward. Once you download the Heroku CLI, you will have to login.  

```bash
$ brew tap heroku/brew && brew install heroku # install Heroku CLI for macOS
...installation complete 
$ heroku login
heroku: Press any key to open up the browser to login or q to exit: (press any key!)
Logging in... done
Logged in as yourname@someemail.com
$ git init # you will want to add a .gitignore file before you add files to commit!
$ git add -A
$ git commit -m "heroku deployment preparation"
$ heroku create name_your_own_app
$ heroku open 
... you should be seeing a Heroku default screen on your browser
$ git push heroku <your_local_branch_name>:master # if you exclude your local branch name, it'll default to master
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 434 bytes | 434.00 KiB/s, done.
Total 5 (delta 4), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Python app detected
remote: -----> Installing SQLite3
remote: Sqlite3 successfully installed.
remote: -----> Installing requirements with pip
... push failed
```

It seems like our push to `heroku master` just failed. We just need to configure a couple more files to get our application up and running on Heroku. Now let's take a look at what other files we need to successfully deploy our Django application.  

### Procfile
To deploy any application on Heroku, you will need to add a `Procfile` (without '.txt', '.py' or any extensions) specifying a web server and your application name. Without the `Procfile`, Heroku will not be able to run a web server, which is needed to serve your application.<br>
```bash
$ # this file should be in your project's root directory 
$ vim Procfile
> web: daphne <your_application_name>.asgi:application --port $PORT --bind 0.0.0.0 -v2
```

### Runtime.txt
`runtime.txt` is not absolutely necessary, but is highly recommended if you are looking to specify the Python version you want your application to run on Heroku's servers.  
```bash
$ # this file should be in your project's root directory 
$ vim runtime.txt
> python-3.8.2
```

*I would highly recommend that you configure your `runtime.txt` with a Python version of 3.8.1 or higher. I initially deployed my application with Python version 3.7.4, which had a strange problem with opening a new database connection for each request, which crashed my server (my plan only allows for a maximum of 20 database connections). I spent hours searching through Google, which did not get me anywhere. Upgrading the Python version fixed the issue for me.*  

### Requirements.txt
Having a `requirements.txt` is necessary for Heroku to automatically setup their dynos (their Linux machines) for you. Your `requirements.txt` must have any and all dependencies that your application needs to run properly. It is important that you remember to update your `requirements.txt` file everytime you add an external dependency to your project. 

```bash
$ # this file should be in your project's root directory 
$ pip freeze > requirements.txt
```

### Addons
You may have been using an SQLite database for development on your local machine. For production, however, using an SQLite database is not recommended. I decided to use Postgres for my application, which is a popular choice. Django Channels also requires a Redis instance to act as the channel layer, so we'll also need to add `heroku-redis`.

```bash
$ heroku addons:create heroku-postgresql
$ heroku addons:create heroku-redis
```

### Environment Variables
Setting environment variables for Heroku is very simple. They support configuration through both the Heroku CLI and their website dashboard. I configured mine through the CLI.

```bash
$ heroku config:set DEBUG_VALUE="False" # yes, "False" as a string!
$ heroku config:set SECRET_KEY="your_secret_key_in_strings"
```

### Useful Heroku CLI Commands
Here are a couple very useful Heroku CLI commands. 

```bash
$ heroku login 
$ heroku restart # restarts the Heroku dyno
$ heroku create <your_app_name>
$ heroku open # opens up your heroku app
$ heroku open -a <your_app_name> # when you are working outside your git repo 
$ heroku logs # opens up server logs, very useful for debugging
$ heroku addons:create <package_name> 
$ heroku pg:info # postgres database info
$ heroku run bash # opens a bash shell to Heroku machine
$ heroku run <your command> # e.g. heroku run python manage.py migrate
$ heroku certs:auto:enable # allow heroku to automatically manage ssl cert
$ heroku ps:scale web=1:<tier_name> # scale web dyno
```

## 5. Deploy Your Application
Let's try it again now!  

```bash
$ git add -A
$ git commit -m "deploying to heroku"
$ git push heroku <your_branch_name>:master
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 434 bytes | 434.00 KiB/s, done.
Total 5 (delta 4), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Python app detected
remote: -----> Installing SQLite3
remote: Sqlite3 successfully installed.
remote: -----> Installing requirements with pip
remote: -----> $ python nu_housing_app/manage.py collectstatic --noinput
remote:        168 static files copied to '/tmp/build_d5d77a4a08320db00239af29729591fe/nu_housing_app/staticfiles', 520 post-processed.
remote: 
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote: 
remote: -----> Compressing...
remote:        Done: 86.2M
remote: -----> Launching...
remote:        Released v10
remote:        https://yourappname.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
```

**Note:** Your logs may look different from mine. As long as it doesn't error, there shouldn't be a problem.  

Seems like our application was successfully deployed! We just have one final step left; we need to initialize our database.

```bash
$ heroku run bash
Running bash on ⬢ your-app-name... ⣷ connecting, run.3028 (Hobby)
# inside the directory that has manage.py file, run the following
~ $ python manage.py makemigrations
~ $ python manage.py migrate
... you should see your database initializing ... and we are done!
```

Congratulations! We have successfully deployed our Django Channels application on Heroku. If you run into any problems, Heroku has done a great job in documenting how to deploy your application on Heroku, so check it out [here](https://devcenter.heroku.com/articles/getting-started-with-python).