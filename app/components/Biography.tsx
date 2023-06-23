"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { manrope } from "../fonts";

export default function Biography() {
  return (
    <>
      <div
        className={`py-10 px-5 md:px-10 flex flex-col items-center space-y-4`}
      >
        <div className="bg-stone-100 p-2 rounded-full">
          <div className="relative bg-stone-200 p-2 rounded-full">
            <Image
              className="relative z-10"
              src="/matt.webp"
              width={290}
              height={290}
              alt="Matt Shields"
            />
          </div>
        </div>

        <div
          id="content"
          className={`text-black text-center text-xl space-y-4 md:w-4/5 lg:w-3/5 font-normal ${manrope.className}`}
        >
          <p>
            After battling with extreme anxiety, depression, and OCD for years,
            and dropping out of High School after 9th grade...
          </p>
          <p className="uppercase text-amber-600 font-medium">I gave up.</p>
          <p>
            When I was 15 years old, I decided that the only way to get rid of
            the hell that I felt waking up everyday would be to eliminate
            myself.
          </p>
          <p>My plan was, after my 18th birthday, to end it all.</p>
          <p className="uppercase text-amber-600 font-medium">
            I{"'"}m not proud to say that.
          </p>
          <p>My plan was, after my 18th birthday, to end it all.</p>
          <p>
            In fact, it{"'"}s probably the most ignorant thing that{"'"}s ever
            come out of my mouth.
          </p>
          <p>But, that{"'"}s how dark (I thought) my world was.</p>
          <p>
            By the grace of God... I discovered entrepreneurship at the age of
            17.
          </p>
          <p>Just 6 months before my 18th birthday...</p>
          <p>
            And for the first time in years,
            <span className="text-amber-600"> I felt hope.</span>
          </p>
          <p>
            I went on to build 5 Six Figure companies by the age of 19, and
            building and{" "}
            <span className="text-amber-600">
              exiting my first multi-7 figure company by the age of 22.
            </span>
          </p>

          <p>
            In just a few short years, I went from{" "}
            <span className="text-amber-600">broke & completely hopeless</span>{" "}
            to a 21 year old millionaire traveling the world with his family &
            best friends.
          </p>
          <p>
            Gratitude doesn{"'"}t even begin to explain how I felt, and how I
            feel now.
          </p>
          <p>
            Not only did I become financially free, but I battled the darkest of
            my demons, got into the best shape of my life, & ventured on the
            path to complete freedom (Financial, Mental, & Physical).
          </p>
          <p>
            Now, I{"'"}m on a mission to ignite a truly free world & help create
            as many quantum leaps in other entrepreneurs, like you, as I
            possible can.
          </p>
          <p className="text-amber-600">
            <em>
              I hope you consider checking out this 1 of a kind community.
            </em>
          </p>
          <div className="text-amber-600 italic">
            <p>All the love,</p>
            <p>Matt Shields</p>
          </div>
        </div>
      </div>
    </>
  );
}
