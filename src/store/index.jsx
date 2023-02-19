import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
});

export default store;
