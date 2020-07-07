import React from "react";
import "./App.scss";

//Components
import TopStories from "./components/TopStories";
import Arts from "./components/Arts";
import Science from "./components/Sciences";
import Tech from "./components/Tech";
import Health from "./components/Health";
import Business from "./components/Business";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        {/* <World /> */}
        <TopStories />
        <Science />
        <Tech />
        <Health />
        <Business />
        <Arts />
      </main>
    );
  }
}

export default App;
