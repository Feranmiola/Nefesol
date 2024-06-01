

const TrackingInfo = () => {
  return (
    <div className="py-20 mt-10 items-center justify-center flex">
        <div className="w-[600px]  flex   bg-white rounded-[24px]">
            <div className="p-10  ">
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-2">
                        <p className="text-bgGreen font-bold text-[24px]">Trees Tracking & Verification</p>
                        <p className="text-[16px] text-bgGreen">Track the progress of bought trees</p>
                    </div>
                    <motion.a 
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }} 
                    onClick={handleNext}
                    className="text-bgGreen text cursor-pointer-[16motion.ax]">Trees Tracking & Verification Code</motion.a>
                    
                    <div className="flex flex-col space-y-2">
                        <div className="border-[1px] w-[536px] flex rounded-[8px] h-[64px]">
                            <div className="w-full flex flex-row px-2 items-center justify-between">
                                <p className="text-bgGreen font-medium text-[32px]">64HDNJ</p>
                                <p className="text-[16px] text-linkGreen">Track</p>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-1 opacity-60">
                            <img
                            src="./assets/infoIcon.svg"
                            />
                            <p className="text-bgGreen text-[12px]">The code issued when you bought trees.</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
  )
}

export default TrackingInfo