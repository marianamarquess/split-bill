export default function Search({ search, setSearch }) {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <button className="search-btn" type="submit">
        Search
      </button>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search friend..."
      />
    </form>
  );
}
