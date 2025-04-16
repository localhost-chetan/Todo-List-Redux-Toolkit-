import { toast } from "sonner"
import { nanoid } from "@reduxjs/toolkit"
import { type FormEvent, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "@redux/store"
import { addTodo, removeAllTodos, removeTodo, toggleTodo } from "@redux/slices/todoSlice"

export const useTodo = () => {
    const todos = useSelector((state: RootState) => state.todoList)

    const dispatch = useDispatch<AppDispatch>()

    const inputRef = useRef<HTMLInputElement>(null)

    const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(
            addTodo({
                id: nanoid(),
                todoTitle: inputRef.current?.value as string,
                isCompleted: false,
                createdAt: new Date().toLocaleTimeString(),
            }),
        );

        toast.success(`Todo Added`);
        inputRef.current!.value = ``;
    };

    const handleToggleTodo = (id: string) => {
        dispatch(toggleTodo(id))
    }

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id))
        toast.error(`Todo Removed`)
    }

    const handleRemoveAllTodos = () => {
        dispatch(removeAllTodos());
        toast.error(`All Todos Removed`)
    }

    const unCompletedTodos = todos.filter((todo) => todo.isCompleted === false).reverse();
    const completedTodos = todos.filter((todo) => todo.isCompleted === true).reverse();

    return { unCompletedTodos, completedTodos, inputRef, handleAddTodo, handleToggleTodo, handleRemoveTodo, handleRemoveAllTodos }
}