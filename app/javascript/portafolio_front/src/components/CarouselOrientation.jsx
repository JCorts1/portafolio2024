import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import localland from "../img/localland.png"
import localmap from "../img/localmap.png"
import localevent from "../img/localevent.png"
import localchat from "../img/localchat.png"
import localbookings from "../img/localbookings.png"

const projectsPics = [
  localland,
  localmap,
  localevent,
  localchat,
  localbookings
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
      <CarouselContent className="-mt-1 h-[500px]">
        {projectsPics.map((pic, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="">
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
