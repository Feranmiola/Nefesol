import React from "react";
import { useState } from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress";

const CO2Calculator = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [progress, setProgress] = React.useState(13)
  const [initial, setInitial] = useState(0)

  const handleTabs = (inital: number, current: number) =>{
    setInitial(inital);
    setTabIndex(current)

  }

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(initial), (initial + 25))
    return () => clearTimeout(timer)
  }, [initial])




  return (
    <div className="py-20">
      <p className="text-[40px] text-bgGreen ml-[206px]">CO<span className=" absolute ml-[-4px]  mt-5 text-[25px] font-medium">2</span>  <span className="ml-2">Calculator</span></p>
      
      <div className="flex items-center justify-center">
        <div className="w-[939px] h-[744px] flex rounded-[24px] mt-10">
          <div className="flex items-center justify-center w-full rounded-[24px]">
            <div className="bg-[#F8F9F8] h-[500px] w-full flex flex-col rounded-t-[24px]">
              <div className="flex flex-row items-center justify-between p-5">
                <div className="flex flex-row space-x-3">
                      <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.9 }} 
                      onClick={( )=> handleTabs(25, 1)}
                      className={tabIndex === 1 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center hover:ring-[1px] hover:ring-bgGreen cursor-pointer py-1 px-5"}>
                          {tabIndex === 1?(
                            <img
                            src="./assets/car.svg"
                            alt="car"
                            />
                          ):(
                            <img
                            src="./assets/carGreen.svg"
                            alt="car"
                            />
                          )}
                          <p className={tabIndex === 1 ? "text-white" : " text-bgGreen"}>Vehicles</p>
                      </motion.div>

                      <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.9 }} 
                      onClick={( )=> handleTabs(50, 2)}
                      className={tabIndex === 2 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer hover:ring-[1px] hover:ring-bgGreen py-1 px-5"}>
                          
                          {tabIndex === 2?(
                            <img
                            src="./assets/planeWhite.svg"
                            alt="car"
                            />
                          ):(
                            <img
                            src="./assets/plane.svg"
                            alt="plane"
                            />
                          )}
                          <p className={tabIndex === 2 ? "text-white" : " text-bgGreen"}>Airplane</p>
                      </motion.div>

                      <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.9 }} 
                      onClick={( )=> handleTabs(75, 3)}
                      className={tabIndex === 3 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer hover:ring-[1px] hover:ring-bgGreen py-1 px-5"}>
                          {tabIndex === 3?(
                            <img
                            src="./assets/houseWhite.svg"
                            alt="car"
                            />
                          ):(
                            <img
                            src="./assets/home.svg"
                            alt="Home"
                            />
                          )}
                          <p className={tabIndex === 3 ? "text-white" : " text-bgGreen"}>Home</p>
                      </motion.div>

                      <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.9 }} 
                      onClick={( )=> handleTabs(100, 4)}
                      className={tabIndex === 4 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer hover:ring-[1px] hover:ring-bgGreen py-1 px-5"}>
                          {tabIndex === 4?(
                            <img
                            src="./assets/foodWhite.svg"
                            alt="car"
                            />
                          ):(
                            <img
                            src="./assets/food.svg"
                            alt="food"
                            />
                          )}
                          
                          <p className={tabIndex === 4 ? "text-white" : " text-bgGreen"}>Food</p>
                      </motion.div>
                  </div>
                  <motion.div
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.9 }} 
                  className="cursor-pointer"
                  >
                    <p className="text-bgGreen text-[16px] font-semibold cursor-pointer"><u>Clear All</u></p>
                  </motion.div>
              </div>

              <div>
                <Progress value={progress} className=" w-full h-1"/>
              </div>

            </div>
            

          </div>

        </div>
      </div>
        
    </div>
  )
}

export default CO2Calculator