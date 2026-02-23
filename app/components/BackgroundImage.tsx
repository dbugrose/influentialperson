import React from 'react'
import Image from 'next/image'
import image from '../assets/lavender-flowers-floral-pattern.jpg'


const BackgroundImage = () => {
  return (
<Image
        src={image}
        alt="Tiling lavender floral background"
        width= "100"
        style={{ objectFit: 'cover'}}
        className="bg-repeat z-[-1]"
 
       />
  )}
    


export default BackgroundImage