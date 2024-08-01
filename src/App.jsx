import { useState } from 'react'
import './App.css'
import ToDoForm from './Components/toDoForm';
import ToDoList from './Components/toDoList';

function App() {
 
  return (
    <>
    <div className='app-container'> 
    <h1>ToDo-List App</h1>
    <ToDoForm/>
    <ToDoList/>
    </div>
    </>
  )
};

export default App;
