import { motion, } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react";
interface SlideData {
    quote: string;
    stars: string;
    text: string;
    avatar: string;
    name: string;
    title: string;
}



const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(1);

    const handleTestimonialChange = (newValue: number) =>{
        setCurrentIndex(newValue)
    }
    const slidesData: SlideData[] = new Array(5).fill({
        quote: "./assets/testimonialQuote.svg",
        stars: "./assets/ratingStars.svg",
        text: "The products and services of Erma Group A.§ are really impressive. We are very pleased with the solutions we use to increase energy efficiency in our business. I would recommend Erma Group A.$ to anyone who wants to be environmentally friendly and reduce.",
        avatar: "./assets/userImage.svg",
        name: "Vanessa N",
        title: "Environmental Specialist"
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 7000); // Change slide every 7 seconds

        return () => clearInterval(timer); // Clean up on unmount
    }, [currentIndex]);

  return (
    <div className="flex flex-row space-x-5 items-center justify-center py-20">
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
                
                    <motion.div
                         key={currentIndex}
                         initial={{ opacity: 0, x: 50 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -50 }}
                         transition={{ duration: 0.5 }}
                    >
                        <div className="">
                            <div className="flex items-center space-x-[21rem] flex-row">
                                <img src={slidesData[currentIndex].quote} alt="quote" />
                                <img src={slidesData[currentIndex].stars} alt="rating stars" />
                            </div>
                            <div className="flex mt-10">
                                <p className="text-bgGreen text-[24px] w-[534px] leading-tight">{slidesData[currentIndex].text}</p>
                            </div>
                            <div className="flex flex-row mt-16 space-x-3 items-center">
                                <img src={slidesData[currentIndex].avatar} alt="avatar" className="rounded-[14px]" />
                                <div>
                                    <p className="text-bgGreen text-[20px]">{slidesData[currentIndex].name}</p>
                                    <p className="text-[20px] font-light text-bgGreen">{slidesData[currentIndex].title}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                
                
                <div className="flex flex-row space-x-4 items-center justify-center mt-[4rem]">
                    {slidesData.map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.32 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleTestimonialChange(index)}
                            className={currentIndex === index ? "flex rounded-full w-[8px] h-[8px] bg-[#009444]" : "flex rounded-full w-[8px] h-[8px] bg-[#D0DED6]"}
                        ></motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials