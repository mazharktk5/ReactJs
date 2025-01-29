import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/Firebase"; 
import { toast } from "react-toastify"; 

import Signupimage from "../assets/images/SignUp/Signupimage.png";

const Login = () => {
  const { login } = useContext(FirebaseContext); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      await login(formData.email, formData.password); 
      toast.success("Logged in successfully!"); 
      setError("");
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
      
    } catch (error) {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      
      <div className="flex flex-wrap max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-2xl font-bold mb-4">Log in to Exclusive</h1>
          <p className="font-semibold p-2">Enter your details below</p>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border-b-2 rounded-lg focus:outline-none"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-between text-sm mt-2">
              New here?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
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
