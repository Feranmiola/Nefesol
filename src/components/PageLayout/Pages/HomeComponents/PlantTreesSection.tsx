import BretheNow from "./PlantTreeComponents/BretheNow"
import TakeAction from "./PlantTreeComponents/TakeAction"


const PlantTreesSection = () => {
  return (
    <div className="py-24">
        <div className="flex flex-row justify-center space-x-14 ">
            <TakeAction/>
            <BretheNow/>
        </div>
    </div>
  )
}

export default PlantTreesSection