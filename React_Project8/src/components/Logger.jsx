import React, { useState, useEffect } from 'react'

const Logger = () => {
    const [Count, setCount] = useState(0);


    function handleClick(){
        setCount(Count+1)
    }
     useEffect(() => {
       console.log("Component render or Count change", Count);
})
     
  return (
    <div>
      <h1> Count : {Count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Logger
