import React, { Component } from "react";
import Simple from "./Simple";
import "./App.css";

class App extends Component {
  state = {
    simple: true,
    startStation: "940GZZLUCHX",
    endStation: "940GZZLUBST"
  };

  whatever = () => {};

  // choice: normal 5 day work week, no holidays or:

  // show 7 days. each day should have from (peak, off) to station(peak, off), how many bus trips, option for none

  // should then display option if have second option to choose from per trips

  // side screen should show week, month, 6 month, year vs card and how many zones.

  // show ads top, left, bottom?

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
        <Simple />
        {this.getCost()}
        <div>
          <h1>TFL calculator</h1>
        </div>
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
