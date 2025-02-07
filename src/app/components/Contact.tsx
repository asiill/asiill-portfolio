"use client";

import { useState } from "react";
import Github from "./Github";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const endpoint = `https://formspree.io/${formID}`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    
  };

  return (
    <div id="contact" className="p-16 w-full bg-[#dddbbe]">
        {!submitted ? (
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl sm:text-4xl">Send me a message ...</h2>
            <p className="text-base sm:text-lg">Feel free to reach out to me here if you would like to work on something together.</p>
            <form onSubmit={handleSubmit} name="contact" className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-4 md:col-span-1 text-sm sm:text-base">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Your name</label>
                  <input
                    className="p-2 text-black"
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Your email</label>
                  <input
                    className="p-2 text-black"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-1 text-sm sm:text-base">
                <label htmlFor="message">Your message</label>
                <textarea
                  className="min-h-32 p-1 text-black"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                      setMessage(e.target.value)
                  }}
                  required
                />
                <button type="submit" className="self-end rounded-lg p-2.5 text-black text-lg bg-[#c8cc92] shadow-sm transition text-sm sm:text-base hover:opacity-80">Send</button>
              </div>
            </form>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <p className="text-base sm:text-lg">Or visit my GitHub profile to see what I&#39;m working on {"->"}</p>
              <Github 
                fill="black"
              />
            </div>
          </div>
        ) : (
          <div className="md:text-center">
            <div className="text-lg">Merci ♥</div>
          </div>
        )}
    </div>
  );
}