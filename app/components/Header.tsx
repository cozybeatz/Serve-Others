"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { grotesque } from "../fonts";
import Link from "next/link";
import TypingEffect from "./TypingEffect";
import { togglePopupForm } from "../utils";
import Button from "./button";

export default function Header(): JSX.Element {
  return (
    <>
      <header className="relative text-center px-4 pt-20 md:px-24 md:py-10 space-y-4">
        <Image
          className="absolute top-40 md:top-10 left-0"
          src="/abstracts/abs1.svg"
          width={140}
          height={140}
          alt="Abstract"
        />
        <div
          className={`relative z-10 text-black text-6xl md:text-8xl font-black tracking-tighter`}
        >
          <TypingEffect />
        </div>
        <Button
          text="Experience 2 Weeks FREE"
          font={grotesque}
          type="Link"
          fn={togglePopupForm}
        />
      </header>
    </>
  );
}
