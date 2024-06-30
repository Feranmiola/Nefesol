import { useTranslation } from "react-i18next";

const PersonalDataProtectionAuthority = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 md:py-20 mt-5 md:mt-10 w-full">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="text-linkGreen font-semibold text-[16px] md:text-[18px] text-center">
          {t("personalDataProtectionAuthority.title")}
        </p>
        <p className='text-bgGreen text-[40px] max-sm:text-[20px] text-center font-medium w-[1145px] max-sm:w-[300px]'>
          {t("personalDataProtectionAuthority.informationText")}
        </p>

        <div className="flex flex-col space-y-2 md:space-y-5 px-4 md:px-0 max-w-[70rem]">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t("personalDataProtectionAuthority.personalDataDisclosure")}
          </p>

          <div className="flex flex-col space-y-2">
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
              {t("personalDataProtectionAuthority.processedData")}
            </p>
            <p className="text-[14px] md:text-[16px] text-bgGreen">
              {t("personalDataProtectionAuthority.processedDataDescription")}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
              {t("personalDataProtectionAuthority.processingPurposes")}
            </p>
            <p className="text-[14px] md:text-[16px] text-bgGreen">
              {t("personalDataProtectionAuthority.processingPurposesDescription")}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
              {t("personalDataProtectionAuthority.legalBasis")}
            </p>
            <p className="text-[14px] md:text-[16px] text-bgGreen">
              {t("personalDataProtectionAuthority.legalBasisDescription")}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
              {t("personalDataProtectionAuthority.dataTransfer")}
            </p>
            <p className="text-[14px] md:text-[16px] text-bgGreen">
              {t("personalDataProtectionAuthority.dataTransferDescription")}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
              {t("personalDataProtectionAuthority.dataProtection")}
            </p>
            <p className="text-[14px] md:text-[16px] text-bgGreen">
              {t("personalDataProtectionAuthority.dataProtectionDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDataProtectionAuthority;
