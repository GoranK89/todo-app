import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});

export default store;
