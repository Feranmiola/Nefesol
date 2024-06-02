import { motion } from "framer-motion"

const LandingSection = () => {
  return (
    <div className="homeBackground ">
      <div className=" py-60 flex items-center justify-center flex-col space-y-10">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[150px] text-white">Every Tree</h1>
          <h1 className="text-[150px] text-white">One Breath</h1>
        </div>
        <div>
          <p className="text-[24px] text-white takeAction">TAKE ACTION FOR A GREEN FUTURE</p>
        </div>
        <div className="flex flex-row space-x-4">
          <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="w-[280px] h-[64px] bg-[#25B567] flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
          >
            <p className="text-white text-[16px] font-medium">Breathe Now</p>
            <img
            src="./assets/ButtonArrow.svg"
            alt="arrow"
            />

          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="w-[280px] h-[64px] bg-transparent ring-[1px] ring-white flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
            >
              <p className="text-white text-[16px] font-medium">Get Information</p>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default LandingSection