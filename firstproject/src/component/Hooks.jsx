import React, {useState} from 'react'

export default function Hooks() {

    const [name,setName] = useState("Hello World !!")
    const [counter,setCounter] = useState(0)

    const changeName=()=>{
        if(name === "Hello World !!"){
            setName("Jay Shree Ram")
        }else{
            setName("Hello World !!")

        }
    }
    
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>Change Name</button>
      <br/>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter + 1)}>vadharvu</button>
      <button onClick={()=>setCounter(counter - 1)}>ghatadvu</button>
      
    </div>

    
  )
} 
