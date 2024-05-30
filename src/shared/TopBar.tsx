import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <div className="bg-white h-[73px] px-10 justify-between items-center flex navbar ">
      <div>
        <img
        src="./assets/topBarLogo.svg"
        alt="logo"
        />
      </div>
      <div className="flex flex--row space-x-14">
        <p>Breath Pack</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Communication</p>
        <p>EN</p>
      </div>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        className="w-[163px] h-[48px] bg-[#25B567] flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
        >
          <p className="text-white text-[16px] font-medium">Breathe Now</p>
          <img
          src="./assets/ButtonArrow.svg"
          alt="arrow"
          />

      </motion.a>
    </div>
  )
}

export default TopBar