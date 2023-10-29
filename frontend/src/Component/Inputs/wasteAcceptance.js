import React, { useEffect, useState, useRef, useCallback } from "react";
import { AppContext } from "../../AppContext";
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation

//Material UI
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import DataGrid from "react-data-grid";
import 'react-data-grid/lib/styles.css';
import { textEditor } from "react-data-grid";

import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'


function AcceptanceRates() {
  const navigate = useNavigate();
  const gridStyle = { minHeight: 550 };

  const { characteristicsData, parametersData, gassesData, } = React.useContext(AppContext);
  const [inputUnits, setInputUnits] = React.useState(0);
  const [generatedRows, setGeneratedRows] = useState([]);
  const [unitType, setUnitType] = useState("Mg/year");
  const [unitType2, setUnitType2] = useState("short tons/year");
  const [openYear, setOpenYear] = useState(0);
  const [closeYear, setCloseYear] = useState(0);
  const [allowRowTabNavigation, setAllowRowTabNavigation] = useState(true); //for tabbing on table
  const YearCalculation = () => {
    const { openYear, closeYear } = characteristicsData;
    console.log("openYear: " + openYear);
    return closeYear - openYear;
  };
  
  //Data to pass to review page
  const routeChange = () => {
    if(characteristicsData.openYear === "" || characteristicsData.closeYear === "" )
    {
      alert("Please enter a valid Open Year or Close Year");
      return;
    }
    let path = `/review`;
    const dataToPass = {
      dataRows: generatedRows,
      dataColumnHeaders: columnsPassToReview,
      openYear: characteristicsData.openYear,
      closeYear: characteristicsData.closeYear,
      CalClosureYear: characteristicsData.ModelCalculateClosureYear,
      WasteDesignCapacity: characteristicsData.WasteDesignCapacity,
      gas1: gassesData.gas1,
      gas2: gassesData.gas2,
      gas3: gassesData.gas3,
      gas4: gassesData.gas4,
      MethaneGenerationRate: parametersData.methaneGenerationRate,
      PotentialMethanGenCap: parametersData.potentialMethaneGenerationCapacity,
      NMOCConcentration: parametersData.nmocConcentration,
      MethaneContent: parametersData.methaneContent,
      unitType: unitType,
      unitType2: unitType2,

    };
    navigate(path, { state: dataToPass });
  };

  //Dictates what happens when the drop down menu is changed/ swaps the units
  const dropDownChange = (event) => {
    const selectedValue = event.target.value;
    setUnitType(selectedValue === 0 ? "Mg/year" : "short tons/year");
    setUnitType2(selectedValue === 1 ? "Mg/year": "short tons/year");
    for(let i = 0; i < generatedRows.length; i++)
    {
      if (selectedValue === 0)
        generatedRows[i].calculatedUnits = generatedRows[i].inputUnits * 100000 * 0.022 / 2000 
      else
        generatedRows[i].calculatedUnits = generatedRows[i].inputUnits * 2000 / (100000 * 0.022);
    }  };

  //Just for displaying on input page
  const columns = [
    { name: "year", header: "Year", editable: false},
    { name: "inputUnits", header: `Input Units ( ${unitType} )`, renderEditCell: textEditor},
    { name: "calculatedUnits", header: `Calculated Units ( ${unitType2} )`, editable: false},
  ];

  //Columns for the review page, otherwise columns breaks because of renderEditCell
  const columnsPassToReview = [
    { name: "year", header: "Year"},
    { name: "inputUnits", header: `Input Units ( ${unitType} )`},
    { name: "calculatedUnits", header: `Calculated Units ( ${unitType2} )`},
  ];

  //Generates the rows for the table based on years
  useEffect(() => {
    const newRows = [];
    for (let i = 0; i <= parseInt(YearCalculation(), 10); i++) {
      newRows.push({
        id: i,
        year: parseInt(characteristicsData.openYear, 10) + parseInt(i, 10),
        inputUnits: 0,
        calculatedUnits: 0, //REMOVE FOR PRODUCTION
      });
    }
    setGeneratedRows(newRows);
  }, [characteristicsData.openYear, characteristicsData.closeYear]);

  //changes calcuated units with input units
  const onEditComplete = useCallback(({ value, columnId, rowId }) => {
    const data = [...generatedRows];
    data[rowId][columnId] = value;
    if(unitType === "Mg/year")
      data[rowId].calculatedUnits = value * 100000 * 0.022 / 2000 
    else
      data[rowId].calculatedUnits = value * 2000 / (100000 * 0.022)
    setGeneratedRows(data);
  }, [generatedRows])

  return (
    <div>
      <FormControl fullWidth>
        {/* Drowpdown here dosent matter as state is already being passed (choosing Input type) */}
        <InputLabel>Input Units:</InputLabel>
        <Select
          defaultValue={0}
          label="Input Units:"
          onChange={dropDownChange}
        >
          <MenuItem value={0}>Mg/year</MenuItem>
          <MenuItem value={1}>short tons/year</MenuItem>
        </Select>
      </FormControl>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        onEditComplete={onEditComplete}
        editable={true}
        allowRowTabNavigation={allowRowTabNavigation}
        columns={columns}
        dataSource={generatedRows}
      />
        <button onClick={routeChange}>Go to Input Review</button>
    </div>
  );
}

export default AcceptanceRates;
