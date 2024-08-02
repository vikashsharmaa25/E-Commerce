"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-[1450px] mx-auto flex justify-between items-center p-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black">Exclusive</h1>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul
          className={`flex-col md:flex-row md:flex ${
            isOpen ? "flex" : "hidden"
          } absolute md:static bg-white md:bg-transparent top-16 md:top-0 left-0 right-0 md:w-auto w-full border-t md:border-t-0 border-gray-200 md:border-none shadow-md md:shadow-none transition-all duration-300 ease-in-out md:space-x-6`}
        >
          <li className="text-center md:text-left">
            <Link
              href="#"
              className="block py-2 px-4 text-black hover:text-purple-500"
            >
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="#"
              className="block py-2 px-4 text-black hover:text-purple-500"
            >
              Contact
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="#"
              className="block py-2 px-4 text-black hover:text-purple-500"
            >
              About
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              href="#"
              className="block py-2 px-4 text-black hover:text-purple-500"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 border border-gray-300 rounded-md py-1 px-3 outline-none focus:border-purple-500 transition"
          />
          <FaSearch className="text-gray-600 cursor-pointer" />
          <FaHeart className="text-gray-600 cursor-pointer" />
          <FaShoppingCart className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
