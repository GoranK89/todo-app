import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../store/tasksSlice";

import IconMoon from "/images/icon-moon.svg";
import IconSun from "/images/icon-sun.svg";
import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";

export const TodoApp = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const addTaskHandler = (event) => {
    if (event.key === "Enter" && event.target.value) {
      dispatch(addTask(event.target.value));
      event.target.value = "";
    }
  };

  const deleteTaskHandler = (event) => {
    dispatch(removeTask(event.target.id));
  };

  const renderTasks = tasks.map((task, i) => (
    <li className="tasks__item" key={i}>
      <div className="tasks__item-checkbox"></div>
      {task}
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
    <div className="todo-app">
      <div className="todo-app__title-box">
        <h1 className="heading">Todo</h1>
        <img src={IconSun} className="theme-icon" alt="theme switcher icon" />
      </div>

      <input
        className="todo-app__input"
        placeholder="Create a new todo..."
        onKeyDown={addTaskHandler}
      />

      <div className="todo-app__tasks">
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
    </div>
  );
};

export default TodoApp;
