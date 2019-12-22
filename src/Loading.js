import React, { Component } from "react";

class Loading extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="loading">
        {/* <h1>loading</h1> */}
        <img src={require("./trainLoading.gif")} alt="" />
      </div>
    );
  }
}

export default Loading;
