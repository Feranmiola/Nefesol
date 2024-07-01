import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import VisibilitySensor from "react-visibility-sensor"
import { Img } from "react-image"

const Services = () => {

    const {t} = useTranslation();
  return (
    <div className="py-20 max-sm:flex max-sm:flex-col max-sm:space-y-5 max-sm:items-center max-sm:justify-center">
        <p className="md:ml-[168px] pb-20 font-medium text-bgGreen text-[40px] max-sm:text-[30px]">{t('ourServices')}</p>
        <div className="flex flex-col space-y-10 items-center justify-center">
            <div className="flex flex-row max-sm:flex-col md:space-x-10 max-sm:space-y-10">
                <div className="flex flex-col items-start space-y-4">
                    <VisibilitySensor>
                    <Img
                    loading="lazy"
                    src={"./assets/carbonConsulatancyLogo.svg"}
                    alt="Carbon Consultancy Logo"
                    />
                    </VisibilitySensor>
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">{t('carbonConsultancy')}</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">{t('providingEqualization')}</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">{t('learnMore')}</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <VisibilitySensor>
                    <Img
                    loading="lazy"
                    src={"./assets/certificationLogo.svg"}
                    alt="certification"
                    />
                    </VisibilitySensor>
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">{t('certification')}</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">{t('reduceImpact')}</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">{t('learnMore')}</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <VisibilitySensor>
                    <Img
                    loading="lazy"
                    src={"./assets/digitalMarketingLogo.svg"}
                    alt="Digital Marketing"
                    />
                    </VisibilitySensor>
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">{t('digitalMarketingTitle')}</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">{t('websiteSeo')}</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">{t('learnMore')}</motion.a>
                </div>

            </div>

            <div className="flex flex-row max-sm:flex-col md:space-x-10 max-sm:space-y-10">
                <div className="flex flex-col items-start space-y-4">
                    <VisibilitySensor>
                    <Img
                    loading="lazy"
                    src={"./assets/carbonFootprintLogoServices.svg"}
                    />
                    </VisibilitySensor>
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px] w-[356px] max-sm:w-[300px]">{t('carbonFootprintOptimisation')}</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">{t('importanceToday')}</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">{t('learnMore')}</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <VisibilitySensor>
                    <Img
                    loading="lazy"
                    src={"./assets/greenTechLogo.svg"}
                    />
                    </VisibilitySensor>
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px] w-[356px] max-sm:w-[300px]">{t('greenTechIncentives')}</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">{t('sustainabilityObjectiveTitle')}</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">{t('learnMore')}</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <VisibilitySensor>
                    <Img
                    loading="lazy"
                    src={"./assets/technicalSupportLogo.svg"}
                    />
                    </VisibilitySensor>
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">{t('technicalSupport')}</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">{t('techRole')}</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">{t('learnMore')}</motion.a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Services