import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imgs = [
  "/assets/gallery/img1.jpg",
  "/assets/gallery/img2.jpg",
  "/assets/gallery/img3.jpg",
  "/assets/gallery/img4.jpg",
  "/assets/gallery/img5.jpg",
  "/assets/gallery/img6.jpg",
  "/assets/gallery/img7.jpg",
  "/assets/gallery/img8.jpg",
  "/assets/gallery/img9.jpg",
  "/assets/gallery/img10.jpg",
];

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {imgs.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
