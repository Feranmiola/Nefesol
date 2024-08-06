import { motion } from "framer-motion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"
import BeatLoader from "react-spinners/BeatLoader"
import { useTranslation } from "react-i18next"
import useScrollToTop from "@/hooks/ScrollToTop"
import { useNavigate } from "react-router-dom"
import { useOrder } from "@/Context/OrderContext"
import { useLoginMutation } from "@/hooks/UseAuthMutation"
import { useToast } from "@/components/ui/use-toast"

const Payment = () => {
    useScrollToTop();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const loginMutate = useLoginMutation();


    const {
        email, setEmail,
        setPreferredLocation,
        setPaymentMethod,
        firstName, setFirstName,
        lastName, setLastName,
        city, setCity,
        town, setTown,
        street, setStreet,
        postCode, setPostCode,
        taxNumber, setTaxNumber,
        taxAdministrator, setTaxAdministrator,
    } = useOrder();

    const [loading, setLoading] = useState(true);
    const imageUrls = ['./assets/prev.svg', './assets/treeGroup.svg', './assets/greenDot.svg', './assets/minus.svg', './assets/plusIcon.svg'];

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

    if (loading) {
        return (
            <div className='w-screen h-screen bg-white flex items-center justify-center'>
                <BeatLoader color="#0A4519" />
            </div>
        );
    }

    const handleChange = (setter: (value: string) => void) => (event: any) => {
        setter(event.target.value);
    };


    const handleLogin = () => {
        loginMutate.mutate(
            { email },
            {
                onSuccess: () => {
                    navigate("/plant-trees-verifyemail")
                },
                onError: (error: any) => {
                    console.log(error)
                }
            }
        );
    }

    return (
        <div className="py-10 md:py-20 mt-10 flex items-center justify-center">
            <div className="max-w-md lg:max-w-2xl lg:flex lg:items-center lg:justify-between bg-white rounded-[24px]">
                <div className="flex flex-col">
                    <div className="bg-[#F8F9F8] h-[80px] px-5 md:px-10 rounded-t-[24px] flex flex-row justify-between items-center">
                        <p className="text-bgGreen text-[20px] md:text-[24px] font-bold">{t('plantTrees')}</p>
                        <motion.div
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-row space-x-2"
                        >
                            <img src="./assets/prev.svg" />
                            <a onClick={() => navigate('/co2-calculator')} className="text-[14px] md:text-[16px] text-linkGreen font-semibold">{t('returnToCalculator')}</a>
                        </motion.div>
                    </div>

                    <div className="flex items-center flex-col justify-center py-5">
                        <p className="text-bgGreen text-[16px]">{t('youAreAboutToPlant')}</p>
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-row py-6 space-x-5 items-center justify-center">
                                <img src="./assets/treeGroup.svg" />
                                <div className="flex flex-row max-sm:flex-col items-center max-sm:justify-center">
                                    <p className="text-bgGreen text-[32px]"><span className="text-[48px]">12,000</span></p>
                                    <p className="text-bgGreen text-[32px]">{t('trees')}</p>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center justify-center opacity-60">
                                <p className="text-bgGreen text-[12px]">{t('basedOnYourCO2')}</p>
                                <img src="./assets/greenDot.svg" />
                                <p className="text-bgGreen text-[12px]">{t('unitPrice2')}</p>
                            </div>
                        </div>
                        <div className="w-[180px] md:w-[234px] h-[52px] rounded-[8px] mt-2 flex space-x-2 items-center justify-center bg-[#E1EAE5]">
                            <p className="text-[24px] md:text-[32px] text-bgGreen font-medium">$220.29</p>
                            <div className="flex flex-col items-center justify-center space-y-1">
                                <img src="./assets/plusIcon.svg" />
                                <img src="./assets/minus.svg" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-5 items-center justify-center px-5">
                        <div className="flex flex-col space-y-3 w-full">
                            <p className="text-bgGreen text-[16px]">{t('email')}</p>
                            <Input onChange={handleChange(setEmail)} value={email} placeholder={t('enterEmail')} type="email" className="shad-input-plant-width" />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('preferredPlantingLocation')}</p>
                                <Select onValueChange={setPreferredLocation}>
                                    <SelectTrigger className="shad-select-plant data-[placeholder]:text-[#0a45194f]">
                                        <SelectValue placeholder={t('select')} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('paymentMethod')}</p>
                                <Select onValueChange={setPaymentMethod}>
                                    <SelectTrigger className="shad-select-plant data-[placeholder]:text-[#0a45194f]">
                                        <SelectValue placeholder={t('select')} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="creditCard">Credit Card</SelectItem>
                                        <SelectItem value="paypal">PayPal</SelectItem>
                                        <SelectItem value="crypto">Crypto</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('firstName')}</p>
                                <Input onChange={handleChange(setFirstName)} value={firstName} placeholder={t('enterFirstName')} className="shad-input-plant" />
                            </div>
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('lastName')}</p>
                                <Input onChange={handleChange(setLastName)} value={lastName} placeholder={t('enterLastName')} className="shad-input-plant" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('city')}</p>
                                <Input onChange={handleChange(setCity)} value={city} placeholder={t('enterCity')} className="shad-input-plant" />
                            </div>
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('town')}</p>
                                <Input onChange={handleChange(setTown)} value={town} placeholder={t('enterTown')} className="shad-input-plant" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('street')}</p>
                                <Input onChange={handleChange(setStreet)} value={street} placeholder={t('enterStreet')} className="shad-input-plant" />
                            </div>
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('postCode')}</p>
                                <Input onChange={handleChange(setPostCode)} value={postCode} placeholder={t('enterPostCode')} className="shad-input-plant" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('taxNumber')}</p>
                                <Input onChange={handleChange(setTaxNumber)} value={taxNumber} placeholder={t('enterTaxNumber')} className="shad-input-plant" />
                            </div>
                            <div className="flex flex-col space-y-3 w-full">
                                <p className="text-bgGreen text-[16px]">{t('taxAdministrator')}</p>
                                <Input onChange={handleChange(setTaxAdministrator)} value={taxAdministrator} placeholder={t('enterTaxAdministrator')} className="shad-input-plant" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-1 mt-2 items-center py-5 px-5 md:px-8">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-bgGreen text-[16px]"
                        >
                            {t('iHaveReadAndAgree')} <a onClick={() => navigate("/plant-trees-payment")} target="blank" className="text-linkGreen">{t('termsAndConditions')}</a>
                        </label>
                    </div>

                    <div className="flex items-center justify-center pb-5">
                        <motion.a
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLogin}
                            className="w-[85%] h-[56px] bg-[#25B567] hover:bg-[#1a8249] transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                        >
                            <p className="text-white text-[16px] font-medium">{t('next')}</p>
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment
