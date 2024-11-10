import React, { useState } from 'react'
import data from "../JSON/product.json"
import "../Components/product.css"

const Products = () => {
        let [product, setProduct]= useState([]);
        var showData=()=>
            {
                setProduct(data)

            }

        var hideData=()=>{
            setProduct([])
        }
        var lowToHigh=()=>
        {
           
           
                    
            
            setProduct(data.sort((a,b)=>a.price-b.price))
        
              
        }
        
        var highToLow=()=>
        {
            
            setProduct(data.sort((a,b)=>b.price-a.price))

        }
        var aToZ=()=>{
            setProduct(data.sort((a,b)=>(a.name.localeCompare(b.name))))
        }

        var zToA=()=>{
            setProduct(data.sort((a,b)=>(b.name.localeCompare(a.name))))
        }
        
        return (

    <div>
        <button onClick={showData}>showData</button>
        <button onClick={hideData}>Hide Data</button>
        <button onClick={lowToHigh}>Low To High</button>
        <button onClick={highToLow}>High to Low</button>
        <button onClick={aToZ}>A to Z</button>
        <button onClick={zToA}>Z to A</button>
        
        {
            product.map((a)=>(<div id="list">{a.image} <br />  Name : {a.name} <br />Price : {a.price} <br />Desc :{a.description}</div>))

        }

        
        
    </div>
  )
}

export default Products