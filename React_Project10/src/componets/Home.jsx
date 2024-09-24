import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const Navigate = useNavigate()
  function handleclick(){
    Navigate('/About')
  }
  return (
    <div>
      <button onClick={handleclick}>Move to About Page</button>
      Home page
    </div>
  )
}

export default Home
