import React from "react"; 
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
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
      group: 'wasteAccepted',
      header: 'Waste Accepted',
    },
    {
      name: 'Waste-In-Place',
      group: 'wasteInPlace',
      header: 'Waste-In-Place',
    }
  ]

  const column = [
    {
      name: `${unitType}`,
      header: `${unitType}`,
      group: 'wasteAccepted',
    },
    {
      name: `${unitType2}`,
      header: `${unitType2}`,
      group: 'wasteAccepted',
    },
    {
      name: 'Year',
      header: 'Year',
      group: 'wasteInPlace',
    },
    {
      name: 'Waste-In-Place',
      header: 'Waste-In-Place',
      group: 'wasteInPlace',
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
        columns={column}
        dataSource={dataRows}
      />
    </div>
  );
}   

export default Results;