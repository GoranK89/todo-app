import { addTask } from "../store/tasksSlice";
import { toggleTheme } from "../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import IconMoon from "/images/icon-moon.svg";
import IconSun from "/images/icon-sun.svg";

const Header = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.dark);

  const addTaskHandler = (event) => {
    if (event.key === "Enter" && event.target.value) {
      dispatch(addTask({ title: event.target.value }));
      event.target.value = "";
    }
  };

  const themeHandler = () => {
    dispatch(toggleTheme());
  };

  const classInputTheme = darkTheme
    ? "input input--dark"
    : "input input--light";

  const classBackgroundImg = darkTheme
    ? "header background-img--dark"
    : "header background-img--light";

  return (
    <header className={classBackgroundImg}>
      <div className="header__box width-70">
        <div className="heading-wrapper">
          <h1 className="heading">Todo</h1>
          <img
            src={darkTheme ? IconSun : IconMoon}
            onClick={themeHandler}
            className="theme-icon"
            alt="theme switcher icon"
          />
        </div>
        <input
          className={classInputTheme}
          placeholder="Create a new todo..."
          onKeyDown={addTaskHandler}
        />
      </div>
    </header>
  );
};

export default Header;
