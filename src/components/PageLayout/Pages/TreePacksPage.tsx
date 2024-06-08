
import GreeningPolicy from "./GreeningPolicy"
import TreePackGroup from "./HomeComponents/PlantTreeComponents/TreePackGroup"
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";


const TreePacksPage = () => {
  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/smallTrees.svg', './assets/greeningImage.svg', './assets/mediumTrees.svg', './assets/largeTrees.svg'];
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