Boilerplate
===========

This is a basic boilerplate with a build in database, and a basic setup with express 4.4.4, express-hbs, gruntjs, with a command to run the project and build it and start the server width 1 command.

Dependencies you need on your client before your running 
(versions are what im running so use that or newer):

    NodeJS v0.10.17 (http://nodejs.org/)
    NPM v1.3.8 (comes with node as of now)
    Sass 3.3.7 (http://sass-lang.com/install)
        - This get installed with gems, if running mac you have ruby, 
        if you run windows you need to install ruby first http://rubyinstaller.org/
    Grunt-cli v0.1.13 (http://gruntjs.com/getting-started)

To get started just run:

    npm run startup
  
This will build the project including, npm install, sass build & javascript minifing

It will run the node server on port 3000, this is changed in the index.js - it will cast an error if you have something running on port 3000 already

GL HF
