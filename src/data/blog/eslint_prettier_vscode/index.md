---
category: 'blog'
cover: './eslint_prettier_vscode.png'
title: 'Setting up ESLint and Prettier with VS Code'
description: 'Setting up ESLint & Prettier with VS Code'
date: '2020-08-08'
tags: ['Developer Tools']
published: true
---

![Blog Post Thumbnail](./eslint_prettier_vscode.png)

An important part of software development/engineering (or whatever else you may want to call it) is writing code that works as intended, and is as bug-free as can be made. However, there's actually a lot more to writing code than just to "make it work." This is primarily because almost any meaningful project/software that exists in the world is created through collaboration. In other words, it is important that you are able to easily read others' code, and that others are also able to easily read and understand your code. There are lots of ways to achieve this, including manual methods. A team of engineers can manually check for code style issues during code reviews, and possibly even create a detailed documentation on the coding styles that every engineer on the team should adhere to. However, with what we are about to cover in this blog post, investing engineers' time should no longer be put into reviewing code style. Without any further ado, let's find out how to set up ESLint and Prettier with Visual Studio Code (VS Code).

## Linter vs. Code Formatter
Before we dive into the actual set up, let us briefly discuss what a linter and a code formatter is.
### What is a linter? 
> Lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. The term originates from a Unix utility that examined C language source code. 

Linter is a developer tool that flags potential errors and bugs, which in turn lets the programmer easily spot potential bugs he/she may have accidentally introduced. For example, a linter can help catch some of the most commmon bugs such as import errors, undeclared variable errors, while also producing warnings where adequate; we all know about the tale of `const` vs `let` in JavaScript. While there are many linters to choose from, the most popular JavaScript/TypeScript linter in the market today is [ESlint](https://eslint.org), so that's what we will focus on in this blog post. 

### What is a code formatter?
> A code formatter, unlike a linter, is only concerned with code style. 

A code formatter will not be able to catch errors or bug in your code; that is not what it was built for. It is soley interested in beautifying your code according to configurable standards. There are many different code formatters available, but we will focus on a code formatter called [Prettier](https://prettier.io/), which is a highly popular and opinionated formatter.

## Setting up ESLint and Prettier with VS Code
A linter and a code formatter are made to be used with a code editor. There are many code editors out there, the most popular ones being VS Code, Sublime Text, and Atom. VS Code, the most recent addition to the list, was made by Microsoft and has gained popularity over the last couple of years due to its rich collection of plugins that can all be configured directly within the application. In this blog post, we will specifically see how ESLint and Prettier can be configured for use with VS Code.  

### Understanding the Difficulty
The main reason why people find it tricky to properly set up ESLint and Prettier together is because ESLint does not strictly restrict itself within the boundaries of a linter; it also supports formatting code. There are style-related rules that can be configured within ESLint that may conflict with Prettier, which also wants to format your code. Hence, we need to make sure that we get avoid any possible conflicts between the two. With this in mind, let's continue and embark on our journey of successfully configuring ESLint and Prettier to harmoniously work together. 

### Install ESLint and Prettier
**Note**: For official documentation and detailed guides, see official website for [ESLint](https://eslint.org/docs/user-guide/getting-started) and [Prettier](https://prettier.io/docs/en/integrating-with-linters.html).

We first need to install ESLint using `npm` or `yarn`, whichever one you prefer. You can either install ESLint globally, or locally. I personally use ESLint for all of my projects now, so I installed ESLint globally. Even if installed globally, we will still have to set up specific configuration files for each specific projects. 

```console
# install eslint globally 
npm install -g eslint
```

Now that we've installed ESLint globally, we need to install Prettier. As with ESLint, Prettier can either be installed locally as a dependency, or can be installed globally. As I like to use Prettier with all my projects, I will install it globally.

```console
# install prettier globally
npm install -g prettier
```

That's it for basic installation! Now we have to configure ESLint and Prettier so that they can work together harmoniously within our editor. 

### Install ESLint & Prettier Plugin for VS Code
You will need to install the appropriate extension/plugin for your code editor. For VS Code, install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). These plugins have millions of downloads each, so it'll be difficult to miss them in the VS Code extension marketplace. Once you've installed these, we are ready to move on to configuring each of them for proper usage.

### Configuring ESLint and Prettier
As I mentioned earlier, ESLint and Prettier will conflict with each other if not set up with care. Fortunately, because this is such a widely recognized problem, there are packages that are made to solve exactly this problem. We are going to install two different packages; `eslint-config-prettier` to exclude all ESLint rules that could conflict with Prettier, and `eslint-plugin-prettier` to integrate the Prettier rules into ESLint rules. This way, you won't have two different rules that conflict with each other. 

```console
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

**Note**: Curious what the `--save-dev` flag does? By intalling with `--save-dev` flag, npm installs the packages `eslint-config-prettier` and `eslint-plugin-prettier` as `devDependencies`. This differs from the default behavior of `npm install` which installs it as a dependency to run the application, and places the downloaded files in `node_modules`.  

Now that we have that successfully installed those packages, we need to run some commands to initialize ESLint within our project. 

```
eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.8.0 || ^7.2.0, eslint-plugin-import@^2.21.2
npm WARN eslint-plugin-prettier@3.1.4 requires a peer of prettier@>=1.13.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-prettier-blogpost@1.0.0 No repository field.

+ eslint-plugin-import@2.22.0
+ eslint-config-airbnb-base@14.2.0
+ eslint@7.6.0
added 171 packages from 100 contributors and audited 176 packages in 10.789s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

As illustrated above, when you run the command `eslint --init`, you will be asked questions to determine the configurations of the linter. You just need to answer those questions based on the project you are working on. One thing to note here is the question "Which style guide do you want to follow?" There are many different style guides out there, including the JavaScript standard style guide, Airbnb style guide, and Google style guide. These are some very popular guides that a lot of developers choose to use (I chose the Airbnb style guide, which seems to be the most popular style guide out there). If you or your team have your own set of style guides, you don't necessarily have to select an existing one.  

Once the setup is successful, you should see a file `eslintrc.{js/json/yaml}` based on the format you chose your configuration file to be in. For Prettier to run with ESLint, your configuration file should look something like this: 

```json
{
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": ["error"]
    }
}
```

**Note**: You can include files/directories that you want your linter to ignore in a file called `.eslintignore` (very similar concept to a `.gitignore` file).

Now, we just have to one final step. We need to set up Prettier locally, and tell Prettier how we want it to format our code. 

```console
# install prettier as local devDependency
npm install --save-dev prettier
```
That should have installed Prettier as a local `devDependency`. Now, we need to create a configuration file for Prettier, and tell it how to format our code. 

```
# in your project root directory
touch .prettierrc
```

Open `.prettierrc` in your code editor, and set up a configuration for Prettier. 

```json
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 70
}
```

This is simply a possible configuration, but feel free to take a look at other options [here](https://prettier.io/docs/en/configuration.html).

### VS Code Configurations
So, you may still be asking yourself how we would actually use ESLint and Prettier. Will it work automagically? One thing we need to understand is that the way we set up Prettier to run as an ESLint rule. We have excluded all conflicting rules through `eslint-config-prettier`, and integrated Prettier as an ESLint rule through `eslint-plugin-prettier`. As a result, we only need to run ESLint to achieve the results we want for both linting and code formatting. ESLint can be run in mainly two different ways. We can use the [ESLint CLI](https://eslint.org/docs/user-guide/command-line-interface) to manually run the linter (in the form of `eslint index.js`), or we could set up our VS Code configurations in such a way that will automatically format the code on save. To clarify, ESLint will check your code for possible bugs and errors even if you don't manually run it via the CLI, but will not format your code automatically if VS Code configurations aren't set up to do so. I like to have my code formatted automatically on save, so I will tweak my VS Code configurations to do exactly that. 

```json
// VS Code Settings JSON
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[javascript]": {
    "editor.formatOnSave": true
}
```

With this set up, you should now be able to see that your code is formatted automatically when you save the file. 

## Bonus
[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) is a very useful VS Code plugin that I love. By default, ESLint will underline error-prone code in red or orange, depending on how you've set up certain rules for ESLint. However, you will need to hover your mouse over the underlined code to see the error message.

![A GIF of ESLint and Prettier working in VS Code without Error Lens](./eslint_prettier_without_errorlens.gif)

You should be able to see that ESLint and Prettier are properly working! The red underline shows that a `const` variable should not be reassigned, and the code is automatically formatted when I save the file. However, notice that I had to hover over the red underline to actually see the error messages that ESLint has produced for us. With Error Lens, the error messages are printed on the screen, which in my opinion is very convenient. Let's see that in action!

![A GIF of ESLint and Prettier working in VS Code with Error Lens](./eslint_prettier_with_errorlens.gif)

Voila! There we have it! ESLint and Prettier working beautifully with VS Code, and long gone are your worries of having to scratch your head over how to create a codebase with uniform code style. With Error Lens added to that combination, your day to day coding task should certainly be an experiencee! I hope this blog post helped you get started with using ESLint and Prettier for your JavaScript project, but please feel free to explore further by visiting their respective documentation. 
