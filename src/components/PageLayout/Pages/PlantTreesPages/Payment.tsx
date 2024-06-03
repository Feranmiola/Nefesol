import { motion } from "framer-motion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from "react-router-dom"
import { useLayoutEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"



const Payment = () => {
    const navigate = useNavigate();
    
    const handleNext = () => {
        navigate('/plant-trees-verifyemail')
    }


    const [loading, setLoading] = useState(true);
    useLayoutEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Delay of 2 seconds
  }, []);

  if(loading){
      return (
          <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
            <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#0A4519"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          </div>
        );
  }
    return (
        <div className="py-20 mt-10 flex items-center justify-center">
            <div className="w-[600px]  bg-white rounded-[24px]">
                <div className="flex flex-col">
                    <div className="bg-[#F8F9F8] h-[80px] px-10 rounded-t-[24px] flex flex-row justify-between items-center">
                        <p className="text-bgGreen text-[24px] font-bold">Plant Trees</p>
                        <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }} 
                        className="flex flex-row space-x-2"
                        >
                            <img
                            src="./assets/prev.svg"
                            />
                            <p className="text-[16px] text-linkGreen font-semibold">Return to calculator</p>
    
                        </motion.div>
                    </div>
                    
                    <div className="flex items-center flex-col justify-center py-5">
                        <p className="text-bgGreen text-[16px]">You’re about to plant</p>
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-row py-6 space-x-5 items-center justify-center">
                                <img
                                src="./assets/treeGroup.svg"
                                />
                                <div className="flex flex-col ">
                                    <p className="text-bgGreen text-[32px]"><span className="text-[48px]">12,000</span>Trees</p>
                                </div>
    
                            </div>
                            <div className="flex flex-row space-x-2  items-center justify-center opacity-60">
                                <p className="text-bgGreen text-[12px]">Based on your CO2 use calculation</p>
    
                                <img
                                src="./assets/greenDot.svg"
                                />
                                
                                <p className="text-bgGreen text-[12px]">Unit Price: 1.20 $/tree</p>
    
                            </div>
                        </div>
                        <div className="w-[234px] h-[52px] rounded-[8px] mt-2 flex space-x-2 items-center justify-center bg-[#E1EAE5]">
                            <p className="text-[32px] text-bgGreen font-medium">$220.29</p>
                            <div className="flex flex-col items-center justify-center space-y-1">
                                <img
                                src="./assets/plusIcon.svg"
                                />
                                
                                <img
                                src="./assets/minus.svg"
                                />
                                
                            </div>
    
                        </div>
    
                    </div>
    
                    <div className="flex flex-col space-y-5 items-center justify-centers px-5">
                        <div className="flex flex-row items-center justify-center space-x-5  w-full">
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Preferred Planting Location</p>
                                <Select>
                                    <SelectTrigger className="shad-select-plant data-[placeholder]:text-[#0a45194f]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
    
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Payment Method</p>
                                <Select>
                                    <SelectTrigger className="shad-select-plant data-[placeholder]:text-[#0a45194f]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
    
    
                        <div className="flex flex-row items-center justify-center space-x-5  w-full">
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">First Name</p>
                                <Input placeholder="Enter First Name" className="shad-input-plant"/>
                            </div>
    
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Last Name</p>
                                <Input placeholder="Enter Last Name" className="shad-input-plant"/>
                            </div>
                        </div>
    
    
                        <div className="flex flex-row items-center justify-center space-x-5  w-full">
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">City</p>
                                <Input placeholder="Enter City" className="shad-input-plant"/>
                            </div>
    
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Town</p>
                                <Input placeholder="Enter Town" className="shad-input-plant"/>
                            </div>
                        </div>
    
    
                        <div className="flex flex-row items-center justify-center space-x-5  w-full">
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Street</p>
                                <Input placeholder="Enter Street" className="shad-input-plant"/>
                            </div>
    
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Post Code</p>
                                <Input placeholder="Enter Post Code" className="shad-input-plant"/>
                            </div>
                        </div>
    
    
                        <div className="flex flex-row items-center justify-center space-x-5  w-full">
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Tax Number</p>
                                <Input placeholder="Enter Tax Number" className="shad-input-plant"/>
                            </div>
    
                            <div className="flex flex-col space-y-3">
                                <p className="text-bgGreen text-[16px]">Tax Administrator</p>
                                <Input placeholder="Enter Tax Administrator" className="shad-input-plant"/>
                            </div>
                        </div>
    
                        <div className="flex flex-col space-y-3">
                            <p className="text-bgGreen text-[16px]">Email</p>
                            <Input placeholder="Enter Email" className="shad-input-plant-width w-[536px]"/>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-1 mt-2 items-center py-5 px-8">
                        <Checkbox id="terms"/>
                        <label
                            htmlFor="terms"
                            className="text-bgGreen text-[16px]"
                        >
                            I have read and i agree to <span className=" text-linkGreen">General Terms and Conditions</span>
                        </label>
                    </div>
    
                    <div className="flex items-center justify-center pb-5">
                            <motion.a
                            whileTap={{ scale: 0.9 }} 
                            onClick={handleNext}
                            className="w-[85%] h-[56px] bg-[#25B567]  hover:bg-[#1a8249]  transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer"
                            >
                                <p className="text-white text-[16px] font-medium">Proceed to Payment</p>
                            </motion.a>
                    </div>
    
                </div>
    
            </div>
            
        </div>
      )
  }
export default Payment