import logo from "../images/logo.png";

import "../styles/Heading.scss";

export default function Heading({ handleLogoClick }) {
  return (
    <header className="nav-bar nav-bar__heading">
      <div className="nav-bar nav-bar__heading--logo" onClick={handleLogoClick}>
        <img src={logo} alt="github logo" />
      </div>
      <div className="nav-bar nav-bar__heading--title">
        <h1>GitHub Repo Finder</h1>
      </div>
    </header>
  )
}