"use client";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthMain = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login toggleAuth={toggleAuth} onAuthSuccess={onAuthSuccess} />
      ) : (
        <Signup toggleAuth={toggleAuth} onAuthSuccess={onAuthSuccess} />
      )}
    </div>
  );
};

export default AuthMain;
