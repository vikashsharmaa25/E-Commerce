import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = ({ toggleAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Log In
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
            required
          />
        </div>
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 font-semibold"
        >
          Log In
        </button>
      </form>
      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <a
          onClick={toggleAuth}
          className="text-red-600 hover:underline cursor-pointer"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
