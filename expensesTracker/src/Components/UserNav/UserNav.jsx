import React from "react";
import './UserNav.css'
import SignUp from "../../pages/SignUp/SignUp";

const UserNav = () => {
  return (
    <div className="main-userNavbar">
      <div className="hello-username">Welcome back, {SignUp.fname} {SignUp.lname}!</div>
      <div className="user-image">
        <img src="https://api.iconify.design/ri:account-circle-fill.svg" alt="..." width="48px" style={{background: "white"}} />
      </div>
    </div>
  );
};

export default UserNav;
