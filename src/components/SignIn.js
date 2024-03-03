import React, { useContext } from "react";
import { useState } from "react";
import { SignInURL} from "./Constrains";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { URL, projectID, APP_TYPE } from "./Constrains";
import { useUser } from "./Provider/UserProvider";
import MyContext from "../AllContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {registration,setRegistration,login,setLogin}=useContext(MyContext);
  const [loginError,setLoginError]=useState(false);
  let userinfo={
    email,
    password,
  }
  const navigate=useNavigate();
  const {signInContext}=useUser();
  async function signin()
  {
    let response=await fetch(SignInURL,{
      method: "POST",
      headers:{
        projectID: projectID,
        "Content-Type": "application/json",
      },
      body:JSON.stringify({...userinfo,appType:'bookingportals'})
    })
    const data= await response.json();
    console.log(data);
    console.log(data.status);
    if(data.status==="fail")
    {
        setLoginError(true);
    }
    else
    {
      const {token,data:{name}}=data;
      sessionStorage.setItem("authToken",token);
      sessionStorage.setItem("userInfo",name);
      console.log(token);
      signInContext(token);
      navigate("/");
      setRegistration(false);
    }
  }
  function sPass(e)
  {
    setLoginError(false);
    setPassword(e.target.value)
  }
  function loginragistration()
  {
    setRegistration(false);
    setLogin(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signin();
  };
  return (
    <div className="login-container">
      <div className="login-container-child">
        <div className="login-box">
          <div>
            <p className="canclelogin" onClick={()=>setRegistration(false)}>X</p>
          </div>
          <div >
            <h3 className="login-heading">Login</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label><br></br>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-box"
            ></input>
            </div>
            <div>
            <label htmlFor="password">Password:</label><br></br>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              className="input-box"
              onChange={(e) => sPass(e)}
            ></input>
            </div>
            <div>
              {loginError && <p className="login-error">Incorrect EmailId or Password.</p>}
            </div>
            <button type="submit" className="login-button">Login</button>
            <div className="signupandregistrationcontainer">
               <p>Don't have an account?<span onClick={()=>loginragistration()} className="signupandregistration"> Sign up </span> </p>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}
