import React, { Component } from "react";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition
} from "react-transition-group";

import "./App.scss";
import FullForm from "./FullForm";
import TripForm from "./TripForm";
import Results from "./Results";
import Ads from "./Ads";
import Navbar from "./Navbar";
import About from "./About";

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
    yearCard: 0,
    zones: 0,
    list: [],
    result: false,
    about: false
  };

  componentDidMount() {
    this.test("circle");
    this.test("central");
  }

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

  test = line => {
    fetch(`https://api.tfl.gov.uk/line/${line}/stoppoints`)
      .then(resp => resp.json())
      // .then(x => console.log(`${x[0]["commonName"]} : ${x[0]["id"]}`));
      .then(x => this.setState({ list: {} }));
  };

  selectRoute = () => {};

  formType = () => {};

  simpleHandle = () => {};

  render() {
    return (
      <div className="main">
        <Navbar />
        {/* {this.getCost()} */}
        {console.log(this.state.list)}
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
                defaultChecked
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
        <div className="form">
          {this.state.simple ? (
            <div className="simpleForm">
              <TripForm handleChange={this.simpleHandle} />
            </div>
          ) : (
            <FullForm />
          )}
        </div>
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
          zones={this.state.zones}
        />
        <Ads />
      </div>
    );
  }
}

export default App;
