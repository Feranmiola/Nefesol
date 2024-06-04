import BretheNow from "./PlantTreeComponents/BretheNow"
import TakeAction from "./PlantTreeComponents/TakeAction"
import TreePack from "./PlantTreeComponents/TreePack"


const PlantTreesSection = () => {
  return (
    <div className="py-24">
        <div className="flex flex-row max-sm:flex-col max-sm:items-center justify-center md:space-x-14 ">
            <TakeAction/>
            <BretheNow/>
        </div>
        <div>
          <TreePack/>
        </div>
    </div>
  )
}

export default PlantTreesSection