"use client";
import { HTMLAttributes } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

interface SlideButtonProps extends HTMLAttributes<HTMLButtonElement> {
  direction: "previous" | "next";
}

export const SlideButton: React.FC<SlideButtonProps> = ({
  direction,
  ...rest
}) => {
  return direction === "previous" ? (
    <button className="h-[383px] w-max items-center justify-center" {...rest}>
      <MdArrowBackIos
        size={30}
        className="cursor-pointer text-white/50 hover:text-white"
        style={{ verticalAlign: "middle" }}
      />
    </button>
  ) : (
    <button className="h-[383px] w-max items-center justify-center" {...rest}>
      <MdArrowForwardIos
        size={30}
        className="cursor-pointer text-white/50 hover:text-white"
      />
    </button>
  );
};
