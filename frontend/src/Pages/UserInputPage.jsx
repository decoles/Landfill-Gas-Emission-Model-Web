import React from 'react';

import Characterisitics from '../Component/Inputs/characterisitcs';
import Parameters from '../Component/Inputs/parameters';
import Gasses from '../Component/Inputs/gasses';
import AcceptanceRates from '../Component/Inputs/wasteAcceptance';
import { AppProvider } from '../AppContext';


import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function UserInput() {
  return (
    <AppProvider>
    <div className="UserInput">
      <b>Lanfill Name or Identifier: </b>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <p>Landfill Characterisitics</p>
          <Characterisitics />
          <br/>
          <p>Model Parameters</p>
          <Parameters />
          <br/>
          <p>Select Gass Pollutants</p>
          <Gasses />
          <br/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Enter Waste Acceptance Rates</p>
          <AcceptanceRates />
        </Grid>

      </Grid>


    </div>
    </AppProvider>
  );
}

export default UserInput;