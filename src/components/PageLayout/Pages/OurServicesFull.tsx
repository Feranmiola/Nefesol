import React from "react"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import BeatLoader from "react-spinners/BeatLoader"
import { useTranslation } from "react-i18next"


const OurServicesFull = () => {

  const {t} = useTranslation();
    const [progress, setProgress] = React.useState(0)
    const [tabIndex, setTabIndex] = useState(1);
    

    const handleTabs = ( current: number) =>{
        setTabIndex(current);
      }
    
    //   const handlePageChange = (index: number) =>{
    //     if(index === 0){
    //       console.log("0 hit")
    //     }else{
    //       if(index === 5){
    //         console.log("5 hit")
    //       }else{
    //         setInitial(25 * index);
    //         setTabIndex(index);
    //       }
    //     }
    //   }
    
      
    
    //   React.useEffect(() => {
    //     const timer = setTimeout(() => setProgress(initial), (initial + 25))
    //     return () => clearTimeout(timer)
    //   }, [initial])



    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                console.log("Intersecting:", sectionId); // Debugging line
                switch (sectionId) {
                  case 'carbonConsultancy':
                    setTabIndex(1);
                    break;
                  case 'certification':
                    setTabIndex(2);
                    break;
                  case 'digitalMarketing':
                    setTabIndex(3);
                    break;
                  case 'carbonFootprintOptimisation':
                    setTabIndex(4);
                    break;
                  case 'greenTechnologyInscentives':
                    setTabIndex(5);
                    break;
                  case 'techSupport':
                    setTabIndex(6);
                    break;
                  default:
                    setTabIndex(1);
                    break;
                }
              }
            });
          },
          { threshold: 0.01 } // Adjust this value to control when the callback is triggered
        );

        
        sectionRefs.current.forEach((ref) => {
            if (ref) {
              observer.observe(ref);
            }
          });
          
          return () => {
            if (sectionRefs.current) {
              sectionRefs.current.forEach((ref) => {
                if (ref) {
                  observer.unobserve(ref);
                }
              });
            }
          };
      }, []);



    const [loading, setLoading] = useState(true);
    const imageUrls = ['./assets/carbonConsulatancyLogoBig.svg', './assets/certificationLogoBig.svg', './assets/digitalMarketingLogoBig.svg', './assets/carbonFootprintLogoServicesBig.svg', './assets/greenTechLogoBig.svg', './assets/technicalSupportLogoBig.svg']; // Replace with your image URLs

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

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        
        if (totalHeight > 0) {
          const progressPercentage = (scrollPosition / totalHeight) * 100;
          setProgress(progressPercentage);
        }
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      
    if(loading){
        return (
            <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
              <BeatLoader color="#0A4519" />
            </div>
          );
    }

    

  return (
    <div className="">
        <div className="md:py-[4.5rem]">
            <div className="w-full fixed servicesIndex bg-white max-sm:hidden">
                <p className="text-[40px] ml-[158px] text-bgGreen">{t('ourServices')}</p>
                <div className="flex items-center justify-center">
                    <div className="flex flex-row items-center justify-between p-5">
                        <div className="flex flex-row space-x-3">
                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs( 1)}
                            href="#carbonConsultancy"
                            className={tabIndex === 1 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center ring-[1px] ring-bgGreen cursor-pointer py-1 px-5"}>
                                <p className={tabIndex === 1 ? "text-white" : " text-bgGreen"}>{t('carbonConsultancy')}</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs( 2)}
                            href="#certification"
                            className={tabIndex === 2 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 2 ? "text-white" : " text-bgGreen"}>{t('certification')}</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs( 3)}
                            href="#digitalMarketing"
                            className={tabIndex === 3 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 3 ? "text-white" : " text-bgGreen"}>{t('digitalMarketingTitle')}</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs( 4)}
                            href="#carbonFootprintOptimisation"
                            className={tabIndex === 4 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 4 ? "text-white" : " text-bgGreen"}>{t('carbonFootprintOptimisation')}</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs( 5)}
                            href="#greenTechnologyInscentives"
                            className={tabIndex === 5 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 5 ? "text-white" : " text-bgGreen"}>{t('greenTechIncentives')}</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs( 6)}
                            href="#techSupport"
                            className={tabIndex === 6 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 6 ? "text-white" : " text-bgGreen"}>{t('technicalSupport')}</p>
                            </motion.a>
                        </div>
                    </div>
                </div>
                <Progress value={progress}  id="progress-bar" className=" w-full  h-[2px]"/>
            </div>
            <div className="md:hidden flex items-center mt-[7rem] justify-center">
                <p className="text-[30px] text-bgGreen">{t('ourServices')}</p>
            </div>

            
                <div className="  flex items-center justify-center max-sm:py-10">
                    <div className="pb-20 w-[1101px] flex flex-col space-y-20" >
                        <div className="flex flex-col space-y-10 max-sm:flex max-sm:items-center md:pt-[230px] max-sm:flex-col max-sm:justify-center section" id="carbonConsultancy" ref={(el) => (sectionRefs.current[1] = el)}>
                            <div className="flex flex-row items-start justify-start max-sm:items-center max-sm:justify-center space-x-2">
                                <img
                                src="./assets/carbonConsulatancyLogoBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('carbonConsultancy')}</p>
                            </div>
                            <div className=" space-y-5 max-sm:w-[350px]">
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('nefesolCarbonConsulting')}</p>
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('carbonAssessment')}</p>
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('carbonReduction')}</p>
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('carbonCompensation')}</p>
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('monitoringReporting')}</p>
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('nefesolRoadmap')}</p>
                            </div>

                        </div>

                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center section" id="certification" ref={(el) => (sectionRefs.current[2] = el)}>
                            <div className="flex flex-row items-start justify-start ">
                                <img
                                src="./assets/certificationLogoBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('certification')}</p>
                            </div>
                            <div className=" space-y-10 max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center max-sm:w-[350px]">
                                <p className="text-[20px] max-sm:text-[16px] text-bgGreen">{t('nefesolCertification')}</p>
                                
                                <div className="space-y-5 max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center">
                                    <p className="text-bgGreen text-[24px]">{t('nefesolCertBenefits')}</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('accuracyReliability')} </span>
                                      {t('certificationDescription')}
                                      </p>
                                      <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                          <span className="font-bold">{t('complianceStandards2')} </span>
                                          {t('complianceStandards2')}
                                      </p>
                                      <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                          <span className="font-bold">{t('imageAdvantage')} </span>
                                          {t('competitiveAdvantage')}
                                      </p>
                                      <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                          <span className="font-bold">{t('traceabilityTransparency22')} </span>
                                          {t('traceabilityDescription')}
                                      </p>
                                </div>
                                <div>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">{t('nefesolCertify')}</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">{t('contactUs')}</p>
                                </div>
                            </div>

                        </div>


                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center section" id="digitalMarketing" ref={(el) => (sectionRefs.current[3] = el)}>
                            <div className="flex flex-row items-start justify-start  space-x-2">
                                <img
                                src="./assets/digitalMarketingLogoBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('digitalMarketingTitle')}</p>
                            </div>
                            <div className=" space-y-10 max-sm:w-[350px]">
                                <div className="space-y-5 ">
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('websiteSeoOptimization')}</span> {t('websiteSeoOptimizationText')}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('socialMediaManagement')}</span> {t('socialMediaManagementText')}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('contentMarketing')}</span> {t('contentMarketingText')}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('emailMarketing')}</span> {t('emailMarketingText')}
                                  </p>
                                </div>
                                <div>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">{t('digitalMarketing')}</p>
                                </div>
                            </div>

                        </div>

                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center section" id="carbonFootprintOptimisation" ref={(el) => (sectionRefs.current[4] = el)}>
                            <div className="flex flex-row items-start max-sm:w-[350px] justify-start space-x-2">
                                <img
                                src="./assets/carbonFootprintLogoServicesBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('carbonFootprintOptimisation')}</p>
                            </div>
                            <p className="text-bgGreen text-[20px] max-sm:w-[350px] max-sm:text-[16px]">{t('environmentalImpacts')}</p>
                            <div className=" space-y-10 max-sm:w-[350px]">
                                <div className="space-y-5">
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('carbonFootprintAssessment').split(':')[0]}: </span>
                                      {t('carbonFootprintAssessment').split(':')[1]}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('dataCollectionAnalysis').split(':')[0]}: </span>
                                      {t('dataCollectionAnalysis').split(':')[1]}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('optimizationStrategies').split(':')[0]}: </span>
                                      {t('optimizationStrategies').split(':')[1]}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                      <span className="font-bold">{t('implementationMonitoring').split(':')[0]}: </span>
                                      {t('implementationMonitoring').split(':')[1]}
                                  </p>
                                </div>
                                <div className="space-y-5">
                                    <p className="text-bgGreen text-[24px]">{t('carbonFootprintOptimization')}</p>

                                      <ul className="ml-6">
                                        <li className="text-[20px] max-sm:text-[16px]">{t('increaseEfficiency')}</li>
                                        <li className="text-[20px] max-sm:text-[16px]">{t('saveCost')}</li>
                                        <li className="text-[20px] max-sm:text-[16px]">{t('supportBusiness')}</li>
                                        <li className="text-[20px] max-sm:text-[16px]">{t('gainTrust')}</li>
                                        <li className="text-[20px] max-sm:text-[16px]">{t('strengthenReputation')}</li>
                                    </ul>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px] mt-6">{t('nefesolSupport')}</p>
                                </div>
                            </div>

                        </div>

                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center section" id="greenTechnologyInscentives" ref={(el) => (sectionRefs.current[5] = el)}>
                            <div className="flex flex-row items-start max-sm:w-[350px] justify-start space-x-2">
                                <img
                                src="./assets/greenTechLogoBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('greenTechIncentives')}</p>
                            </div>
                            <p className="text-bgGreen text-[20px] max-sm:w-[350px] max-sm:text-[16px]">{t('sustainabilityObjective')}</p>
                            <div className=" space-y-10 max-sm:w-[350px]">
                                <div className="space-y-5">
                                    <p className="text-bgGreen text-[24px]">{t('greenTechIncentivesTitle')}</p>
                                    <ul className="ml-6 space-y-10 max-sm:w-[310px]">
                                      <li className="text-[20px] max-sm:text-[16px]">{t('financialAdvantages')}</li>
                                      <li className="text-[20px] max-sm:text-[16px]">{t('competitiveAdvantage2')}</li>
                                      <li className="text-[20px] max-sm:text-[16px]">{t('reducingEnvironmentalImpacts')}</li>
                                      <li className="text-[20px] max-sm:text-[16px]">{t('innovationAndR&D')}</li>
                                      <li className="text-[20px] max-sm:text-[16px]">{t('raiseAwareness')}</li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center section" id="techSupport" ref={(el) => (sectionRefs.current[6] = el)}>
                            <div className="flex flex-row items-start justify-start space-x-2">
                                <img
                                src="./assets/technicalSupportLogoBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('technicalSupport')}</p>
                            </div>
                            <p className="text-bgGreen text-[20px] max-sm:w-[350px] max-sm:text-[16px]">{t('technicalSupportRole')}</p>
                            <div className=" space-y-10 max-sm:w-[350px]">
                                <div className="space-y-5">
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                    <span className="font-bold">{t('troubleshootingAndDebugging.title')}</span>
                                    {t('troubleshootingAndDebugging.content')}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                    <span className="font-bold">{t('updateAndUpgrade.title')}</span>
                                    {t('updateAndUpgrade.content')}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                    <span className="font-bold">{t('remoteAndOnSiteSupport.title')}</span>
                                    {t('remoteAndOnSiteSupport.content')}
                                  </p>
                                  <p className="text-bgGreen text-[20px] max-sm:text-[16px]">
                                    <span className="font-bold">{t('consultancyAndTraining.title')}</span>
                                    {t('consultancyAndTraining.content')}
                                  </p>
                                </div>
                                <div>
                                    <p className="text-bgGreen max-sm:w-[350px] text-[20px] max-sm:text-[16px]">{t('nefesolTechnicalSupport')}</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            

        </div>
    </div>
  )
}

export default OurServicesFull