import { useState } from "react";

import { NavBar, ReposList } from "./components";
import { getUserRepos } from "./utils/api";

import githubUsernameRegex from 'github-username-regex';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
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
    // https://www.npmjs.com/package/github-username-regex
    if (githubUsernameRegex.test(searchQuery)) {
      setReposListMessage(null);
      saveRepos()
    } else {
      setUsernameError("Please enter valid GitHub username");
      setRepos([]);
    }
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

  const saveRepos = () => {
    setIsLoading(true)

    getUserRepos(searchQuery)
      .then(data => sortArrayOfReposObjectsByStars(data))
      .then(sortedRepos => setRepos(sortedRepos))
      .then(() => setIsLoading(false))
      .catch((error) => {
        checkData(error);
        setIsLoading(false);
      });
  }

  const resetStateToDefault = () => {
    setSearchQuery("");
    setRepos([]);
    setReposListMessage("Search for users");
    setUsernameError(null);
  }

  return (
    <div className="App">
      <NavBar
        handleInputChange={handleSearchQueryChange}
        handleSubmit={handleSearch}
        handleLogoClick={resetStateToDefault}
        searchError={usernameError}
      />
      <ReposList repos={repos} message={reposListMessage} loading={isLoading} />
    </div>
  );
}

export default App;