export default function SearchBar({ handleInputChange, handleSubmit }) {
  return (
    <div className="search-bar">
      <form>
        <input
          type="search"
          placeholder="Search repos"
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}