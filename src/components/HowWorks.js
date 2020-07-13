import React from "react";

class HowWorks extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>How it&nbsp;works</h1>
        <h3>Here's how the magic happens ✨</h3>
        <p className="full-width">
          Good Vibe News uses{" "}
          <a
            href="http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            VADER
          </a>{" "}
          (Valence Aware Dictionary and sEntiment Reasoner) based machine learning to determine articles with the most
          positive sentiment for that day. It also uses{" "}
          <a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank" rel="noopener noreferrer">
            NLP
          </a>{" "}
          (Natural Language Processing) to generate a quick summary. It's not perfect, but we hope it makes your data
          a&nbsp;little&nbsp;brighter.&nbsp;☀️
        </p>
      </div>
    );
  }
}

export default HowWorks;
