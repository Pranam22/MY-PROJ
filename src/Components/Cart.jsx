import React ,{useState} from 'react'
import json from "../JSON/product.json"

const Cart = () => {

        const [cart,setCart]=useState([])
        const[price,setPrice]=useState(0)

        function handleCart(index,e)
        {
            setCart([...cart,json[index]])
            setPrice(price+e)
        }
  return (
    <div>
        {json.map((e,index)=>(<div>
            <li>{e.name}{e.category}{e.price}</li>
            <button key={index} onClick={()=>handleCart(index,e.price)}>Add to cart</button>
        </div>))}
        
        <h1>Cart</h1>
        {
            cart.map((e)=>(
                <div>
                    <li>{e.name}{e.category}{e.price}</li>
                </div>
            ))
        }
        <h3>Total Price : {price}</h3>
        
    </div>
  )
}

export default Cart