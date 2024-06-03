import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion"
import { useLayoutEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner'



const Tracking = () => {

    const [isTracking, setIstracking] = useState(false);

    const handleNext = () => {
        setIstracking(true);
    }

    const [loading, setLoading] = useState(true);
    useLayoutEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Delay of 2 seconds
  }, []);

  if(loading){
      return (
          <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
            <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#0A4519"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          </div>
        );
  }else{
    return (
        <div className="py-20 mt-10 items-center justify-center flex">
            <div className="w-[600px]  flex   bg-white rounded-[24px]">
                <div className="p-10  ">
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2">
                            <p className="text-bgGreen font-bold text-[24px]">Trees Tracking & Verification</p>
                            <p className="text-[16px] text-bgGreen">Track the progress of bought trees</p>
                        </div>
                        <p
                        className="text-bgGreen text-[16px]">Trees Tracking & Verification Code</p>
                        
                        <div className="flex flex-col space-y-2">
                            <div className="border-[1px] w-[536px] flex rounded-[8px] h-[64px]">
                                <div className="w-full flex flex-row px-2 items-center justify-between">
                                    <Input className=" h-full w-[80%] shad-input-bare"/>
                                    
                                    <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }} 
                                    onClick={handleNext}
                                    className="text-[16px] text-linkGreen cursor-pointer mr-5">Track</motion.div>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-1 opacity-40">
                                <img
                                src="./assets/infoIcon.svg"
                                />
                                <p className="text-bgGreen text-[12px]">The code issued when you bought trees.</p>
    
                            </div>
    
                        </div>
    
                        {isTracking && (
                            <div className="flex flex-col  w-full border-[2px] rounded-[8px]">
                                <div className="h-[94px] trackingInfo flex w-full rounded-t-[8px]">
                                    <div className="px-10 flex flex-row items-center justify-between w-full">
                                        <p className="text-white text-[16px] w-[240px]">We are building an environmentally friendly future</p>
                                        <img
                                        src="./assets/whiteTree.svg"
                                        />
    
                                    </div>
    
                                </div>
    
                                <div className="flex flex-col py-5 px-5 space-y-5">
                                    
                                    <div className="flex flex-row space-x-3 items-center ">
                                            <img
                                            src="./assets/treesBought.svg"
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-bgGreen opacity-60 text-[12px]">Trees Bought</p>
                                                <p className="text-bgGreen font-medium text-[24px]">12,000 Trees</p>
    
                                            </div>
    
                                        </div>
    
                                        <div className="flex flex-row space-x-[1.5rem] items-center ">
                                            <img
                                            src="./assets/locationLogo.svg"
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-bgGreen opacity-60 text-[12px]">Location</p>
                                                <p className="text-bgGreen font-medium text-[24px]">Lagos, Nigeria</p>
    
                                            </div>
    
                                        </div>
    
                                        <div className="flex flex-row space-x-[1.20rem] items-center ">
                                            <img
                                            src="./assets/status.svg"
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-bgGreen opacity-60 text-[12px]">Status</p>
                                                <p className="text-bgGreen font-medium text-[24px]">Planted</p>
    
                                            </div>
    
                                        </div>
    
                                    </div>
    
                                    <div className="w-full py-5">
                                        <Separator className="w-full h-[1px]"/>
                                    </div>
    
                                    <div className="flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="flex  flex-col">
                                            <p className="text-bgGreen opacity-60 text-[8px]">Date Bought:</p>
                                            <p className="text-bgGreen text-[12px] font-medium">21 June, 2024</p>
    
                                        </div>
    
                                        <div className="flex  flex-col">
                                            <p className="text-bgGreen opacity-60 text-[8px]">Date Planted:</p>
                                            <p className="text-bgGreen text-[12px] font-medium">21 June, 2024</p>
    
                                        </div>
    
                                        <div className="flex  flex-col">
                                            <p className="text-bgGreen opacity-60 text-[8px]">Bought By:</p>
                                            <p className="text-bgGreen text-[12px] font-medium">James John</p>
    
                                        </div>
    
                                        <div className="flex  flex-col">
                                            <p className="text-bgGreen opacity-60 text-[8px]">Certificate:</p>
                                            <p className="text-bgGreen text-[12px] font-medium">Issued</p>
    
                                        </div>
    
                                    </div>
                                
                            </div>
                        )}
    
                    </div>
                </div>
            </div>
        </div>
      )
  }

}

export default Tracking