import React, { useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
//Material UI
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import DataGrid from "react-data-grid";
import 'react-data-grid/lib/styles.css';


function AcceptanceRates() {
  const { characteristicsData } = React.useContext(AppContext);
  const [inputUnits, setInputUnits] = React.useState(0);
  const [generatedRows, setGeneratedRows] = useState([]);

  const YearCalculation = () => {
    const { openYear, closeYear } = characteristicsData;
    console.log("open year: " + openYear + " close year: " + closeYear);
    return closeYear - openYear;
  };

  const columns = [
    { key: "year", name: "Year"},
    { key: "inputUnits", name: "Input Units (Mg/Year)"},
    {
      key: "calculatedUnits",
      name: "Calculated Units (short tons/year)"
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
          //onChange={}
        >
          <MenuItem value={0}>Mg/year</MenuItem>
          <MenuItem value={1}>short tons/year</MenuItem>
        </Select>
      </FormControl>
      <p>Calculated Units: {YearCalculation()}</p>

      <DataGrid columns={columns} rows={generatedRows}/>
    </div>
  );
}

export default AcceptanceRates;
