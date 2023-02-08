import { addTask } from "../store/tasksSlice";
import { useDispatch } from "react-redux";

import IconMoon from "/images/icon-moon.svg";
import IconSun from "/images/icon-sun.svg";

const Header = () => {
  const dispatch = useDispatch();

  const addTaskHandler = (event) => {
    if (event.key === "Enter" && event.target.value) {
      dispatch(addTask(event.target.value));
      event.target.value = "";
    }
  };

  return (
    <header className="header">
      <div className="header__box width-80">
        <div className="heading-wrapper">
          <h1 className="heading">Todo</h1>
          <img src={IconSun} className="theme-icon" alt="theme switcher icon" />
        </div>

        <input
          className="input width-80"
          placeholder="Create a new todo..."
          onKeyDown={addTaskHandler}
        />
      </div>
    </header>
  );
};

export default Header;
