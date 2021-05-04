import React, { useState } from "react"
import firebase from "../util/firebase";



export default function TodoForm() {

    const [title, setTodo] = useState('');

    const handleTaskInputChange = (e) => {
        e.preventDefault();
        setTodo(e.target.value);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
            complete: false,
        };
        if (todo.title !== ""){
            todoRef.push(todo);
        }
    }

     
    return (
        <form onSubmit={handleSubmit}>
            <input 
              type="text"
              onChange={handleTaskInputChange} 
              value={title}
              />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

