import React, { useEffect, useState } from "react";
import { AppContext } from "./App_context";
import axios from "axios";
import { toast } from "react-toastify";

const App_State = (props) => {
  const url = "http://localhost:5000/backend";

  useEffect(() => {
    // login("johndoe@example.com", "securepassword");
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    // If a token exists in localStorage, try to auto-login or initialize login
    if (token) {
      axios.defaults.headers["Authorization"] = `Bearer ${token}`; // set token for further API requests
    }
  }, [token]);

  // Register function
  // const signUp = async (fname, lname, date, gender, email, password) => {
  //   const backend = await axios.post(
  //     `${url}/signUp`,
  //     { fname, lname, date, gender, email, password },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     }
  //   );
  // };

  const signUp = async (fname, lname, date, gender, email, password) => {
    try {
      const response = await axios.post(`${url}/signUp`, {
        fname,
        lname,
        date,
        gender,
        email,
        password,
      });
  
      return response; // return response from backend
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw new Error(error.response?.data.message || "Sign-up failed");
    }
  };

  // Login function
  const login = async (email, password) => {
    const backend = await axios.post(
      `${url}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setToken(backend.data.token);
    return backend;
    // console.log("Login data", backend);
  };

  // Logout function (clear token)
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    toast.info("Logged out successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <AppContext.Provider value={{ login, signUp, logout }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
