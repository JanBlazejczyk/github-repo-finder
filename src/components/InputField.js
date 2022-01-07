import "../styles/InputField.scss";

export default function InputField({ handleInputChange, handleSearch }) {

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(event);
    }
  };

  return (
    <input
      className="search-bar search-bar--input"
      type="search"
      placeholder="Search users"
      onChange={handleInputChange}
      onKeyPress={handleEnterPress}
    />
  );
}