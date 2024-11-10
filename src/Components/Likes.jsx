import React,{useState} from 'react'
import "./Likes.css"

const Likes = () => {
    const[count,setCount]=useState(0)

    function Inc()
    {
      setCount(count+1)
    }
    function Dec()
    {
      setCount(count-1)
    }

  return (
    <div>
        <h1>Likes</h1>

        <i className='fa-solid fa-heart' id='icon'></i>
        <sup>{count}</sup>
        <br />
        <button onClick={Dec}>DisLike</button>
        <button onClick={Inc}>Like</button>
       
    </div>
  )
}

export default Likes