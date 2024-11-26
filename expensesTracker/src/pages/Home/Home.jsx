import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* Navbar Imported here  */}

      <Navbar />

      {/* Home Page Container content started here */}

      <div className="main-container">
        <div className="hero-container">
          <div className="text-container">
            <h1 className="header-text">Budget Better, Live Better</h1>
            <p className="para-text">
              Gain insights into your spending habits, set personalized budgets,
              and receive helpful reminders—all in one place.
            </p>
            <button className="SignUp-button">
              <Link to={"/sign-up"}>Sign Up</Link>
            </button>
          </div>
          <div className="image-container">
            <img src="/images/manImage.png" alt="..." className="cartoon-img" />
          </div>
        </div>
        <p className="price-para">Plans & Pricing</p>
        <div className="card-container">
          <div className="card card-1"></div>
          <div className="card card-2"></div>
          <div className="card card-3"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
