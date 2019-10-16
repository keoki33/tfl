import React, { Component } from "react";

class SimpleForm extends Component {
  state = {
    simple: true,
    startStationField: "",
    startStation: ["one", "two", "three"],
    // startStation: "940GZZLUCHX",
    endStationField: "",
    endStation: "940GZZLUBST"
  };

  whatever = () => {};

  render() {
    return (
      <div className="simpleForm">
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
            <input type="radio" name="startTime" />
          </label>
          <label htmlFor="">
            PM
            <input type="radio" name="startTime" />
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
            <input type="radio" name="endTime" />
            PM
            <input type="radio" name="endTime" />
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
    );
  }
}

export default SimpleForm;
