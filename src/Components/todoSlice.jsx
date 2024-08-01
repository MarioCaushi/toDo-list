import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [], // Ensure this is initialized as an empty array
    },
    reducers: {
        addToList: (state, action) => {
            state.list.push(action.payload);
        },
        removeFromList: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload);
        },
        clearList: (state) => {
            state.list = [];
        },
        updateTodoStatus: (state, action) => {
            const todo = state.list.find(item => item.id === action.payload);
            if (todo) {
                todo.done = !todo.done; // Toggle the `done` status
                console.log('Updated todo:', todo); // Debugging line
            }
        },
    },
});

export const { addToList, removeFromList, clearList,updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;