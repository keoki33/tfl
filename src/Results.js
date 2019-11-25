import React, { Component } from "react";

class Results extends Component {
  state = {
    week: 0,
    month: 0,
    halfYear: 0,
    year: 0,
    weekCard: 0,
    monthCard: 0,
    halfYearCard: 0,
    yearCard: 0,
    zones: 0
  };

  refresh = () => {
    window.location.reload();
  };

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
        <br />
        <h4>Zones Travelled {this.props.zones}</h4>

        <br />
        <div className="resultsLeft">
          <p>contactless</p>
          <br />
          <p>daily £{this.props.day}</p>
          <p>weekly £{this.props.week}</p>
          <p>monthly £{this.props.month}</p>
          <p>6 month £{this.props.halfYear}</p>
          <p>year £{this.props.year}</p>
        </div>
        <div className="resultsRight">
          <p>travel card </p>
          <br />

          <p>weekly £{this.props.weekCard}</p>
          <p>monthly £{this.props.monthCard}</p>
          <p>6 month £{this.props.halfYearCard}</p>
          <p>year £{this.props.yearCard}</p>
        </div>
        <div className="resultsButtons">
          <button onClick={() => this.props.formReturn()}>Edit</button>
          <button onClick={this.refresh}>Restart</button>
        </div>
      </div>
    );
  }
}

export default Results;
