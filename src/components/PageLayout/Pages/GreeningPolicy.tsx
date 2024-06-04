import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"


const GreeningPolicy = () => {
  return (
    <div className="bg-bgGreen py-28 flex flex-col space-y-20 items-center justify-center">
        <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 items-center justify-center md:space-x-10">
            <div className="flex flex-col max-sm:items-center max-sm:justify-center space-y-4">
                <p className="text-white text-[40px] max-sm:text-[30px]">Our Greening Policy</p>
                <p className="text-white text-[16px] md:w-[386px] max-sm:w-[300px] max-sm:text-center">Our aim is to encourage people to conserve natural resources and to contribute to the stabilization of the ecosystem.</p>
                <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }} 
                 className=" text-linkGreen cursor-pointer w-[87px] text-[16px]">Learn More</motion.a>
            </div>
            <div className="w-[615px] h-[245px] max-sm:w-[315px] max-sm:h-[145px] rounded-[14.03px] greeningBG flex flex-row justify-between md:px-8 max-sm:px-2 ">
                <p className="text-[28px] max-sm:text-[16px] max-sm:w-[200px] text-white md:w-[294px] md:mt-[108px] max-sm:mt-[3rem] leading-tight">We are building an environmentally friendly future</p>
                <img
                src="./assets/whiteTree.svg"
                alt="white tree"
                className="md:w-[30.07px] md:h-[28.27px] md:mt-[174.73px] max-sm:mt-[3rem]"
                />
            </div>
        </div>
        <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 max-sm:items-center max-sm:justify-center md:space-x-20">
            <div className="flex flex-col items-start space-y-16">

                <div className="flex flex-row space-x-5 items-center justify-center">
                    <p className="text-[46px] text-linkGreen">1M</p>
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">million trees</p>
                        <p className="text-[18px] text-white">per year</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-5 items-center justify-center">
                    <img
                    src="./assets/leafLogo.svg"
                    alt="leaf logo"
                    className="max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    
                    <p className="text-[18px] text-white">Green collection</p>
                    
                </div>

                <div className="flex flex-row space-x-5 items-center justify-center">
                    <img
                    src="./assets/boolLeafLogo.svg"
                    alt="leaf logo"
                    className="max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Environmental</p>
                        <p className="text-[18px] text-white">Awareness Education</p>
                    </div>
                </div>
            
            </div>

            <div>
                <Separator className="  bg-[#175b36] " />
            </div>

            <div className="flex flex-col items-start max-sm:ml-[-3rem] space-y-16">

                <div className="flex flex-row space-x-5 max-sm:ml-[5px]  ">
                    <div className="flex items-center justify-center md:w-[64px] md:h-[64px] max-sm:w-[40px] max-sm:h-[40px]">
                        <p className="text-[46px] text-linkGreen ">0</p>
                    </div>
                    <p className="text-[18px] text-white">Zero carbon</p>
                    
                </div>

                <div className="flex flex-row space-x-5 max-sm:ml-[5px]  items-center ">
                    <img
                    src="./assets/sustainableLogo.svg"
                    alt="leaf logo"
                    className="max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Sustainable</p>
                        <p className="text-[18px] text-white">Production</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-5 items-center ">
                    <img
                    src="./assets/carbonFootprintLogo.svg"
                    alt="leaf logo"
                    className="max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Carbon Footprint</p>
                        <p className="text-[18px] text-white">Reduction</p>
                    </div>
                </div>
            
            </div>

            <div>
                <Separator className="  bg-[#175b36] "/>
            </div>

            <div className="flex flex-col items-start space-y-16">

                <div className="flex flex-row space-x-5 items-center ">
                    <img
                    src="./assets/circularEconomyLogo.svg"
                    alt="leaf logo"
                    className="w-[64px] h-[64px] max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Contribution to the</p>
                        <p className="text-[18px] text-white">Circular Economy</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-5  items-center ">
                    <img
                    src="./assets/developmentLogo.svg"
                    alt="leaf logo"
                    className="w-[64px] h-[64px] max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Development of green</p>
                        <p className="text-[18px] text-white">Technologies</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-5  items-center ">
                    <img
                    src="./assets/communityLogo.svg"
                    alt="leaf logo"
                    className="w-[64px] h-[64px] max-sm:w-[40px] max-sm:h-[40px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Community</p>
                        <p className="text-[18px] text-white">Participation</p>
                    </div>
                </div>
            
            </div>

        </div>
    </div>
  )
}

export default GreeningPolicy