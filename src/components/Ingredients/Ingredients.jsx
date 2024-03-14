import { useEffect, useState } from "react";
import "./Ingredients.css";

const Ingredients = (props) => {
  const [array, setArray] = useState([]);
  /*   console.log(props.data);
  console.log(props.newData); */
  let changeData = props.data;
  let newArr = [];

  useEffect(() => {
    for (let i = 0; i < props.newData.length; i++) {
      newArr.push(`${changeData[i]} ${props.newData[i]}`);
    }
    setArray(newArr);
  }, [props.toggolino]);
  console.log(props.toggolino);

  return (
    <article className={` ${props.toggolino ? "" : "toggleklasse"}  `}>
      <h3>Ingredients</h3>

      <section className="ingredients">
        <div className="cont">
          {array.map((item, index) => (
            <div key={index}>
              <div>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  <div className="cont-left">
          {props.data ? (
            props.data.map((item, index) => (
              <div key={index}>
                <ul>
                  <li> {item} </li>
                </ul>
              </div>
            ))
          ) : (
            <p>Load...</p>
          )}
        </div>
        <div className="cont-right">
          {props.newData ? (
            props.newData.map((newItem, index) => (
              <div key={index}>
                <p>{newItem}</p>
              </div>
            ))
          ) : (
            <p>Load...</p>
          )}
        </div> */}
      </section>
    </article>
  );
};

export default Ingredients;
