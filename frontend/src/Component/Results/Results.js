import React from "react"; 
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { InputLabel, Select, MenuItem, FormControl, Checkbox } from "@mui/material";
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
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
    unitType: unitType,
    unitType2: unitType2,
  } = outputData;

  const groups = [
    {
      name: 'Waste Accepted',
      header: 'Waste Accepted',
    },
    {
      name: 'Waste-In-Place',
      header: 'Waste-In-Place',
    },
    {
      name: `gas1`,
      header: `${gas1}`,
    },
    {
      name: `gas2`,
      header: `${gas2}`,
    },
    {
      name: `gas3`,
      header: `${gas3}`,
    },
    {
      name: `gas4`,
      header: `${gas4}`,
    },

  ]

  const column = [
    {
      name: 'Year',
      header: 'Year',
    },
    {
      name: `unitType`,
      header: `${unitType}`,
      group: 'Waste Accepted',
    },
    {
      name: `unitType2`,
      header: `${unitType2}`,
      group: 'Waste Accepted',
    },
    {
      name: 'Waste-In-Place',
      header: `${unitType}`,
      group: 'Waste-In-Place',
    },
    {
      name: 'Waste-In-Place',
      header: `${unitType2}`,
      group: 'Waste-In-Place',
    },
    {
      name: `gas1`,
      header: `${gas1}`,
      group: `${gas1}`,
    },



  ]

  console.log(outputData);

  const dropDownChange = (event) => {
  const selectedValue = event.target.value;
  // Perform any state updates or actions based on the selected value
  console.log(`Selected value: ${selectedValue}`);
  };
  const gridStyle = { minHeight: 550 }

  return (
    <div className="Results">
      <h1>Results</h1>

      landfill name :
      <br></br>
      Clousre Year:
      <br></br>
      Methan xxxx % by volume
      <br></br>
      <br></br>
      <Checkbox {...gas1} /> <label>Gas 1</label>
      <Checkbox {...gas2} /> <label>Gas 2</label>
      <Checkbox {...gas3} /> <label>Gas 3</label>
      <Checkbox {...gas4} /> <label>Gas 4</label>
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
      <br></br>
      <br></br>

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        editable={false}
        groups={groups}
        columns={column}
        dataSource={dataRows}
      />
    </div>
  );
}   

export default Results;