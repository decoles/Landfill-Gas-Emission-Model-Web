import React from "react";
//Material UI
import { InputLabel, Select, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
function Parameters() {
  return <div>
    <FormControl fullWidth>
    <InputLabel id="demo-sidbmple-select-label">Methane Generation Rate, k(year^-1)</InputLabel>
    <Select
        labelId="demo-sidbmple-select-label"
        id="demo-simple-select"
        //value= '' //{age}
        defaultValue={0.05}
        label="Methane Generation Rate, k(year^-1)"
        //onChange={}
    >
        <MenuItem value={0.05}>CAA Conventional - 0.05</MenuItem>
        <MenuItem value={0.02}>CAA Arid Area - 0.02</MenuItem>
        <MenuItem value={0.04}>Inventory Conventional - 0.04</MenuItem>
        <MenuItem value={0.02}>Inventory Arid Area - 0.02</MenuItem>
        <MenuItem value={0.7}>Invetory Wet - 0.7</MenuItem>
        <MenuItem value={0}>User Specified</MenuItem>
    </Select>
    </FormControl>
    <br/>
    <br/>

    <FormControl fullWidth>
    <InputLabel id="demo-sijjmple-select-label">Potential Methane Generation Capacity, L0 (m^3/MG)</InputLabel>
    <Select
        labelId="demo-sijjmple-select-label"
        id="demo-simple-select"
        //value= '' //{age}
        label="Potential Methane Generation Capacity, L0 (m^3/MG)"
        defaultValue={170}
    
        //onChange={}
    >
        <MenuItem value={170}>CAA Conventional - 170</MenuItem>
        <MenuItem value={170}>CAA Arid Area - 170</MenuItem>
        <MenuItem value={100}>Inventory Conventional - 100</MenuItem>
        <MenuItem value={100}>Inventory Arid Area - 100</MenuItem>
        <MenuItem value={96}>Invetory Wet - 96</MenuItem>
        <MenuItem value={0}>User Specified</MenuItem>
    </Select>
    </FormControl>
    <br/>
    <br/>

    <FormControl fullWidth>
    <InputLabel id="demo-siggmple-select-label">Methane Generation Rate, k(year^-1)</InputLabel>
    <Select
        labelId="demo-siggmple-select-label"
        id="demo-simple-select"
        //value= '' //{age}
        label="Methane Generation Rate, k(year^-1)"
        defaultValue={4000}
        //onChange={}
    >
        <MenuItem value={4000}>CAA Arid Area - 4,000</MenuItem>
        <MenuItem value={600}>Inventory No or Unkown Co-disposal - 600</MenuItem>
        <MenuItem value={2400}>Inventory Co-disposal -2,400</MenuItem>
        <MenuItem value={0}>User Specified</MenuItem>
    </Select>
    </FormControl>
    <br/>
    <br/>

    <FormControl fullWidth>
    <InputLabel id="demo-simjjple-select-label">Methane Generation Rate, k(year^-1)</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        //value= '' //{age}
        label="Methane Generation Rate, k(year^-1)"
        defaultValue={50}
        //onChange={}
    >
        <MenuItem value={50}>CAA 50% by volume</MenuItem>
        <MenuItem value={0}>User Specified</MenuItem>
    </Select>
    </FormControl>
  </div>;
}

export default Parameters;