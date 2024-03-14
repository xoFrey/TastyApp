import "./SearchBarHome.css";
import { useContext } from "react";
import { SearchContext } from "../../context/context";
const SearchBar = () => {
  const { searchItem, setSearchItem } = useContext(SearchContext);
  return (
    <section className="searchbarhome">
      <label>
        <input
          type="text"
          name=""
          id="search"
          placeholder="Search"
          onChange={(event) => setSearchItem(event.target.value)}
          value={searchItem}
        />
      </label>
    </section>
  );
};

export default SearchBar;
