import React, { useState } from 'react'

const OnChange = () => {

        const [name , setName] =useState("")

        function onData(e)
        {
            setName(e.target.value)

            console.log(e.target.value)
        }

  return (
    <div>
        <input type="text" value={name} onChange={onData} />

       
    </div>
  )
}

export default OnChange