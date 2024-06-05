import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner'

const VerifyEmail = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/plant-trees-thankyou')
    }

    const [loading, setLoading] = useState(true);
    const imageUrls = ['./assets/prev.svg', './assets/treeGroup.svg', './assets/greenDot.svg', './assets/minus.svg', './assets/plusIcon.svg']; // Replace with your image URLs
  
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
  }
    return (
        <div className="py-28 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-xl bg-white rounded-[24px]">
                <div className="flex flex-col">
                    <div className="bg-[#F8F9F8] h-[80px] px-5 md:px-10 rounded-t-[24px] flex flex-row justify-between items-center">
                        <p className="text-bgGreen text-[20px] md:text-[24px] font-bold">Plant Trees</p>
                        <motion.div
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-row space-x-2"
                        >
                            <img src="./assets/prev.svg" />
                            <p className="text-[14px] md:text-[16px] text-linkGreen font-semibold">Return to calculator</p>
                        </motion.div>
                    </div>
                    
                    <div className="flex items-center flex-col justify-center py-5">
                        <p className="text-bgGreen text-[16px]">You’re about to plant</p>
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-row py-6 space-x-5 items-center justify-center">
                                <img src="./assets/treeGroup.svg" />
                                <div className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center">
                                    <p className="text-bgGreen text-[32px]"><span className="text-[48px]">12,000</span></p>
                                    <p className="text-bgGreen text-[32px]">Trees</p>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center justify-center opacity-60">
                                <p className="text-bgGreen text-[12px]">Based on your CO2 use calculation</p>
                                <img src="./assets/greenDot.svg" />
                                <p className="text-bgGreen text-[12px]">Unit Price: 1.20 $/tree</p>
                            </div>
                        </div>
                        <div className="w-[180px] md:w-[234px] h-[52px] rounded-[8px] mt-2 flex space-x-2 items-center justify-center bg-[#E1EAE5]">
                            <p className="text-[24px] md:text-[32px] text-bgGreen font-medium">$220.29</p>
                            <div className="flex flex-col items-center justify-center space-y-1">
                                <img src="./assets/plusIcon.svg" />
                                <img src="./assets/minus.svg" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col px-5 md:px-10 space-y-2 pb-5">
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

                        <Input placeholder="Enter Verification Code" className="shad-input-plant w-full md:w-[536px]"/>
                    </div>

                    <div className="flex items-center justify-center pb-5">
                        <motion.a
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            className="w-[85%] h-[56px] bg-[#25B567] hover:bg-[#1a8249] transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                        >
                            <p className="text-white text-[16px] font-medium">Verify Email</p>
                        </motion.a>
                    </div>

                    <div className="flex flex-row space-x-1 items-center justify-center pb-5">
                        <p className="text-bgGreen text-[14px] md:text-[16px]">Didn’t receive code?</p>
                        <p className="text-[14px] md:text-[16px] text-linkGreen">Resend</p>
                    </div>
                </div>
            </div>
        </div>
      )
  }

export default VerifyEmail