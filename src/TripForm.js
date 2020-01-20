import React, { Component } from "react";
import { stationList } from "./stationList.js";
import { ReactComponent as Spinner } from "./loadingSpinner.svg";

class TripForm extends Component {
  state = {
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

    loading: false,
    spinner: false
  };

  //// calculate fares when all t/f time and bus all filled out.
  /// make all required if filled out station otherwise only bus required.
  /// show fare on end, show error if tube route invalid.
  // show loading when calculating? disable all fields when loading?
  // send daily cost up to form for result screen

  // getstationid then getcost then gettotalcost then calculate zone

  componentDidMount() {}

  // getStationId = time => {
  //   if (
  //     this.state[`startStation${time}`] === "0" ||
  //     this.state[`endStation${time}`] === "0"
  //   ) {
  //     time == "M" ? this.getCostM() : this.getCostN();
  //   } else {
  //     let start = stationList.filter(
  //       x => x.name === this.state[`startStation${time}`]
  //     );
  //     let end = stationList.filter(
  //       x => x.name === this.state[`endStation${time}`]
  //     );

  //     this.setState(
  //       {
  //         [`startId${time}`]: start[0].id,
  //         [`endId${time}`]: end[0].id,
  //         [`startZone${time}`]: start[0].zone,
  //         [`endZone${time}`]: end[0].zone
  //       },
  //       () => (time == "M" ? this.getCostM() : this.getCostN())
  //     );
  //   }
  // };

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
  //               costN: list[`${this.state.timeM}`]["cost"]
  //             },
  //             () => {
  //               this.totalCost();
  //             }
  //           );
  //         }
  //       }
  //     });
  // };

  // totalCost = () => {
  //   let cc =
  //     Number(this.state.costM) +
  //     Number(this.state.costN) +
  //     Number(this.state.busM) * 1.5 +
  //     Number(this.state.busN) * 1.5;

  //   this.setState({ cost: cc.toFixed(2) }, () => {
  //     this.calculateZone();
  //   });
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

  // zones = () => {
  //   let arr = [
  //     this.state.startZoneM,
  //     this.state.endZoneM,
  //     this.state.startZoneN,
  //     this.state.endZoneN
  //   ];
  //   let sort = arr.sort().filter(x => x != "");
  //   // return `${sort[0]} to ${sort[sort.length - 1]}`;
  //   this.setState({ zones: `${sort[0]} to ${sort[sort.length - 1]}` });
  // };

  displaySpinner = x => {
    if (x === "spinner") {
      return <Spinner />;
    } else if (this.props.invalid) {
      return "Invalid";
    } else {
      return x;
    }
  };

  render() {
    return (
      <div>
        <div className="tripForm">
          <label htmlFor="">Morning</label>
          <form action="">
            <select
              onChange={event => {
                // this.setState({ startStationM: event.target.value }, () => {
                //   this.getStationId("M");
                // });
                this.props.handleFormInput(
                  "startStationM",
                  event.target.value,
                  "M",
                  this.props.index
                );
              }}
              value={this.props.startStationM}
            >
              <option value="0">From</option>
              {stationList.map((item, key) => (
                <option key={key} value={item["name"]}>
                  {item["name"]}
                </option>
              ))}
            </select>
          </form>
          <form action="">
            <select
              onChange={event => {
                // this.setState({ endStationM: event.target.value }, () => {
                //   this.getStationId("M");
                // });
                this.props.handleFormInput(
                  "endStationM",
                  event.target.value,
                  "M",
                  this.props.index
                );
              }}
              value={this.props.endStationM}
            >
              <option value="0">To</option>
              {stationList.map((item, key) => (
                <option key={key} value={item["name"]}>
                  {item["name"]}
                </option>
              ))}
            </select>
          </form>
          <div className="formTime">
            <form>
              <label htmlFor="">Peak </label>
              <input
                onChange={event => {
                  // this.setState({ timeM: event.target.value }, () => {
                  //   this.getStationId("M");
                  // });
                  this.props.handleFormInput(
                    "timeM",
                    event.target.value,
                    "M",
                    this.props.index
                  );
                }}
                disabled={this.props.disabled}
                type="radio"
                name="time"
                value="peak"
                checked={this.props.timeM === "peak"}
              />
              <label htmlFor="">Off Peak </label>
              <input
                onChange={event => {
                  // this.setState({ timeM: event.target.value }, () => {
                  //   this.getStationId("M");
                  // });
                  this.props.handleFormInput(
                    "timeM",
                    event.target.value,
                    "M",
                    this.props.index
                  );
                }}
                type="radio"
                name="time"
                value="offPeak"
                checked={this.props.timeM === "offPeak"}
              />
            </form>
          </div>
          <form className="busInput">
            <label htmlFor="">bus trips </label>
            <input
              onChange={event => {
                // this.setState({ busM: event.target.value }, () => {
                //   this.totalCost();
                // });
                this.props.handleFormInput(
                  "busM",
                  event.target.value,
                  "",
                  this.props.index
                );
              }}
              type="number"
              name="bus"
              min="0"
              step="1"
            />
          </form>
        </div>
        {/* 
        <div className="routes">route 1</div>
        <div className="routes">route 2</div> */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}
        {/*  //  Night  Night  Night  Night  Night  Night  Night  Night                      */}

        <div className="tripForm">
          <label className="nightLabel" htmlFor="">
            Night
          </label>
          <form action="">
            <select
              onChange={event =>
                // this.setState({ startStationN: event.target.value }, () => {
                //   this.getStationId("N");
                // })
                this.props.handleFormInput(
                  "startStationN",
                  event.target.value,
                  "N",
                  this.props.index
                )
              }
              value={this.props.startStationN}
            >
              <option value="0">From</option>
              {stationList.map((item, key) => (
                <option key={key} value={item["name"]}>
                  {item["name"]}
                </option>
              ))}
            </select>
          </form>
          <form action="">
            <label htmlFor="">
              <select
                onChange={event => {
                  // this.setState({ endStationN: event.target.value }, () => {
                  //   this.getStationId("N");
                  // });
                  this.props.handleFormInput(
                    "endStationN",
                    event.target.value,
                    "N",
                    this.props.index
                  );
                }}
                value={this.props.endStationN}
              >
                <option value="0" disabled>
                  To
                </option>
                {stationList.map((item, key) => (
                  <option key={key} value={item["name"]}>
                    {item["name"]}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <div className="formTime">
            <form>
              <label htmlFor="">Peak</label>
              <input
                onChange={event => {
                  // this.setState({ timeN: event.target.value }, () => {
                  //   this.getStationId("N");
                  // });
                  this.props.handleFormInput(
                    "timeN",
                    event.target.value,
                    "N",
                    this.props.index
                  );
                }}
                disabled={this.props.disabled}
                type="radio"
                name="time"
                value="peak"
                checked={this.props.timeN === "peak"}
              />
              <label htmlFor="">Off Peak</label>
              <input
                onChange={event => {
                  // this.setState({ timeN: event.target.value }, () => {
                  //   this.getStationId("N");
                  // });
                  this.props.handleFormInput(
                    "timeN",
                    event.target.value,
                    "N",
                    this.props.index
                  );
                }}
                type="radio"
                name="time"
                value="offPeak"
                checked={this.props.timeN === "offPeak"}
              />
            </form>
          </div>
          <form className="busInput">
            <label htmlFor="">bus trips </label>
            <input
              onChange={event => {
                // this.setState({ busN: event.target.value }, () => {
                //   this.totalCost();
                // });
                this.props.handleFormInput(
                  "busN",
                  event.target.value,
                  "",
                  this.props.index
                );
              }}
              min="0"
              step="1"
              type="number"
              name="bus"
            />
          </form>
        </div>
        <br />
        <div className="resultsSummary">
          <div>Morning: </div>{" "}
          <div>£{this.displaySpinner(this.props.costM)}</div>
          <div>Night: </div>
          <div>£{this.displaySpinner(this.props.costN)}</div>
          <div>bus trips:</div>
          <div>{Number(this.props.busM) + Number(this.props.busN)}</div>{" "}
          <div> Total: </div>
          <div> £{this.displaySpinner(this.props.cost)}</div>
          <div> Zones travelled: </div>
          <div>{this.displaySpinner(this.props.zones)}</div>
        </div>
      </div>
    );
  }
}

export default TripForm;
