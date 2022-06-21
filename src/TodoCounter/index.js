import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter(){

    const {todosCount, completedTodos} = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <h1 className="TodoCounter">Task Reminder</h1>
            <h2 className="TodoCounter">Completed {completedTodos} of {todosCount} TODOs</h2>
        </React.Fragment>
    );

}

export { TodoCounter }