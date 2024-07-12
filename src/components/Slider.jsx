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

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
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
        className="mySwiper  p-10 md:p-28"
      >
        <SwiperSlide>
          <img src={bio} className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={univ} className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wefit} className="rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={lib} className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic} className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
