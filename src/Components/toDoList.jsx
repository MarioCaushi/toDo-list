import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoStatus,removeFromList,clearList } from './todoSlice'; 
import './toDoList.css';

const ToDoList = () => {
    const todos = useSelector((state) => state.todo.list);
    const dispatch = useDispatch();

    const handleChecked = (id) => {
        dispatch(updateTodoStatus(id));
    };

    const handleDeleteButton=(id) => {
        dispatch(removeFromList(id));
    }

    const handleClearButton=()=> {
        dispatch(clearList());
    }

    return (
        <div className="list-container"> 
           {todos.length > 0 && <h1>Your ToDos: </h1>}

            <ul> 
                {todos.map(item => (
                    <li className="todo-item" key={item.id}> 
                        <input 
                            type="checkbox" 
                            checked={item.done} 
                            onChange={() => handleChecked(item.id)} 
                        />
                        <span> {item.text} </span>
                        <button id="delete-button" onClick={() => handleDeleteButton(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {todos.length > 0 && <button id="clear-list" onClick={() => handleClearButton()}>Clear List</button>}
        </div>
    );
};

export default ToDoList;