import { useSelector } from "react-redux";
import { removeTask, markTaskDone } from "../store/tasksSlice";
import { useDispatch } from "react-redux";

import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const darkTheme = useSelector((state) => state.theme.dark);

  const deleteTaskHandler = (event) => {
    dispatch(removeTask(event.target.id));
  };

  const checkBoxHandler = (event) => {
    dispatch(markTaskDone(event.target.id));
    // change the task text
  };

  const tasksSectionTheme = darkTheme
    ? "section-tasks"
    : "section-tasks bgc--light";

  const renderTasks = tasks.map((task, i) => (
    <li className="tasks__item" key={i}>
      <div
        className={
          !task.completed ? "tasks__item-checkbox" : "tasks__item-checkbox-done"
        }
        onClick={checkBoxHandler}
        id={i}
      >
        {task.completed && (
          <img src={IconCheck} alt="checkmark icon" className="img-checkmark" />
        )}
      </div>
      <span className={!task.completed ? "" : "task-text--done"}>
        {task.task}
      </span>
      <img
        className="tasks__item-icon--cross"
        src={IconCross}
        onClick={deleteTaskHandler}
        id={i}
      />
    </li>
  ));

  const numOfTasks = tasks.length;

  return (
    <section className={tasksSectionTheme}>
      <div className="section-tasks__tasks-box width-80">
        <ul className="tasks">{renderTasks}</ul>
        <div className="controls">
          <div className="controls__task-count">{numOfTasks} items left</div>
          <div className="controls__task-filter">
            <a href="#" className="filter">
              All
            </a>
            <a href="#" className="filter">
              Active
            </a>
            <a href="#" className="filter">
              Completed
            </a>
          </div>
          <a href="#" className="controls__clear">
            Clear completed
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
