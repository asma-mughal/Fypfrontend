import React from "react";
import { Navigate } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  if (JSON.parse(token)) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;