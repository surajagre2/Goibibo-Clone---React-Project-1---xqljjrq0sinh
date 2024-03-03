import React, { useContext } from "react";
import { useState } from "react";
import { URL, projectID, APP_TYPE } from "./Constrains";
import { SignUpURL } from "./Constrains";
import "../styles/Home.css";
import { useUser } from "./Provider/UserProvider";
import { useNavigate } from "react-router-dom";
import MyContext from "../AllContext";


export default function Registration() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [registrationError,setRegistrationError]=useState();
  const {registration,setRegistration,login,setLogin}=useContext(MyContext);
  const userInfo = {
    name,
    email,
    password,
    appType: APP_TYPE,
  };
  const navigate=useNavigate();
  const {signUpContext}=useUser();
  async function signup()
  {
    let response=await fetch(SignUpURL,{
      method: "POST",
      headers:{
        projectID: projectID,
        "Content-Type": "application/json",
      },
      body:JSON.stringify({...userInfo,appType:'bookingportals'})
    })
    const data= await response.json();
    if(data.status==="fail")
    {
        setRegistrationError(true);
    }
    else
    {
      const {token,data:{user:{name}}}=data;
      console.log(data);
      sessionStorage.setItem("authToken",token);
      sessionStorage.setItem("userInfo",name);
      signUpContext(token);
      navigate("/");
      setLogin(false);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signup()
  };
  function loginragistration()
  {
    setRegistration(true);
    setLogin(false);
  }

  return (
    <div className="login-container">
    <div className="login-container-child">
      <div className="login-box">
        <div>
            <p className="canclelogin" onClick={()=>setLogin(false)}>X</p>
        </div>
        <div >
          <h3 className="login-heading">SignUp</h3>
        </div>
      <form onSubmit={handleSubmit} className="signupcontainer">
        <div>
        <label htmlFor="name">Name:</label><br></br>
        <input
          type="text"
          name="name"
          id="name"
          className="input-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /></div>
        <div>
        <label htmlFor="email">Email:</label><br></br>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className="input-box"
          onChange={(e) => setEmail(e.target.value)}
        /></div>
        <div>
          {registrationError && <p className="login-error">Email ID already exits.</p>}
        </div>
        <div>
        <label htmlFor="name">Password:</label><br></br>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          className="input-box"
          onChange={(e) => setPassword(e.target.value)}
        /></div>
        <div>
        <button type="submit" className="login-button">SignUp</button>
        </div>
        <div className="signupandregistrationcontainer">
            <p> Already have an account?<span onClick={()=>loginragistration()} className="signupandregistration"> Sign in </span> </p>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}
