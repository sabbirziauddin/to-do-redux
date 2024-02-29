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
    /*  toggleState: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const taskIndex = state.todos.findIndex((item) => item.id === taskId);

      if (taskIndex !== -1) {
        const task = state.todos[taskIndex];
        task.isCompleted = !task.isCompleted;

        // If the task status is toggled to completed, move it to the end
        if (task.isCompleted) {
          state.todos.push(state.todos.splice(taskIndex, 1)[0]);
        } else {
          // If the task status is toggled to pending, move it to the beginning
          const pendingTasks = state.todos.filter((item) => !item.isCompleted);
          state.todos = [
            task,
            ...pendingTasks,
            ...state.todos.filter((item) => item.isCompleted),
          ];
        }
      }
    }, */
  },
});

export const { addTodo, removeTodo, toggleState } = todoSlice.actions;

export default todoSlice.reducer;
