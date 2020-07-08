import React from "react";
import "./App.scss";
import smiley from "./images/smiley.png";

//Components
import TopStories from "./components/TopStories";
import Arts from "./components/Arts";
import Science from "./components/Sciences";
import Tech from "./components/Tech";
import Health from "./components/Health";
import Business from "./components/Business";
import RedditTest from "./components/RedditTest";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <span className="date"></span>
          <div className="logo">
            <div className="logoInteractive">
              G
              <div className="smileyContainer">
                <span className="smiley"></span>
              </div>
              <div className="smileyContainer">
                <span className="smiley"></span>
              </div>
              d
            </div>
            <div>Vibe News.</div>
          </div>
          <div className="desc"></div>
        </header>
        <main className="App">
          {/* <World /> */}
          <RedditTest />
          {/* <TopStories /> */}
          {/* <Science />
          <Tech />
          <Health />
          <Business />
          <Arts /> */}
        </main>
        <footer>
          <div className="copy">
            <div>
              Made with <span className="heart">❤️ </span> by{" "}
            </div>
            <a href="http://www.helloshivam.com/" target="_blank" rel="noopener noreferrer">
              Shivam Sinha
            </a>
          </div>
          <div className="links">
            <a href="#">About</a>
            <a href="#">Donate</a>
            <a href="#">Credits</a>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
