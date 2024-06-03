import { ThreeDots } from "react-loader-spinner"
import GreeningPolicy from "./GreeningPolicy"
import LandingSection from "./HomeComponents/LandingSection"
import PlantTreesSection from "./HomeComponents/PlantTreesSection"
import Services from "./HomeComponents/Services"
import Testimonials from "./HomeComponents/Testimonials"
import TrustedSection from "./HomeComponents/TrustedSection"
import { useLayoutEffect, useState } from "react"


const Home = () => {
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
}else{
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
}

export default Home