import {React, useState, any} from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'


function InputReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataToPass = location.state;

  const {
    dataRows,
    dataColumnHeaders,
    openYear,
    closeYear,
    CalClosureYear,
    WasteDesignCapacity,
    gas1,
    gas2,
    gas3,
    gas4,
    MethaneGenerationRate,
    PotentialMethanGenCap,
    NMOCConcentration,
    MethaneContent,
    unitType: unitType,
    unitType2: unitType2,
  } = dataToPass;
  


  

  const routeChangeToOutput = () => {
    let path = `/results`;
    navigate(path, { state: dataToPass });
  };

  const gridStyle = { minHeight: 550 };

  return (
    <div className="InputReview">
        <h1>Input Review</h1>
        <h2>Landfill Name Or Identifier ....</h2>
         <h2>Landfill Characterisitics</h2>
          <h3>Landfill Open Year:  {openYear}</h3>
          <h3>Landfill Close Year: {closeYear}</h3>
          <h3>Have Model Calculate Closure Year: {CalClosureYear}</h3>
          <h3>Waste Design Capacity: {WasteDesignCapacity}</h3>
        <h2>Model Parameters</h2>
          <h3>Methane Generation Rate: {MethaneGenerationRate}</h3>
          <h3>Potential Methane Generation Capacity: {PotentialMethanGenCap}</h3>
          <h3>NMOC Concentration: {NMOCConcentration}</h3>
          <h3>Methane Content: {MethaneContent}</h3>
        <h2>Gases / Pollutants Selected</h2>
          <h3>Gas 1: {gas1}</h3>
          <h3>Gas 2: {gas2}</h3>
          <h3>Gas 3: {gas3}</h3>
          <h3>Gas 4: {gas4}</h3> 

          <ReactDataGrid
            idProperty="id"
            style={gridStyle}
            editable={false}
            columns={dataColumnHeaders}
            dataSource={dataRows}
          />

        {/* <button onClick={handleClick}>Back</button> */}
        <button onClick={routeChangeToOutput}>
          Continue
        </button>
        
    </div>
  );
}

export default InputReview;
