"use client";

import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/graphql/queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExploreProducts = ({ selectedCategory }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const allProducts = data?.products?.data || [];
  const products = selectedCategory
    ? allProducts.filter(
        (product) =>
          product.attributes.category.data.attributes.name === selectedCategory
      )
    : allProducts;

  const handleViewAll = () => {
    setVisibleProducts(products.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-400 ${
          index < Math.floor(rating) ? "text-opacity-100" : "text-opacity-30"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="mb-6">
          <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            Our Products
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-6">Explore Our Products</h2>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-10">
            Product not found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <div className="relative">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      pagination={{ clickable: true }}
                      className="h-48"
                    >
                      {product.attributes.media.data.map((image, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${image.attributes.url}`}
                            alt={`${product.attributes.title} - Image ${
                              index + 1
                            }`}
                            layout="fill"
                            objectFit="contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                  {product.attributes.FeaturedProduct && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
                      FEATURED
                    </span>
                  )}
                  <div className="absolute top-2 right-2 flex space-x-2 z-10">
                    <button className="text-gray-600 hover:text-red-500">
                      <FaHeart />
                    </button>
                    <button className="text-gray-600 hover:text-blue-500">
                      <FaEye />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.attributes.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <span className="text-red-500 font-bold">
                      ${product.attributes.price}
                    </span>
                    <div className="ml-2 flex items-center">
                      {renderStars(4)}
                      <span className="text-gray-500 text-sm ml-1">
                        ({product.attributes.quantity_availbale})
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {visibleProducts < products.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ExploreProducts;
