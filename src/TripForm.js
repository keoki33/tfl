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
          <form>
            <label htmlFor="">Peak </label>
            <input
              type="radio"
              onChange={event => {
                this.props.handleFormInput(
                  "endTimeFieldSimple",
                  event.target.value
                );
              }}
              type="radio"
              name="time"
              value="1"
              checked={this.props.endTimeFieldSimple === "1"}
            />

            <label htmlFor="">Off Peak </label>
            <input
              type="radio"
              onChange={event => {
                this.props.handleFormInput(
                  "endTimeFieldSimple",
                  event.target.value
                );
              }}
              type="radio"
              name="time"
              value="2"
              checked={this.props.endTimeFieldSimple === "2"}
            />
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
