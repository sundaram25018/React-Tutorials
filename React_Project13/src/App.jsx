import { useState } from 'react'
import {Form, useForm} from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function onsubmit(data){
    await new Promise((resolve,) => setTimeout(resolve,4000))
      console.log("Submitting the form : ",data)
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
    <label htmlFor="">FirstName: </label>
    <input {...register('firstName', { required: true, minLength: {value:3, message:"atleast 3 character must be"},maxLength: 20 })}/>
    {errors.firstName && <p>{errors.firstName.message}</p>}
   </div>
   <br />
   <div>
    <label htmlFor="">MiddleName: </label>
    <input {...register('middleName')}/>
   </div>
   <br />
   <div>
    <label htmlFor="">LastName: </label>
    <input {...register('lastName')}/>
   </div>
   <br />
   <input type="submit" />

    </form>
  
  )
}

export default App
