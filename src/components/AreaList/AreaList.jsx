import { NavLink, Link } from "react-router-dom";

const AreaList = ({ data }) => {
  return (
    <>
      <div className="see">
        <h3>Areas</h3>
        <Link className="see-all" to="/areas/american">
          See all
        </Link>
      </div>
      <div className="select-options">
        {data ? (
          data.meals.map((item, index) => (
            <NavLink to={`/areas/${item.strArea}`} key={index}>
              {item.strArea}
            </NavLink>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default AreaList;
