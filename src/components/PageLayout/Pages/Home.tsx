import { ThreeDots } from "react-loader-spinner"
import GreeningPolicy from "./GreeningPolicy"
import LandingSection from "./HomeComponents/LandingSection"
import PlantTreesSection from "./HomeComponents/PlantTreesSection"
import Services from "./HomeComponents/Services"
import Testimonials from "./HomeComponents/Testimonials"
import TrustedSection from "./HomeComponents/TrustedSection"
import { useEffect, useState } from "react"


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const handleImageLoad = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []); // Empty dependency array so the hook only runs once

  // Check if all images are already loaded
  useEffect(() => {
    if (imagesLoaded > 7) {
      setLoading(false);
    }
  }, [imagesLoaded]);



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