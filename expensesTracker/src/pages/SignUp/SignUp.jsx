import React, { useContext } from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AppContext);

  // --------------------------React Hook Form--------------//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const registerHandler = async (data) => {
    console.log("Form Data:", data);
    // Extract data from the form submission
    const { fname, lname, date, gender, email, password } = data;

    // Call the signUp API function
    const result = await signUp(fname, lname, date, gender, email, password);

    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setTimeout(() => {
      navigate("/login"); // Navigate to the homepage after 3 seconds
    }, 3000);

    // console.log("SignUp Result:", result); // Debugging the result
  };

  return (
    <>
      <ToastContainer />

      {/* -----------------------Sign Up Contents---------------- */}
      <div className="signup-main-container">
        <p id="go-to-home">
          &#11160; Go to <Link to={"/"}>Home</Link> page
        </p>
        <p className="signup-logo-text">myExpenses</p>
        <div className="main-form-container">
          <form onSubmit={handleSubmit(registerHandler)}>
            <p className="larger-form-para">Create a new account</p>
            <p className="smaller-form-para">It's quick and easy.</p>
            
            {/* Name Fields */}
            <fieldset className="name-container">
              <input
                type="text"
                {...register("fname", { required: "This is required...😊" })}
                id="fname"
                placeholder="First Name"
              />
              <input
                type="text"
                {...register("lname", { required: "This is required...😊" })}
                id="lname"
                placeholder="Last Name"
              />
            </fieldset>
            <p>{errors.fname?.message}</p>

            {/* Date of Birth */}
            <fieldset className="date-select">
              <legend id="date-text">Date of birth ?</legend>
              <input
                type="date"
                {...register("date", { required: "This is required...😊" })}
                id="date"
              />
            </fieldset>
            <p>{errors.date?.message}</p>

            {/* Gender Selection */}
            <fieldset className="gender-select">
              <legend id="gender-text">Gender ?</legend>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender", { required: "This is required...😊" })}
                id="male"
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                {...register("gender", { required: "This is required...😊" })}
                id="female"
              />
              <label htmlFor="other">Other</label>
              <input
                type="radio"
                name="gender"
                value="other"
                {...register("gender", { required: "This is required...😊" })}
                id="other"
              />
            </fieldset>
            <p>{errors.gender?.message}</p>

            {/* Email Input */}
            <fieldset className="email-container">
              <input
                type="email"
                {...register("email", {
                  required: "This is required...😊",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                placeholder="myexpenses@gmail.com"
              />
            </fieldset>
            <p>{errors.email?.message}</p>

            {/* Password Input */}
            <fieldset className="password-container">
              <input
                type="password"
                {...register("password", {
                  required: "This is required...😊",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long...!",
                  },
                })}
                id="password"
                placeholder="New Password"
              />
            </fieldset>
            <p>{errors.password?.message}</p>

            <button type="submit" className="signUp-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
