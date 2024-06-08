import BeatLoader from "react-spinners/BeatLoader";
import GreeningPolicy from "./GreeningPolicy"
import LandingSection from "./HomeComponents/LandingSection"
import PlantTreesSection from "./HomeComponents/PlantTreesSection"
import Services from "./HomeComponents/Services"
import Testimonials from "./HomeComponents/Testimonials"
import TrustedSection from "./HomeComponents/TrustedSection"
import { useEffect, useState } from "react"


const Home = () => {
  const [loading, setLoading] = useState(true);
  const imageUrls = ['./assets/treeBackground.svg', './assets/greeningImage.svg', './assets/dotBackground.svg', './assets/smallTrees.svg', './assets/mediumTrees.svg', './assets/largeTrees.svg', './assets/gardenImageVertical.svg'];
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
      <LandingSection/>
      <PlantTreesSection/>
      <GreeningPolicy/>
      <Services/>
      <Testimonials/>
      <TrustedSection/>
    </div>
  )
}


export default Home