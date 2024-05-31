import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  


const Food = () => {
  return (
    <div className="flex flex-col space-y-10 py-10 px-8">
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">WHat is your food like?</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
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
                <p className="text-bgGreen text-[16px]">What food products do you mainly buy?</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
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

        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">Do you exercise?</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
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
                <p className="text-bgGreen text-[16px]">Do you buy organic food?</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
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

        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">How often do you eat frozen foods?</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
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
                <p className="text-bgGreen text-[16px]">What food products do you mainly buy?</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
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
        <div className=" space-y-2">
            <p className="text-bgGreen text-[16px] ">Annual average food consumption</p>
            <div className="bg-[#E1EAE5] w-[822px] h-[48px] px-[16px] rounded-[8px] flex items-center">
                <p className="text-[16px] text-bgGreen"><span className="text-[20px] font-bold">1,024</span> KG per year</p>
            </div>
        </div>
        
    </div>
  )
}

export default Food