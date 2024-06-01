import GreeningPolicy from "./GreeningPolicy"
import TreePackGroup from "./HomeComponents/PlantTreeComponents/TreePackGroup"


const TreePacksPage = () => {
  return (
    <div>
        <p className=" text-[40px] text-bgGreen ml-[168px] mt-40 font-medium">Tree Packs</p>
        <TreePackGroup/>
        <div className="py-20">
            <GreeningPolicy/>
        </div>
    </div>
  )
}

export default TreePacksPage