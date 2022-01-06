import Button from "./Button";

import "./SearchBar.scss";

export default function SearchBar({ handleInputChange, handleSubmit }) {
  return (
    <div className="search-bar">
      <form>
        <input
          className="search-bar search-bar--input"
          type="search"
          placeholder="Search repos"
          onChange={handleInputChange}
        />
        <Button label="Search" handleSubmit={handleSubmit} />
      </form>
    </div>
  );
}