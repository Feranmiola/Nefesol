import { useTranslation } from "react-i18next"
import TreePackGroup from "./TreePackGroup"

const TreePack = () => {
  const {t} = useTranslation();
  return (
    <div className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col">
        <p className=" text-[40px] max-sm:text-[28px] text-bgGreen md:ml-[168px] max-sm:text-center mt-40 font-medium">{t('chooseTreePack')}</p>
        <TreePackGroup/>
    </div>
  )
}

export default TreePack