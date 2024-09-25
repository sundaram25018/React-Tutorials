import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Form, useForm} from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
function onSubmit(data){
    console.log("Submitting the form ",data)
}
  return (
    <form onSubmit={handleSubmit(onSubmit) }>
   <div>
    <label htmlFor=""> FirstName: </label>
    <input {...register("firstName", { required: true,})}/>
    
   </div>
    <br/>
   <div>
    <label htmlFor=""> LastName: </label>
    <input {...register("lastName")}/>
   </div>
   <br />
   <div>
    <label htmlFor=""> Phone: </label>
    <input {...register("Phone",{pattern: /^(?:\+91[-\s]?)?(?:91[-\s]?)?[789]\d{9}$/})}/>
   </div>
   <br />
   <div>
    <label htmlFor=""> Email: </label>
    <input {...register("email",{pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}/>
   </div>
   <br />
   <div>
    <label htmlFor=""> Age: </label>
    <input {...register("age",{max:40})}/>
   </div>
   <br />
   <div>
    <label htmlFor=""> Address: </label>
    <input {...register("address",{ minLength: 10, maxLength: 99 })}/>
   </div>
   <br />
   <input type="submit" />
   </form>
  )
}

export default App
