import { SearchBar, Heading } from "./";

import "../styles/NavBar.scss";

export default function NavBar({ handleInputChange, handleSubmit, handleLogoClick, usernameError }) {
  return (
    <nav className="nav-bar">
      <Heading handleLogoClick={handleLogoClick} />

      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        error={usernameError}
      />
    </nav>
  );
}