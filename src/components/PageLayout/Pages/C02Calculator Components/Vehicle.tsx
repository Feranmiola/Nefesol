import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Vehicle = () => {
    const { t } = useTranslation();
    const [liters, setLiters] = useState(0);
    const [kilometer, setKilometer] = useState(0);

    const handleIncrement = (inputIndex: any) => {
        if (inputIndex === 1) {
            setLiters(liters + 1);
        } else {
            setKilometer(kilometer + 1);
        }
    };

    const handleDecrement = (inputIndex: any) => {
        if (inputIndex === 1) {
            if (liters === 0) {
                console.log('0 hit');
            } else {
                setLiters(liters - 1);
            }
        } else {
            if (kilometer === 0) {
                console.log('0 hit');
            } else {
                setKilometer(kilometer - 1);
            }
        }
    };

    return (
        <div className="flex max-sm:items-center flex-col space-y-10 ">

            <div className="flex flex-row max-sm:flex-col max-sm:space-y-2 md:items-center justify-between max-sm:w-[380px] w-full px-5">
                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('every100km')}</p>
                <div className="flex flex-row items-center justify-start w-[293px] space-x-4">
                    <div className="w-[186px] max-sm:w-[200px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <input type="number" value={liters} onChange={(e) => setLiters(Number(e.target.value))} className="w-[85%] h-full rounded-[8px] text-right text-bgGreen bg-white text-[20px]"/>
                            <div className="pr-2 space-y-1">
                                <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }} 
                                    className="cursor-pointer"
                                    onClick={() => handleIncrement(1)}
                                >
                                    <img
                                        src="./assets/upArrow.svg"
                                        className="w-[10px] h-[10px]"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }} 
                                    className="cursor-pointer"
                                    onClick={() => handleDecrement(1)}
                                >
                                    <img
                                        src="./assets/downArrow.svg"
                                        className="w-[10px] h-[10px]"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[20px] max-sm:text-[16px] text-bgGreen font-medium">{t('liters')}</p>
                </div>
            </div>

            <div className="flex flex-row max-sm:flex-col max-sm:space-y-2 md:items-center justify-between max-sm:w-[380px] px-5">
                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('carsPerYear')}</p>
                <div className="flex flex-row items-center justify-start md:w-[293px] space-x-4">
                    <div className="w-[186px] max-sm:w-[200px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <input type="number" value={kilometer} onChange={(e) => setKilometer(Number(e.target.value))} className="w-[85%] h-full rounded-[8px] text-right text-bgGreen bg-white text-[20px]"/>
                            <div className="pr-2 space-y-1">
                                <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }} 
                                    className="cursor-pointer"
                                    onClick={() => handleIncrement(2)}
                                >
                                    <img
                                        src="./assets/upArrow.svg"
                                        className="w-[10px] h-[10px]"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }} 
                                    className="cursor-pointer"
                                    onClick={() => handleDecrement(2)}
                                >
                                    <img
                                        src="./assets/downArrow.svg"
                                        className="w-[10px] h-[10px]"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[20px] max-sm:text-[16px] text-bgGreen font-medium">{t('kilometers')}</p>
                </div>
            </div>

            <div className="flex flex-row max-sm:flex-col items-center justify-between w-full px-5">
                <p className="text-[20px] text-bgGreen">{t('yearlyUsage')}</p>
                <div className="flex items-center justify-end pr-3 rounded-[8px] h-[48px] max-sm:w-[200px] md:w-[293px] bg-[#E1EAE5] ">
                    <p className="text-bgGreen text-[16px]">
                        <span className="text-[20px] font-bold">120</span> {t('litersPerYear')}
                    </p>
                </div>
            </div>

            <p className="text-bgGreen text-[12px] max-sm:text-center max-sm:w-[370px] md:w-[822px] pb-10 px-5">{t('calculationNote')}</p>

        </div>
    );
};

export default Vehicle;
