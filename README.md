# BullFirst App

#### Setup
```
$ npm i
```

#### Run
```
$ npm build - Create Webpack build
$ npm clean - Clean build folder
$ npm dev - Run Webapck dev server
$ npm hot - Run Webpack Hot Module Replacement(HMR) - This is not working right now
$ npm prod - Create Webpack prod build

Hit http://localhost:3000/ to view the application in browser.

```

#### Changes Made
```
$ Configured webpack to create dev and prod builds
$ changed controllers to ES 6 classes for easy understanding
$ Babel converts ES6 to ES5
$ Converted css to SCSS - which helps in writing CSS efficiently
$ Implemented cache busting to help fresh prod build
$ Webpack web server runs on port 3000 and has zgip compression enabled
$ Could not get time to change CSS and HTML. Given time I can re-structure both
$ .eslintsrc can be included for code quality. I have not put .eslintsrc file
$ Could nt get time to write unit test cases
$ **This is all I could do in my available time**


```
