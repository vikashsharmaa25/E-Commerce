"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { GET_PRODUCTS_BY_ID } from "@/graphql/queries";
import DOMPurify from "dompurify";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { productId: id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data?.product?.data?.attributes;

  console.log("product", product);

  const renderDescription = (description) => {
    return description?.map((item, index) => {
      switch (item?.type) {
        case "heading":
          return (
            <h3
              key={index}
              className={`text-xl font-bold my-2 ${
                item?.level === 5 ? "text-lg" : "text-xl"
              }`}
            >
              {item?.children?.map((child) => child?.text).join("")}
            </h3>
          );
        case "paragraph":
          return (
            <p key={index} className="text-gray-600 my-2">
              {item?.children?.map((child) => child?.text).join("")}
            </p>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 relative">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mb-4"
          >
            {product?.media?.data?.map((image) => (
              <SwiperSlide key={image?.id}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${image?.attributes?.url}`}
                  alt={product?.title}
                  width={500}
                  height={300}
                  className="object-contain flex justify-center  w-full h-[600px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
          >
            {product?.media?.data?.map((image) => (
              <SwiperSlide key={image?.id}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${image?.attributes?.url}`}
                  alt={product?.title}
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute top-2 right-2 z-20 w-12 h-12 flex justify-center items-center rounded-full bg-white shadow-md border border-gray-300 hover:bg-red-100 transition-colors duration-200"
            aria-label="Add to Favorites"
          >
            <FaHeart className="text-gray-500 hover:text-red-500 transition-colors duration-200 text-xl" />
          </button>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <div className="mb-4">{renderDescription(product?.description)}</div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-red-600 mr-2">
              ${product?.price}
            </span>
            {product?.FeaturedProduct && (
              <span className="bg-green-500 text-white px-2 py-1 text-sm rounded">
                Featured
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">
            Available: {product?.quantity_availbale}
          </p>
          <div className="flex space-x-4 mb-6 w-full justify-center items-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center w-full text-center">
              Buy now
            </button>
          </div>
          <div className="flex space-x-4 mb-6 w-full justify-center items-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center w-full text-center">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600">
              Last updated: {new Date(product?.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
