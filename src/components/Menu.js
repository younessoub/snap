import "./menuStyles.css";

import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

export default function Menu({ show }) {
  const toggleDropdown = (e) => {
    const arrow = e.currentTarget.querySelector("img");
    const dropList = e.currentTarget.querySelector(".dropdown");
    const dropListActive = dropList.classList.contains("active");
    if (dropListActive) {
      arrow.setAttribute("src", arrowDown);
      dropList.classList.remove("active");
    } else {
      arrow.setAttribute("src", arrowUp);
      dropList.classList.add("active");
    }
    //const dropdown = e.currentTarget.querySelector(".dropDown");
    //dropdown.style.transform = "scaleY(1)";
    //e.current.setAttribute("src", arrowUp);
  };

  return (
    <div
      className="menuWrapper"
      style={{ transform: show ? "scaleX(1)" : "scaleX(0)" }}
    >
      <div className="ulAndButtons">
        <ul style={{ transform: show ? "scaleX(1)" : "scaleX(0)" }}>
          <li onClick={toggleDropdown}>
            <div className="dropdownTitle">
              Features <img src={arrowDown} alt="arrow" />
            </div>
            <div className="dropdown ">
              <a href="#">
                {" "}
                <img src={todo} alt="logo" /> <span>Todo List</span>
              </a>
              <a href="#">
                {" "}
                <img src={calendar} alt="logo" /> <span>Calendar</span>
              </a>
              <a href="#">
                {" "}
                <img src={reminders} alt="logo" /> <span>Reminders</span>
              </a>
              <a href="#">
                {" "}
                <img src={planning} alt="logo" /> <span>Planning</span>
              </a>
            </div>
          </li>
          <li onClick={toggleDropdown}>
            <div className="dropdownTitle">
              {" "}
              Company <img src={arrowDown} alt="arrow" />
            </div>
            <div className="dropdown ">
              <a href="#">
                {" "}
                <span>History</span>
              </a>
              <a href="#">
                {" "}
                <span>Our Team</span>
              </a>
              <a href="#">
                {" "}
                <span>Blog</span>
              </a>
            </div>
          </li>
          <li>
            <div className="dropdownTitle">
              <a href="#"> Careers</a>
            </div>
          </li>
          <li>
            <div className="dropdownTitle">
              {" "}
              <a href="#">About</a>
            </div>
          </li>
        </ul>
        <div
          className="buttons"
          style={{ transform: show ? "scaleX(1)" : "scaleX(0)" }}
        >
          <button className="loginButton">
            <a href="#">Login</a>
          </button>
          <button className="registerButton">
            <a href="#">Register</a>
          </button>
        </div>
      </div>
    </div>
  );
}
