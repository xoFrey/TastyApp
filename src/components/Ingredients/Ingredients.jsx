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

      <section className='ingredients'>
        <div className='cont'>
          {array.map((item, index) => (
            <div key={index}>
              <div>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Ingredients;
