import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import SearchBarHome from "../../components/SearchBarHome/SearchBarHome";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/context";
import AreaList from "../../components/AreaList/AreaList";

const Home = () => {
  const [randomMeal, setRandomMeal] = useState();
  const [areas, setAreas] = useState();
  const [categories, setCategory] = useState();
  const { searchItem } = useContext(SearchContext);
  const [meals, setMeals] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setMeals(data);
        } else {
          // setMeals({ Error: "Meal not found" });
          console.log("No");
        }
      })
      .catch((err) => console.log("Meal Name", err));
  }, [searchItem]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandomMeal(data))
      .catch((err) => console.log("Random Meal", err));
  }, []);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data))
      .catch((err) => console.log("Area List", err));
  }, []);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log("Categories", err));
  }, []);

  return (
    <>
      {" "}
      <section className="home">
        <SearchBarHome />
        {meals ? (
          <div className={`suggestions ${searchItem.length > 0 ? "show" : ""}`}>
            {meals.meals.map((item, index) => (
              <Link to={`/details/${item.idMeal}`} key={index}>
                {item.strMeal}
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
        <h3>Meal of the Day</h3>
        {randomMeal ? (
          <Link to={`/details/${randomMeal.meals[0].idMeal}`}>
            <div className="random-meal">
              <h4>{randomMeal.meals[0].strMeal}</h4>
              <div className="random-info">
                <p>{randomMeal.meals[0].strCategory}</p>
                <p>{randomMeal.meals[0].strArea}</p>
              </div>
            </div>
          </Link>
        ) : (
          <p>Loading...</p>
        )}

        <AreaList data={areas} />
        <div className="see">
          <h3>Categories</h3>
          <Link className="see-all" to="/categories/beef">
            See all
          </Link>
        </div>
        <div className="categories-home">
          {categories ? (
            categories.categories.map((item, index) => (
              <div className="single-category" key={index}>
                <Link to={`/categories/${item.strCategory}`}>
                  <img src={item.strCategoryThumb} />
                  {item.strCategory}
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>{" "}
      <NavBar />
    </>
  );
};

export default Home;
