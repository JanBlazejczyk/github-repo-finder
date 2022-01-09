# GitHub Repo Finder

## How it works

The app searches GitHub profiles by username and shows the list of user's repositories using Github API.


## Usage

### Live version

The page is live [here](url_to_github_pages)

### To run the app on your local host:

clone the repository
cd into repository directory

#### Using npm:
`npm install`
`npm start`

#### Using yarn:
`yarn install`
`yarn start`


## GitHub API

### Authentication

Without authentication the number of requests per hour is limited to 60. We can extend that number to 5000 by [authenticating with OAuth token](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api). By default the app does not use authentication because it is deployed live on github pages and without the backend there is no safe way to authenticate in the code without exposing the auth token.

For testing purposes, the 60 requests limit was sufficient, if you wish to extend to 5000 run the app on your local machine and follow the instructions [here](https://github.com/octokit/octokit.js#octokit-api-client) to authenticate with Octokit.

If you are forking the repository and making any changes, be aware not to expose your secrets within the code, read [this stackoverflow question](https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app) for instruction on how to avoid that.

### Requests

The app uses the "accept" header which is recommended in the documentation.

Number of results per page is set to 100 which is the maximum (default 30) to limit the number of requests that are made when fetching the bigger amounts of repositories (see Octokit and pagination below).

Note: there is a possibility to define the type of repositories we want to see, the app uses the default option which is "owner"

[See the documentation for details](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user).

### Octokit and pagination

GitHub API uses pagination to limit the number of data that can be fetched with one request. In case of the GET request to fetch user's repositories the limit is 100. The app uses the [Octokit](https://github.com/octokit/octokit.js) package that enables pagination and gives the ability to retrieve all user repositories at once (even if the user has more than a 100 repositories) by making multiple requests.

## Limitations

The app is tested to work fine with getting and displaying the repositories of the [user](https://github.com/sindresorhus?tab=repositories) who has over a 1000 repositories in his profile. In theory without the authentication it should be able to retrieve up to 6000 repositories at once (providing that no requests has been made in a given hour - limit of 60 requests per hour, 100 repositories per request) but it was not tested with numbers that large and the amount of time needed to retrieve the data would be considerable. Nonetheless on average users have much less repositories in their profiles.

## Validation

The app uses [github-username-regex package](https://www.npmjs.com/package/github-username-regex) for form validation (to check if the user input is the valid github username). If the username is not valid the form is not submitted (this is to save the number of made requests).

GitHub API response when getting the repos of the user that does not exist is 404. In this case the app displays "User not found" message. If the response is an HTTP error with any other code the app displays "Something went wrong:" and the response status code.

## Loading placeholders

The app uses the [react-placeholder component](https://github.com/buildo/react-placeholder) to indicate content loading.

Although the documentation mentions possible styling through class names it did not work. For that reason the styling for the placeholders is written in javascript.

Initial values hack: I've encountered a problem with displaying multiple placeholders at the same time (to mimic the looks of actual data), if the placeholder is used outside of map callback only one placeholder is displayed. In case of using it inside the map callback it works as intended but at the initial stage the mapped array (stored in state) is empty and it takes time to get the resources and store them in state. The placeholders are supposed to be an indication that the data is loading and to serve that purpose they need to be displayed right away for the sake of the UX. For that reason the initial state of repo's array is an array of numbers from 1 to 10. Thanks to this hack the 10 placeholders are displayed even if we have not perviously stored any repositories in state.


## Font awesome

The app uses the [Fontawesome library](https://fontawesome.com/) to display the star icon.

## Search form

The app uses controlled input component to handle the search. The form is very simple so [refs](https://pl.reactjs.org/docs/refs-and-the-dom.html) could be used to create an uncontrolled input, but this is discouraged in the React docs

## Styling

The app uses [Sass](https://sass-lang.com/) for styling. Each component's style resides in a separate file within the styles directory.


## File structure

The app is pretty small so for simplicity all the components are stored in the same directory.