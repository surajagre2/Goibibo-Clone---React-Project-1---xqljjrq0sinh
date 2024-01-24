import React from 'react'
import "../styles/App.css";
import { useState, useEffect} from "react";
export default function FareType({faretype,setFareType}) {
    const [regular,setRegular]=useState(true);
    const [armedforces,setArmedForce]=useState(false);
    const [seniorcitizen,setSeniorCitizen]=useState(false);
    const [student,setStudent]=useState(false);
    const [doctornurse,setDoctorNurse]=useState(false);
    function fareTypeSelection(e)
    {
      let z=e.target.value;
      setFareType(z);
      if(z==="regular")
      {
        setRegular(true);
        setArmedForce(false);
        setSeniorCitizen(false);
        setStudent(false);
        setDoctorNurse(false);
      }
      else if(z==="armed-forces")
      {
        setRegular(false);
        setArmedForce(true);
        setSeniorCitizen(false);
        setStudent(false);
        setDoctorNurse(false);
      }
      else if(z==="senior-citizen")
      {
        setRegular(false);
        setArmedForce(false);
        setSeniorCitizen(true);
        setStudent(false);
        setDoctorNurse(false);
      }
      else if(z==="student")
      {
        setRegular(false);
        setArmedForce(false);
        setSeniorCitizen(false);
        setStudent(true);
        setDoctorNurse(false);
      }
      else
      {
        setRegular(false);
        setArmedForce(false);
        setSeniorCitizen(false);
        setStudent(false);
        setDoctorNurse(true);
      }
    }
  return (
    <div>
       <div className="fare-type">
          <div className="fare-type-child1">
            <label htmlFor="fa-type">Select A Fare Type:</label>
          </div>
          <div className="fare-type-child2">
            <div className={`fare-type-child2-child ${regular?"fare-type-background":""}`}>
              <input type="radio" id="regular" name="fare-type" value="regular" defaultChecked onClick={(e)=>fareTypeSelection(e)}/>
              <label htmlFor="regular">Regular</label>
            </div>
            <div className={`fare-type-child2-child ${armedforces?"fare-type-background":""}`}>
              <input type="radio" id="armed-forces" name="fare-type"  value="armed-forces" onClick={(e)=>fareTypeSelection(e)}/>
              <label htmlFor="armed-forces">Armed Forces</label>
            </div>
            <div className={`fare-type-child2-child ${seniorcitizen?"fare-type-background":""}`}>
              <input type="radio" id="senior-citizen" name="fare-type" value="senior-citizen" onClick={(e)=>fareTypeSelection(e)}/>
              <label htmlFor="senior-citizen">Senior Citizen</label>
            </div>
            <div className={`fare-type-child2-child ${student?"fare-type-background":""}`}>
              <input type="radio" id="student" name="fare-type" value="student" onClick={(e)=>fareTypeSelection(e)}/>
              <label htmlFor="student">Student</label>
            </div>
            <div className={`fare-type-child2-child ${doctornurse?"fare-type-background":""}`}>
              <input type="radio" id="doctors-nurse" name="fare-type" value="doctors-nurse" onClick={(e)=>fareTypeSelection(e)}/>
              <label htmlFor="doctors-nurse">Doctors & Nurse</label>
            </div>
          </div>
        </div>
    </div>
  )
}
