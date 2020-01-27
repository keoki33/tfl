import React, { Component } from "react";

class Ads extends Component {
  state = {};

  whatever = () => {};

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-12121212"
        data-ad-slot="12121212"
        data-ad-format="auto"
      />
    );
  }
}

export default Ads;
