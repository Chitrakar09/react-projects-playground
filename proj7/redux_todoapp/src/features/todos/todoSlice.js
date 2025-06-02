import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload === "") return;
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    checkedTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload ? (todo.completed = !todo.completed) : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, checkedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
