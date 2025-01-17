import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import to navigate programmatically
import { useUser } from "../components/UserContext"; // Import the UserContext
import Signupimage from "../assets/images/SignUp/Signupimage.png";
import Google from "../assets/images/SignUp/Google.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { setIsSignedUp } = useUser(); // Access the setIsSignedUp function from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    // Update the global state to reflect sign-up status
    setIsSignedUp(true);

    // Display the popup message
    setIsPopupVisible(true);

    // Navigate to the home page after 2 seconds
    setTimeout(() => {
      setIsPopupVisible(false);
      navigate("/Login");  // Redirect to the home page
    }, 2000);

    // Log form data (Optional)
    console.log(formData);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-wrap max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-5">
          <img
            src={Signupimage}
            alt="signup"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-2xl font-bold mb-4">Create an account</h1>
          <p className="font-semibold p-2">Enter Your Details</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b-2 rounded-lg focus:outline-none"
            />
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
              Create Account
            </button>
            <div className="flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
              <img src={Google} alt="Google icon" className="w-5 h-5 mr-2" />
              Sign up with Google
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                LogIn
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Popup message for successful signup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-green-500 font-bold">Sign Up Successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
