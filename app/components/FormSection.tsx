"use client";
import Image from "next/image";
import { grotesque } from "../fonts";
import Button from "./button";
import useContactForm from "../hooks/useContactForm";
import useButtonText from "../hooks/useButtonState";
import sendEmail from "../lib/sendEmail";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormSection() {
  const { values, handleChange } = useContactForm();
  const { buttonState, handleButtonState } = useButtonText();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    handleButtonState("Joining", "bg-gray-500");
    try {
      const req = await sendEmail(values.name, values.email, values.phone);
      if (req.status === 200) {
        handleButtonState("Join Now", "bg-black");
        toast.success(req.data.message);
      }
    } catch (e) {
      console.log(e);
      handleButtonState("Join Now", "bg-black");
      toast.error("Oops something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div id="form" className={`relative py-10 px-10`}>
        <Image
          className="absolute top-40 md:top-10 right-0"
          src="/abstracts/abs2.svg"
          width={140}
          height={140}
          alt="Abstract"
        />
        <div className="md:w-3/5 lg:w-2/5 mx-auto">
          <p className="relative z-10 text-black mt-10 text-lg text-center">
            <strong className="">Sign Up Below</strong> To Not Miss Our
            Exclusive Launch
          </p>

          <form onSubmit={handleSubmit} className="relative my-4 z-10">
            <div className="mb-6">
              <input
                name="name"
                type="text"
                className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-900 transition duration-300 px-4 placeholder:text-gray-400"
                required
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <input
                name="email"
                type="email"
                className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-900 transition duration-300 px-4 placeholder:text-gray-400"
                placeholder="name@serveothers.com"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <input
                name="phone"
                type="number"
                className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-900 transition duration-300 px-4 placeholder:text-gray-400"
                required
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
              />
            </div>

            <Button
              text={buttonState.text}
              font={grotesque}
              type="Button"
              fn={() => ""}
              backgroundColor={buttonState.bgColor || "bg-black"}
            />
            <p
              className={`${grotesque.className} text-black font-semibold text-center py-2 text-xl`}
            >
              *This is your most important mission
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
