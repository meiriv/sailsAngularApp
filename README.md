# sailsAngularApp

## a [Sails](http://sailsjs.org) + AngularJS application

### Introduction:
This application is a base sails application (backend Web framework built on node.js) Integrated with angularJS (Frontend).
The purpose is to have a quick start for any web application that will give all the development framewrok supported by sails OOB using grunt ( watch , minify , uglify , unify etc') + some basic layout that can be changed according to any given design or totally replaced but the concept is already there using angular different feature.

### How to start?
#### Prerequisite for sails application is node.js so first make ure node is installed:
 - npm -g install sails
   For platform specific download check [NodeJs Website](https://nodejs.org/en/)
#### Other prerequisite:
	bower Install: npm install -g bower

 - Download the application from here
 - Install server side dependencies:
 	- from sailsAngularApp run: npm install
 	  it will install all dependencies from package.json to the node_modules directory
 - Download all frontend dependencies (angular , bootstrap, JQuery etc') by running the following bower commands:
 	- cd to sailsAngularApp\assets
 	- run: bower install
 	  it will download all dependencies under sailsAngularApp\assets\js\dependencies

 	  **Note:** if you are behind a proxy - change proxy settings in .bowerrc
 	  		if you want to add new dependency: update sailsAngularApp\assets\bower.json file under dependencies

#### Starting the application:
run the application by going to sailsAngularApp and running:
 - sails lift --verbose (to see logs prints)
 - sails lift (by default will start in development mode - means any changes to source file will be build and refreshed on the fly)
 - sails lift --prod ( production mode  - include all minified CSS JS and well performance)

#### Landing Page:
after application is up go to http://localhost:1337/ you will be directed to http://localhost:1337/#/landing which is the landing page defined in sailsAngularApp\views\landing.ejs


The following plugind are already added to the platform:
- [bootstrap](http://getbootstrap.com/)
- [Angular Maaterial](https://material.angularjs.org/latest/demo/slider)
- [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/)
- [angular Spinner](https://github.com/urish/angular-spinner)

####To change the sails connection to use mongo instead of default: ####
- npm install sails-mongo  (will install sails-mongo plugin under node_modules)
- Under config/connection.js define new connection for mongo like:
 localMongoDB: {
     adapter: 'sails-mongo',
     host: 'localhost',
     port: 27017,
     database: 'sails' //optional
   },
- Under config/models.js set to use the new connection: 
	- connection: 'localMongoDB',


#### To add new frontend dependency package: ####
- Add the package name to sailsAngularApp\assets\bower.json dependencies
- cd to sailsAngularApp\assets
- run: bower install
- To include the js script on your page add the new package in sailsAngularApp\tasks\pipeline.js under the jsFilesToInject
