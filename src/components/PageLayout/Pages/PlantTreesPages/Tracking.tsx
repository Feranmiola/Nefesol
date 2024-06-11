import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion"
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTrigger,
  } from "@/components/ui/dialog"
  




const Tracking = () => {

    const [isTracking, setIstracking] = useState(false);
    const [dowwnloadCertificateStep1, SetStep1] = useState(false);
    const [dowwnloadCertificateStep2, SetStep2] = useState(false);


    const [loading, setLoading] = useState(false);
    const imageUrls = ['./assets/trackingPlantBg.svg', './assets/whiteTree.svg', './assets/treesBought.svg', './assets/locationLogo.svg', './assets/status.svg']; // Replace with your image URLs

    const handleTrack = () => {
        setIstracking(true);
        SetStep1(true);
        setLoading(true);
    
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
    }
  
    
    
    return (
        <div className="py-20 mt-10 items-center justify-center flex">
        <div className="w-full md:w-[736px] flex bg-white rounded-[24px]">
            <div className="p-10 w-full">
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-2">
                        <p className="text-bgGreen font-bold text-[24px]">Trees Tracking & Verification</p>
                        <p className="text-[16px] text-bgGreen">Track the progress of bought trees</p>
                    </div>
                    <p className="text-bgGreen text-[16px]">Trees Tracking & Verification Code</p>
    
                    <div className="flex flex-col space-y-2">
                        <div className="border-[1px] w-full md:w-[100%] flex rounded-[8px] h-[64px]">
                            <div className="w-full flex flex-row px-2 items-center justify-between">
                                <Input className="h-full w-[80%] shad-input-bare" />
    
                                <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleTrack}
                                    className=" cursor-pointer px-6 py-2 rounded-[5px] bg-linkGreen mr-5 ">
                                        <p className="text-[16px] text-white">Track</p>
                                </motion.div>
                            </div>
                        </div>
                        {dowwnloadCertificateStep1 &&(
                            <div className="flex flex-row cursor-pointer space-x-1" onClick={() => {SetStep1(false); SetStep2(true);}}>
                                <img src="./assets/downloadCertificateLogo.svg" />
                                <p className="text-linkGreen font-bold text-[12px]"><u>Download Certificate.</u></p>
                            </div>
                        )}

                        {dowwnloadCertificateStep2 && (
                            <div className="flex border-[1px] rounded-[8px] items-center justify-center px-25 py-3 w-full">
                                <div className=" w-full px-2 flex flex-row items-center justify-between">
                                    <div className="w-[346px]">
                                        <p className="text-[16px] text-bgGreen">Enter registered email to download certificate</p>
                                    </div>
                                    <div className=" bg-[#F8F9F8] w-[266px] flex rounded-[8px] ">
                                        <div className=" w-[266px] flex flex-row  items-center justify-between">
                                            <Input  type="email" className="w-[78%] shad-input-bareV2" placeholder="Enter Registered Email" />
                                            <Dialog>
                                                <DialogTrigger>
                                                    <motion.div
                                                        whileHover={{ scale: 1.06 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className=" cursor-pointer pr-2 ">
                                                            <p className="text-[16px] text-linkGreen">Download</p>
                                                    </motion.div>
                                                </DialogTrigger>

                                                <DialogContent className=" min-w-[800px] min-h-[430px] bg-white rounded-[24px]">
                                                    <div className="flex flex-col items-center ">
                                                        <div className="bg-[#F8F9F8] h-[80px] w-full px-5 md:px-10 rounded-t-[24px] flex flex-row justify-between items-center">
                                                            <p className="text-bgGreen text-[20px] md:text-[24px] font-bold">Download Certificate</p>
                                                            <DialogClose asChild>
                                                                <motion.a
                                                                    whileHover={{ scale: 1.06 }}
                                                                    whileTap={{ scale: 0.9 }}
                                                                    className="flex flex-row space-x-2"
                                                                >
                                                                        <img src="./assets/prev.svg" />
                                                                        <p className="text-[14px] md:text-[16px] text-linkGreen font-semibold">Return to Details</p>
                                                                </motion.a>
                                                            </DialogClose>
                                                        </div>

                                                        <div className="flex w-full flex-col mt-10 px-5 md:px-10 space-y-2 pb-5">
                                                            <p className="text-bgGreen text-[20px] md:text-[24px] font-bold">Verify your email</p>
                                                            <div className="space-y-1 flex flex-col">
                                                                <div className="flex flex-row space-x-1">
                                                                    <p className="text-[14px] md:text-[16px] text-bgGreen">Enter verification code sent to</p>
                                                                    <p className="text-[14px] md:text-[16px] text-bgGreen font-bold">your@email.com</p>
                                                                </div>
                                                                <div className="flex flex-row space-x-1">
                                                                    <p className="text-[14px] md:text-[16px] text-bgGreen">Not your email?</p>
                                                                    <p className="text-[14px] md:text-[16px] text-linkGreen">change email</p>
                                                                </div>
                                                            </div>

                                                            <Input placeholder="Enter Verification Code" className="shad-input-plant-width"/>
                                                        </div>

                                                        <div className="flex w-full items-center justify-center pb-5">
                                                            <DialogClose asChild>
                                                                <motion.a
                                                                    whileTap={{ scale: 0.9 }}
                                                                    href="/plant-trees-thankyou"
                                                                    className="w-[85%] h-[56px] bg-[#25B567] hover:bg-[#1a8249] transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                                                                >
                                                                    <p className="text-white text-[16px] font-medium">Download</p>
                                                                </motion.a>
                                                            </DialogClose>
                                                        </div>

                                                        <div className="flex w-full flex-row space-x-1 items-center justify-center pb-5">
                                                            <p className="text-bgGreen text-[14px] md:text-[16px]">Didn’t receive code?</p>
                                                            <p className="text-[14px] md:text-[16px] text-linkGreen">Resend</p>
                                                        </div>

                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
    
                    {isTracking && (
                        <div className="flex flex-col w-full border-[1px] border-bgGreen rounded-[8px]">
                            {loading ? (
                                <div className="w-full h-100px bg-white flex items-center justify-center">
                                    <BeatLoader color="#0A4519" />
                                </div>
                            ) : null}
    
                            <div className={loading ? "hidden" : ""}>
                                <div className="h-[94px] trackingInfo flex w-full rounded-t-[8px]">
                                    <div className="px-10 flex flex-row items-center justify-between w-full">
                                        <p className="text-white text-[16px] w-[240px]">
                                            We are building an environmentally friendly future
                                        </p>
                                        <img src="./assets/whiteTree.svg" />
                                    </div>
                                </div>
    
                                <div className="flex flex-col py-5 px-5 space-y-5">
                                    <div className="flex flex-row space-x-3 items-center">
                                        <img src="./assets/treesBought.svg" />
                                        <div className="flex flex-col">
                                            <p className="text-bgGreen opacity-60 text-[12px]">Trees Bought</p>
                                            <p className="text-bgGreen font-medium text-[24px]">12,000 Trees</p>
                                        </div>
                                    </div>
    
                                    <div className="flex flex-row space-x-[1.5rem] items-center">
                                        <img src="./assets/locationLogo.svg" />
                                        <div className="flex flex-col">
                                            <p className="text-bgGreen opacity-60 text-[12px]">Location</p>
                                            <p className="text-bgGreen font-medium text-[24px]">Lagos, Nigeria</p>
                                        </div>
                                    </div>
    
                                    <div className="flex flex-row space-x-[1.20rem] items-center">
                                        <img src="./assets/status.svg" />
                                        <div className="flex flex-col">
                                            <p className="text-bgGreen opacity-60 text-[12px]">Status</p>
                                            <p className="text-bgGreen font-medium text-[24px]">Planted</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="w-full py-5">
                                    <Separator className="w-full h-[1px]" />
                                </div>
    
                                <div className="flex flex-row items-center justify-between px-5 pb-5">
                                    <div className="flex flex-col">
                                        <p className="text-bgGreen opacity-60 text-[8px]">Date Bought:</p>
                                        <p className="text-bgGreen text-[12px] font-medium">21 June, 2024</p>
                                    </div>
    
                                    <div className="flex flex-col">
                                        <p className="text-bgGreen opacity-60 text-[8px]">Date Planted:</p>
                                        <p className="text-bgGreen text-[12px] font-medium">21 June, 2024</p>
                                    </div>
    
                                    <div className="flex flex-col">
                                        <p className="text-bgGreen opacity-60 text-[8px]">Bought By:</p>
                                        <p className="text-bgGreen text-[12px] font-medium">James John</p>
                                    </div>
    
                                    <div className="flex flex-col">
                                        <p className="text-bgGreen opacity-60 text-[8px]">Certificate:</p>
                                        <p className="text-bgGreen text-[12px] font-medium">Issued</p>
                                    </div>
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
export default Tracking