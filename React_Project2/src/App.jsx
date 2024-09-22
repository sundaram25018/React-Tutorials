import { useState } from 'react'
import './App.css'
import User_card from './components/User_card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <User_card name = "sundaram"/>
     <User_card/>
     <User_card/>
    </>
  )
}

export default App
