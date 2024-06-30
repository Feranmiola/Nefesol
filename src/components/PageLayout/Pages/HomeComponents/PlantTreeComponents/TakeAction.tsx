import { useTranslation } from "react-i18next"


const TakeAction = () => {
    const {t} = useTranslation();
  return (
    <div className="flex flex-col items-center max-sm:justify-center">
        
        <p className="text-[#0A4519] text-[64px] max-sm:text-[24px] max-sm:text-center max-sm:font-medium md:w-[495px] md:leading-tight">{t('takeActionGreenFuture')}</p>

        <div className="flex flex-col mt-10 space-y-8">
            <div className="flex flex-row space-x-4 ">
                <div className="w-[44px] h-[44px] max-sm:w-[24px] max-sm:h-[24px] rounded-full ring-[1px] px-[4px] py-[2px] flex items-center justify-center  ring-[#009444]">
                    <p className="text-[24px] max-sm:text-[20px] text-[#009444]">1</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-[28px] max-sm:text-[20px] text-bgGreen">{t('chooseForest')}</p>
                    <p className="text-[16px] max-sm:text-[14px] text-bgGreen md:w-[437px] max-sm:w-[250px]">{t('wePlantInTurkey')}</p>
                </div>
            </div>

            <div className="flex flex-row space-x-4 ">
                <div className="w-[44px] h-[44px] max-sm:w-[24px] max-sm:h-[24px] rounded-full ring-[1px] px-[4px] py-[2px] flex items-center justify-center  ring-[#009444]">
                    <p className="text-[24px] max-sm:text-[20px] text-[#009444]">2</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-[28px] max-sm:text-[20px] text-bgGreen">{t('determineQuantity')}</p>
                    <p className="text-[16px] max-sm:text-[14px] text-bgGreen md:w-[437px] max-sm:w-[250px]">{t('co2Info')} </p>
                </div>
            </div>

            <div className="flex flex-row space-x-4 ">
                <div className="w-[44px] h-[44px] max-sm:w-[24px] max-sm:h-[24px] rounded-full ring-[1px] px-[4px] py-[2px] flex items-center justify-center  ring-[#009444]">
                    <p className="text-[24px] max-sm:text-[20px] text-[#009444]">3</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-[28px] max-sm:text-[20px] text-bgGreen">{t('wePlant')}</p>
                    <p className="text-[16px] max-sm:text-[14px] text-bgGreen md:w-[437px] max-sm:w-[250px]">{t('co2Info')} </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TakeAction