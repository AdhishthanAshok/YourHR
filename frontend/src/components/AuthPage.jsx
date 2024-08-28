import React, { useState } from "react";
import SignInForm from "./SignInForm";
import LoginForm from "./LoginForm";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-gray-200 h-screen p-4">
      <img
        src="https://th.bing.com/th/id/OIG2.fsTCR5X8uCigV7ftWoDv?pid=ImgGn"
        alt="YH"
        className="w-20 h-20 m-auto my-2"
      />
      <div className="w-full flex flex-col items-center justify-center max-w-2xl bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-center gap-10">
          <button
            onClick={() => setIsSignIn(true)}
            className={`py-2 px-4 rounded ${
              isSignIn ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            } focus:outline-none`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`py-2 px-4 rounded ${
              !isSignIn ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            } focus:outline-none`}
          >
            Login
          </button>
        </div>
        {isSignIn ? <SignInForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default AuthPage;
