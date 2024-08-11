"use client";

import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCart } from "@/components/Cart/useCart";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 h-[500px] overflow-y-auto p-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start border-b py-4">
                <div className="w-[20%] relative mr-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.image}`}
                    alt={item.title}
                    width={400}
                    height={400}
                    objectFit="contain"
                  />
                </div>
                <div className="w-[80%] flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="bg-gray-200 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-full flex flex-col justify-between h-[500px]">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className=" w-full">
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default CartPage;
