import React, { Component } from "react";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>
          Calculate the cost of your TFL commute and compare it to purchasing a
          travel card to cover same route.
        </p>

        <p className="instructions">
          <h3>Instructions:</h3> <br /> <br />
          <p>
            1. Select your starting and end station for both morning and night
            commutes{" "}
          </p>
          <br /> <br />
          <p>2. Select wether the journeys begin at peak or off peak times. </p>
          <br /> <br />
          <p>
            Peak fares - Monday to Friday (not on public holidays) journeys
            starting between 06:30 and 09:30, and between 16:00 and 19:00.
            <br /> <br />
            Off-peak fares - at all other times and if you travel from a station
            outside Zone 1 to a station in Zone 1 between 16:00 and 19:00,
            Monday to Friday.
          </p>
          <br />
          <p>
            3. Select number of bus trips, each one allows unlimited tap on/off
            bus and trams for one hour. Only select more than one if you need to
            switch buses after one hour. <br /> <br />
            4. Use simple if you travel same commute Mon-Fri and want basic
            average commute cost. Use custom to select commute for every day
            including weekends.
          </p>
          <br />
          <p>
            All fares assume you are not tapping out or switching trains to
            avoid zone 1. Fares and routes are calculated as using best route
            from TFL trip planner.{" "}
          </p>
          <br />
          <p>
            <strong>
              If fare shows £0, TFL could not find a tube journey between the
              two stations. Select another station.
            </strong>
          </p>
        </p>
        <br />
        <div>
          <h3>Simple calculation:</h3>
          <br />
          <ul className="list">
            <li> Commute Monday to Friday with no commute on weekends.</li>
            <li>Month is 21 working days</li>
            <li>Half Year is 26 working days </li>
            <li>Year is 253 working days </li>
          </ul>
          <br />
          <h3>Custom calculation:</h3>
          <br />
          <ul>
            <li>Does not subtract any holidays.</li>
            <li>Month is averaged as 4.3 weeks. </li>
            <li>Half Year is 126 weeks.</li>
            <li>Year is 52 weeks.</li>
          </ul>
        </div>
        <br />
        <p>
          This website is in no way associated with TFL. Website is in beta
          stage. Any errors in calculation and/or costs please report to
          errors@tfltravelcardcalculator.com
        </p>
      </div>
    );
  }
}

export default About;
