import { Input } from "@/components/ui/input";
import useScrollToTop from "@/hooks/ScrollToTop";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const VerifyEmail = () => {
  useScrollToTop()
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "./assets/prev.svg",
    "./assets/treeGroup.svg",
    "./assets/greenDot.svg",
    "./assets/minus.svg",
    "./assets/plusIcon.svg"
  ]; // Replace with your image URLs

  useEffect(() => {
    let loadedImages = 0;

    imageUrls.forEach(url => {
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

  if (loading) {
    return (
      <div className="w-screen h-screen bg-white flex items-center justify-center minw-[100vh]">
        <BeatLoader color="#0A4519" />
      </div>
    );
  }

  return (
    <div className="py-28 flex items-center justify-center">
      <div className="w-full max-w-md lg:max-w-xl bg-white rounded-[24px]">
        <div className="flex flex-col">
          <div className="bg-[#F8F9F8] h-[80px] px-5 md:px-10 rounded-t-[24px] flex flex-row justify-between items-center">
            <p className="text-bgGreen text-[20px] md:text-[24px] font-bold">
              {t("treesPlanted")}
            </p>
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-row space-x-2"
              onClick={() => navigate("/plant-trees-payment")}
            >
              <img src="./assets/prev.svg" />
              <p className="text-[14px] md:text-[16px] text-linkGreen font-semibold">
                {t("returnToDetails")}
              </p>
            </motion.a>
          </div>

          <div className="flex items-center flex-col justify-center py-5">
            <p className="text-bgGreen text-[16px]">{t("treesPlanted")}</p>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-row py-6 space-x-5 items-center justify-center">
                <img src="./assets/treeGroup.svg" />
                <div className="flex flex-row max-sm:flex-col items-center max-sm:justify-center">
                  <p className="text-bgGreen text-[32px]">
                    <span className="text-[48px]">12,000</span>
                  </p>
                  <p className="text-bgGreen text-[32px]">{t('trees')}</p>
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center justify-center opacity-60">
                <p className="text-bgGreen text-[12px]">
                  {t("basedOnCO2Calculation")}
                </p>
                <img src="./assets/greenDot.svg" />
                <p className="text-bgGreen text-[12px]">{t("unitPrice")}</p>
              </div>
            </div>
            <div className="w-[180px] md:w-[234px] h-[52px] rounded-[8px] mt-2 flex space-x-2 items-center justify-center bg-[#E1EAE5]">
              <p className="text-[24px] md:text-[32px] text-bgGreen font-medium">
                $220.29
              </p>
              <div className="flex flex-col items-center justify-center space-y-1">
                <img src="./assets/plusIcon.svg" />
                <img src="./assets/minus.svg" />
              </div>
            </div>
          </div>

          <div className="flex flex-col px-5 md:px-10 space-y-2 pb-5">
            <p className="text-bgGreen text-[20px] md:text-[24px] font-bold">
              {t("verifyYourEmail")}
            </p>
            <div className="space-y-1 flex flex-col">
              <div className="flex flex-row space-x-1">
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                  {t("enterVerificationCode")}
                </p>
                <p className="text-[14px] md:text-[16px] text-bgGreen font-bold">
                  your@email.com
                </p>
              </div>
              <div className="flex flex-row space-x-1">
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                  {t("notYourEmail")}
                </p>
                <p className="text-[14px] md:text-[16px] text-linkGreen">
                  {t("changeEmail")}
                </p>
              </div>
            </div>

            <Input
              placeholder={t("enterVerificationCode")}
              className="shad-input-plant-width"
            />
          </div>

          <div className="flex items-center justify-center pb-5">
            <motion.a
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/plant-trees-thankyou")}
              className="w-[85%] h-[56px] bg-[#25B567] hover:bg-[#1a8249] transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
            >
              <p className="text-white text-[16px] font-medium">
                {t("verifyYourEmail")}
              </p>
            </motion.a>
          </div>

          <div className="flex flex-row space-x-1 items-center justify-center pb-5">
            <p className="text-bgGreen text-[14px] md:text-[16px]">
              {t("didntReceiveCode")}
            </p>
            <p className="text-[14px] md:text-[16px] text-linkGreen">
              {t("resend")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
