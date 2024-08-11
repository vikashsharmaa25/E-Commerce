import { LOGIN_URL } from "@/graphql/mutation";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = ({ toggleAuth, onAuthSuccess }) => {
  const router = useRouter();
  const [loginUser, { loading, error }] = useMutation(LOGIN_URL);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          input: {
            identifier: formData.identifier,
            password: formData.password,
          },
        },
      });
      console.log("Login successful:", data);

      localStorage.setItem("token", data.login.jwt);
      localStorage.setItem("user", JSON.stringify(data.login.user));
      onAuthSuccess(data?.login?.user);
      router.push("/");
    } catch (err) {
      console.error("Login error:", err);
    }
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
            type="text"
            name="identifier"
            placeholder="Email or Username"
            value={formData.identifier}
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
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-center mt-4">{error.message}</p>
      )}
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
