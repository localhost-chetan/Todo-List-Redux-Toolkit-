import { Label } from "@shadcn/label";
import { Button } from "@shadcn/button";
import { Checkbox } from "@shadcn/checkbox";
import { Calendar, Trash2 } from "lucide-react";
import { type TodoState } from "@redux/slices/todoSlice";

type TodoItemProps = TodoState & {
  handleToggleTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
};

export function TodoItem({
  id,
  createdAt,
  isCompleted,
  todoTitle,
  handleRemoveTodo,
  handleToggleTodo,
}: TodoItemProps) {
  const checkboxID = `${isCompleted ? "completed" : "todo"}-${id}`;

  return (
    <div className={`flex items-center justify-between gap-x-4`}>
      <div className={`flex items-center gap-x-2`}>
        <Checkbox
          id={checkboxID}
          className={`size-5`}
          defaultChecked={isCompleted}
          onCheckedChange={() => handleToggleTodo(id)}
        />

        <Label
          htmlFor={checkboxID}
          className={`text-md cursor-pointer ${isCompleted && "line-through"}`}
        >
          {todoTitle}
        </Label>
      </div>

      <div className={`flex items-center gap-x-1 text-sm font-semibold`}>
        <Calendar size={15} />
        <span>{createdAt}</span>

        <Button
          variant={`ghost`}
          size={`sm`}
          onClick={() => handleRemoveTodo(id)}
          className={`text-red-500 hover:text-red-600`}
          aria-label={`Delete ${todoTitle}`}
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
}
