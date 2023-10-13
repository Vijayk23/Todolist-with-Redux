import { createSlice } from "@reduxjs/toolkit";
import { Todolist } from "./data";

const todoSlice = createSlice({
  name: "Todos",
  initialState: Todolist,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const Tododelete = state.find((todo) => todo.id == id);
      if (Tododelete) {
        return state.filter((list) => list.id !== id);
      }
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
