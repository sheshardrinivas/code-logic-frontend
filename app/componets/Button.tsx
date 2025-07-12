"use client";
import React, { useRef, useState } from "react";

function Button() {
  let [aiwords, setaiwords] = useState(["enter data"]);
  const fetch_data = async (input: string) => {
    setaiwords(["loading..."]);
    const data = await fetch(`http://localhost:4000/api/${input}`, {
      cache: "no-store",
    });

    const posts = await data.json();
    const ai_words = posts.ai_words;
    console.log(ai_words);
    setaiwords(ai_words);
  };

  const inputValue = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" className="input-field" ref={inputValue} />
      <button
        className=" button-outline "
        onClick={() => {
          if (inputValue.current) {
            fetch_data(inputValue.current.value);
          }
        }}
      >
        click
      </button>
      <h1>{Array.isArray(aiwords) ? aiwords.join(", ") : aiwords}</h1>
    </div>
  );
}
export default Button;
