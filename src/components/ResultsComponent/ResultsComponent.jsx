import SearchBar from "../SearchBar/SearchBar";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/context";
import { Link, useParams } from "react-router-dom";

const ResultsComponent = (props) => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // useState für Ingredient Filter
  const [ingredient, setIngredient] = useState();

  // useState für mainIngredient Fetch
  const [ingredientMeals, setIngredientMeals] = useState();

  const [testi, setTesti] = useState(false);

  // useParam für mainIngredient Fetch (Link auslesen)
  const { mainIngredient } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setIngredient(data.meals);
        }
      })
      .catch((error) => console.log("Fehler", error));
  }, [searchItem]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIngredientMeals(data);
      })
      .catch((error) => console.log("Fehler", error));
  }, [mainIngredient]);

  let ingredientArray = [];
  ingredient
    ? ingredient.map((item) => ingredientArray.push(item.strIngredient))
    : console.log("No data");

  let übersicht = [];
  ingredientArray?.map((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
      ? übersicht.push(item)
      : ""
  );

  useEffect(() => {
    if (searchItem.length > 0) {
      setTesti(true);
    }
  }, [searchItem]);

  return (
    <section>
      <div className={`suggestions suggs ${testi ? "show" : ""}`}>
        {searchItem === ""
          ? ""
          : übersicht.map((item, index) => (
              <Link
                onClick={() => setTesti(false)}
                key={index}
                to={`/results/${item}`}
              >
                {item}
              </Link>
            ))}
      </div>

      <section className="results">
        {ingredientMeals !== null ? (
          ingredientMeals?.meals?.map((item, index) => (
            <Link to={`/details/${item.idMeal}`}>
              <div key={index}>
                <img src={item.strMealThumb} alt="food" />
                <h5>{item.strMeal}</h5>
              </div>
            </Link>
          ))
        ) : (
          // )
          <p> Loading... </p>
        )}
      </section>
    </section>
  );
};

export default ResultsComponent;
