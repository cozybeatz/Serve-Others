import useContactForm from "../hooks/useContactForm";
import useButtonText from "../hooks/useButtonState";
import sendEmail from "../lib/sendEmail";
import {  toast } from "react-toastify";

export function togglePopupForm(e: any) {
    const popup_form: HTMLElement | Element | null =
      document.querySelector("#popup-form");

    e.preventDefault();
    popup_form?.classList.toggle("hidden");
    popup_form?.classList.toggle("animate-scale");
  }



  export function HandleSendMail () {
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

    return { handleChange, handleButtonState, handleSubmit };
  }  
