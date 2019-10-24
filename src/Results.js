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
      <div className="card">
        <h1>Results</h1>
        <div>
          <p>contactless</p>
          <p>weekly</p>
          <p>monthly</p>
          <p>6 month</p>
          <p>year</p>
        </div>
        <div>
          <p>travel card</p>
          <p>weekly</p>
          <p>monthly</p>
          <p>6 month</p>
          <p>year</p>
        </div>
      </div>
    );
  }
}

export default Results;
