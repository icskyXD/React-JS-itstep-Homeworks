import { useState, useEffect } from "react";
import apiClient from "../../common/api";
import { IToDo } from "../../types";
import ToDoElement from "../ToDoElement/ToDoElement";

const ToDoList = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    const getPost = async () => {
        const res = await apiClient.get<IToDo[]>("/todos");
        setTodos(res.data);
    }

    useEffect(() => {
        getPost();
    },[]);

    return (
        <div>
            <h2>Todo List</h2>
            {todos.map((todo) => <ToDoElement key={todo.id} {...todo}/>)}
        </div>
    );
}

export default ToDoList;