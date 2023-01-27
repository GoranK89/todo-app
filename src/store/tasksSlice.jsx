import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
