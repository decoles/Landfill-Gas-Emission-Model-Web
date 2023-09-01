import React from "react"; 
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation

import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";

function Results() {
  const outputData = useLocation().state;
  //Set variables of outputData to be used in the results page
  const {
    dataRows,
    dataColumnHeaders,
    openYear,
    closeYear,
    CalClosureYear,
    WasteDesignCapacity,
    gas1,
    gas2,
    gas3,
    gas4,
    MethaneGenerationRate,
    PotentialMethanGenCap,
    NMOCConcentration,
    MethaneContent,
  } = outputData;

  console.log(outputData);

  const dropDownChange = (event) => {

  };

  return (
    <div className="Results">
      <h1>Results</h1>
      <br></br>
      Clousre Year:
      <br></br>
      Methan xxxx % by volume
      <br></br>
      <FormControl fullWidth>
        <InputLabel>User-specified Unit:</InputLabel>
        <Select
          defaultValue={0}
          label="User-specified Unit:"
          onChange={dropDownChange}
        >
          <MenuItem value={0}>av ft^3/min</MenuItem>
          <MenuItem value={1}>ft^3/year</MenuItem>
          <MenuItem value={2}>short tons/year</MenuItem>
        </Select>
      </FormControl>




    </div>
  );
}   

export default Results;