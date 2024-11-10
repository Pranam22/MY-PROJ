import React, { useEffect } from 'react'

const ButtonUseEffect = (prop) => {
    function Add()
    {
        prop.val[1](prop.val[0]+1)
    }
    function Sub()
    {
        prop.val[1](prop.val[0]-1)
    }
    useEffect(()=>{localStorage.setItem('prop.val[0]',toString(prop.val[0]))},[prop.val[0]])
  return (
    <div>
        <button onClick={Add}>ADD</button>
        <button onClick={Sub}>SUB</button>
    </div>
  )
}

export default ButtonUseEffect