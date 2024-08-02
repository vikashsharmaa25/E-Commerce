import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex border border-white rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent p-2 flex-grow focus:outline-none"
              />
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <p className="mb-2">111 Bijoy sarani, Dhaka,</p>
            <p className="mb-2">DH 1515, Bangladesh.</p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <p className="mb-2">My Account</p>
            <p className="mb-2">Login / Register</p>
            <p className="mb-2">Cart</p>
            <p className="mb-2">Wishlist</p>
            <p>Shop</p>
          </div>

          {/* Quick Link Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Terms Of Use</p>
            <p className="mb-2">FAQ</p>
            <p>Contact</p>
          </div>

          {/* Download App Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Download App</h3>
            <p className="mb-4 text-sm text-gray-400">
              Save $3 with App New User Only
            </p>
            <div className="flex space-x-4 mb-4">
              <div className="w-24 h-24 bg-gray-800"></div>
              <div className="space-y-2">
                <Image
                  src="/path-to-google-play.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
                <Image
                  src="/path-to-app-store.png"
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <FaFacebookF className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaLinkedinIn className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
