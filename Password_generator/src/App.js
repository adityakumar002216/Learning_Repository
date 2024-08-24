

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {AB,ab,numb,symbl} from './data/rpx';


function App() {
  let [uppercase,setuppercase]=useState(false);
  let [lower,setlower]=useState(false);
  let [num,setnum]=useState(false);
  let [symbol,setsymbol]=useState(false);
  let [passlength,setpasslength]=useState(5);
  let [finalpass,setfinalpass]=useState('');
  let createpassword=()=>{
    let orginalnum='';
   if(uppercase || lower || num|| symbol ){
       
    if(uppercase)
      orginalnum+=AB;
    if(lower)
      orginalnum+=ab;
    if(num)
      orginalnum+=numb;
    if(symbol){
      orginalnum+=symbl;
    }
    let finalpassword='';
    for(let i=0;i<passlength;i++){
      finalpassword+=orginalnum.charAt(Math.floor(Math.random()*orginalnum.length));
    }
    setfinalpass(finalpassword);
   }
   else
   alert("please check one input"); 
  }
   let copypass=(finalpass)=>{
       navigator.clipboard.writeText(finalpass);
   }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className='ps'>Password Generator</div>
          <div className='csschanger'>
          <input type='text' value={finalpass} readOnly></input> <button className='copyB' onClick={copypass(finalpass)}>copy</button>
          </div>
          
          <div className='csschanger'>
          <label>Password Length</label> 
          <input  type='number'  min={1} value={passlength} onChange={(event)=>setpasslength(event.target.value)} ></input>
          </div>
          <div className='csschanger'>
          <label>Capital letter</label> 
          <input className='Cinput' type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase) }></input>
          </div>
          <div className='csschanger'>
          <label>Small letter</label>
           <input type='checkbox'   checked={lower} onChange={()=>setlower(!lower) }></input>
          </div>
          <div className='csschanger'>
          <label>Number </label> 
          <input type='checkbox'   checked={num} onChange={()=>setnum(!num) }></input>
          </div>
          <div className='csschanger'>
          <label>Symbol</label> 
          <input type='checkbox'   checked={symbol} onChange={()=>setsymbol(!symbol) }></input>
          </div>
          <div className='csschanger'>
          <button className='GenerateB' onClick={createpassword}>Generate Password</button>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
