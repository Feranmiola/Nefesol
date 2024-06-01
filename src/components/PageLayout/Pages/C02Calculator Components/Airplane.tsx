import { Separator } from "@/components/ui/separator"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"




const Airplane = () => {

    const [radioValue, setRadioValue] = useState(0);

    const changeRadioValue = (newValue: number) =>{
        setRadioValue(newValue);
    }

    const [averageFlightTimes, setAverageFlightTimes] = useState(0)


    const handleIncrement = () =>{
        setAverageFlightTimes(averageFlightTimes +1)
    }

    const handleDecrement = () =>{
        if(averageFlightTimes === 0){
            console.log('0 hit')
        }else{
            setAverageFlightTimes(averageFlightTimes -1)
        }
    }


  return (
    <div className="p-5 pb-10 flex flex-col space-y-5">
        <ScrollArea className="w-full">
            <div className="flex flex-row space-x-5 w-full">
                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                <div className="w-[261px] h-[45px] bg-white flex  justify-between flex-col rounded-[8px] px-[12px] py-[8px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center  space-x-1">
                            <img
                            src="./assets/location.svg"
                            alt="location"
                            />
                            <p className="text-bgGreen text-[10px] font-bold">ROUTE 1</p>
                            <p className="text-bgGreen text-[10px] font-bold">51km</p>
                        </div>

                        <div className="flex flex-row space-x-2">
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Edit</u></p>
                            <p className="text-[10px] text-bgGreen cursor-pointer"><u>Delete</u></p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-bgGreen">ABJ (Abuja Nigeria) - LOS (Lagos NIgeria)</p>
                    </div>
                </div>

                
            </div>
            <ScrollBar className="pt-1" orientation="horizontal"/>
        </ScrollArea>

        <div className="w-full">
            <Separator className="w-full"/>
        </div>

        <div className="flex flex-col space-y-10">
            <div className="flex flex-row items-center justify-cdnter w-full">
                <div className="flex flex-col space-y-3">
                    <p className="text-bgGreen text-[16px]">Departure Airport</p>
                    <Select>
                        <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                            <SelectValue placeholder="Select Airport" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center justify-center mt-9">
                    <img
                    src="./assets/flightLine.svg"
                    />
                </div>

                <div className="flex flex-col space-y-3">
                    <p className="text-bgGreen text-[16px]">Arrival Airport</p>
                    <Select>
                        <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                            <SelectValue placeholder="Select Airport" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col w-[370px] space-y-2 items-start justify-start">
                    <p className="text-[16px] text-bgGreen w-[370px] text-left">Trip Type</p>

                        <RadioGroup defaultValue="" className="flex flex-row">
                            <Label htmlFor="option-one" 
                            onClick={() => changeRadioValue(1)}
                            className={radioValue === 1 ? "cursor-pointer bg-white w-[197px]  h-[48px] rounded-[10px] flex items-center pl-5 border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white w-[197px]  h-[48px] rounded-[10px] flex items-center pl-5 space-x-2"}
                            >
                                <RadioGroupItem className="" value="option-one" id="option-one" />
                                <p className="text-bgGreen text-[16px]">Round Trip</p>
                            </Label>

                            <Label htmlFor="option-two" 
                            onClick={() => changeRadioValue(2)}
                            className={radioValue === 2 ? "cursor-pointer bg-white w-[197px]  h-[48px] rounded-[10px] flex items-center pl-5 border-[1px] border-linkGreen space-x-2" : "cursor-pointer bg-white w-[197px]  h-[48px] rounded-[10px] flex items-center pl-5 space-x-2"}
                            >
                                <RadioGroupItem className="" value="option-two" id="option-two" />
                                <p className="text-bgGreen text-[16px]">One-Way Trip</p>
                            </Label>

                        </RadioGroup>

                </div>

                <div className="flex  flex-col items-start ml-[94px]  space-y-2  w-full">
                    <p className="text-[16px] text-bgGreen">Average Number of times per year</p>
                    <div className="flex flex-row items-center justify-start w-[370px] space-x-4">
                        <div className="w-[370px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                            <div className="flex items-center h-full justify-between w-full">
                                <div className="flex flex-row items-center w-full">
                                    <input type="number" value={averageFlightTimes} className="w-[95%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
                                </div>
                                <div className="pr-2 space-y-1">
                                    <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }} 
                                    className=" cursor-pointer"
                                    onClick={handleIncrement}
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
                                    onClick={handleDecrement}
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

        </div>

        <div className="flex flex-col space-y-5">
            <p className="text-[16px] text-bgGreen">Average Calculated Distance</p>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <div className="bg-[#E1EAE5] w-[370px] h-[48px] px-[16px] rounded-[8px] flex items-center">
                        <p className="text-[16px] text-bgGreen"><span className="text-[20px] font-bold">1,024</span> KWh per year</p>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <p className="text-[14px] text-bgGreen">Average Annual No of Flights:</p>
                        <p className="text-[14px] text-bgGreen font-bold">36</p>
                    </div>
                </div>
                <div className=" space-y-2">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        className="w-[370px] h-[48px] bg-transparent ring-[1px] ring-linkGreen flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                        >
                            <img
                            src="./assets/plus.svg"
                            />
                        <p className="text-linkGreen text-[16px] font-bold">Add More Routes</p>
                    </motion.a>
                    <div className="flex flex-row  opacity-60 space-x-1">
                        <img
                        src="./assets/infoIcon.svg"

                        />
                        <p className="text-[12px] text-bgGreen">Click here to add more than one route for accurate calculation</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Airplane