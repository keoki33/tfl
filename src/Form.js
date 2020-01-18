import React, { Component } from "react";
import FullForm from "./FullForm";
import TripForm from "./TripForm";
import Results from "./Results";
import Loading from "./Loading";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition
} from "react-transition-group";

import { stationList } from "./stationList.js";
import { travelCardPriceList } from "./travelCardPriceList.js";

class Form extends Component {
  state = {
    simple: true,
    complex: false,
    results: false,
    main: true,
    loadingScreen: false,
    spinner: true,

    startStationM: ["0", "0", "0", "0", "0", "0", "0"],
    endStationM: ["0", "0", "0", "0", "0", "0", "0"],
    timeM: ["peak", "peak", "peak", "peak", "peak", "peak", "peak"],
    startZoneM: ["", "", "", "", "", "", ""],
    endZoneM: ["", "", "", "", "", "", ""],
    tripM: "",

    invalidM: false,

    startStationN: "0",
    endStationN: "0",
    timeN: "peak",
    startZoneN: "",
    endZoneN: "",
    tripN: "",

    invalidN: false,

    busM: [0, 0, 0, 0, 0, 0, 0],
    busN: [0, 0, 0, 0, 0, 0, 0],

    startIdM: ["", "", "", "", "", "", ""],
    endIdM: ["", "", "", "", "", "", ""],

    costM: [0, 0, 0, 0, 0, 0, 0],
    costN: [0, 0, 0, 0, 0, 0, 0],
    cost: 0,
    zones: "",

    day: 0,
    week: 0,
    month: 0,
    halfYear: 0,
    year: 0,
    weekCard: 0,
    monthCard: 0,
    halfYearCard: 0,
    yearCard: 0,
    totalZones: 0
  };

  // order:

  // handleFormInput;
  // if bus: totalCost

  // getStationId

  handleFormInput = (k, v, t, i) => {
    if (k === "busN" || k === "busM") {
      this.setState({ [k]: v }, () => {
        this.totalCost();
      });
    } else {
      let arr = [...this.state[k]];
      arr[i] = v;
      this.setState({ [k]: arr }, () => {
        this.getStationId(t, i);
      });
    }
  };

  getStationId = (time, i) => {
    if (
      this.state[`startStation${time}`][i] === "0" ||
      this.state[`endStation${time}`][i] === "0"
    ) {
      time == "M" ? this.getCostM(i) : this.getCostN(i);
    } else {
      console.log(this.state.startStationM);
      console.log(this.state[`startStation${time}`][i]);

      let start = stationList.filter(
        x => x.name === this.state[`startStation${time}`][i]
      );
      let end = stationList.filter(
        x => x.name === this.state[`endStation${time}`][i]
      );
      let startId = [...this.state[`startId${time}`]];
      let endId = [...this.state[`endId${time}`]];
      startId[i] = start[0].id;
      endId[i] = end[0].id;

      this.setState(
        {
          [`startId${time}`]: startId, // [`startZone${time}`]: start[0].zone,
          [`endId${time}`]: endId // [`startZone${time}`]: start[0].zone,
          // [`endZone${time}`]: end[0].zone
        },
        () => (time == "M" ? this.getCostM(i) : this.getCostN(i))
      );
    }
  };

  getCostM = i => {
    console.log(this.state.costM);

    if (
      this.state.startStationM[i] != "0" &&
      this.state.endStationM[i] != "0"
    ) {
      let costM = [...this.state.costM];
      costM[i] = "spinner";

      this.setState({
        invalidM: false,
        costM: costM,
        cost: "spinner",
        zones: "spinner",
        spinner: true
      });
      fetch(
        `https://api.tfl.gov.uk/journey/journeyresults/${this.state.startIdM[i]}/to/${this.state.endIdM[i]}`
      )
        .then(resp => resp.json())
        .then(x => {
          if (
            x.length == 0 ||
            x["httpStatusCode"] == 404 ||
            x["httpStatusCode"] == 500
          ) {
            let costM = [...this.state.costM];
            let startZoneM = [...this.state.startZoneM];
            let endZoneM = [...this.state.endZoneM];
            costM[i] = 0;
            startZoneM[i] = "";
            endZoneM[i] = "";
            this.setState(
              {
                costM,
                startZoneM,
                endZoneM,
                invalidM: true
              },
              () => {
                this.totalCost();
              }
            );
          } else if (x["journeys"][0]["fare"] === undefined) {
            console.log("broken");
          } else if (
            x["journeys"][0]["fare"]["fares"][0]["taps"][0]["tapDetails"][
              "modeType"
            ] === "Bus"
          ) {
            let costM = [...this.state.costM];
            let startZoneM = [...this.state.startZoneM];
            let endZoneM = [...this.state.endZoneM];
            costM[i] = 0;
            startZoneM[i] = "";
            endZoneM[i] = "";
            this.setState(
              {
                costM,
                startZoneM,
                endZoneM,
                invalidM: true
              },
              () => {
                this.totalCost();
              }
            );
          } else {
            console.log(this.state.timeM);
            let costM = [...this.state.costM];
            let startZoneM = [...this.state.startZoneM];
            let endZoneM = [...this.state.endZoneM];
            console.log(
              (
                x["journeys"][0]["fare"]["fares"][0][`${this.state.timeM[i]}`] /
                100
              ).toFixed(2)
            );
            costM[i] = Number(
              x["journeys"][0]["fare"]["fares"][0][`${this.state.timeM[i]}`] /
                100
            ).toFixed(2);
            startZoneM[i] = x["journeys"][0]["fare"]["fares"][0]["lowZone"];
            endZoneM[i] = x["journeys"][0]["fare"]["fares"][0]["highZone"];

            this.setState(
              {
                invalidM: false,
                startZoneM,
                endZoneM,
                costM
              },
              () => {
                console.log("test");
                console.log(this.state.costM);
                this.totalCost();
              }
            );
          }
        });
    }
  };

  getCostN = i => {
    if (this.state.startStationN != "0" && this.state.endStationN != "0") {
      this.setState({
        invalidM: false,

        costN: "spinner",
        cost: "spinner",
        zones: "spinner",
        spinner: true
      });
      fetch(
        `https://api.tfl.gov.uk/journey/journeyresults/${this.state.startIdN}/to/${this.state.endIdN}`
      )
        .then(resp => resp.json())
        .then(x => {
          if (
            x.length == 0 ||
            x["httpStatusCode"] == 404 ||
            x["httpStatusCode"] == 500
          ) {
            this.setState(
              {
                costN: 0,
                startZoneN: "",
                endZoneN: "",
                startZoneN2: "",
                endZoneN2: "",
                invalidN: true
              },
              () => {
                this.totalCost();
              }
            );
          } else if (x["journeys"][0]["fare"] === undefined) {
            console.log("broken");
          } else if (
            x["journeys"][0]["fare"]["fares"][0]["taps"][0]["tapDetails"][
              "modeType"
            ] === "Bus"
          ) {
            this.setState({ costN: 0, invalidN: true }, () => {
              this.totalCost();
            });
          } else {
            this.setState(
              {
                invalidN: false,
                // choicesN:
                startZoneN: x["journeys"][0]["fare"]["fares"][0]["lowZone"],
                endZoneN: x["journeys"][0]["fare"]["fares"][0]["highZone"],
                startZoneN2: x["journeys"][1]["fare"]["fares"][0]["lowZone"],
                endZoneN2: x["journeys"][1]["fare"]["fares"][0]["highZone"],
                costN: Number(
                  x["journeys"][0]["fare"]["fares"][0][`${this.state.timeN}`] /
                    100
                ).toFixed(2),
                costN2: Number(
                  x["journeys"][1]["fare"]["fares"][0][`${this.state.timeN}`] /
                    100
                ).toFixed(2)
              },
              () => {
                this.totalCost();
              }
            );
          }
        });
    }
  };

  totalCost = () => {
    let price = travelCardPriceList.filter(x => x.zone === this.state.zones);
    let cap = price[0];
    if (this.state.simple) {
      let cc =
        Number(this.state.costM[0]) +
        Number(this.state.costN[0]) +
        Number(this.state.busM[0]) * 1.5 +
        Number(this.state.busN[0]) * 1.5;

      this.setState({ cost: Number(cc.toFixed(2)) }, () => {
        this.zones();
      });
    } else {
    }
  };

  zones = () => {
    if (this.state.startZoneM != "" || this.state.startZoneN != "") {
      let arr = [
        this.state.startZoneM,
        this.state.endZoneM,
        this.state.startZoneN,
        this.state.endZoneN
      ];
      console.log("zones");
      let sort = arr.sort().filter(x => x != "");
      // return `${sort[0]} to ${sort[sort.length - 1]}`;
      this.setState({
        zones: `${sort[0]}-${sort[sort.length - 1]}`,
        spinner: false
      });
    }
  };

  displayResults = () => {
    this.setState({
      day: 0,
      loadingScreen: true,
      main: false,
      simple: false,
      complex: false
    });
    // this.getStationId();
    this.calculateContactless();
    this.calculateTravelcard();
    setTimeout(() => {
      this.setState({ loadingScreen: false, results: true });
    }, 2000);
  };

  calculateContactless = () => {
    this.setState({
      day: this.state.cost.toFixed(2),
      week: (this.state.cost * 5).toFixed(2),
      month: (this.state.cost * 21).toFixed(2),
      halfYear: (this.state.cost * 126).toFixed(2),
      year: (this.state.cost * 253).toFixed(2)
    });
  };

  calculateTravelcard = () => {
    let price = travelCardPriceList.filter(x => x.zone === this.state.zones);
    this.setState({
      weekCard: price[0].week.toFixed(2),
      monthCard: price[0].month.toFixed(2),
      halfYearCard: (price[0].month * 6).toFixed(2),
      yearCard: price[0].year.toFixed(2)
    });
  };

  // getCost = () => {
  //   fetch(
  //     `https://api.tfl.gov.uk/Stoppoint/${this.state.startId}/FareTo/${this.state.endId}`
  //   )
  //     .then(resp => resp.json())
  //     // .then(x =>
  //     //   console.log(
  //     //     x[0]["rows"][0]["ticketsAvailable"][`${this.state.timeFieldSimpleM}`][
  //     //       "cost"
  //     //     ]
  //     //   )
  //     // );
  //     .then(x => {
  //       if (x.length == 0) {
  //         this.setState({ day: 0 });
  //       } else {
  //         let list = x[0]["rows"][0]["ticketsAvailable"];

  //         if (list.length === 2) {
  //           this.setState({ day: list[1]["cost"] });
  //         } else {
  //           this.setState({
  //             day: list[`${this.state.timeFieldSimpleM}`]["cost"]
  //           });
  //         }
  //       }
  //     });
  // };

  // getStationId = () => {
  //   let start = stationList.filter(
  //     x => x.name === this.state.startStationFieldSimpleM
  //   );
  //   let end = stationList.filter(
  //     x => x.name === this.state.endStationFieldSimpleM
  //   );

  //   this.setState({ startId: start[0].id, endId: end[0].id }, () =>
  //     this.getCost()
  //   );
  // };

  formReturn = () => {
    this.setState({ results: false, main: true, simple: true, complex: false });
  };

  //     .then(x => {
  //       if (x.length == 0 || x["httpStatusCode"] == 404) {
  //         console.log("error");
  //       } else {
  //         console.log(x["journeys"][0]["fare"]["fares"][0]["lowZone"]);
  //       }
  //     });
  // };
  // .then(x => {
  //   if (x.length == 0 || x["httpStatusCode"] == 404) {
  //     this.setState({ costM: 0 }, () => {
  //       this.totalCost();
  //     });
  //   } else {
  //     let list = x[0]["rows"][0]["ticketsAvailable"];

  //     if (list.length === 2) {
  //       this.setState({ costM: list[1]["cost"] }, () => {
  //         this.totalCost();
  //       });
  //     } else {
  //       this.setState(
  //         {
  //           costM: list[`${this.state.timeM}`]["cost"]
  //         },
  //         () => {
  //           this.totalCost();
  //         }
  //       );
  //     }
  //   }
  // });

  // getCostM = () => {
  //   this.setState({ costM: "Loading" });
  //   fetch(
  //     `https://api.tfl.gov.uk/Stoppoint/${this.state.startIdM}/FareTo/${this.state.endIdM}`
  //   )
  //     .then(resp => resp.json())
  //     // .then(x =>
  //     //   console.log(
  //     //     x[0]["rows"][0]["ticketsAvailable"][`${this.state.timeFieldSimpleM}`][
  //     //       "cost"
  //     //     ]
  //     //   )
  //     // );
  //     .then(x => {
  //       if (x.length == 0 || x["httpStatusCode"] == 404) {
  //         this.setState({ costM: 0 }, () => {
  //           this.totalCost();
  //         });
  //       } else {
  //         let list = x[0]["rows"][0]["ticketsAvailable"];

  //         if (list.length === 2) {
  //           this.setState({ costM: list[1]["cost"] }, () => {
  //             this.totalCost();
  //           });
  //         } else {
  //           this.setState(
  //             {
  //               costM: list[`${this.state.timeM}`]["cost"]
  //             },
  //             () => {
  //               this.totalCost();
  //             }
  //           );
  //         }
  //       }
  //     });
  // };

  // getCostN = () => {
  //   this.setState({ costN: "Loading" });
  //   fetch(
  //     `https://api.tfl.gov.uk/Stoppoint/${this.state.startIdN}/FareTo/${this.state.endIdN}`
  //   )
  //     .then(resp => resp.json())
  //     // .then(x =>
  //     //   console.log(
  //     //     x[0]["rows"][0]["ticketsAvailable"][`${this.state.timeFieldSimpleM}`][
  //     //       "cost"
  //     //     ]
  //     //   )
  //     // );
  //     .then(x => {
  //       if (x.length == 0 || x["httpStatusCode"] == 404) {
  //         this.setState({ costN: 0 }, () => {
  //           this.totalCost();
  //         });
  //       } else {
  //         let list = x[0]["rows"][0]["ticketsAvailable"];

  //         if (list.length === 2) {
  //           this.setState({ costN: list[1]["cost"] }, () => {
  //             this.totalCost();
  //           });
  //         } else {
  //           this.setState(
  //             {
  //               costN: list[`${this.state.timeN}`]["cost"]
  //             },
  //             () => {
  //               this.totalCost();
  //             }
  //           );
  //         }
  //       }
  //     });
  // };

  // calculateZone = () => {
  //   if (
  //     (this.state.startZoneM != "" && this.state.startZoneM != "") ||
  //     (this.state.startZoneN != "" && this.state.startZoneN != "")
  //   ) {
  //     if (
  //       // this.state.startZoneM.includes("+") ||
  //       // this.state.endZoneM.includes("+")
  //       this.state.startZoneM.length == 2
  //     ) {
  //       if (this.state.endZoneM <= this.state.startZoneM[0]) {
  //         let x = this.state.startZoneM[0];
  //         this.setState({ startZoneM: x }, () => {
  //           this.zones();
  //         });
  //       } else {
  //         let x = this.state.startZoneM[1];
  //         this.setState({ startZoneM: x }, () => {
  //           this.zones();
  //         });
  //       }
  //     } else if (this.state.endZoneM.length == 2) {
  //       if (this.state.startZoneM <= this.state.endZoneM[0]) {
  //         let x = this.state.endZoneM[0];
  //         this.setState({ endZoneM: x }, () => {
  //           this.zones();
  //         });
  //       } else {
  //         let x = this.state.endZoneM[1];
  //         this.setState({ endZoneM: x }, () => {
  //           this.zones();
  //         });
  //       }
  //     } else {
  //       this.zones();
  //     }
  //   }
  // };

  render() {
    return (
      <div className="forms">
        <div>
          {/* <p>
            Peak fares - Monday to Friday (not on public holidays) between 06:30
            and 09:30, and between 16:00 and 19:00 Off-peak fares - at all other
            times and if you travel from a station outside Zone 1 to a station
            in Zone 1 between 16:00 and 19:00, Monday to Friday
          </p> */}
          {this.state.main ? (
            <form action="" className="formSwitch">
              <label htmlFor="">Same trip M-F </label>
              <input
                onChange={event => {
                  this.setState({ simple: true, complex: false });
                }}
                defaultChecked
                type="radio"
                name="formType"
              />
              <label htmlFor="">Custom week </label>
              <input
                onChange={event => {
                  this.setState({ simple: false, complex: true });
                }}
                type="radio"
                name="formType"
              />
            </form>
          ) : (
            ""
          )}
          {this.state.simple ? (
            <div className="simpleForm">
              <TripForm
                index={0}
                startStationM={this.state.startStationM[0]}
                endStationM={this.state.endStationM[0]}
                timeM={this.state.timeM[0]}
                startStationN={this.state.startStationN[0]}
                endStationN={this.state.endStationN[0]}
                timeN={this.state.timeN[0]}
                busM={this.state.busM[0]}
                busN={this.state.busN[0]}
                handleFormInput={this.handleFormInput}
                costM={this.state.costM[0]}
                costN={this.state.costN[0]}
                cost={this.state.cost}
                zones={this.state.zones}
                invalidM={this.state.invalidM}
                invalidN={this.state.invalidN}

                // disabled={true}
              />
            </div>
          ) : (
            ""
          )}
          {this.state.complex ? <FullForm /> : ""}{" "}
        </div>

        {this.state.main ? (
          <button
            onClick={event => {
              this.displayResults();
            }}
            disabled={this.state.spinner}
          >
            select
          </button>
        ) : (
          ""
        )}
        {this.state.loadingScreen ? <Loading /> : ""}
        {this.state.results ? (
          <Results
            day={this.state.day}
            formReturn={this.formReturn}
            week={this.state.week}
            month={this.state.month}
            halfYear={this.state.halfYear}
            year={this.state.year}
            weekCard={this.state.weekCard}
            monthCard={this.state.monthCard}
            halfYearCard={this.state.halfYearCard}
            yearCard={this.state.yearCard}
            zones={this.state.zones}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Form;
