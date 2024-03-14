import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import Categories from "./pages/Categories/Categories";
import Areas from "./pages/Areas/Areas";
import Results from "./pages/Results/Results";
import Details from "./pages/Details/Details";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import { useState } from "react";
import { SearchContext } from "./context/context";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {" "}
      {loading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categories/:categoryName" element={<Categories />} />
            <Route path="/areas/:areaName" element={<Areas />} />
            <Route path="/results/:mainIngredient" element={<Results />} />
            <Route path="/results" element={<Results />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/user" element={<UnderConstruction />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <SplashScreen />
      )}
    </SearchContext.Provider>
  );
}

export default App;
