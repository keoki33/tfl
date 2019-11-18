import React, { Component } from "react";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition
} from "react-transition-group";

import Loading from "./Loading";

import "./App.scss";

import Ads from "./Ads";
import Navbar from "./Navbar";
import About from "./About";
import Form from "./Form";

class App extends Component {
  state = {
    startStationFieldM: "",
    startStationFieldT: "",
    startStationFieldW: "",
    startStationFieldT: "",
    startStationFieldF: "",
    startStationFieldS: "",
    startStationFieldSu: "",
    startStationFieldA: "",
    // startStation: "940GZZLUCHX",
    endStationFieldM: "",
    endStationFieldT: "",
    endStationFieldW: "",
    endStationFieldT: "",
    endStationFieldF: "",
    endStationFieldS: "",
    endStationFieldSu: "",
    endStationFieldA: "",
    endStation: "940GZZLUBST",
    list: ["test", "test1"],
    result: false,
    about: false,
    form: true,
    array: ["o", "e"],
    check: "check"
  };

  componentDidMount() {
    this.test("central");
  }

  whatever = () => {};

  // choice: normal 5 day work week, no holidays or:

  // show 7 days. each day should have from (peak, off) to station(peak, off), how many bus trips, option for none

  // should then display option if have second option to choose from per trips

  // side screen should show week, month, 6 month, year vs card and how many zones.

  // show ads top, left, bottom?

  getCost = () => {
    fetch(
      `https://api.tfl.gov.uk/Stoppoint/${this.state.startStation}/FareTo/${this.state.endStation}`
    )
      .then(resp => resp.json())
      .then(x => console.log(x));
  };

  test = line => {
    fetch(`https://api.tfl.gov.uk/line/${line}/stoppoints`)
      .then(resp => resp.json())
      // .then(x => console.log(`${x[0]["commonName"]} : ${x[0]["id"]}`));
      .then(x => this.setState({ list: x }, () => this.sort()));
  };

  handleNav = x => {
    switch (x) {
      case "home":
        this.setState({ form: true, about: false });
        break;

      case "about":
        this.setState({ form: false, about: true });
        break;
    }
  };

  test1 = x => {
    let reduce = x["additionalProperties"];
    let reduce2 = reduce.filter(x => x.key == "Zone");
    return reduce2[0]["value"];
  };

  sort = () => {
    let arr = [];
    arr = this.state.list.map(x => ({
      name: `${x["commonName"]}`,
      id: `${x["id"]}`,
      zone: this.test1(x)
    }));
    this.setState({ array: arr });
  };

  display = () => {
    return this.state.array.map(x => {
      return `{"name" : "${x["name"]}" , "id" : "${x["id"]}" , "zone" : "${
        x["zone"]
      }" } , `;
    });
  };

  render() {
    return (
      <div className="main">
        <Navbar handleNav={this.handleNav} />
        <div className="content">
          {/* {this.getCost()} */}
          {console.log(this.state.array)}

          {/* {this.display()} */}
          {this.state.form ? <Form /> : ""}
          {this.state.about ? <About /> : ""}
        </div>
        <div className="adsL">adsL</div>
        <div className="adsR">adsR</div>
        <div className="adsB">adsB</div>
        <Loading />
      </div>
    );
  }
}

export default App;
