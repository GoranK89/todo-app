import { useSelector, useDispatch } from "react-redux";
import {
  showAllTasks,
  showCompletedTasks,
  showActiveTasks,
  resetOtherFilters,
} from "../store/filtersSlice";
import { clearCompletedTasks } from "../store/tasksSlice";

const TasksControlls = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const darkTheme = useSelector((state) => state.theme.dark);

  const activeTasks = useSelector((state) =>
    state.tasks.filter((item) => !item.completed)
  );

  const allHandler = () => {
    dispatch(resetOtherFilters());
    dispatch(showAllTasks());
  };

  const activeHandler = () => {
    dispatch(resetOtherFilters());
    dispatch(showActiveTasks());
  };

  const completedHandler = () => {
    dispatch(resetOtherFilters());
    dispatch(showCompletedTasks());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompletedTasks());
  };

  const classFilterAll = filters.all
    ? "filter--active"
    : `filter--${darkTheme ? "dark" : "light"}`;

  const classFilterActive = filters.active
    ? "filter--active"
    : `filter${darkTheme ? "--dark" : "--light"}`;

  const classFilterCompleted = filters.completed
    ? "filter--active"
    : `filter${darkTheme ? "--dark" : "--light"}`;

  const classClearAll = darkTheme
    ? "controls__clear--dark"
    : "controls__clear--light";

  return (
    <div className="controls">
      <div className="controls__task-count">
        {activeTasks.length} items left
      </div>
      <div className="controls__task-filter">
        <a href="#" className={classFilterAll} onClick={allHandler}>
          All
        </a>
        <a href="#" className={classFilterActive} onClick={activeHandler}>
          Active
        </a>
        <a href="#" className={classFilterCompleted} onClick={completedHandler}>
          Completed
        </a>
      </div>
      <a href="#" className={classClearAll} onClick={clearCompletedHandler}>
        Clear completed
      </a>
    </div>
  );
};

export default TasksControlls;
