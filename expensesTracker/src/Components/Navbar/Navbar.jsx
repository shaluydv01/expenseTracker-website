import React from "react";
import { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

  const closeDrawer = () =>{
    setIsOpen(false);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">myExpenses</div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <button onClick={closeDrawer} className="close-drawer">
            <FaTimes />
          </button>
          <li>
            <Link to={"/"} onClick={closeDrawer}>Home</Link>
          </li>
          <li>
            <Link to={"/about"} onClick={closeDrawer}>About</Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={closeDrawer}>Contact</Link>
          </li>
          <li>
            <Link to={"/login"} onClick={closeDrawer}>Login</Link>
          </li>
          <li>
            <Link to={"/sign-up"} onClick={closeDrawer}>Sign-Up</Link>
          </li>
          <li>
            <Link to={"/help"} onClick={closeDrawer}>Help</Link>
          </li>
          <li>
            <Link to={"/user"} onClick={closeDrawer}>User</Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="menu-icon">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
