import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://yourhr-cyan.vercel.app/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Add other headers if required
          },
        }
      );
      if (response.data.success) {
        toast.success("Logged In");
        navigate("/home");
      } else {
        toast.error("Please Enter Correct Password");
      }
    } catch (error) {
      toast.error("Failed to Login.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
