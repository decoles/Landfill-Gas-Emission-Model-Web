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
    { key: "year", name: "Year"},
    { key: "inputUnits", name: `Input Units ( ${unitType} )`},
    {
      key: "calculatedUnits",
      name: `Calculated Units ( ${unitType2} )`
    },
  ];
  useEffect(() => {
    const newRows = [];
    for (let i = 0; i <= YearCalculation(); i++) {
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
      <DataGrid columns={columns} rows={generatedRows}/>
    </div>
  );
}

export default AcceptanceRates;
