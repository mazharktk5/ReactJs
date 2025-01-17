import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signupimage from "../assets/images/SignUp/Signupimage.png"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");  
  const [showPopup, setShowPopup] = useState(false);  
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password){
      setError("Both fields are required.");
      return;
    }
    if (formData.password.length<6){
      setError("Password must be at least 6 characters");
      return;
    }

    
    setError("");
    setShowPopup(true);  // Show pop-up

    
    setFormData({
      email: "",
      password: "",
    });
    
    
    setTimeout(() => {
      setShowPopup(false);
      navigate("/");  
    }, 2000);  
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-wrap max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-2xl font-bold mb-4">Log in to Exclusive</h1>
          <p className="font-semibold p-2">Enter your details below</p>
          
          {/* Error Message */}
          {error && <p className="text-red-500 mb-2">{error}</p>}

          {/* Login Form */}
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

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 p-5">
          <img src={Signupimage} alt="login" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Pop-up Message */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <p>Logged in successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
