# Hacker News Algolia Search
* Link: https://wferebee.github.io/HackerNewsAPI_Redux_React/

## Overview
* The Hacker News Algolia Search App is primarily just a simple app that allows a user to search the Hack News Website using their API. This app was built with React and Redux and stores the user's queries in the Redux state, however it does not persist across sessions. The specific endpoint this app is hitting will return results by relevance first, then points, then number of comments.

## Screen Shots

### (Typical result return after a search is preformed)
![Screenshot (99)](https://user-images.githubusercontent.com/53095806/83322367-0afc0680-a225-11ea-863c-7998de70f8ae.png)

##

### (On the right in the console - Saving the queries with associated ids in the Redux state)
 ![Screenshot (100)](https://user-images.githubusercontent.com/53095806/83322369-10595100-a225-11ea-8755-d6872ae8cf3c.png)

##

## This Project Was Built With
* React
* Redux
* React-Redux
* Readux-Thunk (middleware) for processing Aysnc actions
* JavaScript
* JSX
* Hacker News Algolia API
* GitHub Pages
* HTML
* CSS

##

## Future Additions
* add filters for the user's search experience
* add more Redux actions for filters
* clean up code and make it more efficient 
* add more validation to filter out undesirable search results
 
 ## 
 
 ## NOTES
* <tr> Fragment tags need to be removed, no longer needed them but accidentally left them in.
* fix commit history, made a mistake and deleted the repo, which was another mistkae, causing me to push the finsihed projet all at once.


##






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
