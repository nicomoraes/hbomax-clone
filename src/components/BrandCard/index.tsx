"use client";
import { CARDS_DATA } from "@/utils/cards";
import Card from "./components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useRef } from "react";

const BrandCard = () => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <>
      {/* Large screens */}
      <div className="mx-auto mt-12 flex h-max w-full flex-col gap-y-4 max-sm:hidden">
        <div className="mx-auto grid max-w-screen-xl grid-cols-3 items-center justify-center gap-6 bg-dark-blue">
          {CARDS_DATA.map((brand) => (
            <Card
              key={`brand-${brand.standard.split("-")[0]}-card`}
              standard={brand.standard}
              hover={brand.hover}
            />
          ))}
        </div>
      </div>
      {/* Mobile */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="!hidden h-max w-full max-sm:!block"
      >
        {CARDS_DATA.map((brand, index) => (
          <SwiperSlide
            className="!w-max"
            key={`brand-${brand.standard.split("-")[0]}-card`}
            onClick={() => swiperRef.current?.slideTo(index)}
          >
            <Card standard={brand.standard} hover={brand.hover} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

// const BrandCard = () => {
//   return (
//
//   );
// };

export default BrandCard;
