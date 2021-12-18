---
category: 'blog'
cover: './heroku_flask.png'
title: 'Go Live With Your Flask Application on Heroku'
description: 'How to deploy a Flask web application on Heroku'
date: '2019-11-01'
tags: ['Web Development']
published: true
---

![Blog Post Thumbnail](./heroku_flask.png)

You worked for hours on your project, maybe days, or maybe even weeks or months. Regardless of the magnitude of your project, you probably want to share your work somewhere online so others can see it, right? At least for me, the urge to share my work online is something natural. An application is as good as dead if no one else can see your project, and is just sitting there on your local machine. Many inexperienced programmers go through that disheartening moment of thinking "How in the world do I host this application up on the internet?" If this sounds like you, this post is meant for you (because I know so very well how hopeless that feels), so follow along!  

## 1. What is Heroku? 
Heroku is an extremely popular Platform as a Service (PaaS). In case you are unfamiliar with what PaaS is, it's a type of cloud computing services that allows developers to develop, manage, and run applications without having to deal with the complications of building server-side infrastructure.   

## 2. Prerequisites
To deploy on Heroku, you will need a basic application to deploy (obviously). In this post, I will be writing specifically about how to deploy a Flask application on Heroku. Hopefully, your application is running in a virtual environment (it's always a good idea, when working with Python). Additionally, a very basic knowledge of the command line and git would be of great help. Before we get started, if you don't have an application, you can still follow along by cloning my repository to your local machine (you will need to have git installed):  

```bash
$ git clone https://github.com/jeffjaehoyang/twitter_bot.git 
```

You should see that you have a directory called "twitter_bot" now. Assuming you have pip and python3 installed:  

```bash
$ cd twitter_bot
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```

Note that the last command above installs into the virtual environment all the dependencies that the project needs to run properly. Once you run the commands above, we are ready to get started.  

## 3. Starter
First, you will need to download the Heroku CLI. For more information, please take a look [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install). During this process, you should have been prompted to create a Heroku account (please make sure you do, you'll need that!) This first step should have been relatively simple and straightforward. Once you download the Heroku CLI, you will have to login.  

```bash
$ heroku login
  heroku: Press any key to open up the browser to login or q to exit: (press any key!)
```

That should have prompted you to a Heroku login page, where you need to type in your login credentials. Hopefully, you got that right. Now let's move onto the specifics of deploying your Flask application on Heroku!  

## 4. A Step Before Deployment
### Install Gunicorn 
To deploy your application on Heroku, you need to specify which web server your application is going to be running. We will use Gunicorn. We need to install this: 
```bash
$ pip install gunicorn
$ pip freeze > requirements.txt
```

Note that we updated the `requirements.txt` above, because we added gunicorn as a dependency.  

### Add a Procfile
You will need to add a Procfile (don't add any extensions!) specifying a web server and your application name:  

```bash
$ vim Procfile
  web: gunicorn flaskrun: app
```

For those of you who are following along with your own application, please note that you should change `flaskrun` to the name of your application. We are ready to deploy!  

## 5. Deploy Your Application
Inside your project directory, run:  

```bash
$ heroku create YOURAPPNAME-api-heroku
```

Once you run the command above, you will be able to see two different URLs:  

```bash
$ https://YOURAPPNAME-api-heroku.herokuapp.com | https://git.heroku.com/YOURAPPNAME-api-heroku.git
```

The first URL above is where your application is deployed, so please save it somewhere safe. The second URL is the Heroku git repository, and for your application to go live, you need to push your work to the `master` branch of the Heroku repository.  

```bash
$ git push https://git.heroku.com/YOURAPPNAME-api-heroku.git master
```

## 6. Configuration on Heroku
If you were using my tweet bot repository to follow along, you may have realized that there's a problem. Don't worry, we didn't do anything wrong. We just need to do one more thing. Because I used Twitter API keys for my tweet bot application (and that's considered sensitive information), I didn't push that information to my git repository. Locally, that information sits in a dotenv file, and on Heroku, we have to provide that information for our appliation to work. I won't be providing my own API keys, but you can go ahead and look [here](https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens) for official documentation on how to get your own Twitter API keys. Once you have your own keys ready, configure them on Heroku by doing the following inside your project directory:  

```bash
$ heroku config:set CONSUMER_KEY=YOUR-API-KEY
$ heroku config:set CONSUMER_SECRET_KEY=YOUR-SECRET-KEY
$ heroku config:set ACCESS_KEY=YOUR-ACCESS-KEY
$ heroku config:set ACCESS_SECRET_KEY=YOUR-ACCESS-SECRET-KEY
```

Congratulations! Your application should now be live on Heroku!  
Heroku has done a great job in documenting how to deploy your application on Heroku: [link](https://devcenter.heroku.com/articles/getting-started-with-python).