import SearchBar from "./SearchBar";

import "./styles/NavBar.scss";
import logo from "./logo.png";

export default function NavBar({ handleInputChange, handleSubmit, handleLogoClick, searchError }) {
  return (
    <nav className="nav-bar">
      <div className="nav-bar nav-bar__top">
        <div className="nav-bar nav-bar__top--logo" onClick={handleLogoClick}>
          <img src={logo} alt="github logo" />
        </div>
        <div className="nav-bar nav-bar__top--heading">
          <span>GitHub Repo Finder</span>
        </div>
      </div>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        error={searchError}
      />
    </nav>
  );
}