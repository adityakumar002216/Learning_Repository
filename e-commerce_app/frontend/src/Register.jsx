import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  

 const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const userData = { name, email, password };

    try {
      
      alert("Register Successful");
      navigate("./Login");
      const response = await axios.post('http://localhost:5000/register', userData);
      console.log('Success:', response.data);
      
      
    } catch (error) {
      console.error('Error:', error);
    }
  
}


  return (
    <div className='regD'>
    <div className='formD'>
      <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}className='form2'> {/* Changed from 'from' to 'form' */}
        <div className='input'>
        <label>Name :</label>
        <input 
          type="text" 
          name='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        </div>
        <br />
        <div className='input'>
        <label>Email :</label>
        <input 
          type="email" 
          name='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        </div>
        <br />
        <div className='input'>
        <label>Password :</label>
        <input 
          type="password" 
          name='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        </div>
        <br/>
        <div className='input'>
        <label>Confirm Password :</label>
        <input 
          type="password" 
          name='confirmpassword' 
          value={confirmpassword} 
          onChange={(e) => setConfirmpassword(e.target.value)} 
        />
        </div>
        <>
        {password!=confirmpassword?(<p>password and confirm password is not same</p>):("")}
        </>
        
        <br />
        <input className ="regB" type='submit' value="Register" />
      </form>
      </div>
      </div>
    </div>
  );
}


