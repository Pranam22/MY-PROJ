import React, { useState } from 'react'
import json from "../JSON/data.json"

const ShowData = () => {

    let [data , setData] = useState([])

    let showData=()=>{
        setData(json)
        data.map((e)=>(<li>{e.name}</li>))
    }
    let hideData=()=>{
        setData([])
        data.map((e)=>(<li>{e.name}</li>))

    }

  return (
    <div>
        
        <button onClick={showData}>ShowData</button>
        <button onClick={hideData}>hideData</button>
        <button onClick={showData}>ShowData</button>
        
    </div>
  )
}

export default ShowData