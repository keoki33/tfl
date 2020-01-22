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
        <br />
        <p>
          Choose your start and end stations for morning and afternoon commute.{" "}
          <br />
          Peak fares - Monday to Friday (not on public holidays) journeys
          starting between 06:30 and 09:30, and between 16:00 and 19:00.
          Off-peak fares - at all other times and if you travel from a station
          outside Zone 1 to a station in Zone 1 between 16:00 and 19:00, Monday
          to Friday. <br />
          Select number of bus trips, each one allows unlimited tap on/off bus
          and trams for one hour. Only select more than one if you need to
          switch buses after one hour. <br />
        </p>
        Use simple if you travel same commute Mon-Fri and want basic average
        commute cost. Use custom to select commute for every day including
        weekends. <br />
        <p>
          Simple calculation:
          <br />
          <br />
          Week commute Monday to Friday with no commute on weekends. <br />
          Month is 21 working days <br />
          Half Year is 126 working days <br />
          Year is 253 working days <br />
          <br />
          Complex calculation: <br />
          <br />
          Does not subtract any holidays. <br />
          Month is averaged as 4.3 weeks. <br />
          Half Year is 126 weeks. <br />
          Year is 52 weeks. <br />
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
