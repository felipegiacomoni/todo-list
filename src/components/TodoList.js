import React from "react";
import { Link } from "react-router-dom";

const TodoList = () => {

    const renderedList = () => {

    }

    return (
        <div>
            <div className="ui relaxed divided list">
            
            </div>
            <div style={{textAlign: 'right'}}>
                <Link className="ui primary button" to="/create">Create</Link>
            </div>
        </div>
    )
}

export default TodoList;
