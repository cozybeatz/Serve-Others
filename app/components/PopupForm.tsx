"use client";
import React, { useEffect } from "react";
import { HiOutlineX, HiCheck } from "react-icons/hi";
import { grotesque } from "../fonts";
import { togglePopupForm } from "../utils";
import Button from "./button";
import useContactForm from "../hooks/useContactForm";
import useButtonText from "../hooks/useButtonState";
import sendEmail from "../lib/sendEmail";
import { toast } from "react-toastify";

const PopupForm = () => {
  const { values, handleChange } = useContactForm();
  const { buttonState, handleButtonState } = useButtonText();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    handleButtonState("Confirming Your Free Trial", "bg-gray-500");
    try {
      const req = await sendEmail(values.name, values.email, values.phone);
      if (req.status === 200) {
        handleButtonState("Confirm My Free Trial", "bg-amber-300");
        toast.success(req.data.message);
      }
    } catch (e) {
      console.log(e);
      handleButtonState("Confirm My Free Trial", "bg-amber-300");
      toast.error("Oops something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const popup_form: HTMLElement | Element | null =
      document.querySelector("#popup-form");

    setTimeout(() => {
      popup_form?.classList.toggle("hidden");
      popup_form?.classList.toggle("animate-scale");
    }, 3000);
  }, []);

  return (
    <div
      id="popup-form"
      className="hidden z-20 fixed top-20 md:left-80 py-10 px-5 bg-stone-900 rounded-md md:w-3/5 lg:w-2/5 mx-6 "
    >
      <div className="mx-auto">
        <div className="flex justify-end">
          <HiOutlineX
            className="text-white bg-rose-600 rounded-full p-1 w-6 h-6 cursor-pointer"
            onClick={togglePopupForm}
          />
        </div>
        <p className="text-stone-50 text-lg text-center font-semibold">
          Reserve Your FREE 2-Week VIP Trial
        </p>
        <p className="relative z-10 text-stone-200 text-lg text-center">
          This is basically <span className="text-amber-500 "></span> free
          access to a{" "}
          <span className="text-amber-500 ">$30k per year Mastermind</span>.{" "}
          <br />
          (It
          {"'"}s only <span className="text-amber-500 ">$97/mo</span> after -
          and yes, ik it should cost more...)
        </p>

        <form onSubmit={handleSubmit} className="relative my-4 z-10">
          <div className="mb-6">
            <input
              name="name"
              type="text"
              className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-400 transition duration-300 px-4 placeholder:text-gray-400"
              required
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              name="phone"
              type="number"
              className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-400 transition duration-300 px-4 placeholder:text-gray-400"
              required
              placeholder="Phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              name="email"
              type="email"
              className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-400 transition duration-300 px-4 placeholder:text-gray-400"
              placeholder="name@serveothers.com"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <Button
            text={buttonState.text || "Confirm My Free Trial"}
            font={grotesque}
            type="Button"
            fn={() => ""}
            backgroundColor={buttonState.bgColor || "bg-amber-300"}
            textColor="text-black"
          />
        </form>

        <div className="flex flex-col space-y-2 mt-10 text-white">
          <div className="flex items-center space-x-2">
            <HiCheck />
            <p>
              A Reserved Spot In{" "}
              <span className="text-amber-500 ">The Private Mastermind</span>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiCheck />
            <p>
              Our{" "}
              <span className="text-amber-500 ">
                {" "}
                Weekly Private QnA Calls w/ Matt
              </span>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiCheck />
            <p>
              Private Weekly{" "}
              <span className="text-amber-500 "> Mindset Mastermind</span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiCheck />
            <p>
              Private Weekly{" "}
              <span className="text-amber-500 ">
                {" "}
                High Performance Coaching
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiCheck />
            <p>
              Secret Weekly{" "}
              <span className="text-amber-500 "> Special Guest Calls</span>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <HiCheck />
            <p>
              FREE Access To All Of Our Top Courses{" "}
              <span className="text-amber-500 "> (usually $10k+)</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
