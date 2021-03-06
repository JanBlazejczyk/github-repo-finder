import { useState, useEffect } from "react";

import { NavBar, MainView } from "./components";
import { getUserRepos } from "./utils/api";

import githubUsernameRegex from 'github-username-regex';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [displayCurrentUser, setDisplayCurrentUser] = useState(false);
  const [usernameError, setUsernameError] = useState();
  const [reposListMessage, setReposListMessage] = useState("Search for users");
  const [isLoading, setIsLoading] = useState(true);
  // initial values in this state are for displaying the placeholders (more in readme)
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);
  // repos to be displayed at the page
  const [currentRepos, setCurrentRepos] = useState([]);

  // each time the repos state is changed update also current repos
  useEffect(() => {
    saveCurrentRepos();
    if (currentUser !== null && repos.length === 0) {
      setReposListMessage("User has no repos!");
    }
  }, [repos, currentPage, currentUser])

  // takes the arrays of repositories and returns an array
  // sorted by stars and names
  const sortArrayOfReposObjectsByStars = (arr) => {
    return arr.sort((a, b) =>
      // if repos have the same number of stars, sort them by name
      (a.stargazers_count < b.stargazers_count) ? 1 : (a.stargazers_count === b.stargazers_count) ? ((a.name > b.name) ? 1 : -1) : -1);
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  // runs when the form (searchbar) is submitted
  const handleSearch = (event) => {
    // prevent refreshing the page on form submit
    event.preventDefault();
    setUsernameError(null);
    setDisplayCurrentUser(false);

    if (!localStorage.getItem(searchQuery)) {
      setIsLoading(true);
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
        setIsLoading(false);
        // username still need to be displayed if we already had other user's data shown
        setDisplayCurrentUser(true);
      }
      // if user is stored in storage
    } else {
      setRepos(JSON.parse(localStorage.getItem(searchQuery)));
      setCurrentUser(searchQuery);
      setIsLoading(false);
      setDisplayCurrentUser(true);
      setReposListMessage(null);
    }
  }

  // retrieves data from github api, sorts them and save in state
  const saveRepos = () => {
    getUserRepos(searchQuery)
      .then(data => sortArrayOfReposObjectsByStars(data))
      .then(sortedRepos => {
        setRepos(sortedRepos);
        localStorage.setItem(searchQuery, JSON.stringify(sortedRepos));
      })
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
        // setRepos([]);
      } else {
        setReposListMessage(`Something went wrong: ${error.status}`);
        // setRepos([]);
      }
    }
    else {
      setReposListMessage(null);
    }
  }

  const resetStateToDefault = () => {
    setSearchQuery("");
    setRepos([]);
    setReposListMessage("Search for users");
    setUsernameError(null);
    setIsLoading(false)
  }

  // get current repos
  // const indexOfLastRepo = currentPage * reposPerPage;
  // const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  // const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const saveCurrentRepos = () => {
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    setCurrentRepos(repos.slice(indexOfFirstRepo, indexOfLastRepo));
  }

  // handle pagination button click
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <NavBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSearch}
        handleLogoClick={resetStateToDefault}
        usernameError={usernameError}
      />
      <MainView
        // repos list props
        repos={currentRepos}
        message={reposListMessage}
        loading={isLoading}
        displayUser={displayCurrentUser}
        user={currentUser}
        // pagination props
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default App;