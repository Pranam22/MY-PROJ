import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ExampUseEffect from "./Components/ExampUseEffect";
import ButtonUseEffect from "./Components/ButtonUseEffect";
import APIfetch from "./Components/APIfetch";
function App()
{
    
    
    
    return(

        <APIfetch></APIfetch>
    )
}

//props is a read only property tha t are share between the componente,
//a parent component can send data to the child component  syntax= <component key=value>
export default App;