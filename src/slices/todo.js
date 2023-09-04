import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todolist: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

export const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todolist.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlicer.actions;
export default todoSlicer.reducer;
