import React from "react";
import "./App.scss";
import smiley from "./images/smiley.png";

//Components
import Header from "./components/Header";
import TopStories from "./components/TopStories";
import Footer from "./components/Footer";
import About from "./components/About";
import HowWorks from "./components/HowWorks";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="App">
          <TopStories />
          <About />
          <HowWorks />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
