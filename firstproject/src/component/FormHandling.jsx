import React, { useState } from 'react'

export default function FormHandling() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [select,setSelect] = useState("")
  const [check,setCheck] = useState("")

  const handleForm=(e)=>{
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(select)
    console.log(check)
    e.target.reset()
  }

  const handleName=(e)=>{
    setName(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="">Name :</label>
        <input type="Text" placeholder='Enter Your Name' onChange={handleName}/>
        <br />
        <br />
        <label htmlFor="">Email :</label>
        <input type="email" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        Interest:
        <select onChange={(e)=>setSelect(e.target.value)}>
          <option>-select-</option>
          <option>Hollywood</option>
          <option>Bollywood</option>
          <option>Tollywood</option>
        </select>
        <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}/>
        <label htmlFor="">Apply Terms and condition</label>
        <br />
        <br />
        <button>Submit</button>
      
      </form>
    </>
  )
}
