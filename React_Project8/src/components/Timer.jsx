import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSecond] = useState(0)

    useEffect(()=>{
        const IntervalId = setInterval(()=>{
            console.log('SetInterval executed')
            setSecond(prevSecond => prevSecond+1)
        }, 1000)
        return ()=>{
            console.log('Time to stop')
            clearInterval(IntervalId)
        }
    }, [])
  return (
    <div>
      Second : {seconds}
    </div>
  )
}

export default Timer
