// src/components/SignupButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function SignupButton({ text = "Sign up for free", className = "", style = {} }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <button
      className={`btn btn-primary p-2 fs-5 mb-5 ${className}`}
      style={{ width: "20%", margin: "0 auto", ...style }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default SignupButton;
