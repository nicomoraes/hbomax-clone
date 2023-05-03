"use client";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useSwiper } from "swiper/react";

interface SlideDotButtonProps {
  slideIndex: number;
}

export const SlideDotButton: React.FC<SlideDotButtonProps> = ({
  slideIndex,
}) => {
  const swiper = useSwiper();
  return (
    <span
      className={`h-[10px] w-[10px] cursor-pointer rounded-full 
      ${swiper.activeIndex === slideIndex ? "bg-white/50" : "bg-white"}`}
      onClick={() => swiper.slideTo(slideIndex)}
    />
  );
};

interface SlideButtonProps {
  direction: "previous" | "next";
}

export const SlideButton: React.FC<SlideButtonProps> = ({ direction }) => {
  const swiper = useSwiper();
  return direction === "previous" ? (
    <button className="flex h-max w-max" onClick={() => swiper.slidePrev()}>
      <MdArrowBackIos
        size={25}
        className="cursor-pointer text-white/50 hover:text-white"
        style={{ verticalAlign: "middle" }}
      />
    </button>
  ) : (
    <button className="h-max w-max" onClick={() => swiper.slideNext()}>
      <MdArrowForwardIos
        size={25}
        className="cursor-pointer text-white/50 hover:text-white"
      />
    </button>
  );
};
