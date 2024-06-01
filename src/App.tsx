import PageLayout from './components/PageLayout/PageLayout'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
import Blog from './components/PageLayout/Pages/Blog'
import Home from './components/PageLayout/Pages/Home'
import CO2Calculator from './components/PageLayout/Pages/CO2Calculator'


function App() {
  

  return (
    <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/co2-calculator" element={<CO2Calculator />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

      </Routes>
  )
}

export default App
