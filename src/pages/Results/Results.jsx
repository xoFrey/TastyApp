import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Results.css";

import { useEffect, useState, useContext } from "react";

import { SearchContext } from "../../context/context";
import ResultsComponent from "../../components/ResultsComponent/ResultsComponent";

const Results = () => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // useState für Name Filter
  const [name, setName] = useState();

  // useState für Test

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setName(data);
        }
      })
      .catch((err) => console.log("Fehler", err));
  }, [searchItem]);

  return (
    <section>
      <SearchBar />
      <ResultsComponent />
      <section className="results">
        {name ? (
          name.meals.map((item, index) => (
            <Link to={`/details/${item.idMeal}`}>
              <div key={index}>
                <img src={item.strMealThumb} alt="food" />
                <h5>{item.strMeal}</h5>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <NavBar />
    </section>
  );
};

export default Results;
