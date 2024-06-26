import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";


const ThankYou = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(true);
    const imageUrls = ['./assets/copyIcon.svg']; // Replace with your image URLs
  
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
            <BeatLoader color="#0A4519" />
          </div>
        );
  }
    return (
        <div className="py-10 mt-10 flex items-center justify-center">
        <div className="w-full max-w-md lg:max-w-lg bg-white py-10 md:py-20 rounded-[24px]">
            <div className="flex flex-col space-y-4 items-center justify-center px-5">
                <img src="./assets/plantCheck.svg" alt="Plant Check" />
                
                <p className="text-[32px] md:text-[40px] text-bgGreen font-medium">{t('thankYou')}</p>
                <p className="text-[14px] md:text-[16px] text-bgGreen text-center w-full md:w-[340px]">
                    {t('certificateAndInvoice')}
                </p>
                
                <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#E1EAE5] w-full md:w-[312px] h-[72px]">
                    <p className="text-bgGreen text-[12px]">{t('treesTrackingCode')}</p>
                    <div className="flex flex-row space-x-2">
                        <p className="text-bgGreen text-[24px] md:text-[32px]">64HDNJ</p>
                        <img src="./assets/copyIcon.svg" alt="Copy Icon" />
                    </div>
                </div>
                
                <div>
                    <motion.a
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        href="/plant-trees-tracking"
                        className="text-linkGreen text-[14px] md:text-[16px] hover:underline cursor-pointer"
                    >
                        {t('trackProgress')}
                    </motion.a>
                </div>
            </div>
        </div>
    </div>
    
      )
  }

export default ThankYou