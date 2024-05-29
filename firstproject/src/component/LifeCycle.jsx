import React, { useEffect, useState } from 'react'

export default function LifeCycle() {
    const [count,setCounter] = useState(0)

    useEffect(()=>{
        console.log("mounted")

        return()=>{
            console.log("updatedz")
        }
    })
    useEffect(()=>{
        console.log("unmounted")
    })
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCounter(count + 1)}>+ </button>
    </div>
  )
}
