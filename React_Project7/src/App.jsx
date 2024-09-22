import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
     alert(" You clicked button")
  }
  function handleMouse(){
    alert("Aap ka mouse yaha hai")
  }
  function handlefield(e){
    console.log("Input me value change hui hai",e.target.value)
  }
  function handleSubmit(e){
    // e.preventDefault()
    alert("form submit ho gya")
  }

  return (
    <div>
      
      {/* <p onMouseOver={handleMouse} style={{color:'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia.</p>
      <button onClick={handleClick}>Click me</button>

      <form action="">
        <input type="text" onChange={handlefield}/>
      </form> */
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handlefield}/>
        <button type='submit'>Submit</button>
      </form>
      }
    </div>
  )
}

export default App
