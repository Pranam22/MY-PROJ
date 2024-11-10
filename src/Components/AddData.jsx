import React, { useState } from 'react'

const AddData = () => {
    const [name,setName]=useState(['pranam','rutvik'])

    function addName()
    {
        const nm=document.getElementById("addname").value

        document.getElementById("addname").value=''

        setName([...name,nm])
    }
    function handle(x)
    {
        setName(name.filter((e,i)=>i!==x))
    }
  return (
    <div>
        {
            name.map((e,x)=>
            (
                <li key={x} onClick={()=>handle(x)}>{e}{x}</li>
            ))
        }
        <input type="text" id="addname"/>
        <button onClick={addName}>Submit</button>
    </div>
  )
}

export default AddData