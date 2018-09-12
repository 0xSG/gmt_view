import React, { Component } from "react";

import "./App.css";

import Nav from "./Nav/Nav";

import MapCon from "./MapCon/MapCon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav name="Company" title="Track Your Order" />

        <div className=" align-items-center">
          <MapCon />
        </div>
      </div>
    );
  }
}

export default App;
