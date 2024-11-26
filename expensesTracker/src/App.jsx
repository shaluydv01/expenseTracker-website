import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Lazy load components to optimize the initial load
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Help = React.lazy(() => import("./pages/Help/Help"));
const User = React.lazy(() => import("./pages/User/User"));

const App = () => {
  return (
    <Router>
      {/* Suspense fallback shows while the component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
