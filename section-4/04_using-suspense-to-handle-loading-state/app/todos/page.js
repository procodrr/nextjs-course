import SlowComponent2s from "@/components/SlowComponent2s";
import SlowComponent3s from "@/components/SlowComponent3s";
import TodoItems from "@/components/TodoItems";
import { Suspense } from "react";

const Todos = async () => {
  return (
    <>
      <h1>Todos</h1>
      <Suspense
        fallback={
          <div className="todos-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="shimmer">
                <div className="shimmer-checkbox"></div>
                <div className="shimmer-text"></div>
              </li>
            ))}
          </div>
        }
      >
        <TodoItems />
      </Suspense>
      <Suspense fallback={<div>Loading data 1</div>}>
        <SlowComponent2s />
      </Suspense>
      <Suspense fallback={<div>Loading data 2</div>}>
        <SlowComponent3s />
      </Suspense>
    </>
  );
};

export default Todos;
