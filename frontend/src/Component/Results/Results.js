import React from "react"; 
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";

function Results() {
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
        {/* Drowpdown here dosent matter as state is already being passed (choosing Input type) */}
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