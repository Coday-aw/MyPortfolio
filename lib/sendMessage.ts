"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    resend.emails.send({
      from: "delivered@resend.dev",
      to: "Coday-aw@hotmail.com",
      subject: "New message from your portfolio",
      replyTo: email as string,
      text: message as string,
    });
  } catch (error) {
    console.error("failed to send message");
    throw new Error("failed to send message");
  }
};
