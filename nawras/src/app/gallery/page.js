"use client";

import { useState } from "react";
import VideoComponent from "@/components/VideoComponent/VideoComponent";
// import VideoCarousel from '@/components/VideoCarousel/VideoCarousel'
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import ImgCarousel from "@/components/ImageCarousel2/ImgCarousel";
export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    "n-cCuPy2o7g",
    "Ws3GQX5C9kM",
    "G7Nb2GFPgPw",
    "Hdt9MuQXB9E",
    "qxq152kPgpc",
    "_WBbaU1GGZE",
    "vC4pKMeNhgU",
    "-oIJQHwjOFg",
    "XQ3MQXvOufo",
  ];

  return (
    <main>
      {/* <section className="px-4 py-16 bg-[#EFE3B5] rounded-4xl "> */}
      <section className="px-4 py-16 bg-[#EFE3B5] rounded-4xl mt-10 ">
        <h1 className="text-4xl md:text-6xl font-black text-black text-center pb-10">
          Gallery
        </h1>
        <div className="flex flex-col md:flex-row items-start ml-20">
          {/* <ImageCarousel /> */}
          <div className=" w-full h-full flex justify-center items-center">
          <ImgCarousel />
          </div>
          <div className="px-6 max-w-6xl mx-auto text-black items-center text-center">
          <p className="text-md tracking-tighter text-balance text-black mt-10">
              Founded by Shanjeet Teeluck, Nawras Music Productions is a
              Durban-based company dedicated to the creation and promotion of
              Indian classical and devotional music. The company serves as a hub
              for artistic collaboration, producing high-quality recordings and
              organizing live events that celebrate the richness of Indian
              musical traditions. Nawras Music Productions has been instrumental
              in bringing Indian classical music to a broader audience in South
              Africa and beyond. Through concerts, workshops, and recordings,
              the company fosters a deeper appreciation for this genre and
              supports the development of emerging artists.{" "}
            </p>
            </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-[#EFE3B5] rounded-4xl mt-10 ">
        <h1 className="text-4xl md:text-6xl font-black text-black text-center pb-10">
          Latest Videos
        </h1>
        <VideoComponent />
        {/* <VideoCarousel/> */}
      </section>
    </main>
  );
}
