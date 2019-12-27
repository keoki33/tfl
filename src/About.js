import React, { Component } from "react";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about">
        <h1>about</h1>
        <p>
          Frustrated with the difficulty in calculating the average cost of my
          commute and trying to figure out if it was worth buying a Travelcard I
          created a website to let you easily make that determination.
        </p>
        <p>
          Simple assumes: Average of 253 working days a year Commute Monday to
          Friday with no commute on weekends. Complex assumes: Average of 253
          working days a year and 104 weekend days.
          <br />
          <br />
          All fares assume you are not tapping out or switching trains to avoid
          zone 1.
        </p>

        <p>
          This website is in no way associated with TFL. Any errors in
          calculation and/or costs please report to
          errors@tfltravelcardcalculator.com
        </p>
      </div>
    );
  }
}

export default About;
