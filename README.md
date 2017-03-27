# Local Buzz

An app to discover what people are saying about the places around you.

## Getting Started

Local Buzz runs on a local Node/Express server. To install related dependencies, run

`npm install`

Then run 

`npm start`

to start the server. 

Go to [http://localhost:3000](http://localhost:3000) to view the app. Note that the app is registered with Facebook to run on port 3000, so FB auth will not function correctly if the app is run on another port.

## Building and Testing

Run `npm run build` to compile the css files.
Run `npm test` to run a few basic tests.

## Technologies Used

* AngularJS
* LESS
* Bootstrap
* gulp
* Karma/Jasmine
* FB (OAuth and Graph API)
