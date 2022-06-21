import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onButtonClick = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
        className="CreateTodoButton"
        onClick={onButtonClick}
        >+</button>
    );

}

export { CreateTodoButton }