import { useState } from "react";

const useButtonState = () => {
  const [buttonState, setButtonState] = useState({
    bgColor: null,
    text: "",
  });

  const handleButtonState = (text: string, bgColor: any) => {
    setButtonState((prevState) => {
      return {
        ...prevState,
        text,
        bgColor,
      };
    });
  };

  return { buttonState, handleButtonState };
};

export default useButtonState;
