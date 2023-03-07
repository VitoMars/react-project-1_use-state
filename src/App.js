import React from "react";
import CambiaTitolo from "./components/CambiaTitolo";
import ArrayState from "./components/ArrayState";
import StateObject from "./components/StateObject";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <div className="App">
      <section className="container">
        <CambiaTitolo />
        <hr />
        <ArrayState />
        <hr />
        <StateObject />
        <hr />
        <CounterComponent />
        <hr />
      </section>
    </div>
  );
}

export default App;
