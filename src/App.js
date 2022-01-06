import { useState } from "react";

import SearchBar from "./components/SearchBar";
import { getUserRepos } from "./utils/api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);

  const sortArrayOfReposObjectsByStars = (arr) => {
    return arr.sort((a, b) =>
      // if repos have the same number of stars, sort them by name
      (a.stargazers_count > b.stargazers_count) ? 1 : (a.stargazers_count === b.stargazers_count) ? ((a.name > b.name) ? 1 : -1) : -1);
  }

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault();
    saveRepos();
  }

  const saveRepos = () => {
    getUserRepos(searchQuery)
      .then(data => sortArrayOfReposObjectsByStars(data))
      .then(sortedRepos => setRepos(sortedRepos))
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <SearchBar
        handleInputChange={handleSearchQueryChange}
        handleSubmit={handleSearch}
      />
    </div>
  );
}

export default App;
