import React from "react";
import "./Car.css";

export default (props) => {
  const inputClasses = ["input"];

  props.name ? inputClasses.push("green") : inputClasses.push("red");
  props.name.length > 4 && inputClasses.push("bold");

  const style = {
    border: "1px solid #ccc",
    boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14)"
  };

  return (
    <div className="Car" style={style}>
      <h3>Сar name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <input
        className={inputClasses.join(" ")}
        value={props.name}
        type="text"
        onChange={props.onChangeName}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
