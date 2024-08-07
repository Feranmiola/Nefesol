import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"



const Footer = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center px-10 pb-10 pt-20 ">
      <div className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:w-[334px] max-sm:space-y-5 justify-between md:w-[1179.5px] ">
        <div className="flex flex-col max-sm:w-[334px] space-y-10">
          <a className=" cursor-pointer" onClick={() => navigate('/')}>
            <img
            src="./assets/topBarLogo.svg"
            alt="logo"
            />
          </a>
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

        <div className="flex flex-row max-sm:flex-col max-sm:justify-start max-sm:w-full max-sm:space-y-10 max-sm:items-start justify-between md:w-[786px]">
          <div className="flex max-sm:flex-row max-sm:space-x-10 max-sm:items-start md:w-[390px] max-sm:w-full justify-between flex-row">
            <div className="flex flex-col justify-between max-sm:justify-start max-sm:space-y-2">
              <p className="text-[12px] font-bold text-linkGreen">{t('BREATH PACK')}</p>
              <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="text-[16px] text-bgGreen cursor-pointer"
              onClick={() => navigate('/carbon-footprint')}
              >{t('carbonFootprint')}</motion.a>

              <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="text-[16px] text-bgGreen cursor-pointer"
              onClick={() => navigate('/co2-calculator')}
              
              >{t('co2Calculation')}</motion.a>

              <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="text-[16px] text-bgGreen cursor-pointer"
              onClick={() => navigate('/treePacks')}
              >{t('treePacks')}</motion.a>

            </div>

            <div className="flex flex-col md:ml-[1.5rem] justify-between max-sm:justify-center  max-sm:space-y-2">
              <p className="text-[12px] font-bold text-linkGreen">{t('read')}</p>
              <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="text-[16px] text-bgGreen cursor-pointer"
              onClick={() => navigate('/about-us')}
              >{t('aboutUs')}</motion.a>

              <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="text-[16px] text-bgGreen cursor-pointer"
              onClick={() => navigate('/blog')}
              >{t('blog')}</motion.a>

              <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="text-[16px] text-bgGreen cursor-pointer"
              onClick={() => navigate('/ourservices')}
              >{t('ourServices')}</motion.a>

            </div>

          </div>
          <div className="flex flex-col md:mr-[2.2rem] justify-between max-sm:items-center max-sm:w-full max-sm:justify-center  max-sm:space-y-2">
            <p className="text-[12px] font-bold text-linkGreen">{t('links')}</p>
            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => navigate('/iptal-iade-politikasi')}
            className="text-[16px] text-bgGreen cursor-pointer"
            >{t('cancellationAndReturnPolicy.title')}</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => navigate('/mesafeli-satis-sozlesmesi')}
            className="text-[16px] text-bgGreen cursor-pointer"
            >{t('distanceSalesContract')}</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => navigate('/uyelik-sozlesmesi')}
            className="text-[16px] text-bgGreen cursor-pointer"
            >{t('membership.agreement')}</motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => navigate('/generalTermsAndConditions')}
            className="text-[16px] text-bgGreen cursor-pointer md:hidden"
            >{t('generalTermsAndCOnd')}</motion.a>
            
            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => navigate('/perssonalDataProtectionAuthority')}
            className="text-[16px] text-bgGreen cursor-pointer md:hidden"
            >{t('personalDataProtectionAuthority.title')}</motion.a>
          </div>
        </div>
      
      </div>

      <div className="md:w-[1179.5px] max-sm:w-screen py-8">
          <Separator className="w-[100%]"/>
      </div>

      <div className="md:w-[1179.5px] flex flex-row items-center max-sm:justify-center justify-between">
        <div className="md:w-[366px]">
          <p  className="text-[#0A4519] text-[12px]">2024 © Nefesol.com</p>
        </div>
        <div className="w-[786px] flex flex-row items-center justify-between max-sm:hidden">
          <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={() => navigate('/perssonalDataProtectionAuthority')}
          className="text-[14px] text-bgGreen cursor-pointer"
          >{t('personalDataProtectionAuthority.title')}</motion.a>
          <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={() => navigate('/generalTermsAndConditions')}
          className="text-[14px] text-bgGreen cursor-pointer"
          >{t('generalTermsAndCOnd')}</motion.a>
          <div className="flex flex-row items-center justify-between w-[210px]">
            <motion.a 
            href="https://www.facebook.com/settings/?tab=your_facebook_information"
            target="blank"
            className="cursor-pointer" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/facebook.svg"
              />
            </motion.a>
            <motion.a 
            href="https://x.com/nefesolcom"
                target="blank"
            className="cursor-pointer" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/x.svg"
              />
            </motion.a>
            <motion.a 
            href="https://www.instagram.com/nefesolcom/"
                target="blank"
            className="cursor-pointer" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/instagram.svg"
              />
            </motion.a>
            <motion.a 
            href="https://www.linkedin.com/company/nefesolcom/"
                target="blank"
            className="cursor-pointer" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/linkedIn.svg"
              />
            </motion.a>
            <motion.a 
            href="https://www.youtube.com/@Nefesolcom"
                target="blank"
            className="cursor-pointer" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/youtube.svg"
              />
            </motion.a>
            <motion.a 
            href="https://www.tiktok.com/@nefesol.com?is_from_webapp=1&sender_device=pc"
                target="blank"
            className="cursor-pointer" 
            whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} >
              <img
              src="./assets/tiktokLogo.svg"
              />
            </motion.a>
          </div>
        </div>
          
      </div>
    </div>
  )
}


export default Footer