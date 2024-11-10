import axios from 'axios'
import React, { useEffect } from 'react'

const APIfetch = () => {

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2')
        .then((data)=>console.log(data.data.datasa))
        .catch((err)=>console.log(err))
    }
       ,[] 
    )
  return (
    <div>

    </div>
  )
}

export default APIfetch