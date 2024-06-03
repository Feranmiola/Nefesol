import { Outlet } from "react-router-dom"

const PlantTreesLayout = () => {
    return (
      <div className="homeBackground">
          <Outlet/>        
      </div>
    )
}

export default PlantTreesLayout