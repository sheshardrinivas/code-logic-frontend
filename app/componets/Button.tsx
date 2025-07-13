"use client";
import React, { useRef, useState } from "react";
import styles from "./Button.module.css";
const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
function Button() {
  const [aiwords, setaiwords] = useState(["enter data"]);
  const fetch_data = async (input: string) => {
    setaiwords(["loading..."]);
    const data = await fetch(`${backendUrl}/api/${input}`, {
      cache: "no-store",
    });

    const posts = await data.json();

    const ai_words = posts.message;
    console.log(ai_words);
    setaiwords(ai_words);
  };

  const inputValue = useRef<HTMLInputElement>(null);

  inputValue.current?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (inputValue.current) {
        fetch_data(inputValue.current.value);
      }
    }
  });

  return (
    <div className={`${styles.container}`}>
      <input type="text" className={`${styles.input_field}`} ref={inputValue} />
      <button
        className={`${styles.button}`}
        onClick={() => {
          if (inputValue.current) {
            fetch_data(inputValue.current.value);
          }
        }}
      >
        →
      </button>
      <h1 className={`${styles.h1}`}>
        {Array.isArray(aiwords) ? aiwords.join(", ") : aiwords}
      </h1>
    </div>
  );
}
export default Button;
