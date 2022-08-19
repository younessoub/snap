import logo from "../images/logo.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import MenuButton from "../images/icon-menu.svg";
import MenuCollapseButton from "../images/icon-close-menu.svg";

//menu component
import Menu from "./Menu";

import "./navStyles.css";

import { useState } from "react";

export default function Nav() {
  const [menuShown, setMenuShown] = useState(false);

  const showDropdown = (e) => {
    const arrow = e.currentTarget.querySelector("img");
    arrow.setAttribute("src", arrowUp);
    const dropdown = e.currentTarget.querySelector(".dropDown");
    dropdown.style.transform = "scaleY(1)";
    //e.current.setAttribute("src", arrowUp);
  };
  const hideDropdown = (e) => {
    const arrow = e.currentTarget.querySelector("img");
    arrow.setAttribute("src", arrowDown);
    const dropdown = e.currentTarget.querySelector(".dropDown");
    dropdown.style.transform = "scaleY(0)";
    //e.current.setAttribute("src", arrowDown);
  };

  return (
    <nav className="navbar">
      <div className="flex">
        <img className="logo" src={logo} alt="logo" />
        <ul className="navLinks">
          <li onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <div className="navEl">
              Features <img src={arrowDown} alt="arrow" />
            </div>
            <div className="dropDown">
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
          <li onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <div className="navEl">
              {" "}
              Company <img src={arrowDown} alt="arrow" />
            </div>
            <div className="dropDown">
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
            <div className="navEl">
              <a href="#"> Careers</a>
            </div>
          </li>
          <li>
            <div className="navEl">
              {" "}
              <a href="#">About</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="navButtons">
        <button className="login">
          <a href="#">Login</a>
        </button>
        <button className="register">
          <a href="#">Register</a>
        </button>
      </div>

      {!menuShown && (
        <img
          src={MenuButton}
          alt="menu"
          className="menuButton"
          onClick={() => {
            setMenuShown(true);
          }}
        />
      )}

      {menuShown && (
        <img
          src={MenuCollapseButton}
          alt="closeMenu"
          className="menuButton"
          onClick={() => {
            setMenuShown(false);
          }}
        />
      )}
      <Menu show={menuShown} />
    </nav>
  );
}
