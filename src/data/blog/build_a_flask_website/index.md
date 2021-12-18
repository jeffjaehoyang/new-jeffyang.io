---
category: 'blog'
cover: './flask_md.png'
title: 'Build Your Own Website with Flask'
description: 'How to build your own website with Flask'
date: '2019-10-26'
tags: ['Web Development']
published: true
---

![Blog Post Thumbnail](./flask_md.png)

**Disclaimer**: _I have migrated my personal website since I wrote this post back in 2019, and moved away from the blog written with Flask. This website that you are on currently is built with Gatsby, and is hosted on Netlify. Regardless, for those of you interested in creating a simple personal website with Flask, read on!_

Hello World! This is a post that was on my mind for a while now, and I'm so glad to finally write this post on this personal portfolio site I created! I previously had a Wordpress site that got me a good-looking fancy website up and running in no time. With all the beautiful Wordpress blog templates out there for a bargain, a sleek looking website was just a few clicks away. Nevertheless, something kept telling me to build a website myself - let me tell you why. Most importantly, the Wordpress site was beautiful on the outside, but rather bulky inside. I wanted to build a faster and a more light-weight website. Wordpress offered thousands of useful plugins (which is great), but having to update them constantly (for security purposes) was another downside of owning a Wordpress site. Last but certainly not the least, I thought "why not take this chance to brush up my web development skills?" This portfolio site is by no means greatly complex, but it still has all the basic structures of a full-fledged web application. So this simple site came to be, and for its creation, I mainly utilized Python's microframework, Flask (and some BootStrap4 to make things look decent effortlessly).  

## 1. What is Flask?

Flask is a lightweight microframework written in Python that is both intuitive and beginner friendly. I have a bit of prior experience in Flask development (mostly with APIs), but this was my first time building a Flask app completely from scratch, and I found the basics to be fairly easy to grasp. What I found was particularly convenient about Flask was Jinja2, a templating engine that comes with Flask (upon installation, literally). Jinja2 made it easy to create nested pages, by using a common layout page that all the nested pages could be built into. I decided to serve static Markdown files for my blog posts, instead of updating and editing directly from the website through a form. To achieve this, I used Flask's FlatPages module, which essentially serves static Markdown files from a designated directory (all you need to do is upload a Markdown file to the directory, and it will be up on your website!)  

## 2. Let's Get Started!  

### Setting Up Your Virtual Environment

All developers who have any level of experience with Python will probably agree that no matter what type of project you are working on, installing packages systemwide is not a good idea. If you are new to Python, and don't have a clue about what a virtual environment is, here's an overly simplified explanation: Essentially, virtual environments help keep your dependencies (i.e. libraries/packages) separate for each project, so that each project knows exactly what versions of which extensions it needs to run properly. For more detailed information on Python's virtual environment and best practices, I found [this](https://realpython.com/python-virtual-environments-a-primer/) article particularly resourceful.  

Create a virtual environment inside your project directory (assuming you are using Python 3):  

```bash
$ mkdir my_flask_app
$ cd my_flask_app
$ touch run.py
$ python3 -m venv venv
$ source venv/bin/activate
```

### A Quickstart to Your Basic Flask Application

Install the following dependencies using pip (assuming you have pip installed):  

```bash
$ pip install Flask Flask-FlatPages Pygments
```

Now we have the bare minimum to start building a website like the one you are looking at right now!
Inside `run.py`, write some code along the lines of the following:  

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Yes! Just Cooked Some Flask!"

#If running directly with Python, just set debug mode to TRUE
if __name__ == "__main__":
    app.run(debug=True)
```

Now we have the most basic application ready to go, so let's run it:  

```bash
$ python run.py
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

For official documentation and more details on Flask, take a look [here](http://flask.palletsprojects.com/en/1.1.x/quickstart/#a-minimal-application).  
For those of you who need extra guidance, I highly recommend [this](https://www.youtube.com/watch?v=MwZwr5Tvyxo&list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH) Flask tutorial series. (It's free!)  

## 3. Serve the App, but How?
We have a very basic Flask application running, with the few lines of code we wrote above. If we are going to develop this baby Flask application into anything meaningful, we need to render pages on it (by pages, I mean blog posts, and not other pages; they can be written in pure HTML). There are a couple of ways to handle this task at hand. Something that would be a sensible thing to do for a dynamic website that needs to handle updates and deletes real-time would be to utilize Flask-SQLAlchemy, and use a relational database (such as SQLite). However, I was looking to do something a little bit different here. Since this website was meant to serve as a private online space, I figured that a relational database wasn't necessary. Then I came across Flask-FlatPages, which made possible to serve static Markdown files to push onto the website. Setting up Flask-FlatPages shouldn't be too difficult, let's take a look.  

```python
from flask import Flask, url_for
from flask_flatpages import FlatPages

app = Flask(__name__)
app.config.from_object(__name__)
#Initialize flatpages
flatpages = FlatPages(app)

#Configure FLATPAGES settings
DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'
FLATPAGES_ROOT = 'content'
POST_DIR = 'posts'

@app.route('/')
def home():
    return "Yes! Just Cooked Some Flask!"

#Configure URL routing for each blog post by the name of Markdown file
@app.route('/post/<name>')
def post(name):
    path = '{}/{}'.format(POST_DIR, name)
    post = flatpages.get_or_404(path)
    #Note that we don't have blog_post.html ready yet, so this won't work yet!
    return render_template('blog_post.html', post=post)

if __name__ == "__main__":
    app.run(debug=True)
```

The code above should get your application ready to serve your Markdown files. All you need to do is put your Markdown files inside `./content/posts`:  

```bash
$ cd content
$ cd posts
$ touch my_first_post.md
$ vim my_first_post.md
```  

Inside `my_first_post.md`:  

```md
author: Jeff Yang
title: My First Blog Post
published: 2019-10-26

### This is a Heading
This is my **first** blog post.
> Let's Celebrate in a Blockquote!
`def this_is_python_code():
    print("you can even write code!")`
```

For further information on Markdown and its syntax, please check [documentation](https://www.markdownguide.org/cheat-sheet/).  

Now we just need a HTML template to render this Markdown file into. As I mentioned above, Flask's default templating engine Jinja2 is equipped with a simple but powerful "template inheritance" feature that makes life easy for us.  

One level under `my_flask_app` directory, let's create a directory called `template` and create `layout.html` and `blog_post.html` inside it:  

```bash
$ mkdir templates
$ touch layout.html
$ touch blog_post.html
```  

### layout.html

```html
<html>
<head>
    <title>My Flask App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body>
    <h1>
        <a href="{{ url_for('home') }}">Home</a>
    </h1>

    <div>
        {% block content %}{% endblock content %}
    </div>
</body>
</html>
```  

### blog_post.html

```html
{% extends "layouts.html" %}
{% block content %}
    <h3><strong>{{ post.title }}</strong></h3>
    Published: {{ post.published }}
    {{ post.html|safe }}
{% endblock %} 
```  

The code for the HTML files above look a lot like pure HTML, but there are some oddities. Let's take a look at some of the key features that the Jinja2 templating engine comes with.  

* `{% extends "layouts.html" %}`: `blog_post.html` is nested into `layouts.html`
* `{% block content %}{% endblock content %}`: specifies the location of where your nested html file should be added to
* `{{ post.published }}`: renders metadata from your Markdown file
* `{{ post.html|safe }}`: renders the content of your Markdown file

Now your Markdown file content should be on your website, through the endpoint you configured before:  

```python
...
#Configure URL routing for each blog post by the name of Markdown file
@app.route('/post/<name>')
def post(name):
    path = '{}/{}'.format(POST_DIR, name)
    post = flatpages.get_or_404(path)
    #Now that we have blog_post.html ready to go, it should work!
    return render_template('blog_post.html', post=post)
```  

For more detailed explanation on templating, please check the [documentation](https://jinja.palletsprojects.com/en/2.10.x/) for Jinja2.  

## 4. Want to Insert Code Snippets for Blog Posts?

I knew from the moment I started building this website that I would need a way to insert code snippets inside a code block, with syntax highlighting. Using Wordpress, it was easy. I just had to install a plugin. Trying to add this feature to my own website, however, was a slightly different story. It's extremely easy to find code snippets on the internet, they are on essentially every tech blog, we can see them on Stack Overflow, but it wasn't as easy as I thought it would be to find exactly what I needed for this site. To save you from some trouble in case you are looking to add code snippets to your Flask application, here's how to do it.  

We already have most of the tools needed to insert beautiful and customized code blocks into the blog posts. Flask-FlatPages comes with Markdown, which comes with an extension called *codehilite* that supports syntax highlighting. However, we need to add some simple configurations to get it to work. We first need to install *Pygments* (but we already installed it in the very first pip install execution we did in the beginning of this article). If you didn't install *Pygments*, go ahead and install it. Once *Pygments* is installed, we need to do the following:  

```python
from flask import Flask, url_for
from flask_flatpages import FlatPages

app = Flask(__name__)
app.config.from_object(__name__)
flatpages = FlatPages(app)

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'
FLATPAGES_ROOT = 'content'
#You need the extensions below for your code snippet to be properly displayed
FLATPAGES_MARKDOWN_EXTENSIONS = ['fenced_code', 'codehilite']

@app.route('/')
def home():
    return "Yes! Just Cooked Some Flask!"

#Configure URL routing for each blog post by the name of Markdown file
@app.route('/post/<name>')
def post(name):
    path = '{}/{}'.format(POST_DIR, name)
    post = flatpages.get_or_404(path)
    return render_template('blog_post.html', post=post)
```  

To customize how your code block looks, do something like this:  

```bash
$ pygmentize -L
```  

The above code will print a list of built in themes available for your code blocks. To check out what the different themes look like (or customize the css based on your personal needs), run the following command inside `my_flask_app` directory:  

```bash
$ mkdir static
$ cd static
$ pygmentize -S THEMENAMEOFYOURCHOICE -f html -a .codehilite > pygs.css
```  

You should be able to see that a new pygs.css file is created inside the `static` directory. It should surely be working now! Ah, wait a minute, we forgot to link this CSS file to our HTML templates.  

### layouts.html

```html
<!doctype html>
<html>
<head>
    <title>My Flask App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='pygs.css') }}">
</head>
...
```  

That should do it. We finally have the backbones of a functional personal blog built with Flask! Let's do a short recap of what we went through.  

* Created a virtual environment before we started to install anything needed to build this blog
* Initialized a very basic Flask application
* Created simple HTML templates powered by Jinja2
* Went through how to serve static Markdown files through the HTML templates using Flask-Flatpages
* How to insert prettified code blocks into our blog posts through some simple configurations of FlatPages-Markdown-Codehilite-Pygments

Congratulations! Now we are cookin' with Flask!
