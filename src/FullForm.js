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
        Monday <TripForm />
        Tuesday <TripForm />
        Wednesday <TripForm />
        Thursday <TripForm />
        Friday <TripForm />
        Saturday <TripForm />
        Sunday <TripForm />
      </div>
    );
  }
}

export default FullForm;
