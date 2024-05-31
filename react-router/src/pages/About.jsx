import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'


function About() {
  return (
   <>
   
   <div>
      About
      <ul>
        <li>
         <NavLink to="/about/Aboutall">About All</NavLink>
        </li>
        <li>
         <NavLink to="/about/AboutNew">About New</NavLink>
        </li>
      </ul>

    </div>

    <Outlet/>
   </>
  )
}

export default About
