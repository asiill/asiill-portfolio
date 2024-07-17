"use client";

import { useState } from "react";

export default function ContactForm() {
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
        <div>
            {!submitted ? (
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
                        <button type="submit" className="self-end">Send</button>
                    </div>
                </form>
            ) : (
                <div>Merci ♥</div>
            )}
        </div>
    );
    
}