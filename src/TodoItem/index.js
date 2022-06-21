import React from "react";
import './TodoItem.css'

function TodoItem(props){


    return (
        <li className="TodoItem">
            <span className={`fa  fa-check-circle-o ${props.completed && ' fa-check-circle-o--complete' }  `}
            onClick={props.onComplete}></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="fa fa-trash-o" onClick={props.onDelete}></span>
        </li>
    );

}

export { TodoItem }