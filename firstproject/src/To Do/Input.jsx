import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add } from "./Action"

 function Input() {
    const [Input,setInput] = useState()
    const dispatch = useDispatch()

    const handleForm = (e) =>{
        e.preventDefault()
        dispatch(Add(Input))
        e.target.reset()
    }
  return (
    <>
      <h1>Input</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder='Enter ToDo' onChange={(e)=>{setInput(e.target.value)}}/>
        <br />
        <button>Add ToDo</button>
      </form>
    </>
  )
}

