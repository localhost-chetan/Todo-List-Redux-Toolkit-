import { useTodo } from "@hooks/useTodo";
import { Separator } from "@shadcn/separator";
import { TodoForm } from "@modules/todo/TodoForm";
import { TodoList } from "@modules/todo/TodoList";

export function Todo() {
  const {
    inputRef,
    completedTodos,
    unCompletedTodos,
    handleAddTodo,
    handleRemoveAllTodos,
    handleRemoveTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <div
      className={`w-[90%] space-y-4 rounded-md border-2 px-3 py-3 shadow-2xl sm:w-xl`}
    >
      <TodoForm inputRef={inputRef} onSubmit={handleAddTodo} />

      <TodoList
        title={`To Do`}
        todos={unCompletedTodos}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
        handleRemoveAllTodos={handleRemoveAllTodos}
      />

      <Separator />

      <TodoList
        title={`Completed`}
        todos={completedTodos}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
        handleRemoveAllTodos={handleRemoveAllTodos}
      />
    </div>
  );
}
