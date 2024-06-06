import { motion } from "framer-motion"

const Services = () => {
    
  return (
    <div className="py-20 max-sm:flex max-sm:flex-col max-sm:space-y-5 max-sm:items-center max-sm:justify-center">
        <p className="md:ml-[168px] pb-20 font-medium text-bgGreen text-[40px] max-sm:text-[30px]">Our Services</p>
        <div className="flex flex-col space-y-10 items-center justify-center">
            <div className="flex flex-row max-sm:flex-col md:space-x-10 max-sm:space-y-10">
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/carbonConsulatancyLogo.svg"
                    alt="Carbon Consultancy Logo"
                    />
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">Carbon Consultancy</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">While we are providing carbon equalization services to our individual and corporate customers</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/certificationLogo.svg"
                    alt="certification"
                    />
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">Certification</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">We offer our customers the opportunity to reduce their environmental impact and</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/digitalMarketingLogo.svg"
                    alt="Digital Marketing"
                    />
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">Digital Marketing</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">Web Site and SEO Optimization To strengthen your business's digital presence, you need an impressive website</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">Learn More</motion.a>
                </div>

            </div>

            <div className="flex flex-row max-sm:flex-col md:space-x-10 max-sm:space-y-10">
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/carbonFootprintLogoServices.svg"
                    />
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px] w-[356px] max-sm:w-[300px]">Carbon Footprint Optimisation</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">Today, it is of great importance to manage the environmental impacts</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/greenTechLogo.svg"
                    />
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px] w-[356px] max-sm:w-[300px]">Green Technology Inscentives</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">Today, sustainability is among the primary objectives of businesses</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/technicalSupportLogo.svg"
                    />
                    <p className=" text-linkTextGreen text-[28px] max-sm:text-[20px]">Technical Support</p>
                    <p className=" text-linkTextGreen text-[16px] max-sm:text-[14px] w-[356px] max-sm:w-[300px]">Technology plays a critical role in increasing the efficiency of businesses and gaining competitive advantage.</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/ourservices"
                    className=" text-linkGreen text-[16px] max-sm:text-[14px] cursor-pointer">Learn More</motion.a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Services