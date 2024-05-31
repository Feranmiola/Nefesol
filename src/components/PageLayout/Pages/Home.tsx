import GreeningPolicy from "./GreeningPolicy"
import LandingSection from "./HomeComponents/LandingSection"
import PlantTreesSection from "./HomeComponents/PlantTreesSection"
import Services from "./HomeComponents/Services"
import Testimonials from "./HomeComponents/Testimonials"
import TrustedSection from "./HomeComponents/TrustedSection"


const Home = () => {
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