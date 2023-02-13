import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        task: "Add a task",
        completed: false,
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (item) => item !== state.tasks[action.payload]
      );
    },
    markTaskDone: (state, action) => {
      if (state.tasks[action.payload].completed) return;
      state.tasks[action.payload].completed = true;
    },
    showAllTasks: (state) => {},
    showActiveTasks: (state) => {},
    showCompletedTasks: (state) => {},
    clearCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((item) => item.completed !== true);
    },
  },
});

export const {
  addTask,
  removeTask,
  markTaskDone,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompletedTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
