import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Adjust the path as necessary

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;