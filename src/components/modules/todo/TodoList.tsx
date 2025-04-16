import { Button } from "@shadcn/button";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@shadcn/scroll-area";
import { TodoItem } from "@modules/todo/TodoItem";
import { type TodoState } from "@redux/slices/todoSlice";

type TodoListProps = {
  title: string;
  todos: TodoState[];
  handleRemoveTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
  handleRemoveAllTodos: () => void;
};

export function TodoList({
  title,
  todos,
  handleToggleTodo,
  handleRemoveTodo,
  handleRemoveAllTodos,
}: TodoListProps) {
  return (
    <>
      <div className={`sticky top-0 flex items-center justify-between p-3`}>
        <h2 className={`text-lg font-bold`}>{`${title} (${todos.length})`}</h2>

        {todos.length > 0 && (
          <Button
            variant={`destructive`}
            size={`sm`}
            onClick={handleRemoveAllTodos}
          >
            <Trash2 size={15} />
            Clear All
          </Button>
        )}
      </div>

      <ScrollArea className={`m-3 h-56 rounded-md border p-3`}>
        {todos.length === 0 ? (
          <p className={`flex min-h-40 items-center justify-center rounded-md`}>
            Nothing to show
          </p>
        ) : (
          <div>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                todoTitle={todo.todoTitle}
                isCompleted={todo.isCompleted}
                createdAt={todo.createdAt}
                handleToggleTodo={handleToggleTodo}
                handleRemoveTodo={() => handleRemoveTodo(todo.id)}
              />
            ))}
          </div>
        )}
      </ScrollArea>
    </>
  );
}
