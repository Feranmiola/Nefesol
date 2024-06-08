import { useEffect, useState } from "react";
import BretheNow from "./HomeComponents/PlantTreeComponents/BretheNow"
import TakeAction from "./HomeComponents/PlantTreeComponents/TakeAction"
import BeatLoader from "react-spinners/BeatLoader";


const CarbonFootprint = () => {
  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/treeGroup.svg', './assets/field.svg', './assets/co2.svg'];
  useEffect(() => {
      let loadedImages = 0;

      imageUrls.forEach((url) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
              loadedImages++;
              if (loadedImages === imageUrls.length) {
                  setLoading(false);
              }
          };
      });
  }, [imageUrls]);

if(loading){
    return (
        <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
         <BeatLoader color="#0A4519" />
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