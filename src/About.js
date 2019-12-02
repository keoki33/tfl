import React, { Component } from "react";

class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>about</h1>
        <p>
          Frustrated with the difficulty in calculating the average cost of my
          commute and trying to figure out if it was worth buying a Travelcard I
          created a website to let you easily make that determination
        </p>
        <p>
          Simple assumes: Average work days travel monday to friday no travel on
          weekends
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
