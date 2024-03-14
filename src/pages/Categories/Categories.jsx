import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../context/context";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link, NavLink, useParams } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  const [categories, setCategories] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [meals, setMeals] = useState();

  const { searchItem } = useContext(SearchContext);

  const { categoryName } = useParams();

  let mealNames = [];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((res) => res.json())
      .then((apiCategoriesData) => setCategoriesData(apiCategoriesData))
      .catch((err) => console.log("Area Data", err));
  }, [categoryName]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setMeals(data);
        } else {
          console.log("hufcdo");
        }
      })
      .catch((err) => console.log("Meal Name", err));
  }, [searchItem]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log("Area List", err));
  }, []);

  categoriesData ? categoriesData.meals.map((item) => mealNames.push(item.strMeal)) : console.log("No data found");

  return (
    <section className="categories">
      <div className="comp-div">
        <SearchBar />
        <div className="select-options">
          {categories ? (
            categories.meals.map((item, index) => (
              <NavLink to={`/categories/${item.strCategory}`} key={index}>
                {item.strCategory}
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
          ) : categoriesData ? (
            categoriesData.meals.map((singleAllData) => (
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

export default Categories;
