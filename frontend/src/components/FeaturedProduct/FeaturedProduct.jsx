"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaHeart, FaEye } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/graphql/queries";
import { useCart } from "../Cart/useCart";
import { toast } from "sonner";

const FeaturedProduct = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const { addToCart } = useCart();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const featuredProducts =
    data?.products?.data.filter(
      (product) => product.attributes.FeaturedProduct
    ) || [];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.attributes.title,
      price: product.attributes.price,
      image: product.attributes.media.data[0].attributes.url,
      quantity: 1,
    });
    toast("Product added to cart successfully");
  };

  return (
    <div className="bg-white rounded-lg mt-10">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="productSwiper"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            className="max-w-[350px] min-w-[350px] border border-gray-400 rounded-lg"
          >
            <div className="p-4 rounded-lg relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.attributes.media.data[0].attributes.url}`}
                alt={product.attributes.title}
                width={300}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-black truncate">
                  {product.attributes.title}
                </h3>
              </div>
              <div className="mt-2 flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-bold">
                  ₹{product.attributes.price}
                </span>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Add To Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProduct;
