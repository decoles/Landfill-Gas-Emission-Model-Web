import React, { useEffect } from "react";
import gasData from "./data/gasData";
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
function Gasses() {

  const [gas1, setGas1] = React.useState("Total landfill gas");
  const [gas2, setGas2] = React.useState("Methane");
  const [gas3, setGas3] = React.useState("Carbon dioxide");
  const [gas4, setGas4] = React.useState("NMOC");
  const { gassesData, setGassesData } = React.useContext(AppContext);

  const handleChange = (event) => {
    setGassesData({
      ...event,
      gas1: gas1,
      gas2: gas2,
      gas3: gas3,
      gas4: gas4,
    });
  };

  useEffect(() => {
    handleChange();
  }, [gas1, gas2, gas3, gas4]);

  const handleGas1Change = (event) => {
    setGas1(event.target.value);
    setGassesData({
      ...gassesData,
      gas1: event.target.value,
    });
    handleChange(event);
  };

  const handleGas2Change = (event) => {
    setGas2(event.target.value);
    setGassesData({
      ...gassesData,
      gas2: event.target.value,
    });
    handleChange(event);

  };

  const handleGas3Change = (event) => {
    setGas3(event.target.value);
    setGassesData({
      ...gassesData,
      gas3: event.target.value,
    });
    handleChange(event);

  };

  const handleGas4Change = (event) => {
    setGas4(event.target.value);
    setGassesData({
      ...gassesData,
      gas4: event.target.value,
    });
    handleChange(event);

  };
  
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>
          Gas / Polutant #1
        </InputLabel>
        <Select
          value= {gas1} 
          label="Gas / Polutant #1"
          onChange={handleGas1Change}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.name}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel>
          Gas / Polutant #2
        </InputLabel>
        <Select
          value = {gas2}
          label="Gas / Polutant #2"
          onChange={handleGas2Change}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.name}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel>
          Gas / Polutant #3
        </InputLabel>
        <Select
          value={gas3}
          label="Gas / Polutant #3"
          onChange={handleGas3Change}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.name}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel>
          Gas / Polutant #4
        </InputLabel>
        <Select
          value={gas4}
          label="Gas / Polutant #4"
          defaultValue="Total landfill gas"
          onChange={handleGas4Change}
        >
          {gasData.map((gas, index) => (
            <MenuItem key={index} value={gas.name}>
              {gas.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Gasses;
