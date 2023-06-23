import { FaShieldAlt, FaArrowDown } from "react-icons/fa";
import { grotesque } from "./fonts";
import PopupForm from "./components/PopupForm";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <main className="min-h-screen bg-stone-50 relative">
        <div className="flex justify-center items-center space-x-1 w-full py-6">
          <FaShieldAlt className="text-stone-800" />
          <p className={`text-black font-medium ${grotesque.className}`}>
            serveothers.cc
          </p>
        </div>

        {/* HEADER */}
        <Header />
        <PopupForm />
        <div className="pt-10 px-10 flex items-center justify-center">
          <FaArrowDown className="text-stone-800 animate-pulse text-4xl" />
        </div>
        <FormSection />
        <Partners />
        <Biography />
        <Footer />
      </main>
    </>
  );
}
