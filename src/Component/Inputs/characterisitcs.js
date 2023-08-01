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
import { AppContext } from "../../AppContext";

function Characterisitics() {
  const [open, setOpen] = React.useState("");
  const [close, setClose] = React.useState("");
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
        //console.log("open year: " + open + " close year: " + event.target.value);
        setCharacteristicsData((prev) => ({
          ...prev,
          openYear: open,
          closeYear: event.target.value,
          }));
      }
    }
  };

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
          //value={age}
          label="Waste Design Capacity"
          defaultValue={0}
          //onChange={handleChange}
        >
          <MenuItem value={0}>megagrams</MenuItem>
          <MenuItem value={1}>short tons</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Characterisitics;
