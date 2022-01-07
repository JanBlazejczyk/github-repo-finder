import Button from "./Button";
import InputField from "./InputField";

import "./SearchBar.scss";

export default function SearchBar({ handleInputChange, handleSubmit, error }) {
  return (
    <div className="search-bar">
      <form>
        <InputField handleInputChange={handleInputChange} />
        <Button label="Search" handleSubmit={handleSubmit} />
      </form>
      {error}
    </div>
  );
}