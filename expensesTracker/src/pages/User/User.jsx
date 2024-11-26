import React, { useState } from "react";
import "./User.css";
import UserForm from "../../Components/userForm/UserForm";
import Record from "../../Components/RecordItem/Record";


const User = () => {
  const [item, setItem] = useState([
    {
      id: Math.random(),
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
