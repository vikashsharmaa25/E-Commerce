"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaMobileAlt,
  FaDesktop,
  FaCamera,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";
import { IoWatch } from "react-icons/io5";

const categories = [
  { name: "Phones", icon: FaMobileAlt },
  { name: "Computers", icon: FaDesktop },
  { name: "SmartWatch", icon: IoWatch },
  { name: "Camera", icon: FaCamera },
  { name: "HeadPhones", icon: FaHeadphones },
  { name: "Gaming", icon: FaGamepad },
];

const BrowseByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-6">
        <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
          Categories
        </span>
      </div>
      <h2 className="text-3xl font-bold mb-6">Browse By Category</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-4 border rounded-lg flex flex-col items-center justify-center h-32 cursor-pointer transition-colors ${
                category.name === selectedCategory
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <category.icon className="text-3xl mb-2" />
              <span className="text-sm">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrowseByCategory;
