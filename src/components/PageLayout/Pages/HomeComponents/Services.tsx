import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Services = () => {
    const navigate = useNavigate()

    const handleServices = () =>{
        navigate('/ourservices');
    }
  return (
    <div className="py-20">
        <p className="ml-[168px] pb-20 font-medium text-bgGreen text-[40px]">Our Services</p>
        <div className="flex flex-col space-y-10 items-center justify-center">
            <div className="flex flex-row space-x-10">
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/carbonConsulatancyLogo.svg"
                    alt="Carbon Consultancy Logo"
                    />
                    <p className=" text-linkTextGreen text-[28px]">Carbon Consultancy</p>
                    <p className=" text-linkTextGreen text-[16px] w-[356px]">While we are providing carbon equalization services to our individual and corporate customers</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick = {handleServices} 
                    className=" text-linkGreen text-[16px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/certificationLogo.svg"
                    alt="certification"
                    />
                    <p className=" text-linkTextGreen text-[28px]">Certification</p>
                    <p className=" text-linkTextGreen text-[16px] w-[356px]">We offer our customers the opportunity to reduce their environmental impact and</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick = {handleServices} 
                    className=" text-linkGreen text-[16px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/digitalMarketingLogo.svg"
                    alt="Digital Marketing"
                    />
                    <p className=" text-linkTextGreen text-[28px]">Digital Marketing</p>
                    <p className=" text-linkTextGreen text-[16px] w-[356px]">Web Site and SEO Optimization To strengthen your business's digital presence, you need an impressive website</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick = {handleServices} 
                    className=" text-linkGreen text-[16px] cursor-pointer">Learn More</motion.a>
                </div>

            </div>

            <div className="flex flex-row space-x-10">
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/carbonFootprintLogoServices.svg"
                    />
                    <p className=" text-linkTextGreen text-[28px] w-[356px]">Carbon Footprint Optimisation</p>
                    <p className=" text-linkTextGreen text-[16px] w-[356px]">Today, it is of great importance to manage the environmental impacts</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick = {handleServices} 
                    className=" text-linkGreen text-[16px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/greenTechLogo.svg"
                    />
                    <p className=" text-linkTextGreen text-[28px] w-[356px]">Green Technology Inscentives</p>
                    <p className=" text-linkTextGreen text-[16px] w-[356px]">Today, sustainability is among the primary objectives of businesses</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick = {handleServices} 
                    className=" text-linkGreen text-[16px] cursor-pointer">Learn More</motion.a>
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <img
                    src="./assets/technicalSupportLogo.svg"
                    />
                    <p className=" text-linkTextGreen text-[28px]">Technical Support</p>
                    <p className=" text-linkTextGreen text-[16px] w-[356px]">Technology plays a critical role in increasing the efficiency of businesses and gaining competitive advantage.</p>
                    <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick = {handleServices} 
                    className=" text-linkGreen text-[16px] cursor-pointer">Learn More</motion.a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Services