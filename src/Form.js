import React, { Component } from "react";
import FullForm from "./FullForm";
import TripForm from "./TripForm";
import Results from "./Results";
import Loading from "./Loading";

import { stationList } from "./stationList.js";

class Form extends Component {
  state = {
    simple: true,
    complex: false,
    results: false,
    main: true,

    startStationFieldSimple: "",
    startTimeFieldSimple: "",
    endStationFieldSimple: "",
    endTimeFieldSimple: "",
    startBusTripField: 0,
    endBusTripField: 0,
    startId: "",
    endId: ""
  };

  calculateFare = () => {
    this.setState({
      results: true,
      main: false,
      simple: false,
      complex: false
    });
    this.getStationId();
  };

  getCost = () => {
    fetch(
      `https://api.tfl.gov.uk/Stoppoint/${this.state.startId}/FareTo/${this.state.endId}`
    )
      .then(resp => resp.json())
      .then(x => console.log(x[0]["rows"][0]["ticketsAvailable"]));
  };

  getStationId = () => {
    let start = stationList.filter(
      x => x.name === this.state.startStationFieldSimple
    );
    let end = stationList.filter(
      x => x.name === this.state.endStationFieldSimple
    );

    this.setState({ startId: start[0].id, endId: end[0].id }, () =>
      this.getCost()
    );
  };

  formReturn = () => {
    this.setState({ results: false, main: true, simple: true, complex: false });
  };

  handleFormInput = (k, v) => {
    this.setState({ [k]: v });
  };

  render() {
    return (
      <div>
        {console.log(this.state.startStationFieldSimple)}
        <div className="forms">
          {this.state.main ? (
            <form action="">
              <label htmlFor="">
                simple
                <input
                  onChange={event => {
                    this.setState({ simple: true, complex: false });
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
                    this.setState({ simple: false, complex: true });
                  }}
                  type="radio"
                  name="formType"
                />
              </label>
            </form>
          ) : (
            ""
          )}

          {this.state.simple ? (
            <div className="simpleForm">
              <TripForm handleFormInput={this.handleFormInput} />
            </div>
          ) : (
            ""
          )}
          {this.state.complex ? <FullForm /> : ""}
        </div>

        {this.state.main ? (
          <button
            onClick={event => {
              this.calculateFare();
            }}
          >
            select
          </button>
        ) : (
          ""
        )}
        {this.state.results ? (
          <Results
            formReturn={this.formReturn}
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
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Form;
