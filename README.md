# Buiding-plans-approvals
Welcome to the Building Plans Approval Process.
Building plans approval software in ReactJs and Django.

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**Author's note:**

    You may notice that this README is quite detailed. The reason for this is because documentation, I have heard time and again, is like a future love letter to yourself. To make sure that important details don't get forgotten, I aim to document the building and making of this project with the keenness of a PHD student. Use the T.O.C. provided below to navigate the document with ease. Happy Coding!

_Keep exploring, to infinity and beyond_ __Lightyear

# Project description
This is a service that is created to help clients and construction stakeholders know what is needed to acquire a building permit in Kenya. This service allows clients, developers, architects and any other stakeholders involved in the construction process to get an estimate of how much county approvals may cost, read articles that shed light on the same and allows them to upload documents awaiting approvals to the county government.

# Project status
* [x] Deployment status: Hosted on Vercel [Approvals website](https://building-plans-approvals-fe.vercel.app/)

# Project structure

Atomic folder structure

```
└── 📁building-plans-approvals-fe
    └── 📁.circleci
        └── config.yml
    └── .env
    └── .eslintignore
    └── .eslintrc.js
    └── .gitignore
    └── .prettierignore
    └── .prettierrc
    └── LICENSE
    └── README.md
    └── package-lock.json
    └── package.json
    └── 📁public
        └── index.html
        └── robots.txt
    └── 📁src
        └── App.css
        └── App.js
        └── App.test.js
        └── 📁assets
        └── 📁components
            └── 📁atoms
                └── 📁buttons
                └── 📁headings
                └── 📁paragraphs
            └── 📁molecules
                └── 📁forms
                └── 📁navbar
            └── 📁pages
                └── 📁about
                └── 📁calculator
                └── 📁home
                └── 📁login
                └── 📁signup
                └── 📁upload
        └── 📁hocs
        └── index.js
        └── 📁modules
            └── 📁actions
            └── 📁reducers
        └── 📁store
        └── 📁utils
```

# Prerequisites
This project has been designed with
- ReactJs for the UI design
- [Django for the backend](https://github.com/t-muthuri/approvals-backend-test)
- Postgres db
- Redux for state management
- Markdown for documentation
- CircleCI for tracking changes <!-- and deploying -->
- Eslint and prettier formatting rules

<!-- built with `add technologies` -->
<!-- 
proposed technologies include:
- Zustand for state management (as opposed to redux)
- Open API - yaml files
 -->

### Roadmap

The following roadmap outlines the planned milestones and features for the service:

1. * [x] Design planning and collaboration
2. * [x] Initial implementation of core pages
    - * [x] Calculator
    - * [x] Uploading dashboard
    - * [x] Login
    - * [x] Signup
3. * [] Integration of design assets
4. * [] Styling and responsiveness
5. * [] Performance optimization and testing
6. * [] Final bug fixes and refinements
7. * [] User Acceptance Testing - Launching project to different construction stakeholders i.e., architects, architecture students, architectural designers, county reps, quantity surveyors, foreman, fundis, clients e.t.c.

# Project setup
## Local setup
In the project directory, you can run:

**`npm install`**
Installs node dependencies.\

**`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**`npm run lint`**
Lints and fixes errors.

**`npm run format`**
Formats the project.

<!-- how to run, test, build the software -->

# Features
| Feature name | Description |
|--------------|-------------|
| Approvals cost calculator | Calculates the estimated cost of approvals and how much it may cost to acquire a building permit in different Kenyan counties |
| Authorization | Signup and login a client so that they are able to upload the required documents for approvals |
|Upload | A client can upload multiple files required by the county for the approvals process

# Usage

# Services

# Project limitations
- The process of acquiring a building permit lacks harmony. Factors like the location of project, the type of project, the status of the land to be developed, the documents required to acquire a permit, lack of information for some counties, among others affect the fees charged to a developer for the project. This inconsistencies make it difficult to reach a conclusion on how to best calculate the cost of approvals. Despite of this, I have compiled a few counties that have a bit of consistency to reflect how one can come up with an estimate of the fees they could be charged for some projects in these locations. The calculations are however far from accurate.

# Project assumptions
- The information provided by the AAK in their [Build Hub](https://buildhub.aak.or.ke/) section is accurate.

# Author

**Tressie Muthuri**
- website
- contact information

# Collaborators

**Sharon Korir**
- website
- contact information

# to investigate

* [x] <span style='color:green;'> when I change the value of the cost of construction the ui does not rerender or update the cost - this is because the calculation does not use this field </span>
* [] when the upload page refreshes, the dowload button appears even before a file is uploaded
* [x] <span style='color:green;'> the calculator takes long to bring up the costs - the form handling is changed from onSubmit to onChange </span>

# to do
* [] Simplicity (improve ui/ux):
    how can clients get to where/ what they want in less than three clicks on the approvals site?
    * [x] The home page is the calculator
    * [x] the form uses handleChange instead of handleSubmit to give results. Calculation is done as the input is given
    * [] give the option of using a slider in addition to filling in the numbers manually
    * [] the list of counties and type of projects are listed in plain view reducing the  number of clicks from two to one
    * [] get rid of any unnecessary pages
* [] Work on the uploading documents feature
    * [x] /upload is a protected route, if user is not authenticated redirect to login / signup page
    * [x] client signs up
    * [x] client logs in
    * [x] client authenticated when the page is refreshed
    * [] client is logged out when the refresh token expires
    * [] use the refresh token to get a new access token, client remains authenticated
* [] Add authentication with firebase
* [] Upload documents required for approvals
    * [] Design ui
    * [] Upload and download on client side
    * [] Upload and download on admin side
    * [] Status / Progress update on client side
    - Documents include (not limited to):
        * [] Architectural drawings
        * [] Structural drawings (at least one-storey buildings and more)
        * [] Architect's licence
        * [] Structural Engineer's licence
* [x] Approval cost calculator
    * [x] get the form
        * [x] project size
        * [x] counties
        * [x] project type
        * [x] boq
    * [x] post the calculated data in the console
        * [x] post the data in the ui
            * [x] use React's state management to update and render the UI dynamically
        * [x] total cost of approvals calculated est
        * [x] combine the multiple axios get requests - <span style="color:red;">refactor</span>
* [x] Add circleci and code linting
* [x] Update folder structure in README
* [] set up an automated build server - research on how to do this first
* [x] use .env to define urls
* [] use yaml files to fetch the base url http://localhost:8000
* [] how to use openapi (advantages)
* [] add error messages in the ui to notify the client the state or progress of their request


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

## Best practices for developers who wish to contribute
- Avoid leaving commented-out code in the committed codebase.
- Avoid using hard-coded values in the code.
- Before adding a new feature, check to see if an existing one can be re-designed to perform both tasks or replaced entirely with a better method.
- When fixing what is not broken, write code that is simpler, shorter and beautiful.
- Commit short, clear commits that target one feature at a time.

## For professionals in the construction industry who wish to contribute

- Architects, Quantity Surveyors, Civil Engineers, Construction stakeholders, Clients can use the calculator to give their clients an estimated cost of acquiring a building permit
<!-- how do you collect analytics data -->

- Architects, Quantity Surveyors, Civil Engineers, Construction stakeholders can give feedback:
    - on how the application can be improved to make their work easier
    - if the application has been beneficial to their work
    - on how and when they use the application
    <!-- attach a link for the feedback -->

- County officials can suggest additional charges that may have been omitted

## For architects in the software development field

- Raise any issues you may encounter while testing the software
    - Functionality
    - Responsiveness
    - UI issues
- Suggest new features that can be added to the software
<!-- research on various areas where you can receive feedback while conducting a UAT -->


**naming branches**
chore/:
add/:
update/:
feature/:
fix/: