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
      <div>
        <div className="tripForm">
          <form action="">
            <label htmlFor="">start station </label>
            <input
              onChange={event => {
                this.props.handleFormInput(
                  "startStationFieldSimple",
                  event.target.value
                );
              }}
              name="startStation"
              placeholer="station"
              // value={this.state.startStationField}
              id="startStation"
              list="StartStation"
            />
            <datalist id="StartStation">
              {/* <option value="940GZZLUCHX" /> */}
              {stationList.map((item, key) => (
                <option key={key} value={item["name"]} />
              ))}
            </datalist>
          </form>
          <form
            onChange={event => {
              this.props.handleFormInput(
                "startTimeFieldSimple",
                event.target.value
              );
            }}
          >
            <label htmlFor="">Peak </label>
            <input type="radio" name="time" value="peak" />

            <label htmlFor="">Off Peak </label>
            <input type="radio" name="time" value="offPeak" />
          </form>
          <label htmlFor="">bus trips </label>
          <input
            onChange={event => {
              this.props.handleFormInput(
                "startBusTripField",
                event.target.value
              );
            }}
            type="number"
            name="bus"
          />
        </div>
        <div className="tripForm2">
          <form action="">
            <label htmlFor="">end station </label>
            <input
              onChange={event => {
                this.props.handleFormInput(
                  "endStationFieldSimple",
                  event.target.value
                );
              }}
              name="endStation"
              placeholer="station"
              // value={this.state.startStationField}
              id="endStation"
              list="StartStation"
            />
            <datalist id="StartStation">
              {/* <option value="940GZZLUCHX" /> */}
              {stationList.map((item, key) => (
                <option key={key} value={item["name"]} />
              ))}
            </datalist>
          </form>
          <form
            onChange={event => {
              this.props.handleFormInput(
                "endTimeFieldSimple",
                event.target.value
              );
            }}
          >
            <label htmlFor="">Peak </label>
            <input type="radio" name="time" value="peak" />

            <label htmlFor="">Off Peak </label>
            <input type="radio" name="time" value="offPeak" />
          </form>
          <label htmlFor="">bus trips </label>
          <input
            onChange={event => {
              this.props.handleFormInput("endBusTripField", event.target.value);
            }}
            type="number"
            name="bus"
          />
        </div>
      </div>
    );
  }
}

export default TripForm;
