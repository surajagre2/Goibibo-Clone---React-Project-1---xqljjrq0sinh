import React from 'react'
import { useState } from 'react'


export default function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const handleSubmit=(e)=>{
      e.preventDefault();

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <label htmlFor="name">Password:</label>
        <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}


