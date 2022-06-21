import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChanged = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <React.Fragment>
            <input
            className="TodoSearch"
            placeholder="Search..."
            value={searchValue}
            onChange={onSearchValueChanged}
            />
        </React.Fragment>
    );

}

export { TodoSearch }