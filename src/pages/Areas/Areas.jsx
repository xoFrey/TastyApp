import { useState, useContext, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import AreaList from "../../components/AreaList/AreaList";
import "./Areas.css";
import { SearchContext } from "../../context/context";
import { Link, NavLink, useParams } from "react-router-dom";
const Areas = () => {
  const [areaData, setAreaData] = useState();
  const [meals, setMeals] = useState();
  const [areas, setAreas] = useState();

  const { searchItem } = useContext(SearchContext);

  const { areaName } = useParams();

  let mealNames = [];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
      .then((res) => res.json())
      .then((apiAreaData) => setAreaData(apiAreaData))
      .catch((err) => console.log("Area Data", err));
  }, [areaName]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setMeals(data);
        } else {
          console.log("data is null");
        }
      })
      .catch((err) => console.log("Meal Name", err));
  }, [searchItem]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data))
      .catch((err) => console.log("Area List", err));
  }, []);

  areaData ? areaData.meals.map((item) => mealNames.push(item.strMeal)) : console.log("No data found");

  console.log(areaData);

  return (
    <section className="areas">
      <div className="comp-div">
        <SearchBar />
        <div className="select-options">
          {areas ? (
            areas.meals.map((item, index) => (
              <NavLink to={`/areas/${item.strArea}`} key={index}>
                {item.strArea}
              </NavLink>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div className="meals-div">
          {searchItem.length > 0 ? (
            meals.meals.map((item) =>
              mealNames.map((name) =>
                item.strMeal.includes(name) ? (
                  <Link to={`/details/${item.idMeal}`}>
                    <div key={item.idMeal} className="meal">
                      <img src={item.strMealThumb} alt={item.strMeal} className="thumb-meal" />
                      <p>{item.strMeal}</p>
                    </div>
                  </Link>
                ) : (
                  console.log("nein")
                )
              )
            )
          ) : areaData ? (
            areaData.meals.map((singleAllData) => (
              <Link to={`/details/${singleAllData.idMeal}`}>
                <div key={singleAllData.idMeal} className="meal">
                  <img src={singleAllData.strMealThumb} alt={singleAllData.strMeal} className="thumb-meal" />
                  <p>{singleAllData.strMeal}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <NavBar />
    </section>
  );
};

export default Areas;
