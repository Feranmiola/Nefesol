import { useTranslation } from "react-i18next";

const GeneralTermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 md:py-20 mt-5 md:mt-10 w-full">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="text-linkGreen font-semibold text-[16px] md:text-[18px] text-center">
          {t('generalTerms.title')}
        </p>

        <div className="flex flex-col space-y-2 md:space-y-5 px-4 md:px-0 max-w-[70rem]">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph1')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph2')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph3')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph4')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph5')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph6')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph7')}
          </p>

          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('generalTerms.paragraph8')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralTermsAndConditions;
