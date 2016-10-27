# ReactApp

<!-- # Contents

* [Next Tasks](#next-tasks)
* [Introduction](#introduction)
* [Prerequisities](#prerequisities)
* [Installation](#installation)
* [Usage](#usage)
  * [Load the plugin](#load-the-plugin-files-into-your-project)
  * [Set up your HTML](#set-up-your-html)
  * [Styling Options](#styling-options)
* [jQuery custom settings](#use-custom-settings-in-the-jquery-plugin)
* [Author](#author)
* [License](#license) -->


## Introduction

__Please see the hosted React App [HERE](https://keirsweeney.github.io/ReactApp/dist/)__

This project was created following the [ReactJSProgram](http://courses.reactjsprogram.com/). I highly recomend this course for getting into React as it's learning curve is steady and easy to follow.

The objective of the course was to create a GitHub battle app. This would use the GitHub API to find the users and using a simple algorithm give them a score.

API Requsts are handled by AXIOS.
Sentry and raven-js used for error logging.
Localtunnel used to push the localserve to a temporary webserver for a remote view of the page.

## Prerequisities
You will need the following tools to run the project:
* [Node.js and Npm](https://nodejs.org/en/download/)
* [Webpack](https://www.npmjs.com/package/webpack)
* [Raven](https://www.npmjs.com/package/raven-js)
* [Localtunnel](https://localtunnel.github.io/www/) - Optional

## Installation

Open up your CLI and type the following:
```
$ git clone https://github.com/KeirSweeney/ReactApp.git
```
Change directory into the project:
```
$ cd ReactApp
```
Install the project dependencies with Npm(you may have to sudo):
```
$ npm install
```
Run the webpack server default task:
```
$ npm run start
```
[Click here,](http://localhost:3002) to view the page on your local host.

To run the app on a remote webserver run the following commands.
```
$ npm install -g localtunnel
```
```
$ lt --port 3002
```

Note: The local server must already be running for this to work, so run this command in a new terminal window.

Once the command has run, it will give you a URL where you can go and see the hosted webpage.

## React Components

* Focused
* Independant
* Reusable
* Small
* Testable

## Built With
* [Sublime Text 3](https://www.sublimetext.com/3)
* [Npm Webpack](https://www.npmjs.com/package/webpack) and related packages - listed in [package.json](package.json)
* [Npm/Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - As above
* [Localtunnel](https://localtunnel.github.io/www/)
* [Fantastic ES6 linter](http://eslint.org/docs/user-guide/configuring)
* [Sentry for logging errors](https://sentry.io/)

## Author
**Keir Sweeney** - [Github](https://github.com/KeirSweeney/)

## License
See the [license](LICENSE) file for details.
