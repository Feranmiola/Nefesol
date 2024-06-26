import React, { useEffect } from "react";
import { useState } from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Vehicle from "./C02Calculator Components/Vehicle";
import Food from "./C02Calculator Components/Food";
import House from "./C02Calculator Components/House";
import Airplane from "./C02Calculator Components/Airplane";
import BeatLoader from "react-spinners/BeatLoader";
import { useTranslation } from "react-i18next";


const CO2Calculator = () => {
  const {t} = useTranslation();
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




  


  const [loading, setLoading] = useState(true);

  const imageUrls = ['./assets/planeWhite.svg', './assets/carGreen.svg', './assets/planeWhite.svg', './assets/plane.svg', './assets/houseWhite.svg', './assets/home.svg', './assets/foodWhite.svg', './assets/food.svg', './assets/plant.svg']; 
  
    useEffect(() => {
        let loadedImages = 0;

        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === imageUrls.length) {
                    setLoading(false);
                }
            };
        });
    }, [imageUrls]);

  if (loading) {
    return (
      <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
        <BeatLoader color="#0A4519" />
      </div>
    );
  }

    return (
      <div className="mt-32" onLoad={() => setLoading(false)}>
        <p className="text-[40px] text-bgGreen md:ml-[206px] max-sm:text-center max-sm:text-[28px]">CO<span className=" bottom-0 text-[25px] max-sm:text-[20px] font-medium">2</span>  <span className="">{t('co2Calculator')}</span></p>
        
        <div className="flex mt-[-70px] justify-center">
          <div className="w-[939px] max-sm:w-[380px] mt-20 flex rounded-[24px] ">
            <div className="flex flex-col shadow-md items-center justify-center w-full rounded-[24px]">
              <div className="bg-[#F8F9F8]  w-full flex flex-col rounded-t-[24px]">
                <div className="flex flex-row max-sm:flex-col max-sm:justify-center max-sm:space-y-2 items-center justify-between p-5">
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
                            <p className={tabIndex === 1 ? "text-white" : " text-bgGreen max-sm:hidden"}>{t('vehicles')}</p>
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
                            <p className={tabIndex === 2 ? "text-white" : " text-bgGreen max-sm:hidden"}>{t('airplane')}</p>
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
                            <p className={tabIndex === 3 ? "text-white" : " text-bgGreen max-sm:hidden"}>{t('home')}</p>
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
                            
                            <p className={tabIndex === 4 ? "text-white" : " text-bgGreen max-sm:hidden"}>{t('food')}</p>
                        </motion.div>
                    </div>
                    <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }} 
                    className="cursor-pointer"
                    >
                      <p className="text-bgGreen text-[16px] font-semibold cursor-pointer"><u>{t('clearAll')}</u></p>
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
  
                  <div className="flex flex-row w-full justify-between space-x-4">
                    <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={() => handlePageChange(tabIndex - 1)}
                    className={tabIndex === 1 ? 'cursor-not-allowed opacity-25 flex flex-row items-center space-x-1' : "cursor-pointer flex flex-row items-center space-x-1"}
                    >
                      <img
                      src="./assets/prev.svg"
                      />
                      <p className="text-[16px] text-linkGreen font-semibold">{t('prev')}</p>
  
                    </motion.div>
  
                    <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={() => handlePageChange(tabIndex + 1)}
                    className={tabIndex === 4 ? 'cursor-not-allowed opacity-25 flex flex-row items-center space-x-1' : "cursor-pointer flex flex-row items-center space-x-1"}
                    >
                      
                      <p className="text-[16px] text-linkGreen font-semibold">{t('nextCategory')}</p>
  
                      <img
                      src="./assets/next.svg"
                      />
  
                    </motion.div>
  
                  </div>
  
                </div>
  
              </div>
              <div className="w-full bg-white border-t-[1px] border-b-[1px] rounded-b-[24px] flex flex-col py-5 px-10 ">
                <div className="flex flex-col space-y-3">
                  <p className="text-[16px] text-bgGreen">{t('totalCO2')}</p>
                  <div className="  flex flex-row max-sm:flex-col max-sm:justify-center items-center">
                    <div>
                      <p className="text-bgGreen text-[24px] max-sm:text-[16px] font-bold">12,000 KgCO<span className="bottom-0 text-[16px] max-sm:text-[12px]">2</span></p>
                    </div>
                    <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 max-sm:mt-5 md:space-x-3 md:ml-10">
                      <div className="flex flex-row space-x-3">
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
                        
                      </div>

                      <div className="flex flex-row space-x-3">
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
                  </div>
                  <div className="py-5">
                    <Separator className="w-full"/>
                  </div>
                  <div className="flex flex-row max-sm:flex-col items-center justify-between ">
                    <div className="flex flex-row max-sm:flex-col max-sm:space-y-2 mb-2 md:space-x-3 items-center">
                      <p className="text-[16px] text-bgGreen bottom-0">{t('eliminateCO2')}</p>
                      <p className="text-[24px] text-linkGreen font-bold">12,000 {t('trees')}</p>
                    </div>
                    <motion.a
                    whileTap={{ scale: 0.9 }} 
                    href="/plant-trees-payment"
                    className="w-[254px] h-[48px] bg-[#25B567] hover:bg-[#1a8249]  transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                    >
                      <img
                      src="./assets/plant.svg"
                      alt="plant"
                      />
                      <p className="text-white text-[16px] font-medium">{t('proceedToPlant')}</p>
                    </motion.a>
  
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