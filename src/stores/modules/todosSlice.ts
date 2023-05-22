import { createSlice } from '@reduxjs/toolkit';
import {ITodo} from "../../types/todo.ts";
import {uuid} from "../../utils/helper.ts";

const initFakeData: Array<ITodo> = [
    { id: uuid(), title: 'Todo 1', completed: false },
    { id: uuid(), title: 'Todo 2', completed: false },
    { id: uuid(), title: 'Todo 3', completed: false },
    { id: uuid(), title: 'Todo 4', completed: false },
]
export const todoSlice = createSlice({
    name: 'todos',
    initialState: initFakeData,
    reducers: {
        addTodo: (state, action) => {
            const todo: ITodo = {
                id: uuid(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});


export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
