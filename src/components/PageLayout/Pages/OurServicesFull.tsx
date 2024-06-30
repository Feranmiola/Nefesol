import React from "react"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import BeatLoader from "react-spinners/BeatLoader"
import { useTranslation } from "react-i18next"


const OurServicesFull = () => {

  const {t} = useTranslation();
    const [progress, setProgress] = React.useState(100)
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
              }else{
                
              }
            });
          },
          { threshold: 0.5 } // Adjust this value to control when the callback is triggered
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
                        <div className="flex flex-col space-y-10 max-sm:flex max-sm:items-center md:pt-[230px] max-sm:flex-col max-sm:justify-center" id="carbonConsultancy" ref={(el) => (sectionRefs.current[1] = el)}>
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

                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center" id="certification" ref={(el) => (sectionRefs.current[2] = el)}>
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
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Accuracy and Reliability: </span>Certification is an important way to verify and prove the reliability of your carbon equalization activities. Your customers know that you are effectively managing your carbon emissions through certification, and that the carbon offset projects you carry out are verified. This is a strong statement that your business fulfills its environmental responsibilities and is committed to a sustainable future. transmits a message.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Compliance with International Standards: </span>Nefesol Certification Service is carried out in accordance with internationally accepted carbon standards. This allows you to align your operations with best practices for carbon monitoring, reporting and verification.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Image and Competitive Advantage: </span>Certification allows you to gain image and competitive advantage as well as proving your business commitments to environmental sustainability. Verifying your carbon footprint and supporting your equalization efforts with certificates can be an important factor in choosing you by your customers and stakeholders. You can also gain a competitive advantage by emphasizing your leadership role in sustainability in the market.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Traceability and Transparency: </span>Certification ensures that your carbon equalization activities are traceable and transparent. It clearly documents the details of your projects and compensation efforts, the methods for reducing carbon emissions and contributing to nature. This allows you to gain the trust of your stakeholders, customers and society.</p>
                                </div>
                                <div>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">{t('nefesolCertify')}</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">{t('contactUs')}</p>
                                </div>
                            </div>

                        </div>


                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center" id="digitalMarketing" ref={(el) => (sectionRefs.current[3] = el)}>
                            <div className="flex flex-row items-start justify-start  space-x-2">
                                <img
                                src="./assets/digitalMarketingLogoBig.svg"
                                className="w-[40px] h-[40px]"
                                />
                                <p className="text-bgGreen text-[32px]">{t('digitalMarketingTitle')}</p>
                            </div>
                            <div className=" space-y-10 max-sm:w-[350px]">
                                <div className="space-y-5 ">
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Website and SEO Optimization: </span>To strengthen your business's digital presence, you need an impressive website and SEO (Search Engine Optimization) strategy. As Nefesol, we offer a customized web design to your business, while we do SEO optimization to get better rankings in search engines.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Social Media Management: </span>Social media has the power to announce your brand to large audiences and provide interaction; is a tool. As Nefesol, we manage your social media platforms and support you in content creation, publishing, community management and advertising campaigns.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Content Marketing: </span>Effective content is important to attract and impress your target audience as well as demonstrating your brand's value and expertise. As Nefesol, we create original and interesting content, and offer content in various formats such as blog posts, articles, infographics and videos.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Email Marketing: </span>Email marketing is an effective way to reach potential customers and current customers directly. As Nefesol, we create impressive e-mail campaigns, send personalized e-mails and apply automation processes to increase customer loyalty.</p>
                                </div>
                                <div>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">{t('digitalMarketing')}</p>
                                </div>
                            </div>

                        </div>

                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center" id="carbonFootprintOptimisation" ref={(el) => (sectionRefs.current[4] = el)}>
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
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Carbon Footprint Assessment: </span>In the first step, we analyze the activities of your business as a team of experts and make a detailed assessment to determine the carbon footprint and measure the current environmental impacts of your business. . This includes energy consumption, transportation, waste management and other factors.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Data Collection and Analysis: </span>We collect and analyze the data necessary to calculate the carbon footprint. This includes factors such as your business's energy consumption, transportation activities, production processes and supply chain. Using the data we have obtained, we identify the main sources that affect the carbon emissions of your business.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Optimization Strategies: </span>As a result of analyzing the data and evaluating the current situation, we determine customized optimization strategies to reduce the carbon footprint. These strategies include topics such as increasing energy efficiency, using renewable energy, reducing waste, and green supply chain management. In addition, improvements in business processes and technological innovations are also considered.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Implementation and Monitoring: </span>We work in cooperation with your business during the implementation of optimization strategies. We guide you and follow the process for the successful implementation of the strategies. We also provide regular reports to monitor progress and evaluate results.</p>
                                </div>
                                <div className="space-y-5">
                                    <p className="text-bgGreen text-[24px]">{t('carbonFootprintOptimization')}</p>

                                    <ul className="ml-6">
                                        <li className="text-[20px] max-sm:text-[16px]">You increase your environmental efficiency by reducing your carbon emissions.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">You save cost with energy efficiency and sustainable applications.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">You support your business to achieve its sustainability goals.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">You gain the trust and loyalty of your customers and stakeholders.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">You strengthen your reputation by complying with environmental regulations.</li>
                                    </ul>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]">As Nefesol, we are here to help you maximize your environmental efficiency by guiding your business through the carbon footprint optimization process.</p>
                                </div>
                            </div>

                        </div>

                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center" id="greenTechnologyInscentives" ref={(el) => (sectionRefs.current[5] = el)}>
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
                                        <li className="text-[20px] max-sm:text-[16px]">Financial Advantages: Green technology incentives provide various financial advantages to businesses. These include incentives such as grant and incentive programs, tax breaks, low-interest loans, and savings on energy costs. These incentives encourage the adoption of green technologies while helping businesses reduce their costs.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">Competitive Advantage: Green technologies enable businesses to gain competitive advantage. Commitments to sustainability and the use of green technologies are positively perceived by customers and stakeholders. This increases brand reputation and enables you to be the business of choice for customers.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">Reducing Environmental Impacts: Green technologies help businesses reduce their environmental impact by increasing energy efficiency and using environmentally friendly resources. These technologies provide innovation in areas such as utilizing renewable energy sources, waste management, water conservation and recycling. Thus, it contributes to the protection of natural resources and reduction of carbon emissions.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">Innovation and R&D Opportunities: Green technology incentives provide support to businesses for innovation and R&D studies. These incentives facilitate the allocation of resources to develop innovative solutions and achieve sustainability goals. Businesses can play a leadership role in their sectors by realizing projects related to green technologies. They can be overtaken.</li>
                                        <li className="text-[20px] max-sm:text-[16px]">{t('raiseAwareness')}</li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="  flex flex-col space-y-10 max-sm:py-10  md:section max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center" id="techSupport" ref={(el) => (sectionRefs.current[6] = el)}>
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
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Troubleshooting and Debugging: </span>When you encounter technical problems, our expert technical support team diagnoses the problems and provides solutions quickly. The team guides you through debugging processes and finds the most suitable solution. strives to provide.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Update and Upgrade: </span>The world of technology is constantly changing and may require updates. Our technical support service helps you keep your business's existing systems and software up to date. It also provides support during upgrade processes and guides you through the implementation of new technologies.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Remote and On-Site Support: </span>Our technical support services offer remote access tools and on-site intervention options. With remote support, you can quickly solve your technical problems and prevent your business processes from being interrupted. Additionally, with our on-site support service, our expert technical team comes to your business's location and solves problems on-site.</p>
                                    <p className="text-bgGreen text-[20px] max-sm:text-[16px]"><span className="font-bold">Consultancy and Training: </span>Our technical support service advises you in determining your business' technology-oriented strategies. We also provide training for your staff on technology use and troubleshooting. This allows you to increase the technical capabilities of your business.</p>
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