import Footer from "@/shared/Footer"
import TopBar from "@/shared/TopBar"
import { Outlet } from "react-router-dom"

const PageLayout = () => {
  return (
    <div>
      <TopBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default PageLayout