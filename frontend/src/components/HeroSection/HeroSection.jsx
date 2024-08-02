"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import MainImage from "@/assets/Frame 560.png";

export default function HeroSection() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={MainImage}
            alt=""
            width={1000}
            height={600}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={MainImage}
            alt=""
            width={1000}
            height={600}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={MainImage}
            alt=""
            width={1000}
            height={600}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
