import IconMoon from "/images/icon-moon.svg";
import IconSun from "/images/icon-sun.svg";

export const TodoApp = () => {
  return (
    <div className="todo-app">
      <div className="todo-app__title-box">
        <h1 className="heading">Todo</h1>
        <img src={IconSun} className="theme-icon" alt="theme switcher icon" />
      </div>

      <input className="todo-app__input" placeholder="Create a new todo..." />

      <div className="todo-app__tasks">
        <ul className="tasks-box">
          <li className="task-item">task 1</li>
          <li className="task-item">task 2</li>
          <li className="task-item">task 3</li>
        </ul>
        <div className="controls">
          <div className="controls-task-count">5 items left</div>
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
