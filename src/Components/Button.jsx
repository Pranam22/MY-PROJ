// Click event
//  a interaction when the user clicks on the component and we can respond to click by passing a parameter 
// or a call back function for the onclick event handlers.

import React from 'react'
const Button = () => {
    
    
    var count=0;
    function sayHello(name)
    {
       
        if(count<4)
        {
            count++
            console.log("Hello  " + name)

        }
        else{
            console.log("Stop clicking me")
        }
    }

    function sayHell(e)
    {
        console.log(e)
        console.log(e.target)
        // Target will show the tag that is calling this function
    }
  return (
    <div>
        <button onClick={()=>sayHello("Pranam")}>Button</button>

    {/* To get buuton details */}
        <button onClick={(e)=>sayHell(e)}>Button</button>

    </div>
  )
}

export default Button

 