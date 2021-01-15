import React, { Component } from "react";
import "./Car.scss";
import withClass from "../hoc/withClass";
import propTypes from "prop-types";

class Car extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // this.props.index === 1 && this.inputRef.current.focus();
  }

  render() {
    const inputClasses = ["input"];

    this.props.name ? inputClasses.push("green") : inputClasses.push("red");
    this.props.name.length > 4 && inputClasses.push("bold");

    return (
      <React.Fragment>
        <h3>Сar name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          className={inputClasses.join(" ")}
          value={this.props.name}
          type="text"
          onChange={this.props.onChangeName}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.number,
  onChangeName: propTypes.func,
  onDelete: propTypes.func
};

// export default Car;
export default withClass(Car, "Car");
