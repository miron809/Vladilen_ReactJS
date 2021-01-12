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

        {cars}

        {/* <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitle.bind(this, cars[0].name)}
        /> */}
        {/* <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitle(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={() => this.changeTitle(cars[2].name)}
        /> */}
      </div>
    );
  }
}

export default App;
