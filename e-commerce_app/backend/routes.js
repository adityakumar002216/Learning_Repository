import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './Login'
export default function routes() {
  return (
    <div>
         <BrowserRouter>
    <Routes>
      
      
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
       </div>
  )
}
