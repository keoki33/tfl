import React, { Component } from "react";
import { stationList } from "./stationList.js";

class TripForm extends Component {
  state = {
    simple: true,

    startStationFieldSimpleM: "0",
    timeFieldSimpleM: "2",
    endStationFieldSimpleM: "0",
    startStationFieldSimpleN: "0",
    timeFieldSimpleN: "2",
    endStationFieldSimpleN: "0",

    busTripFieldM: 0,
    busTripFieldN: 0
  };

  //// calculate fares when all t/f time and bus all filled out.
  /// make all required if filled out station otherwise only bus required.
  /// show fare on end, show error if tube route invalid.
  // show loading when calculating? disable all fields when loading?
  // send daily cost up to form for result screen

  componentDidMount() {}

  whatever = () => {};

  render() {
    return (
      <div>
        <div className="tripForm">
          <form action="">
            <label htmlFor="">
              <select
                onChange={event => {
                  this.props.handleFormInput(
                    "startStationFieldSimpleM",
                    event.target.value
                  );
                }}
                value={this.props.startStationFieldSimpleM}
              >
                <option value="0" disabled>
                  From
                </option>
                {stationList.map((item, key) => (
                  <option key={key} value={item["name"]}>
                    {item["name"]}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <form action="">
            <label htmlFor="">
              <select
                onChange={event => {
                  this.props.handleFormInput(
                    "endStationFieldSimpleM",
                    event.target.value
                  );
                }}
                value={this.props.endStationFieldSimpleM}
              >
                <option value="0" disabled>
                  To
                </option>
                {stationList.map((item, key) => (
                  <option key={key} value={item["name"]}>
                    {item["name"]}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <form>
            <label htmlFor="">
              Peak
              <input
                onChange={event => {
                  this.props.handleFormInput(
                    "timeFieldSimpleM",
                    event.target.value
                  );
                }}
                type="radio"
                name="time"
                value="2"
                checked={this.props.timeFieldSimpleM === "2"}
              />
            </label>{" "}
            <label htmlFor="">
              Off Peak
              <input
                onChange={event => {
                  this.props.handleFormInput(
                    "timeFieldSimpleM",
                    event.target.value
                  );
                }}
                type="radio"
                name="time"
                value="1"
                checked={this.props.timeFieldSimpleM === "1"}
              />
            </label>
          </form>

          <label htmlFor="">bus trips </label>
          <input
            className="busInput"
            onChange={event => {
              this.props.handleFormInput("busTripFieldM", event.target.value);
            }}
            type="number"
            name="bus"
          />
        </div>

        <div className="tripForm">
          <form action="">
            <label htmlFor="">
              <select
                onChange={event => {
                  this.props.handleFormInput(
                    "startStationFieldSimpleN",
                    event.target.value
                  );
                }}
                value={this.props.startStationFieldSimpleN}
              >
                <option value="0" disabled>
                  From
                </option>
                {stationList.map((item, key) => (
                  <option key={key} value={item["name"]}>
                    {item["name"]}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <form action="">
            <label htmlFor="">
              <select
                onChange={event => {
                  this.props.handleFormInput(
                    "endStationFieldSimpleN",
                    event.target.value
                  );
                }}
                value={this.props.endStationFieldSimpleN}
              >
                <option value="0" disabled>
                  To
                </option>
                {stationList.map((item, key) => (
                  <option key={key} value={item["name"]}>
                    {item["name"]}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <form>
            <label htmlFor="">
              Peak
              <input
                onChange={event => {
                  this.props.handleFormInput(
                    "timeFieldSimpleN",
                    event.target.value
                  );
                }}
                type="radio"
                name="time"
                value="2"
                checked={this.props.timeFieldSimpleN === "2"}
              />
            </label>{" "}
            <label htmlFor="">
              Off Peak
              <input
                onChange={event => {
                  this.props.handleFormInput(
                    "timeFieldSimpleN",
                    event.target.value
                  );
                }}
                type="radio"
                name="time"
                value="1"
                checked={this.props.timeFieldSimpleN === "1"}
              />
            </label>
          </form>

          <label htmlFor="">bus trips </label>
          <input
            className="busInput"
            onChange={event => {
              this.props.handleFormInput("busTripFieldN", event.target.value);
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
