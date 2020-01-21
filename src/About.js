import React, { Component } from "react";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p cl>
          Frustrated with the difficulty in calculating the average cost of my
          commute and trying to figure out if it was worth buying a Travelcard I
          created a website to let you easily make that determination.
        </p>
        <p>
          Simple assumes:
          <br />
          <br />
          Week commute Monday to Friday with no commute on weekends. <br />
          Month is 21 working days <br />
          Half Year is 126 working days <br />
          Year is 253 working days <br />
          <br />
          Complex assumes: <br />
          <br />
          Same as simple plus 104 weekend days. <br />
          <br />
          <br />
          All fares assume you are not tapping out or switching trains to avoid
          zone 1. Fares and routes are calculated as using best route from TFL
          trip planner. If fare shows £0, TFL could not find a tube journey
          between the two stations.
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
