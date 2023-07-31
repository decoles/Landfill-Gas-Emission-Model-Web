import React from "react";
//Material UI
import { InputLabel, Select, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
function Characterisitics() {
  return <div>
        <TextField id="standard-basic" label="Open Year" variant="standard" />

        <br />
        <TextField id="standard-basic" label="Closure Year" variant="standard" />
        <br />
        <br/>

        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Have Model Calculate Closure Year</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="No"
            name="radio-buttons-group"
        >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>
        <br/>
        <br/>

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Waste Design Capacity</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Waste Design Capacity"
            defaultValue={0}
            //onChange={handleChange}
        >
            <MenuItem value={0}>megagrams</MenuItem>
            <MenuItem value={1}>short tons</MenuItem>
        </Select>
        </FormControl>
  </div>;
}

export default Characterisitics;
