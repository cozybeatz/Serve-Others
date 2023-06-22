import Image from "next/image";
import { FaShieldAlt, FaArrowDown } from "react-icons/fa";
import { grotesque, manrope } from "./fonts";
import Link from "next/link";
import TypingEffect from "./components/TypingEffect";
import PopupForm from "./components/PopupForm";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-stone-50 relative">
        <div className="flex justify-center items-center space-x-1 w-full py-6">
          <FaShieldAlt className="text-stone-800" />
          <p className={"text-black font-medium" + " " + grotesque.className}>
            serveothers.com
          </p>
        </div>

        {/* HEADER */}
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

          <div className="relative w-max mx-auto hover:-translate-y-1 transition-all">
            <Link
              href="#form"
              className={
                "block z-10 relative rounded-md bg-black text-stone-100 px-8 py-4 font-bold text-lg" +
                " " +
                grotesque.className
              }
            >
              Experience 2 Weeks FREE
            </Link>
            <div className="w-full h-12 bg-stone-400 absolute -bottom-1 -right-1 rounded-md text-stone-100 px-6 py-2"></div>
          </div>
        </header>

        <PopupForm />

        <div className="pt-10 px-10 flex items-center justify-center">
          <FaArrowDown className="text-stone-800 animate-pulse text-4xl" />
        </div>

        {/* FORM */}
        <div id="form" className="relative py-10 px-10">
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

            <form className="relative my-4 z-10">
              <div className="mb-6">
                <input
                  name="fullName"
                  type="text"
                  className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-900 transition duration-300 px-4 placeholder:text-gray-400"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-900 transition duration-300 px-4 placeholder:text-gray-400"
                  placeholder="name@serveothers.com"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  name="phone"
                  type="number"
                  className="bg-transparent text-black rounded-md font-normal mt-1  block w-full h-12 md:h-10 shadow-sm text-sm bg-stone-200 border-2 border-gray-900 transition duration-300 px-4 placeholder:text-gray-400"
                  required
                  placeholder="Phone"
                />
              </div>

              <div className="relative w-max mx-auto hover:-translate-y-1 transition-all">
                <button
                  className={
                    "z-10 relative rounded-md bg-black text-stone-100 px-16 py-4 font-bold text-xl" +
                    " " +
                    grotesque.className
                  }
                >
                  Join Now
                </button>
                <div className="w-full h-12 bg-stone-400 absolute -bottom-1 -right-1 rounded-md text-stone-100 px-6 py-2"></div>
              </div>
              <p
                className={`${grotesque.className} font-semibold text-center py-2 text-xl`}
              >
                *This is your most important mission
              </p>
            </form>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="py-10 px-10 flex items-center space-x-6 justify-between md:w-1/2 mx-auto">
          <Link href="https://growwithusagency.medium.com/how-matt-shields-built-5-six-figure-marketing-agencies-at-just-19-5eb635a7dd59">
            <Image
              src="/partners/medium.svg"
              alt="Medium Article"
              width={150}
              height={150}
            />
          </Link>

          <Link href="#">
            <Image
              src="/partners/nbc.svg"
              alt="NBC Article"
              width={150}
              height={150}
            />
          </Link>
          <Link href="https://wealthinsidermag.com/3-secret-belief-shifts-that-made-matt-shields-a-millionaire-by-21/">
            <Image
              src="/partners/wealthinsider.svg"
              alt="Wealth Insider Article"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* BIOGRAPHY */}
        <div className="py-10 px-5 md:px-10 flex flex-col items-center space-y-4">
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
            className={`text-black text-center text-2xl space-y-4 md:w-4/5 lg:w-3/5 font-normal ${manrope.className}`}
          >
            <p>
              After battling with extreme anxiety, depression, and OCD for
              years, and dropping out of High School after 9th grade...
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
              <span className="text-amber-600">
                broke & completely hopeless
              </span>{" "}
              to a 21 year old millionaire traveling the world with his family &
              best friends.
            </p>
            <p>
              Gratitude doesn{"'"}t even begin to explain how I felt, and how I
              feel now.
            </p>
            <p>
              Not only did I become financially free, but I battled the darkest
              of my demons, got into the best shape of my life, & ventured on
              the path to complete freedom (Financial, Mental, & Physical).
            </p>
            <p>
              Now, I{"'"}m on a mission to ignite a truly free world & help
              create as many quantum leaps in other entrepreneurs, like you, as
              I possible can.
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
      </main>
    </>
  );
}
