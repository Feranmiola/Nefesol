import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const LandingSection = () => {

  const {t} = useTranslation();
  
  return (
    <div className="homeBackground ">
      <div className=" py-60 max-sm:py-24 flex items-center justify-center flex-col space-y-10">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[150px] max-sm:text-[80px] leading-tight tracking-tight text-white">{t('everyTree')}</h1>
          <h1 className="text-[150px] max-sm:text-[80px] leading-tight tracking-tight text-white">{t('oneBreath')}</h1>
        </div>
        <div>
          <p className="text-[24px] max-sm:text-[10px] text-white takeAction">{t('takeAction')}</p>
        </div>
        <div className="flex flex-row max-sm:flex-col max-sm:space-y-4 md:space-x-4">
          <motion.a
          whileTap={{ scale: 0.9 }} 
          href="/co2-calculator"
          className="w-[280px] h-[64px] max-sm:w-[240px] max-sm:h-[62px] bg-[#25B567] hover:bg-[#1a8249]  transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
          >
            <p className="text-white text-[16px] font-medium">{t('breatheNow')}</p>
            <img
            src="./assets/ButtonArrow.svg"
            alt="arrow"
            />

          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }} 
            href="/ourservices"
            className="w-[280px] h-[64px] max-sm:w-[240px] max-sm:h-[62px] bg-transparent hover:bg-[#25B567] hover:ring-bgGreen hover:ring-2 ease-in-out ring-[1px] ring-white flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
            >
              <p className="text-white text-[16px] font-medium">{t('getInformation')}</p>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default LandingSection