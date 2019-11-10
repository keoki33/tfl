import React, { Component } from "react";
import { stationList } from "./stationList.js";

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
              {stationList.map((item, key) => (
                <option key={key} value={item} />
              ))}
            </datalist>
          </label>
          <label htmlFor="">
            Peak
            <input type="radio" name="time" />
          </label>
          <label htmlFor="">
            Off Peak
            <input type="radio" name="time" />
          </label>
          <label htmlFor="">
            bus trips
            <input type="number" name="bus" />
          </label>
          <br />
          <label htmlFor="">
            select end station
            <input
              // onChange={event => {
              //   this.setState({ endStationField: event.target.value });
              // }}
              onChange={event => {
                this.props.handleChange();
              }}
              name="station"
              placeholer="station"
              type="text"
              list="EndStation"
            />
            <datalist id="EndStation">
              {/* <option value="940GZZLUBST" /> */}
              {stationList.map((item, key) => (
                <option key={key} value={item} />
              ))}
            </datalist>
            Peak
            <input type="radio" name="time" />
            Off Peak
            <input type="radio" name="time" />
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
