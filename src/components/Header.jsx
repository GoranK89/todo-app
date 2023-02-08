import { addTask } from "../store/tasksSlice";
import { toggleTheme } from "../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import IconMoon from "/images/icon-moon.svg";
import IconSun from "/images/icon-sun.svg";

const Header = () => {
  const dispatch = useDispatch();
  const themeDark = useSelector((state) => state.theme.dark);

  const addTaskHandler = (event) => {
    if (event.key === "Enter" && event.target.value) {
      dispatch(addTask(event.target.value));
      event.target.value = "";
    }
  };

  const themeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={themeDark ? "header" : "header background--light"}>
      <div className="header__box width-80">
        <div className="heading-wrapper">
          <h1 className="heading">Todo</h1>
          <img
            src={themeDark ? IconSun : IconMoon}
            onClick={themeHandler}
            className="theme-icon"
            alt="theme switcher icon"
          />
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
