import {BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';


import Home from "./Home";
import Item from "./Item";
import Login from "./Login";

import Register from "./Register";
import Forgot_password from "./Forgot_password";
import MessageShow from "./MessageShow";
function App() {
  
  
return (
  <div className="App">
      
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/item' element={<Item/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-passowrd' element={<Forgot_password/>}/>
      <Route path='/message' element={<MessageShow/>}/>
      <Route exact path='/register/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>

  );

}
export default App;
