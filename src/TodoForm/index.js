import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState(''); 
    const {addTodo, setOpenModal}  = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length >= 1){

            addTodo(newTodoValue);
        }
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Writte a new TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Clean the room..."
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel} type="button">Cancel</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Add</button>
            </div>
        </form>
    )
}

export {TodoForm}