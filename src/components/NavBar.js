import SearchBar from "./SearchBar";

import "./NavBar.scss";
import logo from "./logo.png";

export default function NavBar({ handleInputChange, handleSubmit }) {
  return (
    <nav className="nav-bar">
      <div className="nav-bar nav-bar__top">
        <div className="nav-bar nav-bar__top--logo">
          <img src={logo} alt="github logo" />
        </div>
        <div className="nav-bar nav-bar__top--heading">
          <span>GitHub Repo Finder</span>
        </div>
      </div>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </nav>
  );
}