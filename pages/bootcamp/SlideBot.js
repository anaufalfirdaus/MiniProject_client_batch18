import React from "react";
import { Carousel } from "flowbite-react";
import Kartus from "./Kartus";

function SlideBot() {
  return (
    <div className=" h-[350px] 2xl:h-96 border-4 border-black  rounded-lg w-[90%] ml-[5%]">
      {/* <h1 className="text-xl mt-[2px] mb-[2px]">Testimonial</h1> */}
      <Carousel slideInterval={5000}>
        <div className="flex  h-full  items-center justify-center bg-sky-500 ">
          <Kartus />
        </div>
        <div className="flex h-full items-center justify-center bg-sky-500 ">
          <Kartus />
        </div>
        <div className="flex h-full items-center justify-center bg-sky-500 ">
          <Kartus />
        </div>
      </Carousel>
    </div>
  );
}

export default SlideBot;
