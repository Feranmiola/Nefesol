import { ThreeDots } from "react-loader-spinner";
import GreeningPolicy from "./GreeningPolicy"
import TreePackGroup from "./HomeComponents/PlantTreeComponents/TreePackGroup"
import { useLayoutEffect, useState } from "react";


const TreePacksPage = () => {
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
    <div>
        <p className=" text-[40px] max-sm:text-[28px] max-sm:text-center text-bgGreen md:ml-[168px] mt-40 font-medium">Tree Packs</p>
        <TreePackGroup/>
        <div className="py-20">
            <GreeningPolicy/>
        </div>
    </div>
  )
}

export default TreePacksPage