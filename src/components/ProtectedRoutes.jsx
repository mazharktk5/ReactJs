import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/Usercontext"; // Assuming UserContext handles user state

const ProtectedRoute = ({ children }) => {
  const { user } = useUser(); // Get the logged-in user

  if (!user) {
    // If user is not logged in, redirect to login
    return <Navigate to="/signup" replace />;
  }

  // If user is logged in, render the child components
  return children;
};

export default ProtectedRoute;
