# Gulp Tasks

This is a collection of tasks that I am maintaining to use accross several projects.

## Prerequisites

* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)
* [Node.js](http://nodejs.org/) (with NPM)

##Installation
`npm install gulp --save-dev`  
`npm install ao-gulp-tasks --save-dev`
`npm install gulp-require-tasks --save-dev`

Include gulpfile.example.js in the root of your project and remove "example" from the file name.

## Build commands

*Scripts currently support Babel*  
*Styles currently support Sass*

`gulp build:scripts`  
`gulp build:styles`  
`gulp build:all`

## Watch commands

`gulp watch:scripts`  
`gulp watch:styles`  
`gulp watch:all`
