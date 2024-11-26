import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  // const navigate = useNavigate();

  // Use react-hook-form to handle form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Updated login handler using handleSubmit to get form data
  const loginHandler = async (data) => {
    console.log("Form Data:", data); // This will help you debug if data is being passed properly
    if (!data) {
      toast.error("No data received!");
      return;
    }

    const { email, password } = data; // Access the email and password from the form data
    const result = await login(email, password);

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
      navigate("/");
    }, 3000);

    // console.log(result.data);
  };

  return (
    <>
      <ToastContainer />

      <p id="go-to-home">
        &#11160; Go to <Link to={"/"}>Home</Link> page
      </p>
      <div className="login-container">
        <div className="login-page-text">
          <p className="larger-text">myExpenses</p>
          <p className="smaller-text">
            myExpenses keeps track of your expenses and incomes
          </p>
        </div>

        <div className="form-content-container">
          <form
            className="form-container"
            onSubmit={handleSubmit(loginHandler)} // Use handleSubmit to manage form submission
          >
            <input
              {...register("email", { required: "This is required...😊" })}
              className="input-login"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && <p>{errors.email.message}</p>}
            {/* Error handling for email */}

            <input
              {...register("password", {
                required: "This is required...😊",
                minLength: {
                  value: 8,
                  message: "Required length is 8",
                },
              })}
              className="input-login"
              type="password"
              id="password"
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
            {/* Error handling for password */}

            <button type="submit" className="login-btn btn">
              Login
            </button>
            <p className="forget-text frm-text">
              <Link>Forget Password ?</Link>
            </p>
            <button className="create-btn btn">
              <Link to={"/sign-up"}>Create Account</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
