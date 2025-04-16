import { Todo } from "@modules/todo/Todo";
import { Navbar } from "@modules/navbar/Navbar";

export function App() {
  return (
    <>
      <Navbar />

      <main
        className={`flex min-h-screen flex-col items-center justify-center gap-y-5 py-4 select-none`}
      >
        <Todo />
      </main>
    </>
  );
}
