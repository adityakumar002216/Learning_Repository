import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
        <h1>Online Shoping.com</h1>
        <Link to="/login" className="link" id="log">Log in</Link>
      
      </div>
  )
}
