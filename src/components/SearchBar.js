export default function SearchBar({ handleInputChange, handleRadioChange, queryType }) {
  return (
    <div className="search-bar">
      <form>
        <input
          type="search"
          placeholder="Search repos"
          onChange={handleInputChange}
        />
        <label>
          <input
            type="radio"
            name="usr/org"
            value="user"
            checked={queryType === "user"}
            onChange={handleRadioChange}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            name="usr/org"
            value="organization"
            checked={queryType === "organization"}
            onChange={handleRadioChange}
          />
          Organization
        </label>
        <button>Search</button>
      </form>
    </div>
  );
}