"use client";
import React, { useEffect } from "react";

const TypingEffect = () => {
  useEffect(() => {
    // Text to be typed
    const text = "LET'S FREE THE WORLD TOGETHER";

    // Delay between typing each character
    const delay = 100;

    // Get the target element
    const typingElement: any = document.querySelector("#free-the-world");

    // Function to simulate typing effect
    const typeEffect = (text: string, index: any) => {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        setTimeout(() => typeEffect(text, index + 1), delay);
      }
    };

    // Start the typing effect
    typeEffect(text, 0);
  }, []);

  return <h1 id="free-the-world"></h1>;
};

export default TypingEffect;
