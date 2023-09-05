import React, { useEffect } from "react";

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
import { AppContext } from "../../AppContext";

function Characterisitics() {
  const [open, setOpen] = React.useState("");
  const [close, setClose] = React.useState("");
  const [calculateClosureBool, setCalculateClosureBool] = React.useState("No"); // State for radio button
  const [wasteCapacity, setWasteCapacity] = React.useState(0); // State for Waste Design Capacity
  const { characteristicsData, setCharacteristicsData } = React.useContext(AppContext);

  const handleChangeOpen = (event) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setOpen(event.target.value);
    }
  };

  const handleChangeClose = (event) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setClose(event.target.value);
      if (event.target.value.length === 4 && open.length === 4 && open < event.target.value) {
        setClose(event.target.value);
        setCharacteristicsData((prev) => ({
          ...prev,
          openYear: open,
          closeYear: event.target.value,
          ModelCalculateClosureYear: calculateClosureBool,
          WasteDesignCapacity: wasteCapacity,
          }));
      }
    }
  };

  //radio button
  const handleCalculateClosureBoolChange = (event) => {
    setCalculateClosureBool(event.target.value);
    console.log("calculateClosureBool: " + event.target.value);
  };

  const handleWasteCapacityChange = (event) => {
    setWasteCapacity(event.target.value);
    console.log("wasteCapacity: " + event.target.value);
  };

  useEffect(() => {
    setCharacteristicsData((prev) => ({
      ...prev,
      openYear: open,
      closeYear: close,
      ModelCalculateClosureYear: calculateClosureBool,
      WasteDesignCapacity: wasteCapacity,
    }));
  }, [open, close, calculateClosureBool, wasteCapacity]);
  
    
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Open Year"
        variant="standard"
        value={open}
        onChange={handleChangeOpen}
        inputProps={{ maxLength: 4 }}
      />

      <br />
      <TextField
        id="standard-basic"
        label="Closure Year"
        variant="standard"
        value={close}
        onChange={handleChangeClose}
        inputProps={{ maxLength: 4 }}
      />
      <br />
      <br />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Have Model Calculate Closure Year
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="No"
          name="radio-buttons-group"
          value={calculateClosureBool}
          onChange={handleCalculateClosureBoolChange}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Waste Design Capacity
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={wasteCapacity}
          label="Waste Design Capacity"
          defaultValue={0}
          onChange={handleWasteCapacityChange}
        >
          <MenuItem value={0}>megagrams</MenuItem>
          <MenuItem value={1}>short tons</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Characterisitics;
