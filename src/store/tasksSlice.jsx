import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, title: "Add a task", completed: false },
    { id: 2, title: "Completed task", completed: true },
  ],

  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
    },

    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    toggleTaskDone: (state, action) => {
      // BUG: the checkmark can be clicked, it blocks toggling
      if (!action.payload) return;
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].completed = !state[index].completed;
    },

    clearCompletedTasks: (state) => {
      return state.filter((item) => !item.completed);
    },
  },
});

export const { addTask, removeTask, toggleTaskDone, clearCompletedTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
