import React, { useState } from 'react'
import "../Components/count.css"
const Count1 = () => {
  var [count , setCount]= useState(1)

  
 var onDec=()=>{
    setCount(count--)
  }
 var onClear=()=>{
    setCount(0)
  }
 var onInc=()=>{
    setCount(count++)
  }
    return (
    <div>
        <center>
        <h1>{count}</h1>
        <button onClick={onDec}>Dec</button>
        <button onClick={onClear}>Clear</button>
        <button onClick={onInc}>Inc</button>
        </center>
    </div>
  )
}

export default Count1