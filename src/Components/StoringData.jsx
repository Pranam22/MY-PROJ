import React, { useState } from 'react'
const StoringData = () => {
    const[name,setName]=useState();
    const[Age,setAge]=useState();
    const[gender,setGender]=useState();
    const[data,setData]=useState([]);
    function handleName(e)
    {
        setName(e.target.value)
    }
    function handleAge(e)
    {
        setAge(e.target.value)
    }
    function handleGender(e)
    {
        setGender(e.target.value)
    }
    function handleData()
    {

        const currentData={
            "name":name,
            "age":Age,
            "gender":gender
        }
        setData([...data,currentData])

    }
  return (
    

    <div>
        <h1>Storing to json</h1>
        {
            data.map((e)=>(<li>{e.name}{e.age} {e.gender}</li>))
        }
        <label >Name</label>
        <input type="text" value={name} onChange={handleName} />
        <br />
        <label >Age</label>
        <input type="text" value={Age} onChange={handleAge} />
        <br />
        <label >Gender</label>
        <input type="text" value={gender} onChange={handleGender} />
        <br />
        <button onClick={handleData}>Submit</button>
    </div>
  )
}

export default StoringData