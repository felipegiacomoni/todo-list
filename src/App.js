import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import TodoCreate from "./components/TodoCreate";
import TodoEdit from "./components/TodoEdit";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="ui container">
            <h2 className="ui center aligned header" style={{marginTop: 20}}>My Todo List</h2>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<TodoList/>} />
                    <Route path="/create" exact element={<TodoCreate/>} />
                    <Route path="/edit/:id" element={<TodoEdit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;