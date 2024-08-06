import useScrollToTop from "@/hooks/ScrollToTop"
import { Outlet } from "react-router-dom"

const PlantTreesLayout = () => {
  useScrollToTop();
  return (
    <div className="homeBackground">
      <Outlet />
    </div>
  )
}

export default PlantTreesLayout