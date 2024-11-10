import React, { useState } from 'react'
import "./Background.css"

const Background = () => {


    const[col,setCol]=useState("#FFFFFF")
    function Color(e)
    {
        setCol(e.target.value)


    }
  return (
    <div>
        <div className='par'>
        <div className='d1' style={{backgroundColor:col}}>

        </div>
        <input type="color" value={col} onChange={Color}/>
        </div>
    </div>
  )
}

export default Background