import { Input } from "@/components/ui/input";
import { useOrder } from "@/Context/OrderContext";
import useScrollToTop from "@/hooks/ScrollToTop";
import { useUpdateUserInfo, useVerifyOTP } from "@/hooks/UseAuthMutation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import PulseLoader from "react-spinners/PulseLoader";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useCreateOrderMutation } from "@/hooks/UseOrderMutation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useVerifyPaymentMutation } from "@/hooks/UseVerifyPayment";


const VerifyEmail = () => {
  useScrollToTop()

  const { email, setAccessToken, setUserID, setOrderID, setTotalAmountInDollars, orderID, setIsVerified, firstName, lastName, setRole, setLastLoggedIn, city, town, street, preferredLocation, totalAmountInDollars, treeAmount, userID, setOtp: handelContextOTP } = useOrder();

  const [otp, setOtp] = useState("");
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [paying, setPaying] = useState(false);
  const [verifying, setVeridying] = useState(false);

  const verifyMutate = useVerifyOTP();
  const createOrderMutate = useCreateOrderMutation();
  const updateMutate = useUpdateUserInfo(userID);
  const verifyPaymentMutate = useVerifyPaymentMutation();
  const navigate = useNavigate();

  const handleLogin = () => {
    setTotalAmountInDollars("1000")
    setVeridying(true);
    verifyMutate.mutate(
      { email, otp },
      {
        onSuccess: (response) => {
          setAccessToken(response.data.access_token);
          setUserID(response.data.user.id);
          setIsVerified(response.data.user.is_verified);
          setLastLoggedIn(response.data.user.last_logged_in);
          setRole(response.data.user.role);

          if (response.data.user.first_name === null) {
            updateMutate.mutate(
              {
                email,
                first_name: firstName,
                last_name: lastName,
                city,
                town,
                tax: 0,
                street,
                is_verified: response.data.user.is_verified,
                last_logged_in: response.data.user.last_logged_in,
                role: response.data.user.role

              },
              {
                onSuccess: () => {
                },
                onError: (error: any) => {
                  setErrorMessage(error.message || "An error occurred");
                }
              }
            );
          }

          createOrderMutate.mutate(
            {
              userId: userID,
              coupon_discount_amount: 0,
              coupon_discount_title: "",
              payment_status: "unpaid",
              order_status: "pending",
              total_tax_amount: 0,
              payment_method: "Paypal",
              transaction_reference: "",
              coupon_code: "",
              order_note: "",
              order_type: "delivery",
              callback: "",
              delivery_address: preferredLocation,
              free_delivery_by: "",
              transaction_id: "",
              cancellation_reason: "",
              canceled_by: "",
              tracking_number: "",
              customer_contact: email,
              status: "Created",
              sales_tax: 0,
              shipping_address: (city + ", " + town + ", " + street),
              billing_address: (city + ", " + town + ", " + street),
              logistics_provider: 0,
              total: Number(totalAmountInDollars) || 0,
              orderItems: {
                plantingLocation: preferredLocation,
                treeAmount,
                datePlanted: "",
                buyerFirstName: firstName,
                buyerLastName: lastName,
                certificateStatus: "Issued"
              }
            },
            {
              onSuccess: (response) => {
                setIsSuccessAlertOpen(true);
                setOrderID(response.data.id);
                setOpenPaymentDialog(true);
                setVeridying(false);
                console.log(response.data.id)
                console.log("User :", userID)
              },
              onError: (error: any) => {
                setVeridying(false);
                setIsFailureAlertOpen(true);
                setErrorMessage(error.message || "Verification failed. Please try again.");
              }
            }
          );


          handelContextOTP(otp)
        },
        onError: (error: any) => {
          setVeridying(false);
          setIsFailureAlertOpen(true);
          setErrorMessage(error.message || "Verification failed. Please try again.");
        }
      }
    );
  }

  const handleSetOTP = (event: any) => {
    setOtp(event?.target.value);
  }

  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "./assets/prev.svg",
    "./assets/treeGroup.svg",
    "./assets/greenDot.svg",
    "./assets/minus.svg",
    "./assets/plusIcon.svg"
  ];

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

  // @ts-ignore
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalAmountInDollars
          },
        },
      ],
    });
  };

  // @ts-ignore
  const onApprove = (data: any, actions: any) => {
    setPaying(true);
    // @ts-ignore
    return actions.order.capture().then(function (details: any) {

      verifyPaymentMutate.mutate(
        {
          orderID: orderID,
          userID,
          amount: totalAmountInDollars
        },
        {
          onSuccess: () => {
            setPaying(false);
            setOpenPaymentDialog(false);
            navigate("/plant-trees-thankyou");
          },
          onError: (error: any) => {
            setPaying(false)
            setErrorMessage(error.message || "An error occurred");
          }
        }
      );

    });
  };

  return (
    <PayPalScriptProvider options={{ "clientId": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
      <div className="py-28 flex items-center justify-center">
        <Dialog open={openPaymentDialog} onOpenChange={setOpenPaymentDialog}>
          <DialogContent className="w-[350px] flex flex-col items-center outline-none justify-center p-5">
            <p className="text-[26px] text-bgGreen font-bold">Continue with Paypal</p>
            <p className="text-[18px] text-bgGreen">Payment of {totalAmountInDollars || "0"}</p>
            <div className=" w-full rounded-md h-[60px]">
              {paying ? (
                <div className="flex items-center justify-center w-full">
                  <PulseLoader color="#0A4519" />
                </div>

              ) : (
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  fundingSource="paypal"
                  style={{
                    layout: 'vertical',

                  }}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
        <Snackbar open={isSuccessAlertOpen} autoHideDuration={3000} onClose={() => setIsSuccessAlertOpen(false)}>
          <Alert
            onClose={() => setIsSuccessAlertOpen(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Email verified successfully!
          </Alert>
        </Snackbar>
        <Snackbar open={isFailureAlertOpen} autoHideDuration={3000} onClose={() => setIsFailureAlertOpen(false)}>
          <Alert
            onClose={() => setIsFailureAlertOpen(false)}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
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
                    {email}
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
                onChange={handleSetOTP}
                placeholder={t("enterVerificationCode")}
                className="shad-input-plant-width"
              />
            </div>

            <div className="flex items-center justify-center pb-5">
              <motion.a
                whileTap={{ scale: 0.9 }}
                onClick={handleLogin}
                className="w-[85%] h-[56px] bg-[#25B567] hover:bg-[#1a8249] transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
              >
                {verifying ? (
                  <PulseLoader color="white" />
                ) : (
                  <p className="text-white text-[16px] font-medium">
                    {t("verifyYourEmail")}
                  </p>
                )}
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
    </PayPalScriptProvider >
  );
};

export default VerifyEmail;
