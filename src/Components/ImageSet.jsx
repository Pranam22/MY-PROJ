import React, { useState } from 'react'

const ImageSet = () => {

    const[image,setImage]= useState("")

    function setImg()
    {
        setImage("../Images/2.png")
    }
  return (
    <div>
        <img src={image} alt="" />
        <button onClick={setImg}>SetImage</button>
    </div>
  )
}

export default ImageSet