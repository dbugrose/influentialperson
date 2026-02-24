import React from 'react'
import Image from "next/image"
import influenceImage from "@/public/assets/mary-oliver-1547806144.jpg"

const InfluenceImage = () => {
  return (
    <div className="overflow-hidden relative flex items-center">
        <Image
            src= {influenceImage}
            alt="Mary Oliver at a podium"
            fill
            sizes= "(max-width: 768px) 100vw, 700px"
            className="relative! border-2 border-[#583184] rounded-xl overflow-hidden mt-4 mb-4"
           />
    </div>
  )
}

export default InfluenceImage