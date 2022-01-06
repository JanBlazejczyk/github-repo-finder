import { useState } from "react";

import SearchBar from "./components/SearchBar";
import { getUserRepos } from "./utils/api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault();
    // getUserRepos(searchQuery);
    saveRepos();
  }

  const saveRepos = () => {
    getUserRepos(searchQuery)
      .then(data => setRepos(data))
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
