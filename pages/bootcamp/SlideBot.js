import React from "react";
import { Carousel } from "flowbite-react";
import Kartus from "./Kartus";

function SlideBot() {
  return (
    <div className=" h-[350px]    rounded-lg w-[90%] ml-[5%]  border shadow my-6 ">
      {/* <h1 className="text-xl mt-[2px] mb-[2px]">Testimonial</h1> */}
      <Carousel slideInterval={5000} className="bg-gray-200">
        <div className="flex  h-full  items-center justify-center  ">
          <Kartus />
        </div>
        <div className="flex h-full items-center justify-center  ">
          <Kartus />
        </div>
        <div className="flex h-full items-center justify-center  ">
          <Kartus />
        </div>
      </Carousel>
    </div>
  );
}

export default SlideBot;
