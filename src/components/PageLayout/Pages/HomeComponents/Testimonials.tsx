// import React from "react"

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"

//   import Autoplay from "embla-carousel-autoplay"

import { motion } from "framer-motion"
// import { useState } from "react"


const Testimonials = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);


     
    
  return (
    <div className="flex flex-row space-x-5 items-center justify-center">
        <div className="testimonialBG flex flex-col justify-between rounded-[24px] w-[453px] h-[584px] py-8 px-10">
            <p className="text-white text-[48px] text-left w-[292px] leading-tight">What people have been saying about us.</p>
            <img
                src="./assets/whiteTree.svg"
                alt="white tree"
                className="w-[30.07px] h-[28.27px]"
            />
        </div>
        <div className=" bg-testimonialGreen flex items-center justify-center w-[662px] h-[584px] rounded-[24px]">
            <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="">
                    <div className="flex items-center space-x-[21rem] flex-row">
                        <img
                        src="./assets/testimonialQuote.svg"
                        alt="quote"
                        />
                        <img
                        src="./assets/ratingStars.svg"
                        alt="rating stars"
                        />
                    </div>
                    <div className="flex mt-10">
                        <p  className="text-bgGreen text-[24px] w-[534px] leading-tight">The products and services of Erma Group A.§ are really impressive. We are very pleased with the solutions we use to increase energy efficiency in our business. I would recommend Erma Group A.$ to anyone who wants to be environmentally friendly and reduce.</p>
                    </div>
                    <div className="flex flex-row mt-16 space-x-3 items-center">
                        <img
                        src="./assets/userImage.svg"
                        alt="avatar"
                        className="rounded-[14px]"
                        />
                        <div>
                            <p className="text-bgGreen text-[20px]">Vanessa N</p>
                            <p className="text-[20px] font-light text-bgGreen">Environmental Specialist</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center mt-[4rem]">
                    <motion.div 
                    whileHover={{ scale: 1.32 }}
                    whileTap={{ scale: 0.9 }}  
                    className="flex rounded-full w-[8px] h-[8px] bg-[#009444]"></motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.32 }}
                    whileTap={{ scale: 0.9 }}  
                    className="flex rounded-full w-[8px] h-[8px] bg-[#D0DED6]"></motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.32 }}
                    whileTap={{ scale: 0.9 }}  
                    className="flex rounded-full w-[8px] h-[8px] bg-[#D0DED6]"></motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.32 }}
                    whileTap={{ scale: 0.9 }}  
                    className="flex rounded-full w-[8px] h-[8px] bg-[#D0DED6]"></motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.32 }}
                    whileTap={{ scale: 0.9 }}  
                    className="flex rounded-full w-[8px] h-[8px] bg-[#D0DED6]"></motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials