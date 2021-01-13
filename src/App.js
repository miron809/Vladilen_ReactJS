import React, { Component } from "react";
import "./styles.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mazda", year: 2010 }
    ],
    pageTitle: "React components",
    showCars: true
  };

  changeTitle = (pageTitle) => {
    this.setState({ pageTitle });
  };

  toggleCarsView = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    });
  };

  onChangeName = (name, i) => {
    const car = this.state.cars[i];
    car.name = name;
    const cars = [...this.state.cars];
    cars[i] = car;
    this.setState({ cars });
  };

  onDelete() {}

  render() {
    const divStyle = {
      textAlign: "center"
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, i) => {
        return (
          <Car
            key={i}
            name={car.name}
            year={car.year}
            onChangeName={(e) => this.onChangeName(e.target.value, i)}
            onDelete={this.onDelete.bind(this, i)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input onChange={this.handleInput} type="text" />

        <button onClick={this.toggleCarsView}>Toggle Cars</button>

        <div
          style={{
            width: "400px",
            margin: "auto"
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
