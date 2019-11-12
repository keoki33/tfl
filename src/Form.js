import React, { Component } from "react";
import FullForm from "./FullForm";
import TripForm from "./TripForm";
import Results from "./Results";

class Form extends Component {
  state = {
    simple: true,
    complex: false
  };

  whatever = () => {};

  render() {
    return (
      <div>
        <div className="form">
          <h1>TFL calculator</h1>
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
      </div>
    );
  }
}

export default Form;
