import React, { Component } from "react";
import TripForm from "./TripForm";

class FullForm extends Component {
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
      <div className="fullForm">
        <h3>Monday</h3>
        <TripForm />
        <h3> Tuesday </h3>
        <TripForm />
        <h3>Wednesday</h3>
        <TripForm />
        <h3>Thursday</h3>
        <TripForm />
        <h3>Friday </h3>
        <TripForm />
        <h3>Saturday</h3>
        <TripForm />
        <h3>Sunday</h3>
        <TripForm />
      </div>
    );
  }
}

export default FullForm;
