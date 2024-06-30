import { useTranslation } from "react-i18next"
import TrestedGroup from "./TrestedGroup"
const TrustedSection = () => {
  const {t} = useTranslation();
  return (
    <div className="md:py-20 max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center">
        <p className="text-[40px] max-sm:text-[30px] text-bgGreen md:ml-[168px]">{t('trustedBy')}</p>
        <TrestedGroup/>
    </div>
  )
}

export default TrustedSection