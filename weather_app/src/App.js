import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [city, setcity] = useState();
  let [weather1,setweather1]=useState();
  let [isloading,setisloadindg]=useState(false);
  
  let getdata = async (e) => {
    e.preventDefault();
       setisloadindg(true)
      fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5427d03e2bad0ac09ad08f26e11cf8c2&units=metric`
    )
      .then((res) => res.json())
      .then((finalrs) => {
        
        if(finalrs.cod=="404"){
          console.log("hello");
          setweather1(undefined);
         }
         else{
          console.log(finalrs)
          setweather1(finalrs);
         }
         setisloadindg(false)
      });
     
    setcity('');
  };
  return (
    <div className="mainC">
      <div className="firstC">
        <div className="W"><h1>Simple Weather App</h1></div>
        <form onSubmit={getdata}>
          <div className="inputB">
            <input
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            className="input" placeholder="Enter city name"></input>
            <div className="submitD">
              <button className="submit" type="submit" >submit</button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
      
      <div>
        {
        isloading===true ?
        <>
        
         <img className="img" src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHd6YjVrdGdrcG9idW1pZXp1bzJmajlsdHZyNGVudmpqN280bXA0dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uIJBFZoOaifHf52MER/200.webphttps://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGxobGk4eXUyYzY2YmFvM2p5Nm1rbjJlcHRqeWNmMTJoMW14MjNtYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.webp'   ></img>
        
        </>
        :''
        }
      { 
      
      weather1!==undefined ?
      <>
          <div className="secondC">
           <div>
           <div className="component"><h2>City Name: {weather1.name}</h2></div>
           <div className="component"><h3>Country: {weather1.sys.country}</h3></div>
           <img src={`https://openweathermap.org/img/w/${weather1.weather[0].icon}.png`}></img>
           <div className="component"><h3>Clouding Status: {weather1.weather[0].description}</h3></div>
            <div className="component"><h3>Minimum Tempreature: {weather1.main.temp_min}</h3></div>
            <div className="component"><h3>Maximum Tempreature: {weather1.main.temp_max}</h3></div>
              
          </div>
          </div>
        </>
        : 
        
        <div className="secondC">
       
       </div>
      
        
       }
       </div>
  </div>
  );
}

export default App;
