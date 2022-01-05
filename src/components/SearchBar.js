export default function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <input type="search" placeholder="Search repos" />
        <input type="radio" name="usr/org" id="user" value="user" checked />
        <label htmlFor="user">User</label>
        <input type="radio" name="usr/org" id="organization" value="organization" />
        <label htmlFor="organization">Organization</label>
        <button>Search</button>
      </form>
    </div>
  );
}