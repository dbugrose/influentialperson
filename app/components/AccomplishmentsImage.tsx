import Image from "next/image";
import React from 'react'

const AccomplishmentsImage = () => {
  return (
<div className="overflow-hidden relative">
    <Image
        src= "/assets/Mary-Oliver-Image-scaled.jpg"
        alt="a young Mary Oliver smiling"
        fill
        sizes= "(max-width: 768px) 100vw, 700px"
        className="relative! border-2 border-[#583184] rounded-xl overflow-hidden mt-4 mb-4 items-center"
       />
</div>
  )
}

export default AccomplishmentsImage