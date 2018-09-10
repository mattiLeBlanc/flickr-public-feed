# Flickr-Feed

See the app in action on: https://mspi-flickr-feed.herokuapp.com/ on your phone or desktop.

The app responsive with a little bit of a different behaviour for mobile devices (no list view there unless landscape).

**Note**

*Ideally I would have cut up the `list.component` into a couple of smaller components, but since I was using Material Design with the Grid it didn't really make sensse. I could move the searchbox to a separate component but it is thightly coupled with the grid list so I left it as is.*

## Run locally

Two options:

1) Run `node app.js` in a separate terminal to acts as the API Endpoint. Then run `ng serve` and view the app on `localhost:4200`.

2) First build with `ng build` and then serve the dist folder by running `node app.js` and view the app on `localhost:3001`.

## Running tests

Run `ng test` but make sure you are also running `node app.js` because I am not mocking the data services at the moment.

I didn't write all the tests because I think I already did enough for the technical test (during my holiday)

----------------------------------------------------------------


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
