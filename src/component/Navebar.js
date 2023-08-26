import React from 'react'
import '../styles/navebar.css'
function Navebar() {
  return (
    <nav className='navbar'>
        <h1>The Dojo Blog</h1>
        <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>NewBolg</a>
        </div>
    </nav>
  )
}

export default Navebar