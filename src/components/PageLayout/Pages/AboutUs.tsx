import BeatLoader from 'react-spinners/BeatLoader';
import Testimonials from './HomeComponents/Testimonials'
import TrestedGroup from './HomeComponents/TrestedGroup'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(true);
    const imageUrls = ['./assets/whiteTree.svg', './assets/aboutUsTree.svg', './assets/gardenImageVertical.svg', './assets/dotBackground.svg', './assets/karbonCoin.svg', './assets/userImage.svg']; // Replace with your image URLs

    useEffect(() => {
      let loadedImages = 0;
  
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === imageUrls.length) {
            setLoading(false);
          }
        };
      });
    }, [imageUrls]);


    if(loading){
        return (
            <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
            <BeatLoader color="#0A4519" />
            </div>
          );
    }

        return (
            <div className='py-20'>
        
                <div className='items-center justify-center flex flex-col py-20 space-y-5'>
                    <p className=' text-linkGreen font-semibold text-[16px]'>{t('aboutUsMax')}</p>
                    <p className='text-bgGreen text-[40px] max-sm:text-[20px] text-center font-medium w-[645px] max-sm:w-[300px]'>{t('environmentallyFriendlyFuture')}</p>
        
                </div>
                <div className='flex items-center justify-center flex-col space-y-10'>
                    <div className='flex flex-row max-sm:flex-col max-sm:space-y-5 md:space-x-10 items-center justify-center'>
                        <div className='flex flex-col space-y-10'>
                            <p className='text-[16px] max-sm:text-[14px] max-sm:w-[339px] text-bgGreen w-[536px]'>{t('ermaGroup')}</p>
                            <p className='text-[16px] max-sm:text-[14px] max-sm:w-[339px] text-bgGreen w-[536px]'>{t('nefesolMission')}</p>
                        </div>
                        <div className='aboutUsBG w-[539px] h-[432px] max-sm:w-[339px]  max-sm:h-[532px] flex flex-col px-8 rounded-[14.03px] space-y-6'>
                            <div className='md:mt-[241px] max-sm:mt-[300px] flex flex-col'>
                                <p className="text-white text-[40px] max-sm:text-[30px]  leading-tight">{t('eachTreeBreath')}</p>
                                <p className="text-white text-[40px] max-sm:text-[30px]  leading-tight">{t('everyBreathHope')}</p>
                            </div>
                            <img
                                src="./assets/whiteTree.svg"
                                alt="white tree"
                                className="w-[30.07px] h-[28.27px]"
                            />
                        </div>
        
                    </div>
        
                    <div>
                        <p className='text-bgGreen text-[16px] w-[1120px] max-sm:text-[14px] max-sm:w-[339px]'>{t('contributeNefesol')}</p>
                    </div>
        
                </div>
                <div>
                    <Testimonials/>
                    <TrestedGroup/>
                </div>
            </div>
          )

    }

export default AboutUs