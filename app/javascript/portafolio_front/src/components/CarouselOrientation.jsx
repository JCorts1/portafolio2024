import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import avatar from "../img/avatar.jpg"

const projectsPics = [
  avatar,
  "https://unsplash.com/photos/a-bottle-of-diors-nail-polish-next-to-a-bottle-of-dior-q4cVyu5XO-I",
];

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs dark"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {projectsPics.map((pic, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={pic} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  );
}
