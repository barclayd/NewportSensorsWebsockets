## Newport Sensors
###### 12th November 2018
React 16 web app using websockets with client and server to communicate light, air quality and noise levels for given areas in Newport.
## Code style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Screenshots and GIFs
Include logo/demo/gif/screenshots etc.

## Tech/framework used
Ex. -
Server - Node.js
Frontend - React.js
Database - Firebase

## Features

- [x] Styling using CSS modules, inline styling and bootstrap
- [x] Mobile friendly and responsive design
- [x] Loading spinners
- [x] Dynamically loaded UI based on entries in sensorData.json held on server
- [x] Dynamically loaded images
- [x] Sensor data updates at random times to simulate real world
- [x] Sensor data retrieved for specific component only via websockets on demand
- [x] Routing functionality to visit different pages
- [x] Pulls in data from a web-hosted Firebase dB which has historically stored sensor data
- [x] Custom Error Handling added
- [x] Redux utilised for state management
- [x] PropTypes added for validation
- [x] Lifecycle hooks utilised
- [x] Higher Order Components used for rendering, error handling and maintaining layout
- [ ] Form validation?

## Design and Usability Decisions
Explain styling here

## Functionality Decisions
Explain styling here

## Styling Decisions
Clean, crisp card based responsive design that dynamically loads content from server's .json files and is mobile friendly

## Installation of Server

```sh
npm run server
```

## Installation of Client
Provide step by step series of examples and explanations about how to get a development env running.

```sh
$ npm install
$ npm start
```

## How to use
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Installed Packages

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

- [Socket.io-client](https://electron.atom.io)
- [Redux](https://electron.atom.io)
- [React-Redux](https://electron.atom.io)
- [React-Router-Dom](https://electron.atom.io)
- [dateFormat](https://electron.atom.io)
- [bootstrap](https://electron.atom.io)
- [PropTypes](https://electron.atom.io)
- [react-bootstrap-table-next](https://electron.atom.io)
- [react-bootstrap-table2-toolkit](https://electron.atom.io)
- [Axios](https://electron.atom.io)
- [Enzyme](https://electron.atom.io)
- [react-test-renderer](https://electron.atom.io)
- [enzyme-adapter-react-16](https://electron.atom.io)

## Tests and Test Strategy
Describe and show how to run the tests with code examples.
Jest vs Mocha vs Enzyme
End-to-End Tests
Performance Tests
Snapshot Tests
Component Tests
Unit Tests

## Organisation of Code
Code is devised between server and client

## Plans for expanding the project

TBA


