import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 pb-10 ">
      <div className="flex flex-row  justify-between w-[1179.5px] ">
        <div className="flex flex-col space-y-10">
          <img
          src="./assets/topBarLogo.svg"
          alt="logo"
          />
          <div className="flex flex-col">
            <p className="w-[267px] text-bgGreen text-[14px] leading-tight">Gaziantep Üniversitesi Teknopark Çamtepe Mah. Mahmut Tevfik Atay Bul. A Blok No:4</p>
            <p className="w-[267px] text-bgGreen text-[14px] leading-tight">Gaziantep/Türkiye</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <p className="text-[14px] text-bgGreen">info@nefesol.com</p>
            <img
            src="./assets/greenDot.svg"
            alt="dot"
            />
            <p className="text-[14px] text-bgGreen">0850 309 8804</p>
          </div>
        </div>

        <div className="flex flex-row justify-between w-[786px]">
          <div className="flex flex-col justify-between">
            <p className="text-[12px] font-bold text-linkGreen">BREATH PACK</p>
            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Carbon Footprint</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >CO2 Calculation</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Tree Packs</motion.a>

          </div>

          <div className="flex flex-col ml-[1.5rem] justify-between">
            <p className="text-[12px] font-bold text-linkGreen">READ</p>
            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >About Us</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Blog</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Communication</motion.a>

          </div>

          <div className="flex flex-col mr-[2.2rem] justify-between">
            <p className="text-[12px] font-bold text-linkGreen">LINKS</p>
            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Iptal lade Politikasi</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Mesafeli Satis Sozlesmesi</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="text-[16px] text-bgGreen cursor-pointer"
            >Üyelik Sözleşmesi</motion.a>

          </div>
        </div>
      
      </div>

      <div className="w-[1179.5px] py-8">
          <Separator className="w-[100%]"/>
      </div>

      <div className="w-[1179.5px] flex flex-row items-center justify-between">
        <div className="w-[366 px]">
          <p  className="text-[#0A4519] text-[12px]">2024 © Nefesol.com</p>
        </div>
        <div className="w-[786px] flex flex-row items-center justify-between">
          <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-[14px] text-bgGreen cursor-pointer"
          >Personal Data Protection Authority</motion.a>
          <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-[14px] text-bgGreen cursor-pointer"
          >General Terms and Conditions</motion.a>
          <div className="flex flex-row items-center justify-between w-[210px]">
            <motion.a className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/facebook.svg"
              />
            </motion.a>
            <motion.a className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/x.svg"
              />
            </motion.a>
            <motion.a className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/instagram.svg"
              />
            </motion.a>
            <motion.a className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/linkedIn.svg"
              />
            </motion.a>
            <motion.a className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/youtube.svg"
              />
            </motion.a>
            <motion.a className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/facebook.svg"
              />
            </motion.a>
          </div>
        </div>
          
      </div>
    </div>
  )
}


export default Footer