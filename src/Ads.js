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
        data-ad-client="ca-pub-8101873648625510"
        data-ad-slot="8101873648625510"
        data-ad-format="auto"
      />
    );
  }
}

export default Ads;
