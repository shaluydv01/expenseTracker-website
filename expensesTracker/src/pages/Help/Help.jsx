import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <>
      <div className="top-header">
        <h1 className="help-header">Help & Support</h1>
        <div className="nav-btn">
          <a href="#getting-started">Getting Started</a>
          <a href="">Feature Guides</a>
          <a href="">FAQs</a>
          <a href="">Troubleshooting</a>
          <a href="">Privacy & Security</a>
          <a href="">Contact Support</a>
        </div>
      </div>
      <div className="getting-started-section" id="getting-started">
        <h1 className="h-heading">Getting Started with Your Expense Tracker</h1>
        <p className="main-heading">
          Welcome to Expense Tracker! This guide will help you set up your account,
          add your first expense, and start tracking your spending in just a few
          simple steps.
        </p>
      </div>
    </>
  );
};

export default Help;
