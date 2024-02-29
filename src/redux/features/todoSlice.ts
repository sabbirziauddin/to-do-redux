import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
  id: number;
  task: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodos[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodos>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleState: (state, action: PayloadAction<number>) => {
      const task = state.todos.find((item) => item.id == action.payload);
      task!.isCompleted = !task?.isCompleted;
    }, // Add a comma here
  },
});

export const { addTodo, removeTodo, toggleState } = todoSlice.actions;

export default todoSlice.reducer;
