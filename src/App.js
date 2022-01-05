import { useState } from "react";

import SearchBar from "./components/SearchBar";
import { getUserRepos, getOrgRepos } from "./utils/api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("user");
  const [repos, setRepos] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleQueryTypeChange = (event) => {
    setQueryType(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    saveRepos();
  }

  const saveRepos = () => {
    if (queryType === "user") {
      getUserRepos(searchQuery)
        .then(response => response.json())
        .then(data => setRepos(data))
        .catch(error => console.error(error));
    } else if (queryType === "organization") {
      getOrgRepos(searchQuery)
        .then(response => response.json())
        .then(data => setRepos(data))
        .catch(error => console.error(error));
    }
  }

  return (
    <div className="App">
      <SearchBar
        handleInputChange={handleSearchQueryChange}
        handleRadioChange={handleQueryTypeChange}
        handleSubmit={handleSearch}
        queryType={queryType}
      />
    </div>
  );
}

export default App;
