import React, { Component } from "react";
import Simple from "./Simple";
import "./App.css";
import TripForm from "./TripForm";

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

  formType = () => {};

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
              simple
              <input type="radio" name="formType" />
            </label>
            <br />
            <label htmlFor="">
              complex
              <input type="radio" name="formType" />
            </label>
          </form>
        </div>
        <div>
          <TripForm />
        </div>
      </div>
    );
  }
}

export default App;
