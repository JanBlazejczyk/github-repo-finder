import Button from "./Button";
import InputField from "./InputField";

import "./SearchBar.scss";

export default function SearchBar({ handleInputChange, handleSubmit, error, handleEnterPress }) {
  return (
    <div className="search-bar">
      <form>
        <InputField handleInputChange={handleInputChange} handleEnterPress={handleEnterPress} />
        <Button label="Search" handleSubmit={handleSubmit} />
      </form>
      <div className="search-bar__error">
        {error}
      </div>
    </div>
  );
}