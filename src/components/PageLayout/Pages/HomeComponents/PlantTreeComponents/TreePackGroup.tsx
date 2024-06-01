import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

const TreePackGroup = () => {
  return (
    <div>
                <div className="flex flex-row items-center justify-center space-x-5 mt-16">
          <div className="w-[320px] h-[371px] rounded-[24px] hover:border-[2px] hover:border-linkGreen shadow-md">
            <div className=" justify-center flex bg-[#E6EFEB] rounded-t-[24px] h-[180px]">
              <img
              src="./assets/smallTrees.svg"
              alt="smallTrees"
              />
            </div>
            <div className="px-5 mt-4">
              <p className="text-[20px] text-bgGreen font-bold">Small Trees</p>
              <div className="flex flex-row items-center space-x-2 ">
                <p className="text-[20px] text-[#0A4519]">50 Trees</p>
                <img
                src="./assets/greenDot.svg"
                alt="dot"
                />
                <p className="text-[20px] text-[#0A4519]">~ 6.25t CO2</p>              
              </div>
            </div>
            <div className="flex items-center justify-center w-[90%] ml-[5%]">
              <Separator className=" justify-center place-self-center flex my-5 w-[100%]"/>
            </div>
            <div className="px-5 flex items-center justify-between">
              <p className="text-[24px] text-bgGreen">€225</p>
              <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }} 
              className=" text-linkGreen cursor-pointer">BREATHE NOW</motion.a>
            </div>
          </div>

          <div className="w-[320px] h-[371px] rounded-[24px] hover:border-[2px] hover:border-linkGreen shadow-md">
            <div className=" justify-center flex bg-[#E6EFEB] rounded-t-[24px] h-[180px]">
              <img
              src="./assets/mediumTrees.svg"
              alt="mediumTrees"
              />
            </div>
            <div className="px-5 mt-4">
              <p className="text-[20px] text-bgGreen font-bold">Medium Trees</p>
              <div className="flex flex-row items-center space-x-2 ">
                <p className="text-[20px] text-[#0A4519]">100 Trees</p>
                <img
                src="./assets/greenDot.svg"
                alt="dot"
                />
                <p className="text-[20px] text-[#0A4519]">~ 12.5t CO2</p>              
              </div>
            </div>
            <div className="flex items-center justify-center w-[90%] ml-[5%]">
              <Separator className=" justify-center place-self-center flex my-5 w-[100%]"/>
            </div>
            <div className="px-5 flex items-center justify-between">
              <p className="text-[24px] text-bgGreen">€450</p>
              <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }} 
              className=" text-linkGreen cursor-pointer">BREATHE NOW</motion.a>
            </div>
          </div>

          <div className="w-[320px] h-[371px] rounded-[24px] hover:border-[2px] hover:border-linkGreen shadow-md">
            <div className=" justify-center flex bg-[#E6EFEB] rounded-t-[24px] h-[180px]">
              <img
              src="./assets/largeTrees.svg"
              alt="largeTrees"
              className="rounded-t-[24px]"
              />
            </div>
            <div className="px-5 mt-4">
              <p className="text-[20px] text-bgGreen font-bold">Large Trees</p>
              <div className="flex flex-row items-center space-x-2 ">
                <p className="text-[20px] text-[#0A4519]">150 Trees</p>
                <img
                src="./assets/greenDot.svg"
                alt="dot"
                />
                <p className="text-[20px] text-[#0A4519]">~ 18.75t CO2</p>              
              </div>
            </div>
            <div className="flex items-center justify-center w-[90%] ml-[5%]">
              <Separator className=" justify-center place-self-center flex my-5 w-[100%]"/>
            </div>
            <div className="px-5 flex items-center justify-between">
              <p className="text-[24px] text-bgGreen">€675</p>
              <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }} 
              className=" text-linkGreen cursor-pointer">BREATHE NOW</motion.a>
            </div>
          </div>


        </div>
    </div>
  )
}

export default TreePackGroup