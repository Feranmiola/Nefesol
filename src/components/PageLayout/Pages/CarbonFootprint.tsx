import { useLayoutEffect, useState } from "react";
import BretheNow from "./HomeComponents/PlantTreeComponents/BretheNow"
import TakeAction from "./HomeComponents/PlantTreeComponents/TakeAction"
import { ThreeDots } from "react-loader-spinner";

const CarbonFootprint = () => {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Delay of 2 seconds
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
    <div className="py-20 mt-10">
        <div className="flex flex-row max-sm:flex-col max-sm:space-y-5 md:space-x-10 justify-center">
            <TakeAction/>
            <BretheNow/>
        </div>
        
    </div>
  )
  }


export default CarbonFootprint