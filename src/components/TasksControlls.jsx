import { useSelector, useDispatch } from "react-redux";

import {
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompletedTasks,
} from "../store/tasksSlice";

const TasksControlls = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const activeTasksHandler = () => {
    // dispatch(showActiveTasks());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompletedTasks());
  };

  return (
    <div className="controls">
      <div className="controls__task-count">{tasks.length} items left</div>
      <div className="controls__task-filter">
        <a href="#" className="filter">
          All
        </a>
        <a href="#" className="filter" onClick={activeTasksHandler}>
          Active
        </a>
        <a href="#" className="filter">
          Completed
        </a>
      </div>
      <a href="#" className="controls__clear" onClick={clearCompletedHandler}>
        Clear completed
      </a>
    </div>
  );
};

export default TasksControlls;
