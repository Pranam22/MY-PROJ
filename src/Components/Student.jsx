import React from "react";
import "./Student.css"
import propTypes from "prop-types"

function Student(props)
{

    return(
        <div className="Stu-div">
           <img src={props.img} alt="" />
        <p>name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Collage : {props.collage}</p>
    </div>
    )
}

Student.propTypes ={

    name:propTypes.string,
    age:propTypes.number,
    collage:propTypes.string,
}

Student.defaultProps={
    name: "Guest",
    age:0,
    collage:null,
}
export default Student;