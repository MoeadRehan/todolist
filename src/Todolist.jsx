import React from "react";

const Todolist = (props) =>{
   
    return(
        <>
        <div className="todo_style">
        <i className="fa fa-close" 
        onClick={() =>{
            props.onSelect(props.id);
        }}></i>
     <li> {props.text} </li>
        </div>
     </>
     );

};

export default Todolist;