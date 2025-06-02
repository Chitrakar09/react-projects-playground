import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
function TodoForm() {
  const input = useRef();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    input.current.value = "";
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={input}
        type="text"
        placeholder="Write Todo..."
        defaultValue={todo}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
