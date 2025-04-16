import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "@redux/slices/todoSlice";

export const store = configureStore({
    reducer: {
        todoList: TodoReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;