import React from "react";
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
    </div>
  );
}

export default AcceptanceRates;