import React from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
import DataGrid from "react-data-grid";
import 'react-data-grid/lib/styles.css';


function InputReview() {

  const location = useLocation();
  const dataToPass = location.state;

  

  const {
    dataRows,
    dataColumnHeaders,
    openYear,
    closeYear,
    // gas1,
    // gas2,
    // gas3,
    // gas4,

    // ... other properties
  } = dataToPass;

  // const {
  //   openYear,
  //   closeYear,
  //   // ... other properties from characteristicsData
  // } = characteristicsData;

  console.log("characteristicsData", dataToPass);


  let LandfillOpenYear = openYear;
  let LandfillCloseYear = closeYear;
  let CalcClouseYear = false;
  let wasteDesignCapcity = "";
  //Model Parameters
  let MehtaneGenerationRate = 0.0;
  let PotentialMethanGenCap = 0;
  let NMOCConcentration = 0;
  let MethaneContent = 0;
  //Gases / Pollutants Selected
  let gas1 = "";
  let gas2 = "";
  let gas3 = "";
  let gas4 = "";


  return (
    <div className="InputReview">
        <h1>Input Review</h1>
        <h2>Landfill Characterisitics</h2>
          <h3>Landfill Open Year:  {LandfillOpenYear}</h3>
          <h3>Landfill Close Year: {LandfillCloseYear}</h3>
          <h3>Have Model Calculate Closure Year: {CalcClouseYear}</h3>
          <h3>Waste Design Capacity: {wasteDesignCapcity}</h3>
        <h2>Model Parameters</h2>
          <h3>Methane Generation Rate: {MehtaneGenerationRate}</h3>
          <h3>Potential Methane Generation Capacity: {PotentialMethanGenCap}</h3>
          <h3>NMOC Concentration: {NMOCConcentration}</h3>
          <h3>Methane Content: {MethaneContent}</h3>
        <h2>Gases / Pollutants Selected</h2>
          <h3>Gas 1: {gas1}</h3>
          <h3>Gas 2: {gas2}</h3>
          <h3>Gas 3: {gas3}</h3>
          <h3>Gas 4: {gas4}</h3>
        {/* <DataGrid>      <DataGrid 
        columns={columns} 
        rows={generatedRows} 
        style={{ height: "90dvh", border: '2px solid red' }} 
        /></DataGrid> */}
    </div>
  );
}

export default InputReview;
