import PageLayout from './components/PageLayout/PageLayout'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
import Blog from './components/PageLayout/Pages/Blog'
import Home from './components/PageLayout/Pages/Home'
import CO2Calculator from './components/PageLayout/Pages/CO2Calculator'
import TreePacksPage from './components/PageLayout/Pages/TreePacksPage'
import AboutUs from './components/PageLayout/Pages/AboutUs'
import CarbonCycle from './components/PageLayout/Pages/BlogPages/CarbonCycle'
import OurServicesFull from './components/PageLayout/Pages/OurServicesFull'
import PlantTreesLayout from './components/PageLayout/Pages/PlantTreesLayout'
import Payment from './components/PageLayout/Pages/PlantTreesPages/Payment'
import VerifyEmail from './components/PageLayout/Pages/PlantTreesPages/VerifyEmail'
import ThankYou from './components/PageLayout/Pages/PlantTreesPages/ThankYou'
import Tracking from './components/PageLayout/Pages/PlantTreesPages/Tracking'


function App() {
  

  return (
    <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/co2-calculator" element={<CO2Calculator />} />
          <Route path="/treePacks" element={<TreePacksPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ourservices" element={<OurServicesFull />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carbon-cycle" element={<CarbonCycle />} />

          <Route element={<PlantTreesLayout />}>
            <Route path="/plant-trees-payment" element={<Payment />} />
            <Route path="/plant-trees-verifyemail" element={<VerifyEmail />} />
            <Route path="/plant-trees-thankyou" element={<ThankYou />} />
            <Route path="/plant-trees-tracking" element={<Tracking />} />
          </Route>
        </Route>

      </Routes>
  )
}

export default App
