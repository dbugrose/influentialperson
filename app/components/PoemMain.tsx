import React from 'react'
import { Carousel } from "flowbite-react";

const PoemMain = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-[#FBF2FF] border-6 border-[#583184] rounded-xl">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-[#FBF2FF] border-6 border-[#583184] rounded-xl">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-[#FBF2FF] border-6 border-[#583184] rounded-xl">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default PoemMain