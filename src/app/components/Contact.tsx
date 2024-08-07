"use client";

import { useState } from "react";
import Github from ".//github";

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

    fetch(endpoint, requestOptions)
      .then((response) => {
        if(response.ok) {
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(true);
        } else {
          console.error("Error submitting form", response.statusText);
        }  
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <div id="contact" className="p-16 w-full bg-[#dddbbe]">
        {!submitted ? (
          <div className="flex flex-col gap-6">
            <h2>Send me a message ...</h2>
            <p>Feel free to reach out to me here if you would like to work on something together.</p>
            <form onSubmit={handleSubmit} name="contact" className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-8">
              <div className="flex flex-col gap-4 sm:col-span-1">
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
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="message">Your message</label>
                <textarea
                  className="min-h-32 p-1 text-black"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                      setMessage(e.target.value)
                  }}
                />
                <button type="submit" className="self-end rounded-lg p-2.5 text-black text-lg bg-[#c8cc92] transition-all duration-300 ease-in-out hover:opacity-80">Send</button>
              </div>
            </form>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <p>Or visit my GitHub profile to see what I'm working on {"->"}</p>
              <Github 
                fill="black"
              />
            </div>
          </div>
        ) : (
          <div className="sm:text-center">
            <div className="text-lg">Merci ♥</div>
          </div>
        )}
    </div>
  );
}