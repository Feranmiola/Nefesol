import { useState } from "react"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"


const House = () => {
    const {t} = useTranslation();
    const [houseSize, setHouseSize] = useState(0)

    const [bedroomNumber, setBedroomNumber] = useState(0)
    const [electricity, setElectricity] = useState(0)


    const handleIncrement = (inputIndex: number) =>{
        if(inputIndex === 1){
            setHouseSize(houseSize +1)
        }else{
            if(inputIndex === 2){
                setBedroomNumber(bedroomNumber + 1);
            }else{
                setElectricity(electricity +1)
            }
        }
    }

    const handleDecrement = (inputIndex: number) =>{
        if(inputIndex === 1){
            if(houseSize === 0){
                console.log('0 hit')
            }else{
                setHouseSize(houseSize -1)
            }
        }else{
            if(inputIndex === 2){
                if(bedroomNumber === 0){
                    console.log('0 hit')
                }else{
                    setHouseSize(bedroomNumber- 1)
                }
            }else{
                if(electricity === 0){
                    console.log('0 hit')
                }else{
                    setElectricity(electricity +1)
                }
            }
        }
    }

    const [radioValue, setRadioValue] = useState(0);

    const changeRadioValue = (newValue: number) =>{
        setRadioValue(newValue);
    }


    const [energySource, setEnergySource] = useState(0);

    const changeEnergySource = (newValue: number) =>{
        setEnergySource(newValue);
    }
  return (
    <div className="p-5 flex flex-col space-y-10 pb-16">
        <div className="flex flex-row max-sm:flex-col max-sm:space-y-5">
            <div className="flex flex-col items-start space-y-2  w-full md:px-5">
                <p className="text-[16px] text-bgGreen">{t('howBigIsYourHouse')}</p>
                <div className="flex flex-row items-center justify-start md:w-[370px] space-x-4">
                    <div className="w-[370px] max-sm:w-[280px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <div className="flex flex-row items-center w-full">
                                <input type="number" id="housesize" value={houseSize} onChange={(e) => setHouseSize(Number(e.target.value))} className="w-[20%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
                                <label htmlFor="housesize" className="w-[80%] flex flex-row ml-2">
                                    <p className=" text-[16px] text-bgGreen ">m</p>
                                    <span className="text-[10px] text-bgGreen top-0">2</span>
                                </label>
                            </div>
                            <div className="pr-2 space-y-1">
                                <motion.div
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.9 }} 
                                className=" cursor-pointer"
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
                                className=" cursor-pointer"
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
                </div>
            </div>

            <div className="flex  flex-col items-start  space-y-2  w-full md:px-5">
                <p className="text-[16px] text-bgGreen">{t('howManyBedrooms')}</p>
                <div className="flex flex-row items-center justify-start max-sm:w-[280px] w-[370px] space-x-4">
                    <div className="w-[370px] max-sm:w-[280px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between ">
                            <div className="flex flex-row items-center w-full">
                                <input type="number" id="bedroomNumber" value={bedroomNumber} onChange={(e) => setBedroomNumber(Number(e.target.value))} className="w-[20%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
                                <label htmlFor="bedroomNumber" className="w-[75%] ">
                                <p className=" text-[16px] text-white ">{t('kWhPerYear')}</p>
                                </label>
                            </div>
                            <div className="pr-2 space-y-1">
                                <motion.div
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.9 }} 
                                className=" cursor-pointer"
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
                                className=" cursor-pointer"
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
                </div>
            </div>


        </div>


        <div className="flex flex-row max-sm:flex-col max-sm:space-y-5  items-center justify-between md:px-5">

            <div className="flex  flex-col items-start space-y-2  w-full ">
                <p className="text-[16px] text-bgGreen">{t('howMuchElectricity ')}</p>
                <div className="flex flex-row items-center justify-start max-sm:w-[280px] w-[370px] space-x-4">
                    <div className="w-[370px] max-sm:w-[280px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <div className="flex flex-row items-center w-full">
                                <input type="number" id="electricityInput" value={electricity} onChange={(e) => setElectricity(Number(e.target.value))} className="w-[15%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
                                <label htmlFor="electricityInput" className="h-[20px] w-[80%] flex flex-row ml-2">
                                    <p className=" text-[16px] text-bgGreen ">KWh per year</p>
                                </label>
                            </div>
                            <div className="pr-2 space-y-1">
                                <motion.div
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.9 }} 
                                className=" cursor-pointer"
                                onClick={() => handleIncrement(3)}
                                >
                                    <img
                                    src="./assets/upArrow.svg"
                                    className="w-[10px] h-[10px]"
                                    />
                                </motion.div>

                                <motion.div
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.9 }} 
                                className=" cursor-pointer"
                                onClick={() => handleDecrement(3)}
                                >
                                    <img
                                    src="./assets/downArrow.svg"
                                    className="w-[10px] h-[10px]"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        


            <div className="flex flex-col md:w-[370px] max-sm:w-[290px] space-y-2 items-start justify-start ">
                <p className="text-[16px] text-bgGreen md:w-[370px]  text-left">{t('defineElectricityUse')}</p>
                    <RadioGroup defaultValue="" className="flex flex-row max-sm:w-[300px] w-[370px]">
                        <Label htmlFor="option-one" 
                        onClick={() => changeRadioValue(1)}
                        className={radioValue === 1 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="option-one" id="option-one" />
                            <p className="text-bgGreen text-[16px] max-sm:text-[14px]">{t('low')}</p>
                        </Label>

                        <Label htmlFor="option-two" 
                        onClick={() => changeRadioValue(2)}
                        className={radioValue === 2 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="option-two" id="option-two" />
                            <p className="text-bgGreen text-[16px] max-sm:text-[14px]">{t('normal')}</p>
                        </Label>

                        <Label htmlFor="option-three" 
                        onClick={() => changeRadioValue(1)}
                        className={radioValue === 3 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="option-three" id="option-three" />
                            <p className="text-bgGreen text-[16px] max-sm:text-[14px]">{t('high')}</p>
                        </Label>


                    </RadioGroup>

            </div>
        </div>

        <div className="flex flex-col space-y-2 items-start justify-start">
                <p className="text-[16px] text-bgGreen text-left">{t('energySource')}</p>
                    <RadioGroup defaultValue="" className="flex flex-row max-sm:flex-col">
                        <div className="flex flex-row space-x-2">
                            <Label htmlFor="eco" 
                            onClick={() => changeEnergySource(1)}
                            className={energySource === 1 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                            >
                                <RadioGroupItem className="" value="eco" id="eco" />
                                <p className="text-bgGreen text-[16px]">{t('ecoPower')}</p>
                            </Label>

                            <Label htmlFor="power" 
                            onClick={() => changeEnergySource(2)}
                            className={energySource === 2 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                            >
                                <RadioGroupItem className="" value="power" id="power" />
                                <p className="text-bgGreen text-[16px]">{t('power')}</p>
                            </Label>
                        </div>

                        <div className="flex flex-row space-x-2">        
                            <Label htmlFor="Naturalgas" 
                            onClick={() => changeEnergySource(3)}
                            className={energySource === 3 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                            >
                                <RadioGroupItem className="" value="Naturalgas" id="Naturalgas" />
                                <p className="text-bgGreen text-[16px]">{t('naturalGas')}</p>
                            </Label>

                            <Label htmlFor="oil" 
                            onClick={() => changeEnergySource(4)}
                            className={energySource === 4 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                            >
                                <RadioGroupItem className="" value="oil" id="oil" />
                                <p className="text-bgGreen text-[16px]">{t('oil')}</p>
                            </Label>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <Label htmlFor="regionalHeating" 
                            onClick={() => changeEnergySource(5)}
                            className={energySource === 5 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                            >
                                <RadioGroupItem className="" value="regionalHeating" id="regionalHeating" />
                                <p className="text-bgGreen text-[16px]">{t('regionalHeating')}</p>
                            </Label>

                            <Label htmlFor="wood" 
                            onClick={() => changeEnergySource(6)}
                            className={energySource === 6 ? "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 max-sm:p-3 rounded-[10px] flex items-center justify-center space-x-2"}
                            >
                                <RadioGroupItem className="" value="wood" id="wood" />
                                <p className="text-bgGreen text-[16px]">{t('wood')}</p>
                            </Label>
                        </div>
                    </RadioGroup>

            </div>

            <div className=" space-y-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <p className="text-bgGreen text-[16px] ">{t('annualAveragePowerConsumption')}</p>
                <div className="bg-[#E1EAE5] w-[822px] max-sm:w-[260px] h-[48px] px-[16px] rounded-[8px] flex items-center">
                    <p className="text-[16px] text-bgGreen"><span className="text-[20px] font-bold">1,024</span> KWh per year</p>
                </div>
            </div>
        
    </div>
  )
}

export default House