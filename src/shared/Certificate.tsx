import { Separator } from "@/components/ui/separator"


const Certificate = (props: any) => {
    return (
        <div className="bg-white relative w-[842px] h-[595px] flex flex-col p-2">
            <img
                src="./assets/patternBG.svg"
                className="absolute"
            />
            <div className="certificateBG h-[208px]">
                <div className="flex flex-col items-center h-full justify-center z-50">
                    <img
                        src="./assets/nefesolCertificateLogo.svg"
                    />

                    <p className=" font-kalnia tracking-[0.4rem] text-[48.23px] text-[#E5FFD9]">CERTIFICATE</p>
                    <p className=" font-bold text-[#0A4519] tracking-[0.5rem] py-1 px-5 bg-[#E5FFD9] absolute top-[12.7rem] text-[12px]">OF CARBON OFFSETTING</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-evenly w-full flex-1 z-50 py-10">
                <p className="text-[12px] text-[#0A4519] tracking-[0.3rem]">PRESENTED TO</p>
                <p className="text-[64px] text-[#0A4519]">{props.firstName || "John"} {props.lastName || "Jones"}</p>

                <div className="flex flex-row items-center justify-evenly w-full">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-[#0A4519] opacity-50 text-[10px]">Trees Bought</p>
                        <p className="text-[#0A4519] text-[16px]">{props.treeAmount} Trees</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="text-[#0A4519] opacity-50 text-[10px]">CO2 Amount</p>
                        <p className="text-[#0A4519] text-[16px]">12,000 kg</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="text-[#0A4519] opacity-50 text-[10px]">Location</p>
                        <p className="text-[#0A4519] text-[16px]">{props.location || "NIL"}</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="text-[#0A4519] opacity-50 text-[10px]">Date</p>
                        <p className="text-[#0A4519] text-[16px]">{props.dateBought || "NIL"}</p>
                    </div>
                </div>


                <div className="relative pt-5 px-10 w-full">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center w-[186px] h-[91px] p-2 justify-between border-[0.5px] border-[#0A4519]">
                            <img
                                src="./assets/QRImage.svg"
                            />
                            <div className="h-full pl-2 justify-between flex flex-col">
                                <p className="text-[12px] font-bold w-[92px] text-[#0A4519]">Scan to verify certificate</p>
                                <p className="text-[8px] text-[#0A4519]">www.nefesol.com</p>

                            </div>
                        </div>
                        <Separator
                            className="w-full mb-[30px] opacity-20 flex-1 bg-[#0A4519] h-[1px]"
                        />
                        <img
                            src="./assets/nefesolCertificateStamp.svg"
                        />

                    </div>


                    <div className="flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 w-[842px] space-y-2 top-[5rem] absolute">
                        <p className="text-[#0A4519] text-[10px]">Trees Tracking & Verification Code</p>
                        <p className="text-[#0A4519] font-Azeret text-[24px]">{props.orderId || "NIL"}</p>

                    </div>

                </div>
            </div>

        </div>


    )
}

export default Certificate