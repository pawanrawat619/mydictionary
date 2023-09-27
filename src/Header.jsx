function Header({ searchText, onHandleSearchTextChange, click }) {
  function handleChange(event) {
    onHandleSearchTextChange(event.target.value);
  }

  return (
    <header>
      <h1>My Dictionary</h1>
      <div className="search">
        <input
          type="text"
          id="searchInput"
          placeholder="Enter your word..."
          value={searchText}
          autoComplete="on"
          onChange={handleChange}
        />
        <button onClick={click} id="searchButton">
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
