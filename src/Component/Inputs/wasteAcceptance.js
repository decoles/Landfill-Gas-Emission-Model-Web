import React, { useEffect, useState, useRef } from "react";
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


function AcceptanceRates() {
  const navigate = useNavigate();

  const { characteristicsData, parametersData, gassesData, } = React.useContext(AppContext);
  const [inputUnits, setInputUnits] = React.useState(0);
  const [generatedRows, setGeneratedRows] = useState([]);
  const [unitType, setUnitType] = useState("Mg/year");
  const [unitType2, setUnitType2] = useState("short tons/year");

  const YearCalculation = () => {
    const { openYear, closeYear } = characteristicsData;
    console.log("open year: " + openYear + " close year: " + closeYear);
    return closeYear - openYear;
  };

  const dataGridRef = useRef(null);
  

  const routeChange = () => {
    let path = `/review`;
    const dataToPass = {
      dataRows: generatedRows,
      dataColumnHeaders: columnsPassToReview,
      openYear: characteristicsData.openYear,
      closeYear: characteristicsData.closeYear,
      gas1: gassesData.gas1,
      gas2: gassesData.gas2,
      gas3: gassesData.gas3,
      gas4: gassesData.gas4,
      // ... add more data as needed
    };
    navigate(path, { state: dataToPass });

  };
  //Dictates what happens when the drop down menu is changed/ swaps the units
  const dropDownChange = (event) => {
    const selectedValue = event.target.value;
    setUnitType(selectedValue === 0 ? "Mg/year" : "short tons/year");
    setUnitType2(selectedValue === 1 ? "Mg/year": "short tons/year");
  };

  const columns = [
    { key: "year", name: "Year", editable: false},
    { key: "inputUnits", name: `Input Units ( ${unitType} )`, renderEditCell: textEditor},
    { key: "calculatedUnits", name: `Calculated Units ( ${unitType2} )`, editable: false},
  ];

  //Columns for the review page, otherwise columns breaks because of renderEditCell
  const columnsPassToReview = [
    { key: "year", name: "Year"},
    { key: "inputUnits", name: `Input Units ( ${unitType} )`},
    { key: "calculatedUnits", name: `Calculated Units ( ${unitType2} )`},
  ];

  useEffect(() => {
    const newRows = [];
    for (let i = 0; i <= parseInt(YearCalculation(), 10); i++) {
      newRows.push({
        id: i,
        year: parseInt(characteristicsData.openYear, 10) + parseInt(i, 10),
        inputUnits: 0,
        calculatedUnits: 0,
      });
    }
    setGeneratedRows(newRows);
    
  }, [characteristicsData.openYear, characteristicsData.closeYear]);

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    setGeneratedRows((prevRows) => {
      const updatedRows = [...prevRows];
      for (let i = fromRow; i <= toRow; i++) {
        updatedRows[i] = { ...updatedRows[i], ...updated };
      }
      console.log(updatedRows);
      return updatedRows;
    });
  };

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
          onChange={dropDownChange}
        >
          <MenuItem value={0}>Mg/year</MenuItem>
          <MenuItem value={1}>short tons/year</MenuItem>
        </Select>
      </FormControl>
      <div style={{maxHeight: "100%"}}> 
        <DataGrid 
          columns={columns} 
          rows={generatedRows} 
          style={{ width: "100%", border: '2px solid red' }} 
          onGridRowsUpdated={onGridRowsUpdated}
          // onSelectedRowsChange={setSelectedRows}
          enableCellSelect={false}
          />
      </div>

        <button onClick={routeChange}>Go to Input Review</button>
        
    </div>
  );
}

export default AcceptanceRates;
