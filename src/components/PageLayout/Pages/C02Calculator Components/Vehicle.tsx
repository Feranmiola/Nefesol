import { useState } from "react"
import { motion } from "framer-motion"

const Vehicle = () => {
    const [Liters, setLiters] = useState(0)
    const[kilometer, setkilometer] = useState(0);

    const handleIncrement = (inputIndex: number) =>{
        if(inputIndex === 1){
            setLiters(Liters +1)
        }else{
            setkilometer(kilometer + 1)
        }
    }

    const handleDecrement = (inputIndex: number) =>{
        if(inputIndex === 1){
            if(Liters === 0){
                console.log('0 hit')
            }else{
                setLiters(Liters -1)
            }
        }else{
            if(kilometer === 0){
                console.log('0 hit')
            }else{
                setkilometer(kilometer - 1)
            }
        }
    }
  return (
    <div className="flex  flex-col max-sm:items-center max-sm:justify-center space-y-10 ">

        <div className="flex  flex-row max-sm:flex-col max-sm:space-y-2 items-center justify-between max-sm:w-[400px] w-full px-5">
            <p className="text-[20px] max-sm:text-[16px] text-bgGreen">Every 100km of use</p>
            <div className="flex flex-row  items-center justify-start w-[293px] space-x-4">
                <div className="w-[186px] max-sm:w-[150px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                    <div className="flex items-center h-full justify-between">
                        <input type="number" value={Liters} onChange={(e) => setLiters(Number(e.target.value))} className="w-[85%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
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
                <p className="text-[20px] max-sm:text-[16px] text-bgGreen font-medium">Liters</p>
            </div>
        </div>


        <div className="flex  flex-row max-sm:flex-col max-sm:space-y-2 items-center justify-between max-sm:w-[400px] px-5">
            <p className="text-[20px] max-sm:text-[16px] text-bgGreen">How many cars do you drive per year (Average)</p>
            <div className="flex flex-row  items-center justify-start md:w-[293px] space-x-4">
                <div className="w-[186px] max-sm:w-[150px] h-[48px] rounded-[8px] ring-[1px] ring-bgGreen bg-white">
                    <div className="flex items-center h-full justify-between">
                        <input type="number" value={kilometer} onChange={(e) => setkilometer(Number(e.target.value))} className="w-[85%] h-full rounded-[8px] text-right  text-bgGreen bg-white text-[20px]"/>
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
                <p className="text-[20px] max-sm:text-[16px] text-bgGreen font-medium">Kilometer</p>
            </div>
        </div>


        <div className="flex  flex-row max-sm:flex-col items-center justify-between w-full px-5">
            <p className="text-[20px] text-bgGreen">Therefore every year, you use</p>
            <div className="flex items-center justify-end pr-3 rounded-[8px] h-[48px] max-sm:w-[200px] md:w-[293px] bg-[#E1EAE5] ">
                <p className="text-bgGreen text-[16px]"><span className="text-[20px] font-bold">120</span> Litre per year</p>
            </div>
        </div>

        <p className="text-bgGreen text-[12px] max-sm:text-center max-sm:w-[370px] md:w-[822px] pb-10 px-5">The calculated data was made according to personal carbon calculation. Personal accounts must be balanced according to the tree account. The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree. This balancing is within the scope of the Afforestation Offset Project.</p>



    </div>
  )
}

export default Vehicle