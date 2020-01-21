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

// index: M:0, T:1, W:2, TH:3, F:4, S:5, Su: 6

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

    startStationN: ["0", "0", "0", "0", "0", "0", "0"],
    endStationN: ["0", "0", "0", "0", "0", "0", "0"],
    timeN: ["peak", "peak", "peak", "peak", "peak", "peak", "peak"],
    startZoneN: ["", "", "", "", "", "", ""],
    endZoneN: ["", "", "", "", "", "", ""],
    tripN: "",

    invalidN: false,

    busM: [0, 0, 0, 0, 0, 0, 0],
    busN: [0, 0, 0, 0, 0, 0, 0],

    startIdM: ["", "", "", "", "", "", ""],
    endIdM: ["", "", "", "", "", "", ""],
    startIdN: ["", "", "", "", "", "", ""],
    endIdN: ["", "", "", "", "", "", ""],

    costM: [0, 0, 0, 0, 0, 0, 0],
    costN: [0, 0, 0, 0, 0, 0, 0],
    cost: [0, 0, 0, 0, 0, 0, 0],
    zones: ["", "", "", "", "", "", ""],

    day: 0,
    week: 0,
    month: 0,
    halfYear: 0,
    year: 0,
    weekCard: 0,
    monthCard: 0,
    halfYearCard: 0,
    yearCard: 0,
    totalZones: ""
  };

  // order:

  // handleFormInput;
  // if bus: totalCost

  // getStationId

  handleFormInput = (k, v, t, i) => {
    if (k === "busN" || k === "busM") {
      let busN = [...this.state.busN];

      if (k === "busM") {
        let busM = [...this.state.busM];
        busM[i] = v;
        this.setState({ busM }, () => {
          this.totalCost(i);
        });
      } else {
        let busN = [...this.state.busN];
        busN[i] = v;
        this.setState({ busN }, () => {
          this.totalCost(i);
        });
      }
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
    if (
      this.state.startStationM[i] == "0" ||
      this.state.endStationM[i] == "0"
    ) {
      let costM = [...this.state.costM];
      let startZoneM = [...this.state.startZoneM];
      let endZoneM = [...this.state.endZoneM];
      let zones = [...this.state.zones];
      costM[i] = 0;
      startZoneM[i] = "";
      endZoneM[i] = "";
      zones[i] = "";
      this.setState(
        {
          costM,
          startZoneM,
          endZoneM,
          zones,
          invalidM: false
        },
        () => {
          this.totalCost(i);
        }
      );
    } else if (
      this.state.startStationM[i] != "0" &&
      this.state.endStationM[i] != "0"
    ) {
      let costM = [...this.state.costM];
      let cost = [...this.state.cost];
      let zones = [...this.state.zones];
      costM[i] = "spinner";
      cost[i] = "spinner";
      zones[i] = "spinner";

      this.setState({
        invalidM: false,
        costM: costM,
        cost: cost,
        zones: zones,
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
            console.log("500 code");
            let costM = [...this.state.costM];
            let startZoneM = [...this.state.startZoneM];
            let endZoneM = [...this.state.endZoneM];
            let zones = [...this.state.zones];
            costM[i] = 0;
            startZoneM[i] = "";
            endZoneM[i] = "";
            zones[i] = "";
            this.setState(
              {
                costM,
                startZoneM,
                endZoneM,
                zones,
                invalidM: false
              },
              () => {
                this.totalCost(i);
              }
            );
          } else if (x["journeys"][0]["fare"] === undefined) {
            console.log("no fare array");
            let costM = [...this.state.costM];
            let startZoneM = [...this.state.startZoneM];
            let endZoneM = [...this.state.endZoneM];
            let zones = [...this.state.zones];
            costM[i] = 0;
            startZoneM[i] = "";
            endZoneM[i] = "";
            zones[i] = "";
            this.setState(
              {
                costM,
                startZoneM,
                endZoneM,
                zones,
                invalidM: false
              },
              () => {
                this.totalCost(i);
              }
            );
          } else if (
            x["journeys"][0]["fare"]["fares"][0]["taps"][0]["tapDetails"][
              "modeType"
            ] === "Bus"
          ) {
            console.log("bus only");
            let costM = [...this.state.costM];
            let startZoneM = [...this.state.startZoneM];
            let endZoneM = [...this.state.endZoneM];
            let zones = [...this.state.zones];
            costM[i] = 0;
            startZoneM[i] = "";
            endZoneM[i] = "";
            zones[i] = "";
            this.setState(
              {
                costM,
                startZoneM,
                endZoneM,
                zones,
                invalidM: false
              },
              () => {
                this.totalCost(i);
              }
            );
          } else {
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
                this.totalCost(i);
              }
            );
          }
        });
    }
  };

  getCostN = i => {
    if (
      this.state.startStationN[i] == "0" ||
      this.state.endStationN[i] == "0"
    ) {
      let costN = [...this.state.costN];
      let startZoneN = [...this.state.startZoneN];
      let endZoneN = [...this.state.endZoneN];
      let zones = [...this.state.zones];
      costN[i] = 0;
      startZoneN[i] = "";
      endZoneN[i] = "";
      zones[i] = "";
      this.setState(
        {
          costN,
          startZoneN,
          endZoneN,
          zones,
          invalidN: false
        },
        () => {
          this.totalCost(i);
        }
      );
    } else if (
      this.state.startStationN[i] != "0" &&
      this.state.endStationN[i] != "0"
    ) {
      let costN = [...this.state.costN];
      let cost = [...this.state.cost];
      let zones = [...this.state.zones];
      costN[i] = "spinner";
      cost[i] = "spinner";
      zones[i] = "spinner";

      this.setState({
        invalidN: false,
        costN: costN,
        cost: cost,
        zones: zones,
        spinner: true
      });
      fetch(
        `https://api.tfl.gov.uk/journey/journeyresults/${this.state.startIdN[i]}/to/${this.state.endIdN[i]}`
      )
        .then(resp => resp.json())
        .then(x => {
          if (
            x.length == 0 ||
            x["httpStatusCode"] == 404 ||
            x["httpStatusCode"] == 500
          ) {
            console.log("500 code");
            let costN = [...this.state.costN];
            let startZoneN = [...this.state.startZoneN];
            let endZoneN = [...this.state.endZoneN];
            let zones = [...this.state.zones];
            costN[i] = 0;
            startZoneN[i] = "";
            endZoneN[i] = "";
            zones[i] = "";
            this.setState(
              {
                costN,
                startZoneN,
                endZoneN,
                zones,
                invalidN: false
              },
              () => {
                this.totalCost(i);
              }
            );
          } else if (x["journeys"][0]["fare"] === undefined) {
            console.log("no fare array");
            let costN = [...this.state.costN];
            let startZoneN = [...this.state.startZoneN];
            let endZoneN = [...this.state.endZoneN];
            let zones = [...this.state.zones];
            costN[i] = 0;
            startZoneN[i] = "";
            endZoneN[i] = "";
            zones[i] = "";
            this.setState(
              {
                costN,
                startZoneN,
                endZoneN,
                zones,
                invalidN: false
              },
              () => {
                this.totalCost(i);
              }
            );
          } else if (
            x["journeys"][0]["fare"]["fares"][0]["taps"][0]["tapDetails"][
              "modeType"
            ] === "Bus"
          ) {
            console.log("bus only");
            let costN = [...this.state.costN];
            let startZoneN = [...this.state.startZoneN];
            let endZoneN = [...this.state.endZoneN];
            let zones = [...this.state.zones];
            costN[i] = 0;
            startZoneN[i] = "";
            endZoneN[i] = "";
            zones[i] = "";
            this.setState(
              {
                costN,
                startZoneN,
                endZoneN,
                zones,
                invalidN: false
              },
              () => {
                this.totalCost(i);
              }
            );
          } else {
            let costN = [...this.state.costN];
            let startZoneN = [...this.state.startZoneN];
            let endZoneN = [...this.state.endZoneN];
            console.log(
              (
                x["journeys"][0]["fare"]["fares"][0][`${this.state.timeN[i]}`] /
                100
              ).toFixed(2)
            );
            costN[i] = Number(
              x["journeys"][0]["fare"]["fares"][0][`${this.state.timeN[i]}`] /
                100
            ).toFixed(2);
            startZoneN[i] = x["journeys"][0]["fare"]["fares"][0]["lowZone"];
            endZoneN[i] = x["journeys"][0]["fare"]["fares"][0]["highZone"];

            this.setState(
              {
                invalidN: false,
                startZoneN,
                endZoneN,
                costN
              },
              () => {
                this.totalCost(i);
              }
            );
          }
        });
    }
  };

  totalCost = i => {
    let price = travelCardPriceList.filter(x => x.zone === this.state.zones);
    let cap = price[0];
    // if (this.state.simple) {
    let cost = [...this.state.cost];
    let cc =
      Number(this.state.costM[i]) +
      Number(this.state.costN[i]) +
      Number(this.state.busM[i]) * 1.5 +
      Number(this.state.busN[i]) * 1.5;
    cost[i] = cc.toFixed(2);
    this.setState({ cost: cost }, () => {
      this.zones(i);
    });
    // } else {

    // }
  };

  zones = i => {
    if (this.state.startZoneM[i] != "" || this.state.startZoneN[i] != "") {
      let zones = [...this.state.zones];
      let arr = [];
      let arr2 = [];
      arr.push(
        this.state.startZoneM[i],
        this.state.endZoneM[i],
        this.state.startZoneN[i],
        this.state.endZoneN[i]
      );

      let sort = arr.sort().filter(x => x != "");
      // return `${sort[0]} to ${sort[sort.length - 1]}`;
      zones[i] = `${sort[0]}-${sort[sort.length - 1]}`;
      arr2 = this.state.startZoneM.concat(
        this.state.startZoneN,
        this.state.endZoneM,
        this.state.endZoneN
      );
      console.log(arr2);
      let totalSort = arr2.sort().filter(x => x != "");
      let totalZones = `${totalSort[0]}-${totalSort[totalSort.length - 1]}`;
      console.log(totalZones);
      this.setState({
        zones,
        totalZones,
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
    let total = Number(
      this.state.cost.reduce((a, b) => Number(a) + Number(b))
    ).toFixed(2);
    if (this.state.simple) {
      this.setState({
        day: total,
        week: (total * 5).toFixed(2),
        month: (total * 21).toFixed(2),
        halfYear: (total * 126).toFixed(2),
        year: (total * 253).toFixed(2)
      });
    } else {
      //day average of week
      //reset form when switching back and forth between simple/
      //bus trips retain value when edit form
      //return to complex if was complex, make last screen state?
    }
  };

  calculateTravelcard = () => {
    let price = travelCardPriceList.filter(
      x => x.zone === this.state.totalZones
    );
    this.setState({
      weekCard: price[0].week.toFixed(2),
      monthCard: price[0].month.toFixed(2),
      halfYearCard: (price[0].month * 6).toFixed(2),
      yearCard: price[0].year.toFixed(2)
    });
  };

  formReturn = () => {
    this.setState({ results: false, main: true, simple: true, complex: false });
  };

  displayFullForm = () => {
    let week = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    return (
      <div className="fullForm">
        {week.map((x, i) => {
          return (
            <div key={i}>
              <h3>{`${week[i]}`}</h3>
              <TripForm
                index={i}
                startStationM={this.state.startStationM[i]}
                endStationM={this.state.endStationM[i]}
                timeM={this.state.timeM[i]}
                startStationN={this.state.startStationN[i]}
                endStationN={this.state.endStationN[i]}
                timeN={this.state.timeN[i]}
                busM={this.state.busM[i]}
                busN={this.state.busN[i]}
                handleFormInput={this.handleFormInput}
                costM={this.state.costM[i]}
                costN={this.state.costN[i]}
                cost={this.state.cost[i]}
                zones={this.state.zones[i]}
                invalidM={this.state.invalidM}
                invalidN={this.state.invalidN}
                // disabled={true}
              />
            </div>
          );
        })}
      </div>
    );
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
              <label htmlFor="">Same trip Mon-Fri </label>
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
                cost={this.state.cost[0]}
                zones={this.state.zones[0]}
                invalidM={this.state.invalidM}
                invalidN={this.state.invalidN}

                // disabled={true}
              />
            </div>
          ) : (
            ""
          )}
          {/* {this.state.complex ? <FullForm /> : ""}{" "} */}
          <div className="fullForm">
            {this.state.complex ? this.displayFullForm() : ""}{" "}
          </div>
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
            zones={this.state.totalZones}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Form;
