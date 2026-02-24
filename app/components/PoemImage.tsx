import Image from "next/image";
import React from 'react'

const HomeImage = () => {
  return (
<div className="overflow-hidden relative flex items-center">
    <Image
        src= "/assets/download.webp"
        alt="a smiling Mary Oliver in black and white"
        fill
        sizes= "(max-width: 768px) 100vw, 700px"
        className="relative! border-6 border-[#583184] rounded-xl overflow-hidden mt-4 mb-4"
       />
</div>
  )
}

export default HomeImage