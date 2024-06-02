import BretheNow from "./HomeComponents/PlantTreeComponents/BretheNow"
import TakeAction from "./HomeComponents/PlantTreeComponents/TakeAction"

const CarbonFootprint = () => {
  return (
    <div className="py-20 mt-10">
        <div className="flex flex-row space-x-10 justify-center">
            <TakeAction/>
            <BretheNow/>
        </div>
        
    </div>
  )
}

export default CarbonFootprint