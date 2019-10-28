import React, { Component } from "react";

import "./App.scss";
import FullForm from "./FullForm";
import TripForm from "./TripForm";
import Results from "./Results";
import Ads from "./Ads";

class App extends Component {
  state = {
    simple: true,
    startStationFieldM: "",
    startStationFieldT: "",
    startStationFieldW: "",
    startStationFieldT: "",
    startStationFieldF: "",
    startStationFieldS: "",
    startStationFieldSu: "",
    startStationFieldA: "",
    // startStation: "940GZZLUCHX",
    endStationFieldM: "",
    endStationFieldT: "",
    endStationFieldW: "",
    endStationFieldT: "",
    endStationFieldF: "",
    endStationFieldS: "",
    endStationFieldSu: "",
    endStationFieldA: "",
    endStation: "940GZZLUBST",
    week: 0,
    month: 0,
    halfYear: 0,
    year: 0,
    weekCard: 0,
    monthCard: 0,
    halfYearCard: 0,
    yearCard: 0
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
        {this.getCost()}
        {this.test()}
        <div>
          <h1>TFL calculator</h1>
        </div>
        <div>
          <form action="">
            <label htmlFor="">
              simple
              <input
                onChange={event => {
                  this.setState({ simple: true });
                }}
                type="radio"
                name="formType"
              />
            </label>
            <br />
            <label htmlFor="">
              complex
              <input
                onChange={event => {
                  this.setState({ simple: false });
                }}
                type="radio"
                name="formType"
              />
            </label>
          </form>
        </div>
        <div>{this.state.simple ? <TripForm /> : <FullForm />}</div>
        <button
          onClick={event => {
            this.selectRoute();
          }}
        >
          select
        </button>
        <br />
        <Results
          week={this.state.week}
          month={this.state.month}
          halfYear={this.state.halfYear}
          year={this.state.year}
          weekCard={this.state.weekCard}
          monthCard={this.state.monthCard}
          halfYearCard={this.state.halfYearCard}
          yearCard={this.state.yearCard}
        />
        <Ads />
      </div>
    );
  }
}

export default App;
