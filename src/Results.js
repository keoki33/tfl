import React, { Component } from "react";

class Results extends Component {
  state = {};

  whatever = () => {};

  // div table
  // ------------------
  // weekly \ week card
  // if weekly cap, show that only applies to contactless
  //monthly \ month card
  //6 month \  6 month card
  // year \ year card

  render() {
    return (
      <div className="results">
        <h1>Results</h1>
        <p>Zones Travelled {this.props.zones}</p>
        <div className="resultsLeft">
          <p>contactless</p>
          <p>weekly {this.props.week}</p>
          <p>monthly {this.props.month}</p>
          <p>6 month {this.props.halfYear}</p>
          <p>year {this.props.year}</p>
        </div>
        <div className="resultsRight">
          <p>travel card </p>
          <p>weekly {this.props.weekCard}</p>
          <p>monthly {this.props.monthCard}</p>
          <p>6 month {this.props.halfYearCard}</p>
          <p>year {this.props.yearCard}</p>
        </div>
      </div>
    );
  }
}

export default Results;
