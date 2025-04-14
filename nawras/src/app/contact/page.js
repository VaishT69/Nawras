"use client";

import Image from "next/image";
import emailjs from "emailjs-com";
import { useState } from "react";

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
    </div>
  );
}
