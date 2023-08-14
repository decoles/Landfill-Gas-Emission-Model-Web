import React, { useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
//Material UI
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import DataGrid from "react-data-grid";
import 'react-data-grid/lib/styles.css';


function AcceptanceRates() {
  const { characteristicsData } = React.useContext(AppContext);
  const [inputUnits, setInputUnits] = React.useState(0);
  const [generatedRows, setGeneratedRows] = useState([]);
  const [unitType, setUnitType] = useState("Mg/year");
  const [unitType2, setUnitType2] = useState("short tons/year");

  const YearCalculation = () => {
    const { openYear, closeYear } = characteristicsData;
    console.log("open year: " + openYear + " close year: " + closeYear);
    return closeYear - openYear;
  };

  //Dictates what happens when the drop down menu is changed/ swaps the units
  const dropDownChange = (event) => {
    const selectedValue = event.target.value;
    setUnitType(selectedValue === 0 ? "Mg/year" : "short tons/year");
    setUnitType2(selectedValue === 1 ? "Mg/year": "short tons/year");
  };

  const columns = [
    { key: "year", name: "Year", editable: false},
    { key: "inputUnits", name: `Input Units ( ${unitType} )`, editable: true},
    { key: "calculatedUnits", name: `Calculated Units ( ${unitType2} )`, editable: false},
  ];

  useEffect(() => {
    const newRows = [];
    for (let i = 0; i <= parseInt(YearCalculation(), 10); i++) {
      newRows.push({
        id: i,
        year: parseInt(characteristicsData.openYear, 10) + parseInt(i, 10),
        inputUnits: 0,
        calculatedUnits: 0,
      });
    }
    setGeneratedRows(newRows);
    
  }, [characteristicsData.openYear, characteristicsData.closeYear]);

  console.log(YearCalculation());

  console.log(generatedRows);

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    setGeneratedRows((prevRows) => {
      const updatedRows = [...prevRows];
      for (let i = fromRow; i <= toRow; i++) {
        updatedRows[i] = { ...updatedRows[i], ...updated };
      }
      return updatedRows;
    });
  };

  const rows = [
    { id: 0, year: 2021, inputUnits: 0, calculatedUnits: 0 },
    { id: 1, year: 2022, inputUnits: 0, calculatedUnits: 0 },
    { id: 2, year: 2023, inputUnits: 0, calculatedUnits: 0 },
    { id: 3, year: 2024, inputUnits: 0, calculatedUnits: 0 },
    { id: 4, year: 2025, inputUnits: 0, calculatedUnits: 0 },
    { id: 5, year: 2026, inputUnits: 0, calculatedUnits: 0 },

  ];

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-sidbmple-select-label">Input Units:</InputLabel>
        <Select
          labelId="demo-sidbmple-select-label"
          id="demo-simple-select"
          //value= '' //{age}
          defaultValue={0}
          label="Input Units:"
          onChange={dropDownChange}
        >
          <MenuItem value={0}>Mg/year</MenuItem>
          <MenuItem value={1}>short tons/year</MenuItem>
        </Select>
      </FormControl>
      <DataGrid 
        columns={columns} 
        rows={generatedRows} 
        style={{ height: "90dvh", border: '2px solid red' }} 
        onGridRowsUpdated={onGridRowsUpdated}/>
        enableCellSelect={true}
    </div>
  );
}

export default AcceptanceRates;
