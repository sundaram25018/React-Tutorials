import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const Navigate = useNavigate();
  function handleclick(){
     Navigate('/Contact')
  }
  return (
    <div>
      <button onClick={handleclick}>Move to contact</button>
      About page
    </div>
  )
}

export default About
