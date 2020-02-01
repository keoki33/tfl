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
    list: [],
    result: false,
    about: false,
    form: true,
    array: [],
    check: "check"
  };

  componentDidMount() {
    // this.getStations("central");
    // this.getStations("dlr");
    // this.getStations("circle");
    // this.getStations("bakerloo");
    // this.getStations("district");
    // this.getStations("hammersmith-city");
    // this.getStations("jubilee");
    // this.getStations("metropolitan");
    // this.getStations("northern");
    // this.getStations("piccadilly");
    // this.getStations("victoria");
    // this.getStations("waterloo-city");
    // this.getStations("london-overground");
    // this.getStations("northern");
    // this.getStations("tfl-rail");
  }

  whatever = () => {};

  // choice: normal 5 day work week, no holidays or:

  // show 7 days. each day should have from (peak, off) to station(peak, off), how many bus trips, option for none

  // should then display option if have second option to choose from per trips

  // side screen should show week, month, 6 month, year vs card and how many zones.

  // show ads top, left, bottom?

  // getCost = () => {
  //   fetch(
  //     `https://api.tfl.gov.uk/Stoppoint/${this.state.startStation}/FareTo/${this.state.endStation}`
  //   )
  //     .then(resp => resp.json())
  //     .then(x => console.log(x));
  // };

  handleNav = x => {
    switch (x) {
      case "home":
        // this.setState({ form: true, about: false });
        window.location.reload();
        break;

      case "about":
        this.setState({ form: false, about: true });
        break;
    }
  };

  test1 = x => {
    let reduce = x["additionalProperties"];
    let reduce2 = reduce.filter(x => x.key == "Zone");
    // console.log(reduce2[0]["value"]);
    // return reduce2[0]["value"];
    return reduce2[0] ? reduce2[0]["value"] : "fixMe";
  };

  getStations = line => {
    // "https://keo-proxy.herokuapp.com/https://api.darksky.net/forecast/4812400e8cc5b9678e6a02e9b16c64fa/51.482647,-0.015522?units=uk2"

    fetch(
      `https://keo-proxy.herokuapp.com/https://api.tfl.gov.uk/line/${line}/stoppoints`
    )
      .then(resp => resp.json())
      // .then(x => console.log(`${x[0]["commonName"]} : ${x[0]["id"]}`));
      // .then(x => this.setState({ list: x }, () => this.sort()));
      .then(x =>
        this.setState({ list: [...this.state.list, x] }, () =>
          this.setState({ list: this.state.list.flat() }, () => this.print())
        )
      );
  };

  print = () => {
    let arr = [];
    arr = this.state.list.map(x => ({
      name: `${x["commonName"]}`,
      id: `${x["id"]}`,
      zone: this.test1(x)
    }));
    this.setState({ array: arr });
  };

  compare = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  };

  display = () => {
    this.state.array.sort(this.compare);
    let arr = this.getUnique(this.state.array, "name");
    console.log(arr);
    return arr.map(x => {
      return `{"name" : "${x["name"]}" , "id" : "${x["id"]}" , "zone" : "${x["zone"]}" } , `;
    });
  };

  displayForm = () => {
    if (this.state.form) {
      return (
        <TransitionGroup>
          <CSSTransition
            timeout={1000}
            classNames="fade"
            key="form"
            in={this.state.form}
          >
            <Form key="form" />
          </CSSTransition>
        </TransitionGroup>
      );
    } else {
      return "";
    }
  };

  displayAbout = () => {
    if (this.state.about) {
      return (
        <CSSTransition
          timeout={1000}
          classNames="fade"
          key="about"
          in={this.state.about}
        >
          {/* <About key="about" /> */}
          <img key="12" src={require("./verticalAd.png")} alt="" />
        </CSSTransition>
      );
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className="main">
        <Navbar handleNav={this.handleNav} />

        <div className="content">
          {this.state.form ? <Form /> : ""}

          {this.state.about ? <About /> : ""}
        </div>

        <div className="adsL">
          <img src={require("./verticalAd.png")} alt="" />
        </div>
        <div className="adsR">
          <img src={require("./verticalAd.png")} alt="" />
        </div>
        <div className="adsB">
          <img src={require("./horizontalAd.png")} alt="" />
        </div>
        {/* <Loading /> */}
      </div>
    );
  }
}

export default App;
