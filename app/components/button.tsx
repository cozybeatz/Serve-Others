"use client";
import React, { useEffect } from "react";
import Link from "next/link";
interface ButtonProps {
  text: string;
  font: any;
  type: string;
  backgroundColor?: string;
  textColor?: string;
  fn: (e: any) => any;
}

export default function Button({
  text,
  font,
  type,
  fn,
  backgroundColor = "bg-black",
  textColor = "text-stone-100",
}: ButtonProps) {
  return (
    <>
      {type === "Link" ? (
        <div className="relative w-max mx-auto hover:-translate-y-2 transition-all">
          <Link
            onClick={fn}
            href="#"
            className={`block z-10 relative rounded-md ${backgroundColor} ${textColor} px-8 py-4 font-bold text-lg ${font.className}`}
          >
            {text}
          </Link>
          <div className="w-full h-12 bg-stone-400 absolute -bottom-1 -right-1 rounded-md text-stone-100 px-6 py-2"></div>
        </div>
      ) : (
        <div className="relative w-max mx-auto hover:-translate-y-1 transition-all">
          <button
            onClick={fn}
            className={`z-10 relative rounded-md ${backgroundColor} ${textColor}  px-16 py-4 font-bold text-xl ${font.className}`}
          >
            {text}
          </button>
          <div className="w-full h-12 bg-stone-400 absolute -bottom-1 -right-1 rounded-md text-stone-100 px-6 py-2"></div>
        </div>
      )}
    </>
  );
}
