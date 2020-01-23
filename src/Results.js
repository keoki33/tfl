import React, { Component } from "react";

class Results extends Component {
  state = {
    week: 0,
    month: 0,
    halfYear: 0,
    year: 0,
    weekCard: 0,
    monthCard: 0,
    halfYearCard: 0,
    yearCard: 0,
    zones: 0
  };

  refresh = () => {
    window.location.reload();
  };

  // div table
  // ------------------
  // weekly \ week card
  // if weekly cap, show that only applies to contactless
  //monthly \ month card
  //6 month \  6 month card
  // year \ year card

  render() {
    return (
      <div className="results">
        <div className="resultsHead">
          <h1>Results</h1>
        </div>
        <br />
        <h3>Zones Travelled: {this.props.zones}</h3>

        <br />
        {/* <div className="resultsLeft">
          <p>Contactless</p>
          <br />
          {this.props.day === 0 ? (
            <p className="dayResults">No tube fare found, reselect</p>
          ) : (
            <p className="dayResults">Daily: £{this.props.day}</p>
          )}
          <p>Weekly: £{this.props.week}</p>
          <p>Monthly: £{this.props.month}</p>
          <p>6 month: £{this.props.halfYear}</p>
          <p>Year: £{this.props.year}</p>
        </div> */}
        <div className="resultsTables">
          <div className="leftTableContainer">
            <table>
              <caption>
                <h4>Contactless</h4>
              </caption>
              <tbody>
                {this.props.day === 0 ? (
                  <tr>
                    <td className="dayResults">
                      {" "}
                      No tube fare found, reselect
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="dayResults">Daily: </td>
                    <td>£{this.props.day}</td>
                  </tr>
                )}

                <tr>
                  <td>Weekly:</td>
                  <td>£{this.props.week}</td>
                </tr>
                <tr>
                  <td>Monthly:</td>
                  <td>£{this.props.month}</td>
                </tr>
                <tr>
                  <td>6 month:</td>
                  <td>£{this.props.halfYear}</td>
                </tr>
                <tr>
                  <td>Year:</td>
                  <td>£{this.props.year}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="resultsSep"></div>
          <div className="rightTableContainer">
            <table>
              <caption>
                <h4>Travel Card</h4>
              </caption>
              <tbody>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Weekly:</td>
                  <td>£{this.props.weekCard}</td>
                </tr>
                <tr>
                  <td>Monthly:</td>
                  <td>£{this.props.monthCard}</td>
                </tr>
                <tr>
                  <td>6 month:</td>
                  <td>£{this.props.halfYearCard}</td>
                </tr>
                <tr>
                  <td>Year:</td>
                  <td>
                    {new Intl.NumberFormat("en-GB", {
                      minimumFractionDigits: 2,

                      style: "currency",
                      currency: "GBP"
                    }).format(this.props.yearCard)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="resultsButtons">
          <div>
            {" "}
            <button onClick={() => this.props.formReturn()}>
              Edit Stations
            </button>
          </div>
          <div>
            {" "}
            <button onClick={this.refresh}>Restart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
