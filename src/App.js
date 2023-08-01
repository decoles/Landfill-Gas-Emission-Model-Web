import React from 'react';
import { useState } from "react";
import Characterisitics from "./Component/Inputs/characterisitcs";
import Parameters from "./Component/Inputs/parameters";
import Gasses from "./Component/Inputs/gasses";
import AcceptanceRates from "./Component/Inputs/wasteAcceptance";

function App() {
  const [characteristicsData, setCharacteristicsData] = useState({}); // To store the data from Characterisitics component

  // Step 2: Callback function to receive data from Characterisitics component
  const handleCharacteristicsDataUpdate = (data) => {
    setCharacteristicsData(data);
  };


  return (
    <div className="App">
        <p>Landfill Characterisitics</p>
        <Characterisitics onDataUpdate={handleCharacteristicsDataUpdate}/>
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
