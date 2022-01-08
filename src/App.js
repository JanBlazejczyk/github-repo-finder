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
  const [repos, setRepos] = useState([]);

  const sortArrayOfReposObjectsByStars = (arr) => {
    return arr.sort((a, b) =>
      // if repos have the same number of stars, sort them by name
      (a.stargazers_count < b.stargazers_count) ? 1 : (a.stargazers_count === b.stargazers_count) ? ((a.name > b.name) ? 1 : -1) : -1);
  }

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setUsernameError(null);
    console.log("Loading is set to true");
    setIsLoading(true);
    setDisplayCurrentUser(false);
    // https://www.npmjs.com/package/github-username-regex
    if (githubUsernameRegex.test(searchQuery)) {
      setReposListMessage(null);
      saveRepos();
      setDisplayCurrentUser(true);
    } else {
      setUsernameError("Please enter valid GitHub username");
      setRepos([]);
      console.log("Loading is set to false");
      setIsLoading(false);
    }
  }

  const saveRepos = () => {
    getUserRepos(searchQuery)
      .then(data => sortArrayOfReposObjectsByStars(data))
      .then(sortedRepos => setRepos(sortedRepos))
      .then(() => {
        console.log("Loading is set to false");
        setCurrentUser(searchQuery);
        setIsLoading(false);
      })
      .catch((error) => {
        checkData(error);
        console.log("Loading is set to false");
        setIsLoading(false);
      });
  }

  const checkData = (data) => {
    if (data.name === "HttpError") {
      if (data.status === 404) {
        setReposListMessage("User not found");
        setRepos([]);
      } else {
        setReposListMessage(`Something went wrong: ${data.status}`);
        setRepos([]);
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

  return (
    <div className="App">
      <NavBar
        handleInputChange={handleSearchQueryChange}
        handleSubmit={handleSearch}
        handleLogoClick={resetStateToDefault}
        searchError={usernameError}
      />
      <MainView repos={repos} message={reposListMessage} loading={isLoading} displayUser={displayCurrentUser} user={currentUser} />
    </div>
  );
}

export default App;