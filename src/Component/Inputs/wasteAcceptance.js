import React from "react";
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
function AcceptanceRates() {
  const { characteristicsData} = React.useContext(AppContext);
  const [inputUnits, setInputUnits] = React.useState(0);

  const calculatedCalculatedUnits = () => {
    const {openYear, closeYear} = characteristicsData;
    console.log("open year: " + openYear + " close year: " + closeYear);
    return (closeYear - openYear);
  }
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
        <p>Calculated Units: {calculatedCalculatedUnits()}</p>
    </div>
  );
}

export default AcceptanceRates;