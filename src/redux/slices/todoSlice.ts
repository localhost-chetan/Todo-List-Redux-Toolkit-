import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
    id: string;
    todoTitle: string;
    isCompleted: boolean;
    createdAt: string
}

const initialState: TodoState[] = []

export const todoSlice = createSlice({
    name: `todo`,
    initialState,

    reducers: {
        addTodo: (state, action: PayloadAction<TodoState>) => {
            state.push(action.payload)
        },

        removeTodo: (state, action: PayloadAction<string>) => {
            const newTodos = state.filter((todo) => todo.id !== action.payload)
            return newTodos
        },

        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.find((todo) => todo.id === action.payload)

            if (todo) {
                todo.isCompleted = !todo.isCompleted
            }
        },

        removeAllTodos: () => {
            return []
        }
    }
})

export const TodoReducer = todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodo, removeAllTodos } = todoSlice.actions;