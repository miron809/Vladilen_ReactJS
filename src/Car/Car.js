import React from "react";

export default (props) => (
  <div
    style={{
      border: "1px solid #ccc",
      margin: "10px 0",
      padding: "10px 0"
    }}
  >
    <h3>Сar name: {props.name}</h3>
    <p>
      Year: <strong>{props.year}</strong>
    </p>
    <input value={props.name} type="text" onChange={props.onChangeName} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
