import React from "react"; 
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
import DataGrid from "react-data-grid";
import 'react-data-grid/lib/styles.css';
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

  console.log(outputData);

  const dropDownChange = (event) => {
  const selectedValue = event.target.value;
  // Perform any state updates or actions based on the selected value
  console.log(`Selected value: ${selectedValue}`);
  };

  // const columns = [

  //     { key: "year", name: "Year", editable: false},
  //     { key: "inputUnits", name: `(${unitType})`, editable: false},
  //     { key: "calculatedUnits", name: `(${unitType2})`, editable: false},

  // ];
  // const columns = [
  //   {name: 'Waste Accepted',
  //   children: [
  //     { key: "year", name: "Year", editable: false},
  //     { key: "inputUnits", name: `(${unitType})`, editable: false},
  //     { key: "calculatedUnits", name: `(${unitType2})`, editable: false},
  //   ]},
  // ];
  const columns = [
    { name: 'id', header: 'Id', defaultVisible: false, type: 'number', defaultWidth: 50 },
    { name: 'firstName', header: 'First Name', group: 'personalInfo', defaultFlex: 2 },
    { name: 'age', header: 'Age', width: 100, group: 'personalInfo', type: 'number' },
    { name: 'email', header: 'Email', group: 'contactInfo', defaultFlex: 2 },
    { name: 'phone', header: 'Phone', group: 'contactInfo' },
    { name: 'city', header: 'City', group: 'location' },
    { name: 'streetName', header: 'Street name', minWidth: 150, group: 'street', defaultFlex: 1 },
    { name: 'streetNo', header: 'Street no', group: 'street', type: 'number' }
  ]
  const groups = [
    { name: 'street', group: 'location', header: 'Street' },
    { name: 'personalInfo', header: 'Personal info' },
    { name: 'contactInfo', header: 'Contact info' },
    { name: 'location', header: 'Location' },
  ]
  
  const dataSource = [
    { id: 0, firstName: 'Bob', age: 25, email: 'bobby@whocares.com', phone: '+7403 456 768', city: 'Paris', streetName: 'Champs Elysee', streetNo: 34 },
    { id: 1, firstName: 'Lynda', age: 38, email: 'lynda@idont.com', phone: '+7103 66 98 768', city: 'London', streetName: 'St Mary', streetNo: 14 },
    { id: 2, firstName: 'Richard', age: 18, email: 'richy@rich.com', phone: '+173 668 08 83', city: 'Manchester', streetName: 'St Robert', streetNo: 53 },
    { id: 3, firstName: 'Michael', age: 45, email: 'mike@mikey.com', phone: '+075 0628 156 74', city: 'Los Angeles', streetName: 'Greenfield', streetNo: 24 },
    { id: 4, firstName: 'Martin', age: 12, email: 'martin@bobson.com', phone: '+173 5624 675 462', city: 'San Jose', streetName: 'Patrick Ball', streetNo: 67 }
  ]
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
    columnMinWidth={100}
    columns={columns}
    groups={groups}
    dataSource={dataSource}
  />



    </div>
  );
}   

export default Results;