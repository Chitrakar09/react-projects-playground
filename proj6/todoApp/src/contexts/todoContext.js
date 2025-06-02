import { createContext } from "react";
import { useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      todo: "",
      id: 1,
      completed:false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo,id) => {},
  deleteTodo: (id) => {},
  toggleCompleted:(id,completed)=>{},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => useContext(todoContext);
