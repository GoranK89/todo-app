import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    all: true,
    active: false,
    completed: false,
  },

  reducers: {
    showAllTasks: (state) => {
      state.all = true;
    },

    showActiveTasks: (state) => {
      state.active = true;
    },
    showCompletedTasks: (state) => {
      state.completed = true;
    },
    resetOtherFilters: (state) => {
      for (let filter in state) {
        state[filter] = false;
      }
    },
  },
});

export const {
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  resetOtherFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
