// Hooks
// It is a special function which allows to use ract features without creating react components
// from react function 1.6.
// Use state
// Use effect
// Use callback
// Use memo

// Use state
//


import { useState } from 'react';

import React from 'react'



const Button1 = () => {
    const [name , setName]= useState("Guest")

    function setData()
    {
        setName("Pranam")
    }
  return (
    <div>
        <h1>name : {name}</h1>
        <button onClick={setData}>setName</button>
    </div>
  )
}

export default Button1
