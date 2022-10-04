import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo-details">
        <div className="logo_name">Portfolio</div>
        <i
          className="bx bx-menu"
          id="btn"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/portfolio">
            <i className="bx bx-home"></i>
            <span className="links_name">Home</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="/about">
            <i className="bx bx-user"></i>
            <span className="links_name">About</span>
          </Link>
          <span className="tooltip">About</span>
        </li>
        <li>
          <Link to="/education">
            <i class="bx bxs-graduation"></i>
            <span className="links_name">Education</span>
          </Link>
          <span className="tooltip">Education</span>
        </li>
        <li>
          <Link to="/skills">
            <i className="bx bx-chat"></i>
            <span className="links_name">Skills</span>
          </Link>
          <span className="tooltip">Skills</span>
        </li>
        <li>
          <Link to="/work">
            <i class="bx bx-briefcase"></i>
            <span className="links_name">Work</span>
          </Link>
          <span className="tooltip">Work</span>
        </li>
        {/* <li>
          <Link to="/projects">
            <i class="bx bx-task"></i>
            <span className="links_name">Projects</span>
          </Link>
          <span className="tooltip">Projects</span>
        </li> */}
        <li>
          <Link to="/contact">
            <i className="bx bx-chat"></i>
            <span className="links_name">Contact</span>
          </Link>
          <span className="tooltip">Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
