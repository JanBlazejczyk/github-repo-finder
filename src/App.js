import { useState } from "react";

import { NavBar, MainView } from "./components";
import { getUserRepos } from "./utils/api";

import githubUsernameRegex from 'github-username-regex';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [displayCurrentUser, setDisplayCurrentUser] = useState(false);
  const [usernameError, setUsernameError] = useState();
  const [reposListMessage, setReposListMessage] = useState("Search for users");
  const [isLoading, setIsLoading] = useState(true);
  // initial values in this state are for displaying the placeholders (more in readme)
  const [repos, setRepos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // takes the arrays of repositories and returns an array
  // sorted by stars and names
  const sortArrayOfReposObjectsByStars = (arr) => {
    return arr.sort((a, b) =>
      // if repos have the same number of stars, sort them by name
      (a.stargazers_count < b.stargazers_count) ? 1 : (a.stargazers_count === b.stargazers_count) ? ((a.name > b.name) ? 1 : -1) : -1);
  }

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  // runs when the form (searchbar) is submitted
  const handleSearch = (event) => {
    // prevent refreshing the page on form submit
    event.preventDefault();
    setUsernameError(null);
    setIsLoading(true);
    setDisplayCurrentUser(false);
    // if the username in search query is valid - perform a search
    // https://www.npmjs.com/package/github-username-regex
    if (githubUsernameRegex.test(searchQuery)) {
      // disappear the initial message
      setReposListMessage(null);
      // save user repos in state
      saveRepos();
      // display username above the list of repos
      setDisplayCurrentUser(true);
      // if the input is not a valid github username
    } else {
      setUsernameError("Please enter valid GitHub username");
      setRepos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      setIsLoading(false);
    }
  }

  // retrieves data from github api, sorts them and save in state
  const saveRepos = () => {
    getUserRepos(searchQuery)
      .then(data => sortArrayOfReposObjectsByStars(data))
      .then(sortedRepos => setRepos(sortedRepos))
      .then(() => {
        setCurrentUser(searchQuery);
        setIsLoading(false);
      })
      .catch((error) => {
        checkError(error);
        setIsLoading(false);
      });
  }

  // takes the error returned by the api
  // checks the status code and displays the appropriate message
  const checkError = (error) => {
    if (error.name === "HttpError") {
      if (error.status === 404) {
        setReposListMessage("User not found");
        setRepos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      } else {
        setReposListMessage(`Something went wrong: ${error.status}`);
        setRepos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      }
    }
    else {
      setReposListMessage(null);
    }
  }

  const resetStateToDefault = () => {
    setSearchQuery("");
    setRepos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    setReposListMessage("Search for users");
    setUsernameError(null);
    setIsLoading(false)
  }

  return (
    <div className="App">
      <NavBar
        handleInputChange={handleSearchQueryChange}
        handleSubmit={handleSearch}
        handleLogoClick={resetStateToDefault}
        searchError={usernameError}
      />
      <MainView
        repos={repos}
        message={reposListMessage}
        loading={isLoading}
        displayUser={displayCurrentUser}
        user={currentUser}
      />
    </div>
  );
}

export default App;