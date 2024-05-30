import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"


const BretheNow = () => {
  return (
    <div className="flex flex-col">
        <div className="bg-white rounded-[24px] w-[455px] drop-shadow-2xl ">
            <div className="flex items-center flex-col space-y-9 justify-center bg-[#F8F9F8] p-5">
                <p className="text-[24px] text-center text-bgGreen font-bold w-[360px]">How many trees do you want to plant in the forest?</p>
                <div className="flex flex-row space-x-3">
                    <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }} 
                     className="bg-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 px-5">
                        <p className="text-white ">Slider</p>
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }} 
                     className="bg-transparent ring-[1px] ring-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 px-5">
                        <p className="text-bgGreen ">CO2 Quantity</p>
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }} 
                     className="bg-transparent ring-[1px] ring-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 px-5">
                        <p className="text-bgGreen ">Examples</p>
                    </motion.div>
                </div>
                <div>
                    <Slider
                      defaultValue={[33]} max={100} step={1} 
                      className=" w-full"
                    />
                </div>
            </div>
            <div className="flex flex-row py-6 space-x-10 items-center justify-center">
                <img
                src="./assets/treeGroup.svg"
                />
                <div className="flex flex-col ">
                    <p className="text-bgGreen text-[32px]"><span className="text-[48px]">35</span>Trees</p>
                    <p className=" text-bgGreen text-[12px]">You're doing great!</p>
                </div>

            </div>
            <div className="flex items-center justify-center flex-row space-x-3 pt-5 pb-5">
                <div className="bg-[#0A5B361A] flex flex-row items-center justify-center px- h-[56px] w-[186px]">
                    <img
                    src="./assets/field.svg"
                    />
                    <div className="flex flex-row">
                        <p className="text-[24px] text-bgGreen">262 m</p>
                        <p className="text-bgGreen text-[]2px top-0">2</p>
                    </div>
                </div>
                <div className="bg-[#0A5B361A] flex flex-row items-center justify-center  h-[56px] w-[186px]">
                    <img
                    src="./assets/co2.svg"
                    />
                    <div className="flex flex-row">
                        <p className="text-[24px] text-bgGreen">12t</p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <Separator className="w-full fill-[#0A4519]"/>
            </div>
            <div className="flex items-center justify-between px-8 pb-10 flex-row">
                <div className="flex flex-col">
                    <p className="text-bgGreen text-[32px]">$220.29</p>
                    <p className="text-[12px] text-bgGreen">Unit Price 1.20 $/m2</p>
                </div>
                <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                className="w-[212px] h-[56px] bg-[#25B567] flex items-center justify-center rounded-[56px] cursor-pointer"
                >
                    <p className="text-white text-[16px] font-medium">Breathe Now</p>
                </motion.a>
            </div>
        </div>
        <div>
            <p className="text-[10px] text-bgGreen w-[437px] pt-5">The figures are average values based on the binding potential of the trees. According to the latest scientific findings, the average lifespan of trees is between 30 and 50 years and can bind up to 150 kg of CO2 per year. Calculations are based on average data and may vary according to tree type and age.</p>
        </div>
        
    </div>
  )
}

export default BretheNow