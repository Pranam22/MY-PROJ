import React from "react";

function Maps()
{
    let student=[
        {"name":"Pranam", "age":21,"id":12},
        {"name":"Raju", "age":15,"id":15},
        {"name":"Kumar", "age":10,"id":8},
        {"name":"Smith", "age":35,"id":10},
        {"name":"Adarsh", "age":21,"id":12},
        {"name":"Pranam", "age":21,"id":12}
    ]

    // Sorting using id
    // student.sort((a,b)=>a.id-b.id) //low to high
    // student.sort((a,b)=>b.id-a.id) //high to low

    // student.sort((a,b)=>a.name.localeCompare(b.name)) // sorting using name
    return(
        <div>

                {
                    student.map((e)=>(<li>name:{e.name} Age: {e.age}  Id: {e.id}</li>))
                }
           
        </div>
    )
}

export default Maps;


