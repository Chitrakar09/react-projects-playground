import { useTodo } from "../contexts/todoContext";
import { useState,useRef } from "react";

function TodoForm() {
    const input=useRef();
    const [todo, setTodo] = useState("");
    const {addTodo}=useTodo();
    const handleSubmit=(e)=>{
        e.preventDefault();
        input.current.value=""
        addTodo(todo);
        
    }

    return (
        <form  className="flex" onSubmit={(e)=>(handleSubmit(e))}>
            <input
                ref={input}
                type="text"
                placeholder="Write Todo..."
                defaultValue={""}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>(setTodo(e.target.value))}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;