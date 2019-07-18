import React from "react";
import ReactDOM from "react-dom";
import NasaGrid from "./components/NasaGrid";
import { Header, Image } from 'semantic-ui-react'

import "./App.css";

function App() {

  return (
    <div className="App">
      <Header className="agency-title" as='h1'>
        <Image circular src="./images/nasaLogo.png" />National Aeronautics and Space Administration
      </Header>
      <Header className="sagan-quote" as='h4'>"There is perhaps no better demonstration of the folly of the human conceits than this distant image of our tiny world."</Header>
      <section className="nasa-grid">
        <NasaGrid limit={1} />
      </section>
    </div>
  );
}

export default App;