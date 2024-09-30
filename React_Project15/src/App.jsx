import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function ExpensiveTask(num){
    console.log("Inside ExpensiveTask");
    for(let i = 0; i<=1000000000; i++){
    }
    return num*2;
  }
  let doubleValue = useMemo(()=> ExpensiveTask(input),[input]);

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br /><br />
      <div>Count : {count}</div><br/>
      <input type="number" placeholder='Enter number' value={input} onChange={(e)=>setInput(e.target.value)} />
      <div>double : {doubleValue}</div>
    </div>
  )
}

export default App
