import React, { Component } from "react";
import FullForm from "./FullForm";
import TripForm from "./TripForm";
import Results from "./Results";
import Loading from "./Loading";

import { stationList } from "./stationList.js";

class Form extends Component {
  state = {
    simple: true,
    complex: false,
    results: false,
    main: true,
    loading: false,

    startStationM: "0",
    endStationM: "0",
    timeM: "2",
    startZoneM: "",
    endZoneM: "",

    startStationN: "0",
    endStationN: "0",
    timeN: "2",
    startZoneN: "",
    endZoneN: "",

    busM: 0,
    busN: 0,

    startIdM: "",
    endIdM: "",

    costM: 0,
    costN: 0,
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

  calculateFare = () => {
    this.setState({
      day: 0,
      results: true,
      main: false,
      simple: false,
      complex: false
    });
    // this.getStationId();
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

  // formReturn = () => {
  //   this.setState({ results: false, main: true, simple: true, complex: false });
  // };

  handleFormInput = (k, v, t) => {
    this.setState({ [k]: v }, () => {
      this.getStationId(t);
    });
  };

  getStationId = time => {
    if (
      this.state[`startStation${time}`] === "0" ||
      this.state[`endStation${time}`] === "0"
    ) {
      time == "M" ? this.getCostM() : this.getCostN();
    } else {
      let start = stationList.filter(
        x => x.name === this.state[`startStation${time}`]
      );
      let end = stationList.filter(
        x => x.name === this.state[`endStation${time}`]
      );

      this.setState(
        {
          [`startId${time}`]: start[0].id,
          [`endId${time}`]: end[0].id,
          [`startZone${time}`]: start[0].zone,
          [`endZone${time}`]: end[0].zone
        },
        () => (time == "M" ? this.getCostM() : this.getCostN())
      );
    }
  };

  getCostM = () => {
    this.setState({ costM: "Loading" });
    fetch(
      `https://api.tfl.gov.uk/Stoppoint/${this.state.startIdM}/FareTo/${this.state.endIdM}`
    )
      .then(resp => resp.json())
      // .then(x =>
      //   console.log(
      //     x[0]["rows"][0]["ticketsAvailable"][`${this.state.timeFieldSimpleM}`][
      //       "cost"
      //     ]
      //   )
      // );
      .then(x => {
        if (x.length == 0 || x["httpStatusCode"] == 404) {
          this.setState({ costM: 0 }, () => {
            this.totalCost();
          });
        } else {
          let list = x[0]["rows"][0]["ticketsAvailable"];

          if (list.length === 2) {
            this.setState({ costM: list[1]["cost"] }, () => {
              this.totalCost();
            });
          } else {
            this.setState(
              {
                costM: list[`${this.state.timeM}`]["cost"]
              },
              () => {
                this.totalCost();
              }
            );
          }
        }
      });
  };

  getCostN = () => {
    this.setState({ costN: "Loading" });
    fetch(
      `https://api.tfl.gov.uk/Stoppoint/${this.state.startIdN}/FareTo/${this.state.endIdN}`
    )
      .then(resp => resp.json())
      // .then(x =>
      //   console.log(
      //     x[0]["rows"][0]["ticketsAvailable"][`${this.state.timeFieldSimpleM}`][
      //       "cost"
      //     ]
      //   )
      // );
      .then(x => {
        if (x.length == 0 || x["httpStatusCode"] == 404) {
          this.setState({ costN: 0 }, () => {
            this.totalCost();
          });
        } else {
          let list = x[0]["rows"][0]["ticketsAvailable"];

          if (list.length === 2) {
            this.setState({ costN: list[1]["cost"] }, () => {
              this.totalCost();
            });
          } else {
            this.setState(
              {
                costN: list[`${this.state.timeM}`]["cost"]
              },
              () => {
                this.totalCost();
              }
            );
          }
        }
      });
  };

  totalCost = () => {
    let cc =
      Number(this.state.costM) +
      Number(this.state.costN) +
      Number(this.state.busM) * 1.5 +
      Number(this.state.busN) * 1.5;

    this.setState({ cost: cc.toFixed(2) }, () => {
      this.calculateZone();
    });
  };

  calculateZone = () => {
    if (
      (this.state.startZoneM != "" && this.state.startZoneM != "") ||
      (this.state.startZoneN != "" && this.state.startZoneN != "")
    ) {
      if (
        // this.state.startZoneM.includes("+") ||
        // this.state.endZoneM.includes("+")
        this.state.startZoneM.length == 2
      ) {
        if (this.state.endZoneM <= this.state.startZoneM[0]) {
          let x = this.state.startZoneM[0];
          this.setState({ startZoneM: x }, () => {
            this.zones();
          });
        } else {
          let x = this.state.startZoneM[1];
          this.setState({ startZoneM: x }, () => {
            this.zones();
          });
        }
      } else if (this.state.endZoneM.length == 2) {
        if (this.state.startZoneM <= this.state.endZoneM[0]) {
          let x = this.state.endZoneM[0];
          this.setState({ endZoneM: x }, () => {
            this.zones();
          });
        } else {
          let x = this.state.endZoneM[1];
          this.setState({ endZoneM: x }, () => {
            this.zones();
          });
        }
      } else {
        this.zones();
      }
    }
  };

  zones = () => {
    let arr = [
      this.state.startZoneM,
      this.state.endZoneM,
      this.state.startZoneN,
      this.state.endZoneN
    ];
    let sort = arr.sort().filter(x => x != "");
    // return `${sort[0]} to ${sort[sort.length - 1]}`;
    this.setState({ zones: `${sort[0]} to ${sort[sort.length - 1]}` });
  };

  render() {
    return (
      <div>
        <div className="forms">
          <p>
            Peak fares - Monday to Friday (not on public holidays) between 06:30
            and 09:30, and between 16:00 and 19:00 Off-peak fares - at all other
            times and if you travel from a station outside Zone 1 to a station
            in Zone 1 between 16:00 and 19:00, Monday to Friday
          </p>
          {this.state.main ? (
            <form action="">
              <label htmlFor="">
                simple
                <input
                  onChange={event => {
                    this.setState({ simple: true, complex: false });
                  }}
                  defaultChecked
                  type="radio"
                  name="formType"
                />
              </label>
              <br />
              <label htmlFor="">
                complex
                <input
                  onChange={event => {
                    this.setState({ simple: false, complex: true });
                  }}
                  type="radio"
                  name="formType"
                />
              </label>
            </form>
          ) : (
            ""
          )}

          {this.state.simple ? (
            <div className="simpleForm">
              <TripForm
                startStationM={this.state.startStationM}
                endStationM={this.state.endStationM}
                timeM={this.state.timeM}
                startStationN={this.state.startStationN}
                endStationN={this.state.endStationN}
                timeN={this.state.timeN}
                busM={this.state.busM}
                busN={this.state.busN}
                handleFormInput={this.handleFormInput}
                // disabled={true}
              />
            </div>
          ) : (
            ""
          )}
          {this.state.complex ? <FullForm /> : ""}
        </div>

        {this.state.main ? (
          <button
            onClick={event => {
              this.calculateFare();
            }}
          >
            select
          </button>
        ) : (
          ""
        )}
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
