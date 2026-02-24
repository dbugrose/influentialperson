import Image from "next/image";
import React from 'react'

const HomeImage = () => {
  return (
<div className="overflow-hidden relative flex items-center">
    <Image
        src= "/assets/8e98d2c87f764ef07c7441280586bb825c5fa629.jpeg"
        alt="Mary Oliver with dog"
        fill
        sizes= "(max-width: 768px) 100vw, 700px"
        className="relative! border-2 border-[#583184] rounded-xl overflow-hidden mt-4 mb-4"
       />
</div>
  )
}

export default HomeImage