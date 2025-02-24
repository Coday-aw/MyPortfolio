"use client";
import { useState } from "react";
import Header from "./Header";
import { FaPaperPlane } from "react-icons/fa";
import { sendMessage } from "@/lib/sendMessage";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await sendMessage(formData);
      console.log(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);

      setError(true);
    }
  };
  return (
    <div id="Contact" className="w-[80%]">
      <Header>Contact</Header>
      <p className="font-semibold">
        Feel free to Contact me via my email{" "}
        <a href="mailto:Coday-aw@hotmail.com" className="underline">
          Coday-aw@hotmail.com
        </a>{" "}
        or the form below.
      </p>
      {isSubmitted ? (
        <p className="mt-10 text-center text-[#4999d6] font-bold text-2xl">
          Thank you for your message!{" "}
        </p>
      ) : (
        <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="border  p-3 rounded-xl font-bold"
          />
          <textarea
            required
            name="message"
            placeholder="Message"
            className="border p-3 rounded-xl font-bold min-h-[200px]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#4999d6] px-5 py-2 mt-3 rounded-full text-xl font-bold flex justify-center items-center gap-1 group hover:scale-105"
          >
            Submit
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all " />
          </button>
        </form>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default Contact;
