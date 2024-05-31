import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'
import './home.css'
import './nav.css'

function Home() {
  return (
  <>
    <div>
      Home Page
    </div>
    <ul>
        <li>
            <NavLink to="/home/home1">home 1</NavLink>
        </li>
        <li>
            <NavLink to="/home/home2">home 2</NavLink>
        </li>
    </ul>
    <Outlet/>
  </>
  )
}

export default Home
