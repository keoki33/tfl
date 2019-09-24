import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { startStation: "940GZZLUCHX", endStation: "940GZZLUBST" };

  whatever = () => {};

  getCost = () => {
    fetch(
      `https://api.tfl.gov.uk/Stoppoint/${this.state.startStation}/FareTo/${this.state.endStation}`
    )
      .then(resp => resp.json())
      .then(x => console.log(x));
  };

  render() {
    return (
      <div className="card">
        {this.getCost()}
        <div> h1 TFL calculator</div>
        <div>
          <form action="">
            <input type="text" />
            select start station
            <input
              onChange={event => {
                this.setState({ startStation: event.target.value });
              }}
              name="station"
              placeholer="station"
              type="text"
            />
            select end station
            <input
              onChange={event => {
                this.setState({ endStation: event.target.value });
              }}
              name="station"
              placeholer="station"
              type="text"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
