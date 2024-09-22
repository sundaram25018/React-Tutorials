import './App.css'
import {useState} from 'react'
import Button from './components/Button'
import Card from './components/card'
function App() {
const [count, setCount] = useState(0)

function handleClick(){
     setCount(count+1)
}

  return (
    <div>
      <Button handleClick = {handleClick} text = "click me">
        <h1>{count}</h1>
      </Button>
      
      {/* <Card name="sundaram Dubey">
         <h1>React Course</h1>
       <p>This is me writing react code</p>

      </Card> */}
        
      
      

    </div>
  )
}

export default App
