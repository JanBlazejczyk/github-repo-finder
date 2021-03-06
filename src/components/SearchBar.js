import Button from "./Button";
import InputField from "./InputField";

import "../styles/SearchBar.scss";

export default function SearchBar({ handleInputChange, handleSubmit, error, handleEnterPress }) {
  return (
    <div className="search-bar">
      <form>
        <InputField handleInputChange={handleInputChange} handleEnterPress={handleEnterPress} handleSearch={handleSubmit} />
        <Button label="Search" handleSubmit={handleSubmit} />
      </form>
      <div className="search-bar__error">
        {error}
      </div>
    </div>
  );
}