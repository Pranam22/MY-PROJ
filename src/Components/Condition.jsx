import React from 'react'
import data from "../JSON/data.json"

const Condition = () => {
  return (
    <div>
      
      {
                  data.map((e)=>(
                    <li>{e.name}</li>
                  ))

      }
     
    </div>
  )
}

export default Condition