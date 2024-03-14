import "./Instructions.css";

const Instructions = (props) => {
  /*   console.log(props.toggolino); */
  return (
    <section
      className={`instructions ${props.toggolino ? "toggleklasse" : ""}  `}
    >
      <h3>Instructions</h3>
      {props.instData ? (
        <div>
          <p>{props.instData.strInstructions}</p>
        </div>
      ) : (
        <p>Load...</p>
      )}
    </section>
  );
};

export default Instructions;
