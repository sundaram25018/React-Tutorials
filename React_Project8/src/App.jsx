import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Count, setCount] = useState(0)
  const [total, settotal] = useState(1)
  // first : side-effect function
  // second : cleanup function
  // third : comm seprated dependency list
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])

    // // variation 1
    // // run on every render

    // useEffect(() => {
    //   alert("I will run on each render")
       
    // })
    function handlecliked(){
         setCount(Count+1);
    }

    function handltotal(){
      settotal(total+1);
 }


    // variation 2

      // useEffect(() => {
      //   alert("I will run on first render")
      // }, [])



      // variation 3

      // useEffect(() => {
      //   alert("I will run on every count increment render")
      // }, [Count])


      // variation 4

      // multiple dependency

    // useEffect(() => {
    //     alert("I will run on every count/total updated ")
    //   }, [Count,total])


    // variation 5
    //  iss baar le's add a cleanup function
    useEffect(() => {
        alert("I will run on every count updated ")
        return ()=>{
          alert("count is unmounted from UI")
        }
        }, [Count])
      
    

  return (
    <div>
      <button onClick={handlecliked}>click me</button>
      <br />
      Count is  : {Count}

      <br />
      <br />
      <button onClick={handltotal}>total click</button>
      <br />
      total is  : {total}
    </div>
  )
}

export default App
