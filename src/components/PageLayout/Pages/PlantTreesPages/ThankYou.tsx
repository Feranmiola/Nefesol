import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const ThankYou = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/plant-trees-tracking')
    }

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
        <div className="py-20 mt-10 flex items-center justify-center">
            <div className="w-[600px]  bg-white py-20 rounded-[24px]">
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <img
                    src="./assets/plantCheck.svg"
                    />
    
                    <p className="text-[40px] text-bgGreen font-medium">Thank You!</p>
                    <p className="text-[16px] text-bgGreen text-center w-[340px]">Your buying certificate and invoice have been sent to your email.</p>
    
                    <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#E1EAE5] w-[312px] h-[72px]">
                        <p className="text-bgGreen text-[12px]">Trees Tracking Code</p>
                        <div className="flex flex-row space-x-2">
                            <p className="text-bgGreen text-[32px]">64HDNJ</p>
                            <img
                            src="./assets/copyIcon.svg"
                            />
                        </div>
    
                    </div>
    
                    <div>
                        <motion.a
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={handleNext}
                            className=" text-linkGreen text-[16px] hover:underline cursor-pointer">Track Progress</motion.a>
                    </div>
                    
                </div>
                
            </div>
        </div>
      )
  }

export default ThankYou