import React, { Component } from "react";
import Simple from "./Simple";
import "./App.css";

class App extends Component {
  state = {
    simple: true,
    startStationField: "",
    startStation: ["one", "two", "three"],
    // startStation: "940GZZLUCHX",
    endStationField: "",
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

  test = () => {
    fetch(`https://api.tfl.gov.uk/line/bakerloo/stoppoints`)
      .then(resp => resp.json())
      .then(x => console.log(x));
  };

  selectRoute = () => {};

  render() {
    return (
      <div className="card">
        <Simple />
        {this.getCost()}
        {this.test()}
        <div>
          <h1>TFL calculator</h1>
        </div>
        <div>
          <form action="">
            <label htmlFor="">
              select start station
              <input
                onChange={event => {
                  this.setState({ startStationField: event.target.value });
                }}
                name="startStation"
                placeholer="station"
                value={this.state.startStationField}
                id="startStation"
                list="StartStation"
              />
              <datalist id="StartStation">
                <option value="940GZZLUCHX" />
              </datalist>
            </label>
            <label htmlFor="">
              AM
              <input type="radio" />
            </label>
            <label htmlFor="">
              PM
              <input type="radio" />
            </label>

            <label htmlFor="">
              select end station
              <input
                onChange={event => {
                  this.setState({ endStationField: event.target.value });
                }}
                name="station"
                placeholer="station"
                type="text"
                list="EndStation"
              />
              <datalist id="EndStation">
                <option value="940GZZLUBST" />
              </datalist>
              AM
              <input type="radio" />
              PM
              <input type="radio" />
            </label>
            <button
              onClick={event => {
                this.selectRoute();
              }}
            >
              select
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
