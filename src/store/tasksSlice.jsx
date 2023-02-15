import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    allTasks: [
      {
        task: "Add a task",
        completed: false,
      },
    ],
    activeTasks: [{}],
    completedTasks: [{}],
    allTasksActive: true,
    activeTasksActive: false,
    completedTasksActive: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.allTasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.allTasks = state.allTasks.filter(
        (item) => item !== state.allTasks[action.payload]
      );
    },
    markTaskDone: (state, action) => {
      state.allTasks[action.payload].completed = true;
    },
    showAllTasks: (state) => {
      state.allTasks = state.allTasks;
      state.allTasksActive = !state.allTasksActive;
      state.activeTasksActive = false;
      state.completedTasksActive = false;
    },
    showActiveTasks: (state) => {
      state.activeTasks = state.allTasks.filter(
        (item) => item.completed !== true
      );
      state.activeTasksActive = !state.activeTasksActive;
      state.allTasksActive = false;
      state.completedTasksActive = false;
    },
    showCompletedTasks: (state) => {
      state.completedTasks = state.allTasks.filter(
        (item) => item.completed === true
      );
      state.completedTasksActive = !state.completedTasksActive;
      state.allTasksActive = false;
      state.activeTasksActive = false;
    },
    clearCompletedTasks: (state) => {
      state.allTasks = state.allTasks.filter((item) => item.completed !== true);
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
