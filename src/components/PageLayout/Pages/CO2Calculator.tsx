import React from "react";
import { useState } from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Vehicle from "./C02Calculator Components/Vehicle";
import Food from "./C02Calculator Components/Food";
import House from "./C02Calculator Components/House";
import Airplane from "./C02Calculator Components/Airplane";

const CO2Calculator = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [progress, setProgress] = React.useState(13)
  const [initial, setInitial] = useState(25)

  const handleTabs = (inital: number, current: number) =>{
    setInitial(inital);
    setTabIndex(current);

  }

  const handlePageChange = (index: number) =>{
    if(index === 0){
      console.log("0 hit")
    }else{
      if(index === 5){
        console.log("5 hit")
      }else{
        setInitial(25 * index);
        setTabIndex(index);
      }
    }
  }

  

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(initial), (initial + 25))
    return () => clearTimeout(timer)
  }, [initial])




  return (
    <div className="mt-32">
      <p className="text-[40px] text-bgGreen ml-[206px]">CO<span className=" bottom-0 text-[25px] font-medium">2</span>  <span className="">Calculator</span></p>
      
      <div className="flex mt-[-70px] justify-center">
        <div className="w-[939px] mt-20 flex rounded-[24px] ">
          <div className="flex flex-col shadow-md items-center justify-center w-full rounded-[24px]">
            <div className="bg-[#F8F9F8]  w-full flex flex-col rounded-t-[24px]">
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

              <div className="progressindex">
                <Progress value={progress} className=" w-full z-10 h-[1px]"/>
              </div>
              <div className="p-5">
                {tabIndex === 1 && (
                  <Vehicle/>
                )}

                {tabIndex === 2 && (
                  <Airplane/>
                )}                
                
                {tabIndex === 3 && (
                  <House/>
                )}                


              {tabIndex === 4 && (
                  <Food/>
                )}

                <div className="flex flex-row space-x-4">
                  <motion.div
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.9 }} 
                  onClick={() => handlePageChange(tabIndex - 1)}
                  className={tabIndex === 1 ? 'cursor-not-allowed opacity-25 flex flex-row items-center space-x-1' : "cursor-pointer flex flex-row items-center space-x-1"}
                  >
                    <img
                    src="./assets/prev.svg"
                    />
                    <p className="text-[16px] text-linkGreen font-semibold">Prev</p>

                  </motion.div>

                  <motion.div
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.9 }} 
                  onClick={() => handlePageChange(tabIndex + 1)}
                  className={tabIndex === 4 ? 'cursor-not-allowed opacity-25 flex flex-row items-center space-x-1' : "cursor-pointer flex flex-row items-center space-x-1"}
                  >
                    
                    <p className="text-[16px] text-linkGreen font-semibold">Next Category</p>

                    <img
                    src="./assets/next.svg"
                    />

                  </motion.div>

                </div>

              </div>

            </div>
            <div className="w-full bg-white border-t-[1px] border-b-[1px] rounded-b-[24px] flex flex-col py-5 px-10 ">
              <div className="flex flex-col space-y-3">
                <p className="text-[16px] text-bgGreen">Total CO2 you produce across your usage</p>
                <div className="  flex flex-row items-center">
                  <div>
                    <p className="text-bgGreen text-[24px] font-bold">12,000 KgCO<span className="bottom-0 text-[16px]">2</span></p>
                  </div>
                  <div className="flex flex-row space-x-3 ml-10">
                    <div className="flex flex-row space-x-1 items-center">
                      <img
                      src="./assets/carGreen.svg"
                      className="w-[22.5px] h-[17.25px]"
                      />
                      <p className="text-[16px] text-bgGreen font-bold">12 <span className="text-[12px] font-normal">kgCO<span className="text-[8px] bottom-0">2</span></span></p>
                    </div>
                    
                    <div>
                      <Separator className="w-[1px]" orientation="vertical"/>
                    </div>
                    
                    <div className="flex flex-row space-x-1 items-center">
                      <img
                      src="./assets/plane.svg"
                      className="w-[22.5px] h-[17.25px]"
                      />
                      <p className="text-[16px] text-bgGreen font-bold">12,000 <span className="text-[12px] font-normal">kgCO<span className="text-[8px] bottom-0">2</span></span></p>
                    </div>
                    
                    <div>
                      <Separator className="w-[1px]" orientation="vertical"/>
                    </div>

                    <div className="flex flex-row space-x-1 items-center">
                      <img
                      src="./assets/carGreen.svg"
                      className="w-[22.5px] h-[17.25px]"
                      />
                      <p className="text-[16px] text-bgGreen font-bold">500 <span className="text-[12px] font-normal">kgCO<span className="text-[8px] bottom-0">2</span></span></p>
                    </div>

                    <div>
                      <Separator className="w-[1px]" orientation="vertical"/>
                    </div>

                    <div className="flex flex-row space-x-1 items-center">
                      <img
                      src="./assets/carGreen.svg"
                      className="w-[22.5px] h-[17.25px] opacity-30"
                      />
                      <p className="opacity-30 text-[16px] text-bgGreen font-bold">0 <span className="text-[12px] font-normal">kgCO<span className="text-[8px] bottom-0">2</span></span></p>
                    </div>

                  </div>
                </div>
                <div className="py-5">
                  <Separator className="w-full"/>
                </div>
                <div className="flex flex-row items-center justify-between ">
                  <div className="flex flex-row space-x-3 items-center">
                    <p className="text-[16px] text-bgGreen bottom-0">To eliminate this CO2, you need to plant</p>
                    <p className="text-[24px] text-linkGreen font-bold">12,000 Trees</p>
                  </div>
                  <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  className="w-[254px] h-[48px] bg-[#25B567] flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                  >
                    <img
                    src="./assets/plant.svg"
                    alt="plant"
                    />
                    <p className="text-white text-[16px] font-medium">Proceed to Plant Trees</p>
                  </motion.div>

                </div>

              </div>
            </div>
            

          </div>

        </div>
      </div>
        
    </div>
  )
}

export default CO2Calculator