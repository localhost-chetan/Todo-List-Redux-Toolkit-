import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shadcn/tooltip";
import { Plus } from "lucide-react";
import { Input } from "@shadcn/input";
import { Button } from "@shadcn/button";
import { type RefObject, useState } from "react";

type TodoFormProps = {
  inputRef: RefObject<HTMLInputElement | null>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function TodoForm({ inputRef, onSubmit }: TodoFormProps) {
  const [inputValue, setInputValue] = useState<string | null>(null);

  return (
    <form
      onSubmit={onSubmit}
      className={`group relative flex items-center justify-between gap-x-2 rounded-md border-2`}
    >
      <Input
        ref={inputRef}
        onChange={() => setInputValue(inputRef.current?.value as string)}
        placeholder={`Add Item`}
        autoFocus
        className={`min-w-full border-none pr-12 group-focus-visible:outline-1 focus-visible:ring-0`}
      />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type={`submit`}
              disabled={inputValue === null || inputRef.current?.value === ``}
              className={`absolute right-0 px-5`}
              variant={`outline`}
              aria-label={`Add todo`}
            >
              <Plus />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Add a todo</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </form>
  );
}
