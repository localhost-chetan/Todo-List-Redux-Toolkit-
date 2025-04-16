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

        <p className={`line-clamp-2 max-w-52 text-ellipsis`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          tempore sint explicabo ad culpa, dolorum porro facere veniam
          obcaecati. Quae ab rem animi expedita obcaecati est modi error nobis
          voluptas.
        </p>
      </main>
    </>
  );
}
