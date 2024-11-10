import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const[data,setData]=useState("")
  const[tasks,setTasks]=useState([])

  function handleJson(e)
  {
    setData(e.target.value)

  }
  function storeData()
  {
    let currentData={
      "name":data
    }
    setTasks([...tasks,currentData])
  }
  function deleteData(x)
  {
    setTasks(tasks.filter((e,i)=>i!==x))
  }
  useEffect(()=>{const savedTasks=JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks)
    {
      setTasks(savedTasks)
    }
   },[])
  useEffect(()=>localStorage.setItem('tasks',JSON.stringify(tasks)),
            [tasks])
  return (
    <div>
        <h1>To doList</h1>

        <input type="text" value={data} onChange={handleJson}/>
        <input type="submit" value="Submit" onClick={storeData} />

        {
          tasks.map((e,x)=>(<li>{e.name}<button key={x} onClick={()=>deleteData(x)}>Delete</button></li>))
        }
    </div>
  )
}

export default UseEffect