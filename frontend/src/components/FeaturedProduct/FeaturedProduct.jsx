"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaHeart, FaEye } from "react-icons/fa";
import ProImage from "@/assets/Frame 611.png";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      discount: 40,
      oldPrice: 160,
      price: 120,
      rating: 4.5,
      reviews: 88,
      image: ProImage,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      discount: 35,
      oldPrice: 1160,
      price: 960,
      rating: 4.3,
      reviews: 75,
      image: ProImage,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      discount: 30,
      oldPrice: 400,
      price: 370,
      rating: 4.7,
      reviews: 99,
      image: ProImage,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      discount: 25,
      oldPrice: 500,
      price: 375,
      rating: 4.6,
      reviews: 90,
      image: ProImage,
    },
    {
      id: 5,
      name: "Ultra HD TV",
      discount: 20,
      oldPrice: 1000,
      price: 800,
      rating: 4.8,
      reviews: 150,
      image: ProImage,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      discount: 50,
      oldPrice: 300,
      price: 150,
      rating: 4.4,
      reviews: 120,
      image: ProImage,
    },
  ];

  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md mt-10">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="productSwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="max-w-[350px] min-w-[350px]">
            {" "}
            <div className="bg-gray-100 p-4 rounded-lg relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-black">{product.name}</h3>
                <div className="flex space-x-2">
                  <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
                  <FaEye className="text-gray-500 hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="text-gray-500 line-through">
                  ${product.oldPrice}
                </span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex items-center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                      </svg>
                    ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProduct;
