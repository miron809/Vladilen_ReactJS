import React, { Component } from "react";
import "./styles.scss";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

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

  onDelete(i) {
    let cars = this.state.cars.concat();
    cars = cars.filter((car) => cars.indexOf(car) !== i);
    this.setState({ cars });
  }

  render() {
    const divStyle = {
      textAlign: "center"
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, i) => {
        return (
          <ErrorBoundary key={i}>
            <Car
              name={car.name}
              year={car.year}
              index={i}
              onChangeName={(e) => this.onChangeName(e.target.value, i)}
              onDelete={this.onDelete.bind(this, i)}
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div style={divStyle}>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <button onClick={() => this.setState({ clicked: true })}>
          Change clicked
        </button>

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
