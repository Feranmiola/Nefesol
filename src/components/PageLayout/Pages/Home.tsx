import GreeningPolicy from "./GreeningPolicy"
import LandingSection from "./HomeComponents/LandingSection"
import PlantTreesSection from "./HomeComponents/PlantTreesSection"
import Services from "./HomeComponents/Services"


const Home = () => {
  return (
    <div>
      <LandingSection/>
      <PlantTreesSection/>
      <GreeningPolicy/>
      <Services/>
    </div>
  )
}

export default Home