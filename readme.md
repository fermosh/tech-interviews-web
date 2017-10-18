# Technical Interview Helper

Steps for settng up the UI of the project.

	1. Install visual studio code
	2. From the visual studio code start window select clone GIT repository and paste the following URL: https://epamgdldotnetpublic.visualstudio.com/TechnicalInterviewHelper
	3. Install Node.JS so you can use NPM.
	4. Open the root folder in VS code and run npm install
	5. Change directory to node_modules > UUI > UUI Framework and run the following commands
		a. npm install -g grunt-cli
		b. npm install grunt -- save-dev
		c. npm install
	6. Go back to the root folder and run the following command ng serve
    7. Open a web browser and enter http://localhost:4200 and if there was no errors, you should see the technical interview UI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
