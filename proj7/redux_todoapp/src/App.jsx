import { TodoForm, TodoItem } from "./components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("todos")) || [];
    if (Todos && Todos.length > 0) {
      todos = Todos;
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("sent");
  }, [todos]);
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
