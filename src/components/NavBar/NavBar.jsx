import HeartIcon from "../../assets/Navbar/HeartIcon";
import HomeIcon from "../../assets/Navbar/HomeIcon";
import HumanIcon from "../../assets/Navbar/HumanIcon";
import SearchIcon from "../../assets/Navbar/SearchIcon";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/home">
          <HomeIcon />
        </NavLink>
        <NavLink to="/results">
          <SearchIcon />
        </NavLink>{" "}
        <NavLink to="/user">
          <HeartIcon />
        </NavLink>
        <NavLink to="/user">
          <HumanIcon />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
