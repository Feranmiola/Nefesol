import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"


const GreeningPolicy = () => {
  return (
    <div className="bg-bgGreen py-28 flex flex-col space-y-20 items-center justify-center">
        <div className="flex flex-row items-center justify-center  space-x-10">
            <div className="flex flex-col space-y-4">
                <p className="text-white text-[40px]">Our Greening Policy</p>
                <p className="text-white text-[16px] w-[386px]">Our aim is to encourage people to conserve natural resources and to contribute to the stabilization of the ecosystem.</p>
                <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }} 
                 className=" text-linkGreen cursor-pointer w-[87px] text-[16px]">Learn More</motion.a>
            </div>
            <div className="w-[615px] h-[245px] rounded-[14.03px] greeningBG flex flex-row justify-between px-8 ">
                <p className="text-[28px] text-white w-[294px] mt-[108px] leading-tight">We are building an environmentally friendly future</p>
                <img
                src="./assets/whiteTree.svg"
                alt="white tree"
                className="w-[30.07px] h-[28.27px] mt-[174.73px]"
                />
            </div>
        </div>
        <div className="flex flex-row space-x-20">
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
                    />
                    
                    <p className="text-[18px] text-white">Green collection</p>
                    
                </div>

                <div className="flex flex-row space-x-5 items-center justify-center">
                    <img
                    src="./assets/boolLeafLogo.svg"
                    alt="leaf logo"
                    />
                    
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Environmental</p>
                        <p className="text-[18px] text-white">Awareness Education</p>
                    </div>
                </div>
            
            </div>

            <div>
                <Separator className="  bg-[#175b36] " orientation="vertical"/>
            </div>

            <div className="flex flex-col items-start space-y-16">

                <div className="flex flex-row space-x-5 items-center ">
                    <div className="flex items-center justify-center w-[64px] h-[64px]">
                        <p className="text-[46px] text-linkGreen ">0</p>
                    </div>
                    <p className="text-[18px] text-white">Zero carbon</p>
                    
                </div>

                <div className="flex flex-row space-x-5 items-center ">
                    <img
                    src="./assets/sustainableLogo.svg"
                    alt="leaf logo"
                    
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
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Carbon Footprint</p>
                        <p className="text-[18px] text-white">Reduction</p>
                    </div>
                </div>
            
            </div>

            <div>
                <Separator className="  bg-[#175b36] " orientation="vertical"/>
            </div>

            <div className="flex flex-col items-start space-y-16">

                <div className="flex flex-row space-x-5 items-center ">
                    <img
                    src="./assets/circularEconomyLogo.svg"
                    alt="leaf logo"
                    className="w-[64px] h-[64px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Contribution to the</p>
                        <p className="text-[18px] text-white">Circular Economy</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-5 items-center ">
                    <img
                    src="./assets/developmentLogo.svg"
                    alt="leaf logo"
                    className="w-[64px] h-[64px]"
                    />
                    <div className="flex  flex-col">
                        <p className="text-[18px] text-white">Development of green</p>
                        <p className="text-[18px] text-white">Technologies</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-5 items-center ">
                    <img
                    src="./assets/communityLogo.svg"
                    alt="leaf logo"
                    className="w-[64px] h-[64px]"
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