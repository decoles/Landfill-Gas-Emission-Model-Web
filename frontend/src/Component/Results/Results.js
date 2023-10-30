import React, { useEffect, useState } from "react"; 
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { InputLabel, Select, MenuItem, FormControl, Checkbox } from "@mui/material";
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
function Results() {
  const [GridRows, SetGridRows] = useState([]);
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
      id: '0',
      name: 'Year',
      header: 'Year',
    },
    {
      id: '1',
      name: `WasteAccepted1`,
      header: `${unitType}`,
      group: 'Waste Accepted',
    },
    {
      id: '2',
      name: `WasteAccepted2`,
      header: `${unitType2}`,
      group: 'Waste Accepted',
    },
    {
      id: '3',
      name: 'WasteInPlace1',
      header: `${unitType}`,
      group: 'Waste-In-Place',
    },
    {
      id: '4',
      name: 'WasteInPlace2',
      header: `${unitType2}`,
      group: 'Waste-In-Place',
    },
    {
      id: '5',
      name: `Mgyr1`,
      header: `Mg/yr`,
      group: `gas1`,
    },
    {
      id: '6',
      name: `m3year1`,
      header: `m^3/year`,
      group: `gas1`,
    },
    {
      id: '7',
      name: `Pickaunit1`,
      header: `Pick a unit`,
      group: `gas1`,
    },
    {
      id: '8',
      name: `Mgyr2`,
      header: `Mg/yr`,
      group: `gas2`,
    },
    {
      id: '9',
      name: `m3year2`,
      header: `m^3/year`,
      group: `gas2`,
    },
    {
      id: '10',
      name: `Pickaunit2`,
      header: `Pick a unit`,
      group: `gas2`,
    },
    {
      id: '11',
      name: `Mgyr3`,
      header: `Mg/yr`,
      group: `gas3`,
    },
    {
      id: '12',
      name: `m3year3`,
      header: `m^3/year`,
      group: `gas3`,
    },
    {
      id: '13',
      name: `Pickaunit3`,
      header: `Pick a unit`,
      group: `gas3`,
    },
    {
      id: '14',
      name: `Mgyr4`,
      header: `Mg/yr`,
      group: `gas4`,
    },
    {
      id: '15',
      name: `m3year4`,
      header: `m^3/year`,
      group: `gas4`,
    },
    {
      id: '16',
      name: `Pickaunit4`,
      header: `Pick a unit`,
      group: `gas4`,
    },
  ]

  const dropDownChange = (event) => {
  const selectedValue = event.target.value;
  // Perform any state updates or actions based on the selected value
  };
  const gridStyle = { minHeight: 550 }

  //console.log(outputData);
  //Convert datarows to array
  const dataRowsArray = Object.values(dataRows);
  useEffect(() => {
    const GridData = [];
    for (let i = 0; i < dataRowsArray.length; i++) {
      GridData.push({
        id: i,
        Year: parseInt(openYear, 10) + parseInt(i, 10),
        unitType: 0,
        unitType2: 0,
        WasteAccepted1: 0,
        WasteAccepted2: 0,
        WasteInPlace1: 0,
        WasteInPlace2: 0,
        Mgyr1: 0,
        m3year1: 0,
        Pickaunit1: 0,
        Mgyr2: 0,
        m3year2: 0,
        Pickaunit2: 0,
        Mgyr3: 0,
        m3year3: 0,
        Pickaunit3: 0,
        Mgyr4: 0,
        m3year4: 0,
        Pickaunit4: 0,

      });
    }
    SetGridRows(GridData);
  }, []
  );
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
      {/* ERRORS BELOW */}
      {/* <Checkbox {...gas1} /> <label>Gas 1</label>
      <Checkbox {...gas2} /> <label>Gas 2</label>
      <Checkbox {...gas3} /> <label>Gas 3</label>
      <Checkbox {...gas4} /> <label>Gas 4</label> */}
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
        dataSource={GridRows}
      />
    </div>
  );
}   

export default Results;