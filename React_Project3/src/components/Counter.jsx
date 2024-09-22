import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <div className='counter_container'>
        <p id='para'> You have {count} Click</p>
        <button id='btn' onClick={()=>{setcount(count+1)}}>Click me</button>
      
    </div>
  )
}

export default Counter
