import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutNew() {
    const navigate = useNavigate()
  return (
    <div>
      about new 
      <div onClick={()=>{navigate('/home')}}>go to home</div>
    </div>

  )
}

export default AboutNew
