import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setErrors("Email and password are required.");
      console.log("Errors set:", "Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://670398d0ab8a8f892730c8c1.mockapi.io/registrations?email=${email}&password=${password}`
      );

      if (response.data.length > 0) {
        console.log("User logged in successfully:", response.data[0]);
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        navigate("/home");
      } else {
        setErrors("Invalid email or password.");
        console.log("Errors set:", "Invalid email or password.");
      }
    } catch (error) {
      if (error.response) {
        console.log("Login failed:", error.response.data.message);
        setErrors("Invalid email or password.");
      } else {
        console.error("Error logging in:", error.message);
        setErrors("Failed to log in. Please try again.");
      }
      console.log("Errors set:", error.message);
    } finally {
      setLoading(false);
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
            <h1 className="text-black font-extrabold text-4xl p-5">
              Welcome Back
            </h1>
          </div>
          <div>
            <h1 className="text-black font-extrabold text-2xl p-5">
              Sign in to your account.
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email address"
                className=" border-2  p-3 rounded-lg text-black"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors) setErrors("");
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="  border-2 text-black p-3 rounded-lg text-black"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors) setErrors("");
                }}
              />
              {errors && <p className="text-red-500">{errors}</p>}
              <button
                className="bg-black p-3 rounded-lg text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>
          <div className="mt-5">
            <h1 className="text-black font-extrabold text-2xl p-5">
              Don't have an account?
            </h1>
            <button
              className="text-black p-3 rounded-full border w-full border-gray-700 font-bold"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
