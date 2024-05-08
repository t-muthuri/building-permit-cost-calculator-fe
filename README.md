# Buiding-plans-approvals
Welcome to the Building Plans Approval Process.
Building plans approval software in ReactJs and Django.

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**Author's note:**

    You may notice that this README is quite detailed. The reason for this is because documentation, I have heard time and again, is like a future love letter to yourself. To make sure that important details don't get forgotten, I aim to document the building and making of this project with the keenness of a PHD student. Use the T.O.C. provided below to navigate the document with ease. Happy Coding!

_Keep exploring, to infinity and beyond_ __Lightyear


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Project description](#project-description)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
    - [Roadmap](#roadmap)
- [Install](#install)
- [Features](#features)
- [Usage](#usage)
- [Services](#services)
- [Authors](#authors)
- [to do](#to-do)
- [References](#references)
  - [Books](#books)
  - [Articles](#articles)
- [Contributions](#contributions)
- [Best practices for developers who wish to contribute](#best-practices-for-developers-who-wish-to-contribute)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project description
This is a service that is created to help clients and construction stakeholders know what is needed to acquire a building permit in Kenya. This service allows clients, developers, architects and any other stakeholders involved in the construction process to get an estimate of how much county approvals may cost, read articles that shed light on the same and allows them to upload documents awaiting approvals to the county government.

# Project structure

Atomic folder structure

```
└── building-plans-approvals-fe
    └── .gitignore
    └── LICENSE
    └── README.md
    └── package-lock.json
    └── package.json
    └── public
        └── index.html
        └── manifest.json
        └── robots.txt
    └── src
        └── App.css
        └── App.js
        └── App.test.js
        └── assets
        └── components
            └── atoms
            └── molecules
            └── organisms
            └── pages
                └── cost
                └── news
                ├── upload
            ├── templates
        └── index.css
        └── index.js
        └── logo.svg
        └── modules
        └── reportWebVitals.js
        └── services
        └── setupTests.js
        └── store
        ├── utils
```

# Prerequisites
This project has been designed with
- ReactJs for the UI design
- [Django for the backend](https://github.com/t-muthuri/building-plans-approvals-be)
- MySQL db
<!-- built with `add technologies` -->
<!-- 
proposed technologies include:
- Zustand for state management (as opposed to redux)
- Markdown for documentation
- Open API - yaml files
- CircleCI for tracking changes and deploying
- Add code linting to the file - use eslint and prettier
 -->

### Roadmap

The following roadmap outlines the planned milestones and features for the service:

1. Design planning and collaboration
2. Initial implementation of core pages
    - Articles
    - Calculator
    - Uploading dashboard
    - Login
    - Signup
3. Integration of design assets
4. Styling and responsiveness
5. Performance optimization and testing
6. Final bug fixes and refinements
7. User Acceptance Testing - Launching project to different construction stakeholders i.e., architects, architecture students, architectural designers, county reps, quantity surveyors, foreman, fundis, clients e.t.c.

# Project setup
## Local setup
In the project directory, you can run:

### `npm install`
Installs node dependencies.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run lint`
Lints and fixes errors.

### `npm run format`
Formats the project.

<!-- how to run, test, build the software -->

# Features
| Feature name | Description |
|--------------|-------------|
| Approvals cost calculator | Calculates the estimated cost of approvals and how much it may cost to acquire a building permit in different Kenyan counties |

# Usage

# Services

# Authors

**Sharon Korir**
- website
- contact information

**Tressie Muthuri**
- website
- contact information

# to do
* [] Work on the uploading documents feature
* [] Add authentication with firebase
* [] Design ui to upload documents required for approvals
    - Documents include (not limited to):
        * [] Architectural drawings
        * [] Structural drawings (at least one-storey buildings and more)
        * [] Architect's licence
        * [] Structural Engineer's licence
* [] Approval cost calculator
    * [x] get the form
        * [x] project size
        * [x] counties
        * [x] project type
        * [x] boq
    * [] post the calculated data
        * [] total cost of approvals
* [] Construction articles news scrapper
* [] Add circleci and code linting
* [] Update folder structure in README
* [] set up an automated build server - research on how to do this first
* [] use .env to define urls
* [] use yaml files to fetch the base url http://localhost:8000


<!-- 
- determine the purpose and scope of the software
- list the technical reuirements
- decide on the execution environments
- ui/ux design
- development methodology
- decide on qa and testing (is it necessary now?)
- timeline of project
 -->

# References
## Docs
[Draw folder structure](https://marketplace.visualstudio.com/items?itemName=jmkrivocapich.drawfolderstructure#:~:text=Navigate%20to%20the%20file%20explorer,folder%20structure%20in%20Markdown%20format!)\
[Markdown guide](https://www.markdownguide.org/)

## Books
## Articles

# Contributions
Create a branch and a PR with your contributions. Commit messages should follow [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages)

# Best practices for developers who wish to contribute
- Avoid leaving commented-out code in the committed codebase.
- Avoid using hard-coded values in the code.
- Before adding a new feature, check to see if an existing one can be re-designed to perform both tasks or replaced entirely with a better method.
- When fixing what is not broken, write code that is simpler, shorter and beautiful.
- 


**naming branches**
chore/:
add/:
update/:
feature/:
fix/:

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
