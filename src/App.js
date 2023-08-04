import React from 'react';

import Characterisitics from "./Component/Inputs/characterisitcs";
import Parameters from "./Component/Inputs/parameters";
import Gasses from "./Component/Inputs/gasses";
import AcceptanceRates from "./Component/Inputs/wasteAcceptance";
import { AppProvider } from './AppContext';

import Button from '@mui/material/Button';

function App() {
  return (
    <AppProvider>
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
        <Button variant="contained">Submit</Button>
    </div>
    </AppProvider>
  );
}

export default App;
