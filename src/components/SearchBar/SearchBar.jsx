import { useContext } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/context";
const SearchBar = () => {
  const { searchItem, setSearchItem } = useContext(SearchContext);
  return (
    <div className="wrapper-search">
      <section className="searchbar">
        <div>
          <Link to={"/home"}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25 12.2739L19.25 12.2739" stroke="#0A2533" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.2998 18.2985L4.2498 12.2745L10.2998 6.24951" stroke="#0A2533" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <h3>Search</h3>
        </div>
        <label>
          <input type="text" name="" id="search" placeholder="Search" onChange={(event) => setSearchItem(event.target.value)} value={searchItem} />
        </label>
      </section>
    </div>
  );
};

export default SearchBar;
