import React, { useState } from "react";
import axios from "axios"; // Import axios
import { Link } from "react-router-dom";
const Signup = () => {
  // State management for form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [yourname, setYourname] = useState("");

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let formErrors = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      formErrors += "Please enter a valid email address. ";
    }

    if (!username) {
      formErrors += "Username is required. ";
    }

    if (!password) {
      formErrors += "Password is required. ";
    } else if (password.length < 6) {
      formErrors += "Password must be at least 6 characters long. ";
    }

    setErrors(formErrors);
    return formErrors === "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newUser = { email, username, password, yourname, profile };

    try {
      const response = await axios.post(
        "https://670398d0ab8a8f892730c8c1.mockapi.io/registrations",
        newUser
      );

      console.log("User registered successfully:", response.data);
      window.location.href = "/login";
    } catch (error) {
      if (error.response) {
        console.log("Signup failed:", error.response.data.message);
        setErrors(error.response.data.message);  
      } else {
     
        console.error("Error signing up:", error.message);
        setErrors("Failed to sign up. Please try again.");  
      }
    }
  };

  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row md:justify-around justify-center items-center bg-white p-5">
        <div>
          <img
            src="https://i.pinimg.com/564x/85/4d/4d/854d4db87341a11bf63b4cae13cead76.jpg"
            alt="logo"
            className="rounded-full w-[60%] md:w-[100%] hover:border-gray-500"
          />
        </div>
        <div>
          <div>
            <h1 className="text-black font-extrabold text-4xl p-5"> library</h1>
          </div>
          <div>
            <h1 className="text-black font-extrabold text-2xl p-5">
              Join With Us{" "}
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Email address"
                className=" border-2  p-3 rounded-lg text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="User Name"
                className=" border-2  p-3 rounded-lg text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your Name"
                className=" border-2  p-3 rounded-lg text-black"
                value={yourname}
                onChange={(e) => setYourname(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className=" border-2  p-3 rounded-lg text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors && <p className="text-red-500">{errors}</p>}{" "}
              {/* Display error messages */}
              <button
                className="bg-black p-3 rounded-lg text-white"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="mt-5">
            <h1 className="text-black font-extrabold text-2xl p-5">
              Already have an account?
            </h1>
            <Link to="/login">
              <button className="text-black hover:bg-white hover:text-black p-3 rounded-full border w-full border-gray-700 font-bold">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
