import React from "react";
import ReactDOM from "react-dom";
import NasaGrid from "./components/NasaGrid";

import "./App.css";

function App() {

  return (
    <div className="App">
      <img src="./images/worm-logo.jpeg" alt="Cool NASA" />
      <section className="nasa-grid">
        <NasaGrid limit={1} />
      </section>
    </div>
  );
}

export default App;