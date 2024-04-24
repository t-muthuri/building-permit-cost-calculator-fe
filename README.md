# buiding-plans-approvals
Welcome to the Building Plans Approval Process.
Building plans approval software in ReactJs and Django

# project description
This is a service that is created to enable the ease of understanding what you need during the building approvals process. This service allows clients, developers, architects and any other stakeholders involved in the construction process to get an estimate of how much couny approvals may cost, read articles that shed light on the same and allows them to upload documents awaiting approvals to the county government.

# project structure

Atomic folder structure

```
└── 📁building-plans-approvals-fe
    └── .gitignore
    └── LICENSE
    └── README.md
    └── package-lock.json
    └── package.json
    └── 📁public
        └── index.html
        └── manifest.json
        └── robots.txt
    └── 📁src
        └── App.css
        └── App.js
        └── App.test.js
        └── 📁assets
        └── 📁components
            └── 📁atoms
            └── 📁molecules
            └── 📁organisms
            └── 📁pages
                └── 📁cost
                └── 📁news
                ├── upload
            ├── templates
        └── index.css
        └── index.js
        └── logo.svg
        └── 📁modules
        └── reportWebVitals.js
        └── 📁services
        └── setupTests.js
        └── 📁store
        ├── utils
```

# prerequisites
This project has been designed with
- ReactJs for the UI design
- Django for the backend
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


# install
<!-- how to run, test, build the software -->

# features
<!-- add a table with the feature name and the description of what each feature does -->

# usage

# services

# authors

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
* [] Approval cost calcuator
* [] Construction articles news scrapper
* [] Add circleci and code linting


<!-- 
- determine the purpose and scope of the software
- list the technical reuirements
- decide on the execution environments
- ui/ux design
- development methodology
- decide on qa and testing (is it necessary now?)
- timeline of project
 -->

# references
[Draw folder structure](https://marketplace.visualstudio.com/items?itemName=jmkrivocapich.drawfolderstructure#:~:text=Navigate%20to%20the%20file%20explorer,folder%20structure%20in%20Markdown%20format!)

# Contributions
Create a branch and a PR with your contributions. Commit messages should follow [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages)

**naming branches**
chore/:
add/:
update/:
feature/:
fix/:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
