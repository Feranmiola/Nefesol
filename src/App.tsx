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
        </Route>

      </Routes>
  )
}

export default App
