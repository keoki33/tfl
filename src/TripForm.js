import React, { Component } from "react";
import { startStation } from "./startStation.js";

class TripForm extends Component {
  state = {
    simple: true,
    startStationField: "",
    startTimeField: "",
    startStation: ["one", "two", "three"],
    // startStation: "940GZZLUCHX",
    endStationField: "",
    endTimeField: "",
    endStation: "940GZZLUBST",
    busTripField: 0
  };

  componentDidMount() {}

  whatever = () => {};

  render() {
    return (
      <div className="tripForm">
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
              {/* <option value="940GZZLUCHX" /> */}
              {startStation.map((item, key) => (
                <option key={key} value={item} />
              ))}
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
          <label htmlFor="">
            bus trips
            <input type="number" name="bus" />
          </label>
        </form>
      </div>
    );
  }
}

export default TripForm;
