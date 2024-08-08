import { useOrder } from "@/Context/OrderContext";
import useScrollToTop from "@/hooks/ScrollToTop";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ThankYou = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/copyIcon.svg'];
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { orderID } = useOrder();

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

  const handleCopyOrderID = async () => {
    try {
      await navigator.clipboard.writeText(orderID);
      setIsSnackbarOpen(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (loading) {
    return (
      <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
        <BeatLoader color="#0A4519" />
      </div>
    );
  }

  return (
    <div className="py-10 mt-10 flex items-center justify-center">
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {t('orderIDCopied')}
        </Alert>
      </Snackbar>

      <div className="w-full max-w-md lg:max-w-lg bg-white py-10 md:py-20 rounded-[24px]">
        <div className="flex flex-col space-y-4 items-center justify-center px-5">
          <img src="./assets/plantCheck.svg" alt="Plant Check" />

          <p className="text-[32px] md:text-[40px] text-bgGreen font-medium">{t('thankYou')}</p>
          <p className="text-[14px] md:text-[16px] text-bgGreen text-center w-full md:w-[340px]">
            {t('certificateAndInvoice')}
          </p>

          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#E1EAE5] w-full  h-[72px]">
            <p className="text-bgGreen text-[12px]">{t('treesTrackingCode')}</p>
            <div className="flex flex-row space-x-2 items-center">
              <p className="text-bgGreen text-[16px] md:text-[32px]">{orderID}</p>
              <motion.img
                src="./assets/copyIcon.svg"
                alt="Copy Icon"
                className="cursor-pointer"
                onClick={handleCopyOrderID}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>

          <div>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/plant-trees-tracking")}
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