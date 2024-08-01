import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToList } from './todoSlice';
import './toDoForm.css';

const ToDoForm = () => {
    const [newItem, setNewItem] = useState("");
    const dispatch = useDispatch();

    const handleInput = () => {
        if (newItem.trim() !== "") {
            
            const newTodo = {
                id: Date.now(), 
                text: newItem,
                done: false // Ensure each item has a 'done' property
            };
            dispatch(addToList(newTodo));
            setNewItem("");
        }
    };

    return (
        <form className="toDoForm-container" onSubmit={(e) => { e.preventDefault(); handleInput(); }}> 
            <label htmlFor="todo-input" id="form-label">Write your ToDo List Here</label>
            <input 
                id="input-form" 
                name="todo-input"
                placeholder="Text Here"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button id='todo-button' type="button" onClick={handleInput}>Add To List</button> 
        </form>
    );
};

export default ToDoForm;