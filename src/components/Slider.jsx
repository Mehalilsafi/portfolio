// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bio from "../assets/bio.png";
import pic from "../assets/picVibe.png";
import lib from "../assets/lib.png";
import univ from "../assets/univ.png";
import wefit from "../assets/wefit.png";
import hanouti from "../assets/hanouti.png"

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  const images = [
    {
src:hanouti,
name:'hanouti',
description:"Landing Page Builder with Ecommerce Analytics ",
tool:"React.js, Typescript, Tailwind CSS, shadcn, React Router,Express.js Postgresql"
    },
    {
      src: bio,
      name: "bio Express",
      description: "E-commerce site built with Next.js.",
      tool: "Next.js, Tailwind CSS, Zustand, Supabase",
    },
    {
      src: univ,
      name: "univ app",
      description: "App for Faculty of Computer Science using Next.js.",
      tool: "Next.js, Tailwind CSS, Preline",
    },
    {
      src: wefit,
      name: "Wefit",
      description: "App simplifying workouts and gym assistance.",
      tool: "Next.js, CSS",
    },
    {
      src: lib,
      name: "Bookling",
      description: "App for bookworkers to rent books and manage.",
      tool: "Next.js, Tailwind CSS, Supabase",
    },
    {
      src: pic,
      name: "picVibe",
      description:
        "Image gallery app for creating profiles and uploading images.",
      tool: "Next.js, Tailwind CSS, Shadcn/UI, Supabase",
    },
  ];
  return (
    <div className="flex justify-center items-center mt- bg-bgSecondary mt-9 rounded-2xl">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  p-5 md:p-28"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={image.src}
              alt={image.name}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-extrabold ">{image.name}</h3>
              <p className="text-lg font-semibold ">{image.description}</p>
              <p className="text-primary txt-lg font-semibold"> {image.tool}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
