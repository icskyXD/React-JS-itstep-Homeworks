import { useState, useEffect } from 'react';
import apiClient from '../../common/api';
import { IToDo, IUser } from '../../types';
import './ToDoElement.css'

const ToDoElement = (props: IToDo) => {
    const [userData, setUserData] = useState<IUser[]>([]);

    const getData = async () => {
        const res = await apiClient.get<IUser[]>(`/users?id=${props.userId}`);
        setUserData(res.data);
    }

    useEffect(() => {
        getData();
    },[userData]);

    if (userData.length === 0) {
        return <div>loading</div>;
      }

    return (
        <div className={props.completed ? "item completed" : "item"}>
            <h1> Name: {userData[0].name}</h1>
            <p> Email: {userData[0].email}</p>
        </div>
    );
}

export default ToDoElement;