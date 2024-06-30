import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useTranslation } from "react-i18next"
  


const Food = () => {

    const {t} = useTranslation();
  return (
    <div className="flex flex-col space-y-10 py-10 px-8">
        <div className="flex flex-row max-sm:flex-col space-y-5 items-center justify-between w-full">
            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">{t('whatIsYourFoodLike')}</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                        <SelectValue placeholder={t('selectFoodType')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">{t('whatFoodProductsDoYouMainlyBuy')}</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                        <SelectValue placeholder={t('selectFoodType')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            
        </div>

        <div className="flex flex-row max-sm:flex-col space-y-5 items-center justify-between w-full">
            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">{t('doYouExercise')}</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                        <SelectValue placeholder={t('selectFoodType')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">{t('doYouBuyOrganicFood')}</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                        <SelectValue placeholder={t('selectFoodType')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </div>

        <div className="flex flex-row max-sm:flex-col space-y-5 items-center justify-between w-full">
            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">{t('howOftenDoYouEatFrozenFoods')}</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                        <SelectValue placeholder={t('selectFoodType')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-3">
                <p className="text-bgGreen text-[16px]">{t('whatFoodProductsDoYouMainlyBuy')}</p>
                <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#0a45194f]">
                        <SelectValue placeholder={t('selectFoodType')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </div>
        <div className=" space-y-2 max-sm:items-center max-sm:flex max-sm:justify-center max-sm:flex-col md:space-y-5">
            <p className="text-bgGreen text-[16px] ">{t('annualAverageFoodConsumption')}</p>
            <div className="bg-[#E1EAE5] w-[822px] max-sm:w-[200px] h-[48px] px-[16px] rounded-[8px] flex items-center">
                <p className="text-[16px] text-bgGreen"><span className="text-[20px] font-bold">1,024</span> {t('kgPerYear')}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Food