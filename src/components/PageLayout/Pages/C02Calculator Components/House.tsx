import { useState } from "react"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const House = () => {
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

        <div className="flex flex-row">
            <div className="flex  flex-col items-start  space-y-2  w-full px-5">
                <p className="text-[16px] text-bgGreen">How big is your house?</p>
                <div className="flex flex-row items-center justify-start w-[370px] space-x-4">
                    <div className="w-[370px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <div className="flex flex-row items-center">
                                <input type="number" value={houseSize} className="w-[20%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
                                <div className="h-[20px] flex flex-row ml-2">
                                    <p className=" text-[16px] text-bgGreen ">m</p>
                                    <span className="text-[10px] text-bgGreen top-0">2</span>
                                </div>
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

            <div className="flex  flex-col items-start  space-y-2  w-full px-5">
                <p className="text-[16px] text-bgGreen">How many bedrooms are in your house?</p>
                <div className="flex flex-row items-center justify-start w-[370px] space-x-4">
                    <div className="w-[370px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <div className="flex flex-row items-center">
                                <input type="number" value={bedroomNumber} className="w-[20%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
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


        <div className="flex flex-row  items-center justify-between px-5">

            <div className="flex  flex-col items-start  space-y-2  w-full ">
                <p className="text-[16px] text-bgGreen">How big is your house?</p>
                <div className="flex flex-row items-center justify-start w-[370px] space-x-4">
                    <div className="w-[370px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                        <div className="flex items-center h-full justify-between">
                            <div className="flex flex-row items-center">
                                <input type="number" value={electricity} className="w-[15%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
                                <div className="h-[20px] flex flex-row ml-2">
                                    <p className=" text-[16px] text-bgGreen ">KWh per year</p>
                                </div>
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
        


            <div className="flex flex-col w-[370px] space-y-2 items-start justify-start">
                <p className="text-[16px] text-bgGreen w-[370px] text-left">How would you define your electricity use?</p>
                    <RadioGroup defaultValue="" className="flex flex-row w-[370px]">
                        <Label htmlFor="option-one" 
                        onClick={() => changeRadioValue(1)}
                        className={radioValue === 1 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="option-one" id="option-one" />
                            <p className="text-bgGreen text-[16px]">Low</p>
                        </Label>

                        <Label htmlFor="option-two" 
                        onClick={() => changeRadioValue(2)}
                        className={radioValue === 2 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="option-two" id="option-two" />
                            <p className="text-bgGreen text-[16px]">Normal</p>
                        </Label>

                        <Label htmlFor="option-three" 
                        onClick={() => changeRadioValue(1)}
                        className={radioValue === 3 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="option-three" id="option-three" />
                            <p className="text-bgGreen text-[16px]">High</p>
                        </Label>


                    </RadioGroup>

            </div>
        </div>

        <div className="flex flex-col space-y-2 items-start justify-start">
                <p className="text-[16px] text-bgGreen text-left">How would you define your electricity use?</p>
                    <RadioGroup defaultValue="" className="flex flex-row">
                        <Label htmlFor="eco" 
                        onClick={() => changeEnergySource(1)}
                        className={energySource === 1 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="eco" id="eco" />
                            <p className="text-bgGreen text-[16px]">Eco Power</p>
                        </Label>

                        <Label htmlFor="power" 
                        onClick={() => changeEnergySource(2)}
                        className={energySource === 2 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="power" id="power" />
                            <p className="text-bgGreen text-[16px]">Power</p>
                        </Label>

                        <Label htmlFor="Naturalgas" 
                        onClick={() => changeEnergySource(3)}
                        className={energySource === 3 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="Naturalgas" id="Naturalgas" />
                            <p className="text-bgGreen text-[16px]">Natural Gas</p>
                        </Label>

                        <Label htmlFor="oil" 
                        onClick={() => changeEnergySource(4)}
                        className={energySource === 4 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="oil" id="oil" />
                            <p className="text-bgGreen text-[16px]">Oil</p>
                        </Label>

                        <Label htmlFor="regionalHeating" 
                        onClick={() => changeEnergySource(5)}
                        className={energySource === 5 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="regionalHeating" id="regionalHeating" />
                            <p className="text-bgGreen text-[16px]">Regional Heating</p>
                        </Label>

                        <Label htmlFor="wood" 
                        onClick={() => changeEnergySource(6)}
                        className={energySource === 6 ? "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white p-4 rounded-[10px] flex items-center justify-center space-x-2"}
                        >
                            <RadioGroupItem className="" value="wood" id="wood" />
                            <p className="text-bgGreen text-[16px]">Wood</p>
                        </Label>
                    </RadioGroup>

            </div>

            <div className=" space-y-2">
                <p className="text-bgGreen text-[16px] ">Annual Average Power Consumption</p>
                <div className="bg-[#E1EAE5] w-[822px] h-[48px] px-[16px] rounded-[8px] flex items-center">
                    <p className="text-[16px] text-bgGreen"><span className="text-[20px] font-bold">1,024</span> KWh per year</p>
                </div>
            </div>
        
    </div>
  )
}

export default House