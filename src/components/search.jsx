const search = ({ SearchT, setSearchT }) => {
  return (
    <div className="searchBar">
      <div>
        <img src="/search.svg" alt="" />

        <input
          type="text"
          placeholder="Search for Movie"
          value={SearchT}
          onChange={(e) => setSearchT(e.target.value)}
        />
      </div>
    </div>
  );
};

export default search;
