import React, { useEffect } from "react";
import { MethaneGenRateOptions, PotentialMethaneGenCapacityOptions, NMOCConcentrationOptions, MethaneContentOptions } from "./data/parameterData";
import { AppContext } from "../../AppContext";


//Material UI
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
function Parameters() {



    const [methaneGenerationRate, setMethaneGenerationRate] = React.useState("CAA Conventional - 0.05");
    const [potentialMethaneGenerationCapacity, setPotentialMethaneGenerationCapacity] = React.useState("CAA Conventional - 170");
    const [nmocConcentration, setNmocConcentration] = React.useState("CAA - 4,000");
    const [methaneContent, setMethaneContent] = React.useState("CAA 50% by volume");
    const { parametersData, setParametersData } = React.useContext(AppContext);

    const handleChange = (event) => {
        setParametersData({
            ...event,
            methaneGenerationRate: methaneGenerationRate,
            potentialMethaneGenerationCapacity: potentialMethaneGenerationCapacity,
            nmocConcentration: nmocConcentration,
            methaneContent: methaneContent,
        });
    };
    
    useEffect(() => {
        handleChange();
    }, [methaneGenerationRate, potentialMethaneGenerationCapacity, nmocConcentration, methaneContent]);



    const handleMethaneGenerationRateChange = (event) => {
        setMethaneGenerationRate(event.target.value);
        setParametersData({
            ...parametersData,
            methaneGenerationRate: event.target.value,
        });
        handleChange(event);
    };

    const handlePotentialMethaneGenerationCapacityChange = (event) => {
        setPotentialMethaneGenerationCapacity(event.target.value);
        setParametersData({
            ...parametersData,
            potentialMethaneGenerationCapacity: event.target.value,
        });
        handleChange(event);

    };

    const handleNmocConcentrationChange = (event) => {
        setNmocConcentration(event.target.value);
        setParametersData({
            ...parametersData,
            nmocConcentration: event.target.value,
        });

        handleChange(event);

    };

    const handleMethaneContentChange = (event) => {
        setMethaneContent(event.target.value);
        setParametersData({
            ...parametersData,
            methaneContent: event.target.value,
        });
        handleChange(event);

    };

    
    

  return <div>
    <FormControl fullWidth>
    <InputLabel>Methane Generation Rate, k(year^-1)</InputLabel>
    <Select
        value= {methaneGenerationRate} 
        label="Methane Generation Rate, k(year^-1)"
        onChange={handleMethaneGenerationRateChange}
    >
        {MethaneGenRateOptions.map((option, index) => (
            <MenuItem key={index} value={option.name}>
                {option.name}
            </MenuItem>
        ))}



    </Select>
    </FormControl>
    <br/>
    <br/>

    <FormControl fullWidth>
    <InputLabel>Potential Methane Generation Capacity, L0 (m^3/MG)</InputLabel>
    <Select
        value={potentialMethaneGenerationCapacity}
        label="Potential Methane Generation Capacity, L0 (m^3/MG)"
        onChange={handlePotentialMethaneGenerationCapacityChange}
    >
        {PotentialMethaneGenCapacityOptions.map((option, index) => (
            <MenuItem key={index} value={option.name}>
                {option.name}
            </MenuItem>
        ))}
    </Select>
    </FormControl>
    <br/>
    <br/>

    <FormControl fullWidth>
    <InputLabel>NMOC Concentration (ppmv as hexane)</InputLabel>
    <Select
        value={nmocConcentration}
        label="NMOC Concentration (ppmv as hexane)"
        onChange={handleNmocConcentrationChange}
    >
        {NMOCConcentrationOptions.map((option, index) => (
            <MenuItem key={index} value={option.name}>
                {option.name}
            </MenuItem>
        ))}

    </Select>
    </FormControl>
    <br/>
    <br/>

    <FormControl fullWidth>
    <InputLabel>Methan Content (% by volume)</InputLabel>
    <Select
        value={methaneContent}
        label="Methane Content (% by volume)"
        defaultValue={50}
        onChange={handleMethaneContentChange}
    >
        {MethaneContentOptions.map((option, index) => (
            <MenuItem key={index} value={option.name}>
                {option.name}
            </MenuItem>
        ))}
    </Select>
    </FormControl>
  </div>;
}

export default Parameters;