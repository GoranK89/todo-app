import { useSelector, useDispatch } from "react-redux";

import {
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompletedTasks,
} from "../store/tasksSlice";

const TasksControlls = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.allTasks);
  const allTasksActive = useSelector((state) => state.tasks.allTasksActive);
  const activeTasksActive = useSelector(
    (state) => state.tasks.activeTasksActive
  );
  const completedTasksActive = useSelector(
    (state) => state.tasks.completedTasksActive
  );

  const allTasksHandler = () => {
    dispatch(showAllTasks());
  };
  const activeTasksHandler = () => {
    dispatch(showActiveTasks());
  };
  const completedTasksHandler = () => {
    dispatch(showCompletedTasks());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompletedTasks());
  };

  const filterClass = (clickedFilter) =>
    clickedFilter ? "filter filter--active" : "filter";

  return (
    <div className="controls">
      <div className="controls__task-count">{tasks.length} items left</div>
      <div className="controls__task-filter">
        <a
          href="#"
          className={filterClass(allTasksActive)}
          onClick={allTasksHandler}
        >
          All
        </a>
        <a
          href="#"
          className={filterClass(activeTasksActive)}
          onClick={activeTasksHandler}
        >
          Active
        </a>
        <a
          href="#"
          className={filterClass(completedTasksActive)}
          onClick={completedTasksHandler}
        >
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
