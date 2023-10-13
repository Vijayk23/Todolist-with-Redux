import { createSlice } from "@reduxjs/toolkit";
import { Todolist } from "./data";

const todoSlice = createSlice({
  name: "Todos",
  initialState: Todolist,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
