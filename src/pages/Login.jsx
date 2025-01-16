import React from "react";
import { Link } from "react-router-dom";
import Signupimage from "../assets/images/SignUp/Signupimage.png"; // Replace with your login image path

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-wrap max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-2xl font-bold mb-4">Log in to Exclusive</h1>
          <p className="font-semibold p-2">Enter your details below</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border-b-2 rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-b-2 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Log In
            </button>
            <div className="flex justify-between text-sm mt-2">
              <Link to="/forgot-password" className="text-red-500 hover:underline">
                Forget Password?
              </Link>
            </div>
            <div className="flex justify-between text-sm mt-2">
                New here?
              <Link to="/signUp" className="text-blue-500 hover:underline">
                SignUp
              </Link>
            </div>
            
          </form>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <img src={Signupimage} alt="login" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
