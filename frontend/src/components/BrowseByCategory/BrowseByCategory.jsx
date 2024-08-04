"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaShoppingBag,
  FaTshirt,
  FaLaptop,
  FaCouch,
  FaSprayCan,
  FaHeartbeat,
  FaBook,
  FaGamepad,
  FaCar,
  FaFootballBall,
  FaAppleAlt,
} from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORY } from "@/graphql/categoryQueries";

const getCategoryIcon = (categoryName) => {
  switch (categoryName) {
    case "Fashion & Apparel":
      return FaTshirt;
    case "Electronics":
      return FaLaptop;
    case "Home & Living":
      return FaCouch;
    case "Beauty & Personal Care":
      return FaSprayCan;
    case "Health & Wellness":
      return FaHeartbeat;
    case "Books, Music & Movies":
      return FaBook;
    case "Toys & Games":
      return FaGamepad;
    case "Automotive":
      return FaCar;
    case "Sports & Outdoors":
      return FaFootballBall;
    case "Groceries & Food":
      return FaAppleAlt;
    default:
      return FaShoppingBag;
  }
};

const BrowseByCategory = ({ selectedCategory, onCategoryChange }) => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const categories = data?.categories?.data || [];

  return (
    <div className="mt-10">
      <div className="mb-6">
        <span className="bg-red-500 text-white py-1 rounded-md text-sm">
          Categories
        </span>
      </div>
      <h2 className="sm:text-3xl text-lg font-bold mb-6">Browse By Category</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {categories.map((category) => {
          const IconComponent = getCategoryIcon(category?.attributes?.name);
          return (
            <SwiperSlide key={category.id}>
              <div
                className={`border rounded-lg flex flex-col items-center justify-center h-32 cursor-pointer transition-colors ${
                  category.attributes.name === selectedCategory
                    ? "bg-red-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => onCategoryChange(category?.attributes?.name)}
              >
                <IconComponent className="text-3xl mb-2" />
                <span className="text-sm text-center">
                  {category.attributes.name}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BrowseByCategory;
