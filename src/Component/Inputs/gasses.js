import React from "react";
import gasData from "./data/gasData";
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
function Gasses() {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-sidbmple-select-label">
          Gas / Polutant #1
        </InputLabel>
        <Select
          labelId="demo-sidbmple-select-label"
          id="demo-simple-select"
          //value= '' //{age}
          defaultValue={0}
          label="Gas / Polutant #1"
          //onChange={}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.concentration}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-sijjmple-select-label">
          Gas / Polutant #2
        </InputLabel>
        <Select
          labelId="demo-sijjmple-select-label"
          id="demo-simple-select"
          //value= '' //{age}
          label="Gas / Polutant #2"
          defaultValue={0}

          //onChange={}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.concentration}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-siggmple-select-label">
          Gas / Polutant #3
        </InputLabel>
        <Select
          labelId="demo-siggmple-select-label"
          id="demo-simple-select"
          //value= '' //{age}
          label="Gas / Polutant #3"
          defaultValue={4000}
          //onChange={}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.concentration}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-simjjple-select-label">
          Gas / Polutant #4
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value= '' //{age}
          label="Gas / Polutant #4"
          defaultValue={0}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.concentration}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Gasses;
