import React from "react";
import moment from "moment";

class Header extends React.Component {
  render() {
    return (
      <header>
        <span className="date"></span>
        <div className="logo">
          <div className="logoInteractive">
            <span className="letter">G</span>
            <div className="smileyContainer">
              <span className="smiley"></span>
            </div>
            <div className="smileyContainer">
              <span className="smiley"></span>
            </div>
            <span className="letter">d</span>
          </div>
          <div>Vibe News.</div>
          <div className="subtitle">
            Weekly curated news articles with <br /> good vibes using machine learning.
          </div>
        </div>
        <div className="desc">{moment().format("dddd, MMMM Do YYYY")}</div>
      </header>
    );
  }
}

export default Header;
