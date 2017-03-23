# BullFirst App

#### Setup
```
$ npm i
```

#### Run
```
$ npm start

```

#### Changes Made
```
$ Included Webpack for module budling which ships application bundle and vendor bundle files seperate
$ Web pack imports all the controllers, directives, services and filters at once in app.js file instead of individually importing. This helps if the application grows in size
$ I have included gulpfile as well but unfortunately I could not complete this becaue of time constraints. Given time I can implement complete build automation using gulp js
$ For time being I have used npm as build automation tool
$ Things I had in mind - 
    * Write CSS in SCSS and optimize and reduce the amount of css lines. USe gulp-scss to preprocess scss 
    * Compress images to increse load time and download time. Use gulp-imagemin to compress the images
    * Use ES -lint for code quality
    * Karma, chai, mocha as unit test frameworks
    * Use gulp-uglify to compress webpack bundles
$ Could find time only to optimize AccountController.js
$ Given time I can optimize HTML, CSS and JS as well. 


```