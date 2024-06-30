import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { useState } from "react"



const BretheNow = () => {

    const [sliderValue, setSliderValue] = useState([0]);
    const [tabIndex, setTabIndex] = useState(1);
    const [co2Quantity, setCo2Quantitiy] = useState(0);
    const [example, setCurrentExample] = useState(0);

    const handleTabs = ( current: number) =>{
        setTabIndex(current);
    }

    const handleCo2 = (current : number) => {
        setCo2Quantitiy(current);
    }

    const handleExamples = (current : number)=>{
        setCurrentExample(current);
    }

    const updateSliderValue = (currentValue : number[]) => {
        setSliderValue(currentValue)
    }

    

  return (
    <div className="flex flex-col max-sm:mt-10 max-sm:items-center max-sm:justify-center">
        <div className="bg-white rounded-[24px] w-[455px] max-sm:w-[355px] shadow-md ">
            <div className="flex items-center flex-col space-y-9 justify-center bg-[#F8F9F8] p-5">
                <p className="text-[24px] text-center text-bgGreen font-bold w-[360px]">How many trees do you want to plant in the forest?</p>
                <div className="flex flex-row space-x-3">
                    <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={() => {updateSliderValue([0]); handleTabs(1); handleCo2(0); handleExamples(0)}}
                    className = {tabIndex === 1 ? 'bg-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 md:px-5 max-sm:px-3' : 'bg-transparent ring-[1px] ring-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 md:px-5 max-sm:px-3'}>
                        <p className={tabIndex === 1 ? 'text-white max-sm:text-[10px]' : 'text-bgGreen max-sm:text-[10px]'}>Slider</p>
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={() => {updateSliderValue([0]); handleTabs(2); handleCo2(0);  handleExamples(0)}}
                     className = {tabIndex === 2 ? 'bg-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 md:px-5 max-sm:px-3' : 'bg-transparent ring-[1px] ring-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 md:px-5 max-sm:px-3'}>
                        <p className={tabIndex === 2 ? 'text-white max-sm:text-[10px]' : 'text-bgGreen max-sm:text-[10px]'}>CO2 Quantity</p>
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={() => {updateSliderValue([0]); handleTabs(3); handleCo2(0); handleExamples(0)}}
                     className = {tabIndex === 3 ? 'bg-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 md:px-5 max-sm:px-3' : 'bg-transparent ring-[1px] ring-bgGreen rounded-full flex items-center justify-center cursor-pointer py-1 md:px-5 max-sm:px-3'}>
                        <p className={tabIndex === 3 ? 'text-white max-sm:text-[10px]' : 'text-bgGreen max-sm:text-[10px]'}>Examples</p>
                    </motion.div>
                </div>
                {tabIndex === 1 &&(
                    <div className="w-[100%] flex items-center justify-center">
                        <Slider
                        defaultValue={[0]} max={100} step={1} 
                        className=" w-[80%]"
                        onValueChange={(i) => setSliderValue(i)}
                        />
                    </div>
                )}
                
                {tabIndex === 2 &&(
                    <div className="w-[100%] flex items-center justify-center flex-row max-sm: space-x-2 ">
                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={() => {handleCo2(1); updateSliderValue([35])}}
                        className={co2Quantity === 1 ? 'ring-[1px] ring-[#25B567] py-2 px-2 bg-[#25b5664f] rounded-[8px]' : 'ring-[1px] ring-[#25b56614] py-2 px-2 bg-white rounded-[8px]'}>
                            <div className="flex flex-row space-x-1 items-center justify-center">
                                <img
                                loading="lazy"
                                src="./assets/co2.svg"
                                className="w-[15px] h-[15px]"
                                />
                                <p className="text-[16px] text-bgGreen font-medium">Small</p>
                            </div>
                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}  
                        onClick={() => {handleCo2(2); updateSliderValue([60])}}
                        className={co2Quantity === 2 ? 'ring-[1px] ring-[#25B567] py-2 px-2 bg-[#25b5664f] rounded-[8px]' : 'ring-[1px] ring-[#25b56614] py-2 px-2 bg-white rounded-[8px]'}>
                            <div className="flex flex-row space-x-1 items-center justify-center">
                                <img
                                loading="lazy"
                                src="./assets/co2.svg"
                                className="w-[21px] h-[21px]"
                                />
                                <p className="text-[16px] text-bgGreen font-medium">Medium</p>
                            </div>
                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}  
                        onClick={() => {handleCo2(3); updateSliderValue([120])}}
                        className={co2Quantity === 3 ? 'ring-[1px] ring-[#25B567] py-1 px-2 bg-[#25b5664f] rounded-[8px]' : 'ring-[1px] ring-[#25b56614] py-1 px-2 bg-white rounded-[8px]'}>
                            <div className="flex flex-row space-x-1 items-center justify-center">
                                <img
                                loading="lazy"
                                src="./assets/co2.svg"
                                className="w-[31px] h-[31px]"
                                />
                                <p className="text-[16px] text-bgGreen font-medium">Large</p>
                            </div>
                        </motion.div>
                        
                    </div>
                )}
                
                {tabIndex === 3 &&(
                    <div className="w-[100%] flex items-center justify-center flex-row max-sm:flex-col max-sm:space-y-2 md:space-x-2">
                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={() => {handleExamples(1); updateSliderValue([35])}}
                        className={example === 1 ? 'ring-[1px] ring-[#25B567] py-2 px-2 bg-white rounded-[8px]' : 'ring-[1px] ring-[#25b56614] py-2 px-2 bg-white rounded-[8px]'}>
                            <div className="flex flex-row space-x-1 items-center justify-center">
                                <img
                                loading="lazy"
                                src="./assets/mobilityLogo.svg"
                                />
                                <p className="text-[14px] text-bgGreen font-medium">Mobility</p>
                            </div>
                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}  
                        onClick={() => {handleExamples(2); updateSliderValue([60])}}
                        className={example === 2 ? 'ring-[1px] ring-[#25B567] py-2 px-2 bg-white rounded-[8px]' : 'ring-[1px] ring-[#25b56614] py-2 px-2 bg-white rounded-[8px]'}>
                            <div className="flex flex-row space-x-1 items-center justify-center">
                                <img
                                loading="lazy"
                                src="./assets/nutritionLogo.svg"
                                
                                />
                                <p className="text-[14px] text-bgGreen font-medium">Nutrition</p>
                            </div>
                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}  
                        onClick={() => {handleExamples(3); updateSliderValue([120])}}
                        className={example === 3 ? 'ring-[1px] ring-[#25B567] py-1 px-2 bg-white rounded-[8px]' : 'ring-[1px] ring-[#25b56614] py-1 px-2 bg-white rounded-[8px]'}>
                            <div className="flex flex-row space-x-1 items-center justify-center">
                                <img
                                loading="lazy"
                                src="./assets/housingLogo.svg"
                                />
                                <p className="text-[14px] text-bgGreen font-medium">Housing and Power</p>
                            </div>
                        </motion.div>      
                    </div>
                )}

                
            </div>
            <div className="flex flex-row max-sm:flex-col py-6 md:space-x-10 max-md:space-y-4 items-center justify-center">
                <img
                loading="lazy"
                src="./assets/treeGroup.svg"
                />
                <div className="flex flex-col ">
                    <p className="text-bgGreen text-[32px]"><span className="text-[48px]">{sliderValue}</span>Trees</p>
                    {(sliderValue[0] > 20 && sliderValue[0] < 70)  && (
                        <p className=" text-bgGreen text-[12px]">You're doing great!</p>
                    )}
                    
                    {sliderValue[0] > 70 && (
                        <p className=" text-linkGreen text-[16px]">You're Awesome</p>
                    )}
                </div>

            </div>
            <div className="flex items-center justify-center flex-row max-sm:flex-col md:space-x-3 max-sm:space-y-3 pt-5 md:pb-5">
                <div className="bg-[#0A5B361A] flex flex-row items-center justify-center px- h-[56px] w-[186px]">
                    <img
                    loading="lazy"
                    src="./assets/field.svg"
                    />
                    <div className="flex flex-row">
                        <p className="text-[24px] text-bgGreen">262 m</p>
                        <p className="text-bgGreen text-[]2px top-0">2</p>
                    </div>
                </div>
                <div className="bg-[#0A5B361A] flex flex-row items-center justify-center  h-[56px] w-[186px]">
                    <img
                    loading="lazy"
                    src="./assets/co2.svg"
                    />
                    <div className="flex flex-row">
                        <p className="text-[24px] text-bgGreen">12t</p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <Separator className="w-full fill-[#0A4519]"/>
            </div>
            <div className="flex items-center justify-between px-8 pb-10 flex-row max-sm:flex-col max-sm:space-y-3">
                <div className="flex flex-col">
                    <p className="text-bgGreen text-[32px]">$220.29</p>
                    <p className="text-[12px] text-bgGreen">Unit Price 1.20 $/m2</p>
                </div>
                <motion.a
                whileTap={{ scale: 0.9 }} 
                href="/plant-trees-payment"
                className="w-[212px] h-[56px] bg-[#25B567] hover:bg-[#1a8249]  transition ease-in-out flex items-center justify-center rounded-[56px] cursor-pointer"
                >
                    <p className="text-white text-[16px] font-medium">Breathe Now</p>
                </motion.a>
            </div>
        </div>
        <div>
            <p className="text-[10px] text-bgGreen md:w-[437px] max-sm:w-[300px]  pt-5">The figures are average values based on the binding potential of the trees. According to the latest scientific findings, the average lifespan of trees is between 30 and 50 years and can bind up to 150 kg of CO2 per year. Calculations are based on average data and may vary according to tree type and age.</p>
        </div>
        
    </div>
  )
}

export default BretheNow