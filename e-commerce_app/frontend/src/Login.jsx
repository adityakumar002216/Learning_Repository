import axios from 'axios';
import React, { useState } from 'react'
import { Link,Navigate } from 'react-router-dom'

export default function Login() {
  const [email ,setEmail]=useState('');
const [password ,setPassword]=useState('');
const handlesubmit = async (event)=>{
  event.preventDefault();
  const userData = { email, password};
      try{
        // console.log({email,password});
       
        
        
           const response =await axios.post('http://localhost:5000/login',userData);
           
           if (response==='Login successful'){
            alert("Login sucessfull");
            Navigate('/message');
           }
      }
      catch(e){
          console.log(e.message);
      }
}
  return (
    <div>
        <h2>Log in</h2>
        <form onSubmit={handlesubmit}>
        <label>Email : </label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} name='email'/>
            <br></br>
            <label>Password : </label>
            <input type="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} name='password'/>
            <br></br>
            <Link to="/forgot-passowrd" >Forgot Password</Link>
            <p>If you have no account <Link to='/register' >Click here</Link></p>
            <input type='submit' name='Log in'/>
            
        </form>

    </div>
  )
}
