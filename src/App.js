import React from 'react';

import Characterisitics from "./Component/Inputs/characterisitcs";
import Parameters from "./Component/Inputs/parameters";
import Gasses from "./Component/Inputs/gasses";
import AcceptanceRates from "./Component/Inputs/wasteAcceptance";

function App() {
  return (
    <div className="App">
        <p>Landfill Characterisitics</p>
        <Characterisitics />
        <br/>
       <p>Model Parameters</p>
        <Parameters />
        <br/>
        <p>Select Gass Pollutants</p>
        <Gasses />
        <br/>
        <p>Enter Waste Acceptance Rates</p>
        <AcceptanceRates />
    </div>
  );
}

export default App;
