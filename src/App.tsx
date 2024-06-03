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
import CarbonFootprint from './components/PageLayout/Pages/CarbonFootprint'
import { ThreeDots } from 'react-loader-spinner'
import { useLayoutEffect, useState } from 'react'


function App() {

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
    <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/co2-calculator" element={<CO2Calculator />} />
          <Route path="/treePacks" element={<TreePacksPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ourservices" element={<OurServicesFull />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carbon-cycle" element={<CarbonCycle />} />
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />

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
}

export default App
