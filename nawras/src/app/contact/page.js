"use client";

import Image from "next/image";
import emailjs from "emailjs-com";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const logo = "/assets/images/vaish-sitar.jpeg";

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessages = { name: "", email: "", message: "" };

    if (!formData.name) {
      errorMessages.name = "Name is required";
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message) {
      errorMessages.message = "A message is required";
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const result = await emailjs.send(
        "service_g12rsoh",
        "template_lw7laxk",
        formData,
        "JupNCHrs-OPtJTzFm"
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message");
    }

    // const response = await fetch("/api/sendEmail", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (response.ok) {
    //   alert("Message sent Successfully");
    //   setFormData({ name: "", email: "", message: "" });
    // } else {
    //   alert("Error sending message");
    // }
  };

  return (
    <div className="text-black p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* IMAGE */}
        <div className="md:w-1/2 w-full h-full flex justify-center items-center">
          <Image
            src={logo}
            alt="Nawras"
            width={700}
            height={200}
            className="mt-16"
          />
        </div>
        {/* CONTENT */}
        <div className="md:w-1/2 mt-16">
          <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-2">
            Feeel free to reach out via the form below:
          </p>
          <hr className="w-full mb-10" />
          <div className="w-px h-full bg-black mx-6"></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" h-10 p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-10  p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <textarea
              placeholder="Message"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              className="bg-[#efe4b5] text-black  h-10 w-15 px-2 py-2 rounded hover:bg-white transition border-black border-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="pt-20  text-center items-center">
        <h2 className="text-6xl font-black ">Our Socials</h2>

        <ul className="flex justify-center gap-6 items-center mt-6">
        <Link href='https://www.facebook.com/NawrasMusicPro/' target="_blank">
          <li>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.494v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116c.732 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0" />
            </svg>
          </li>
          </Link>

          <Link href='https://www.instagram.com/nawrasmusicproductions/' target="_blank">
          <li>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.5a3.63 3.63 0 0 1-1.3-.9c-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.5-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 5.9.2 4.9.4 4.1.8 3.2 1.2 2.5 1.7 1.8 2.4S.6 3.2.2 4.1c-.4.8-.6 1.8-.7 3C-.1 8.3 0 8.7 0 12s-.1 3.7.1 4.9c.1 1.2.3 2.2.7 3 .4.8.9 1.5 1.6 2.2.7.7 1.4 1.2 2.2 1.6.8.4 1.8.6 3 .7C8.3 24.1 8.7 24 12 24s3.7.1 4.9-.1c1.2-.1 2.2-.3 3-.7.8-.4 1.5-.9 2.2-1.6.7-.7 1.2-1.4 1.6-2.2.4-.8.6-1.8.7-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.2-.3-2.2-.7-3-.4-.8-.9-1.5-1.6-2.2-.7-.7-1.4-1.2-2.2-1.6-.8-.4-1.8-.6-3-.7C15.7-.1 15.3 0 12 0z" />
              <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2z" />
              <circle cx="18.4" cy="5.6" r="1.4" />
            </svg>
          </li>
          </Link>
          <Link href='https://www.youtube.com/@ShrutiTeeluck' target="_blank">
          <li>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a2.97 2.97 0 0 0-2.087-2.102C19.684 3.5 12 3.5 12 3.5s-7.684 0-9.411.584a2.97 2.97 0 0 0-2.087 2.102A30.27 30.27 0 0 0 0 12a30.27 30.27 0 0 0 .502 5.814 2.97 2.97 0 0 0 2.087 2.102C4.316 20.5 12 20.5 12 20.5s7.684 0 9.411-.584a2.97 2.97 0 0 0 2.087-2.102A30.27 30.27 0 0 0 24 12a30.27 30.27 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
