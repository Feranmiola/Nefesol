import Footer from "@/shared/Footer"
import TopBar from "@/shared/TopBar"
import { Outlet } from "react-router-dom"

const PageLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <TopBar/>
      </div>
      <div className="bg-white">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default PageLayout