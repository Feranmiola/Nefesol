import { motion } from "framer-motion"

const TrestedGroup = () => {
  return (
    <div>
        <div className="flex flex-row space-x-5 items-center mt-10 justify-center">
            <div className="w-[534px] h-[284px] bg-[#F3F3F3] items-center justify-center rounded-[24px] p-10">
                <div className="flex flex-col justify-between space-y-5">
                    <div className="flex flex-row items-center justify-between">
                        <img
                        src="./assets/partner1.svg"
                        />
                        
                        <img
                        src="./assets/partner2.svg"
                        />
                        
                        <img
                        src="./assets/partner3.svg"
                        />
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <img
                        src="./assets/partner4.svg"
                        />
                        
                        <img
                        src="./assets/partner5.svg"
                        />
                        
                        <img
                        src="./assets/partner6.svg"
                        />
                    </div>

                    <div className="flex flex-row items-start justify-start">
                        <img
                        src="./assets/partner7.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="karbonBG w-[581px] h-[284px] rounded-[24px] ">
                <div className="flex flex-row justify-between ">
                    <div className="flex flex-col items-start space-y-8 pl-7 justify-center">
                        <img
                        src="./assets/karbonLogo.svg"
                        alt="karbon logo"
                        />
                        <p className="text-white text-[20px] w-[307px] leading-none font-light">Karbon is harnessing the power of blockchain to address real-world challenges!</p>

                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            className="w-[159px] h-[48px] bg-transparent ring-[1px] ring-white flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                            >
                            <p className="text-white text-[16px] font-medium">Learn More</p>
                            <img
                            src="./assets/redirect.svg"
                            alt="redirect icon"
                            />
                        </motion.a>
                    </div>
                    <div className="flex items-end justify-end">
                        <img
                        src="./assets/karbonCoin.svg"
                        alt="karbon coin"
                        />
                    </div>
                </div>
                

            </div>
        
        </div>
    </div>
  )
}

export default TrestedGroup