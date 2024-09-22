import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const [LoggedIn, setLoggedIn] = useState(true)

  // if(LoggedIn){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <Login/>
  //   )
  // }

  // another method

    // return (
    //   <div>
    //     {LoggedIn?<Logout/> : <Login/>}
    //   </div>
    // )

    // another method
     if(!LoggedIn){
      return(
        <Login/>
      )
     }
    return (
      <div>
        <h1>Welcome to React Js Tutorials by Love Babber</h1>
        <div>
        {LoggedIn && <Logout/>}
        </div>
        
      </div>
    )
}

export default App
