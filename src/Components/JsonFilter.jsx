import React, { useState } from 'react'
import json from "../JSON/product.json"

const JsonFilter = () => {
    const [data , setData] =useState("")

    function Filterprop(e)
    {
        setData(e.target.value)
        
    }
  return (
    <div>
        
        <input type="text" value={data} onChange={Filterprop} />
        {
            json.filter((e)=>(e.name==data)).map((e)=>(<div><li>Name :{e.name} category: {e.category} price : {e.price}</li></div>))
        }
    </div>
  )
}

export default JsonFilter