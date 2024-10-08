import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "@/graphql/mutation";
import { useRouter } from "next/navigation";

const Signup = ({ toggleAuth, onAuthSuccess }) => {
  const router = useRouter();
  const [registerUser, { loading, error }] = useMutation(SIGNUP_USER);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({
        variables: {
          input: {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          },
        },
      });
      console.log("Registration successful:", data);

      localStorage.setItem("token", data?.register?.jwt);
      localStorage.setItem("user", JSON.stringify(data?.register?.user));
      onAuthSuccess(data?.register?.user);
      router.push("/");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Create an Account
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
            required
          />
        </div>
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
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-center mt-4">{error.message}</p>
      )}
      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <a
          onClick={toggleAuth}
          className="text-red-600 hover:underline cursor-pointer"
        >
          Log in
        </a>
      </p>
    </div>
  );
};

export default Signup;
