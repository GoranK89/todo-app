import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/tasksSlice";

import IconMoon from "/images/icon-moon.svg";
import IconSun from "/images/icon-sun.svg";

export const TodoApp = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const renderTasks = tasks.map((task, i) => <li key={i}>{task}</li>);
  const numOfTasks = tasks.length;

  const addTaskHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(addTask(event.target.value));
    }
  };

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
          <div className="controls-task-count">{numOfTasks} items left</div>
          <div className="controls-task-filter">all active completed</div>
          <a href="#" className="controls-clear">
            Clear completed
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
