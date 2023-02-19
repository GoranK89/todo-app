import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTaskDone } from "../store/tasksSlice";

import TasksControlls from "./TasksControlls";

import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";

const Tasks = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const darkTheme = useSelector((state) => state.theme.dark);

  const removeTaskHandler = (event) => {
    dispatch(removeTask(Number(event.target.id)));
  };

  const checkBoxHandler = (event) => {
    dispatch(toggleTaskDone(Number(event.target.id)));
  };

  const filterTasks = () => {
    const allTasks = useSelector((state) => state.tasks);

    if (filters.all) {
      return allTasks;
    }
    if (filters.active) {
      const activeTasks = allTasks.filter((item) => !item.completed);
      return activeTasks;
    }
    if (filters.completed) {
      const completedTasks = allTasks.filter((item) => item.completed);
      return completedTasks;
    }
  };

  const tasksSectionTheme = darkTheme
    ? "section-tasks"
    : "section-tasks bgc--light";

  const renderTasks = filterTasks().map((task) => (
    <li className="tasks__item" key={task.id}>
      <div
        className={
          task.completed ? "tasks__item-checkbox-done" : "tasks__item-checkbox"
        }
        onClick={checkBoxHandler}
        id={task.id}
      >
        {task.completed && (
          <img src={IconCheck} alt="checkmark icon" className="img-checkmark" />
        )}
      </div>
      <span className={!task.completed ? "" : "task-text--done"}>
        {task.title}
      </span>
      <img
        className="tasks__item-icon--cross"
        src={IconCross}
        onClick={removeTaskHandler}
        id={task.id}
      />
    </li>
  ));

  return (
    <section className={tasksSectionTheme}>
      <div className="section-tasks__tasks-box width-80">
        <ul className="tasks">{renderTasks}</ul>
        <TasksControlls />
      </div>
    </section>
  );
};

export default Tasks;
