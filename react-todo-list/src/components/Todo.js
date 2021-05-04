import React from "react"
import firebase from '../util/firebase';


export default function Todo({ todo }) {
    const removeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id)
        todoRef.remove();
    }

    const completedTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    };

    return (
    <div className="box" style={{ display: "flex" }}>
        <input type="checkbox" onClick={completedTodo} />
        <li 
           style={{
               color: "black",
               textDecoration: todo.complete ? "line-through" :null
           }}
        
        >{todo.title}</li>
        <button onClick={removeTodo}>X</button>
    </div>
    );
}