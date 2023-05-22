import { configureStore } from '@reduxjs/toolkit';
import todosSlice from "./modules/todosSlice.ts";
export default configureStore({
    reducer: {

        todos: todosSlice,
    },
});
