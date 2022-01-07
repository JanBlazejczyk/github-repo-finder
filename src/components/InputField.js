import "./InputField.scss";

export default function InputField({ handleInputChange }) {
  return (
    <input
      className="search-bar search-bar--input"
      type="search"
      placeholder="Search users"
      onChange={handleInputChange}
    />
  );
}