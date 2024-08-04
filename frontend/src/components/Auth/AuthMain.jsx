"use client";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function AuthMain() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full">
        {isLogin ? (
          <Login toggleAuth={toggleAuth} />
        ) : (
          <Signup toggleAuth={toggleAuth} />
        )}
      </div>
    </div>
  );
}

export default AuthMain;
