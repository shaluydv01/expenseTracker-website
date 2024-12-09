import React, { useState } from "react";
import "./User.css";
import UserForm from "../../Components/userForm/UserForm";
import Record from "../../Components/RecordItem/Record";
import UserNav from "../../Components/UserNav/UserNav";


const User = () => {
  const [item, setItem] = useState([
    {
      id: Math.random(),
      date1: "2024-12-09",
      itemHeading: "Items",
      amountHeading: "Amount in Rs.",
      fill1: "Gas",
      amount1: 1200,
      fill2: "Laptop",
      amount2: 30000,
    },
  ]);
  return (
    <>
    <UserNav />
      
      {/* -----------------------------UserForm Export-------------------------- */}
      <div className="user-container">
        <UserForm item={item} setItem={setItem} />

        <Record item={item} />

        {/* -----------------------------------UserContainer---------------------------- */}
      </div>
    </>
  );
};

export default User;
