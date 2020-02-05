import React, { Component } from "react";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about">
        <h2>
          Calculate the cost of your TFL tube commute and compare it to an
          equivalent travel card.
        </h2>
        <p>
          Frustrated by the unneccessary complexity of calculating my TFL
          commute, I created this site to help others quickly budget for their
          commute and chedck if it's worth purchasing a travel card.
        </p>
        <p className="instructions">
          <h3>Instructions:</h3> <br /> <br />
          <p>
            1. Select your starting and end station for both start and return
            commutes.
          </p>
          <br /> <br />
          <p>
            2. Select whether the journeys begin at peak or off peak times.{" "}
          </p>
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
          <h3>Useful links:</h3>
          <br />
          <a
            href="http://content.tfl.gov.uk/adult-2020-prices.pdf"
            target="_blank"
          >
            TFL adult travelcard pricelist 2020
          </a>
          <br />
          <a
            href="https://tfl.gov.uk/fares/find-fares/tube-and-rail-fares/single-fare-finder"
            target="_blank"
          >
            TFl single fare finder
          </a>
          <br />
          <a
            href="https://tfl.gov.uk/fares/find-fares/tube-and-rail-fares/caps-and-travelcard-prices"
            target="_blank"
          >
            Tfl calculate travelcard with zones
          </a>
          <br />
          <a href="https://www.reeclaim.co.uk/" target="_blank">
            Reeclaim: Automated travel delay refunds
          </a>
          <br />
          <br />
          <a href="https://www.vecteezy.com/" target="_blank">
            {" "}
            Vectors by Vecteezy
          </a>
        </p>{" "}
        <br />
        <a
          href="https://dribbble.com/shots/5945198-Train-loading-animation#shot-description"
          target="_blank"
        >
          Like the loading screen? Hire him.
        </a>
        <br /> <br />
        <p>
          This website is in no way associated with TFL. Website is in beta
          stage. Any errors in calculation and/or costs please report to{" "}
          <a href="mailto:help@tflcalculator.com">help@tflcalculator.com</a>
        </p>
      </div>
    );
  }
}

export default About;
