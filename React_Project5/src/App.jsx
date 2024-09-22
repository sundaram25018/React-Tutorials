import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [name, setName] = useState(' ')

  return (
    <div>
      <Card title="card1" name={name} setName = {setName}/>
      <Card title="card2" name={name} setName = {setName}/>
      {/* <p>I am inside parent Component and value of name is : {name}</p> */}
    </div>
  )
}

export default App
