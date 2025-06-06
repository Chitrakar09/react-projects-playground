import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/todoContext";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]); //adds new todos object to previous todos object.
  };
  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodos) => (prevTodos.id === id ? todo : prevTodos))
    );
    console.log(todos);
  };
  const deleteTodo = (id) => {
    setTodos((prev)=>(prev.filter((todo)=>(todo.id!==id))));
  };

  const toggleCompleted=(id,completed)=>{
    setTodos((prev) =>
      prev.map((prevTodos) => (prevTodos.id === id ? completed : prevTodos))
    );
  }
    useEffect(()=>{
     const todos=JSON.parse(localStorage.getItem('todos'))||[];
     console.log(todos)
     if(todos&&todos.length>0)
     {
      setTodos(todos);
     }
    },[])

     useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
    console.log("sent to local storage")
    },[todos])
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo,toggleCompleted }}>
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
            {todos.map((todo) => {
              return (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
