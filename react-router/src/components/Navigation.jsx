import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './navigation.css'

function Navigation() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>

    
  </>
  )
}

export default Navigation
