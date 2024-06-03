import React, { useLayoutEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ThreeDots } from 'react-loader-spinner'

const OurServicesFull = () => {

    const [progress, setProgress] = React.useState(100)
    const [tabIndex, setTabIndex] = useState(1);
    

    const handleTabs = (inital: number, current: number) =>{
        console.log(inital)
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


    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500); // Delay of 2 seconds
    }, []);

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

    //   useEffect(() => {
    //     const observer = new IntersectionObserver(
    //       entries => {
    //         entries.forEach(entry => {
    //           if (entry.isIntersecting) {
    //             const tabIndexMap: { [key: string]: number } = {
    //               'carbonConsultancy': 1,
    //               'certification': 2,
    //               'digitalMarketing': 3,
    //               'carbonFootprintOptimisation': 4,
    //               'greenTechnologyInscentives': 5,
    //               'techSupport': 6
    //             };
    //             handleTabs(100, tabIndexMap[entry.target.id]);
    //           }
    //         });
    //       },
    //       { threshold: 0.25 }
    //     );
      
    //     const elements = ['carbonConsultancy', 'certification', 'digitalMarketing', 'carbonFootprintOptimisation', 'greenTechnologyInscentives', 'techSupport'].map(id => document.getElementById(id));
      
    //     elements.forEach(el => {
    //       if (el) observer.observe(el);
    //     });
      
    //     return () => {
    //       elements.forEach(el => {
    //         if (el) observer.unobserve(el);
    //       });
    //     };
    //   }, []);
      
    if(loading){
        return (
            <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
              <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#0A4519"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
            </div>
          );
    }

  return (
    <div className="">
        <div className="py-[4.5rem]">
            <div className="w-full fixed servicesIndex bg-white">
                <p className="text-[40px] ml-[158px] text-bgGreen">Our Services</p>
                <div className="flex items-center justify-center">
                    <div className="flex flex-row items-center justify-between p-5">
                        <div className="flex flex-row space-x-3">
                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs(25, 1)}
                            href="#carbonConsultancy"
                            className={tabIndex === 1 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center ring-[1px] ring-bgGreen cursor-pointer py-1 px-5"}>
                                <p className={tabIndex === 1 ? "text-white" : " text-bgGreen"}>Carbon Consultancy</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs(50, 2)}
                            href="#certification"
                            className={tabIndex === 2 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 2 ? "text-white" : " text-bgGreen"}>Certification</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs(75, 3)}
                            href="#digitalMarketing"
                            className={tabIndex === 3 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 3 ? "text-white" : " text-bgGreen"}>HoDigital Marketing</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs(100, 4)}
                            href="#carbonFootprintOptimisation"
                            className={tabIndex === 4 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 4 ? "text-white" : " text-bgGreen"}>Carbon Footprint Optimization</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs(100, 5)}
                            href="#greenTechnologyInscentives"
                            className={tabIndex === 5 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 5 ? "text-white" : " text-bgGreen"}>Green Tech Initiatives</p>
                            </motion.a>

                            <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.9 }} 
                            onClick={( )=> handleTabs(100, 6)}
                            href="#techSupport"
                            className={tabIndex === 6 ? "bg-bgGreen rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer py-1 px-5" : "bg-transparent bg-white rounded-full flex items-center flex-row space-x-2 justify-center cursor-pointer ring-[1px] ring-bgGreen py-1 px-5"}>
                                <p className={tabIndex === 6 ? "text-white" : " text-bgGreen"}>Tech Support</p>
                            </motion.a>
                        </div>
                    </div>
                </div>
                <Progress value={progress}  id="progress-bar" className=" w-full  h-[2px]"/>
            </div>


            <div className="flex items-center justify-center section" id="carbonConsultancy" >
                <div className="pb-20 w-[1101px] flex flex-col space-y-20">
                    <div className="flex flex-col space-y-10">
                        <div className="flex flex-row items-start justify-start space-x-2">
                            <img
                            src="./assets/carbonConsulatancyLogoBig.svg"
                            />
                            <p className="text-bgGreen text-[32px]">Carbon Consultancy</p>
                        </div>
                        <div className=" space-y-5">
                            <p className="text-[20px] text-bgGreen">As Nefesol , while providing carbon equalization services to our individual and corporate customers, we also take a solution-oriented approach with our Carbon Consulting service. Our carbon consultants guide our clients in identifying, reducing and compensating for their carbon footprints. In this way, you can effectively manage your carbon emissions and contribute to reducing your environmental impact.</p>
                            <p className="text-[20px] text-bgGreen">Carbon Footprint Assessment: In the first step, our expert consultants conduct a detailed analysis to determine the carbon footprint based on our customers' activities. By considering energy consumption, transportation, waste management and other factors, the main sources and amount of carbon emissions are determined.</p>
                            <p className="text-[20px] text-bgGreen">Carbon Reduction Strategies: It is important to identify effective strategies to reduce the carbon footprint. Our consultants provide our clients with customized solutions in areas such as energy efficiency, renewable energy use, waste reduction and recycling. These strategies can be applied both to reduce environmental impact and to increase operational efficiency.</p>
                            <p className="text-[20px] text-bgGreen">Carbon Compensation Services: It may not always be possible to completely eliminate carbon emissions. This is where our carbon offset services come into play. We help our customers balance their carbon emissions through methods such as forest planting, afforestation projects and renewable energy investments. In this way, our customers have the opportunity to give back to nature while reducing their impact on the environment.</p>
                            <p className="text-[20px] text-bgGreen">Monitoring and Reporting: During the carbon consulting process, it is important to monitor and report on our clients' progress. Tracking carbon emissions enables effective strategies to be implemented and allows for continuous improvement. Our consultants regularly provide reports and provide our clients with the necessary information to evaluate their performance.</p>
                            <p className="text-[20px] text-bgGreen">With our carbon consultancy service, we offer our customers a comprehensive roadmap to fulfill their environmental responsibilities. As Nefesol, we are happy to help you reduce carbon emissions and contribute to a sustainable future by working together.</p>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-10 section pt-[-350px]" id="certification">
                        <div className="flex flex-row items-start justify-start space-x-2">
                            <img
                            src="./assets/certificationLogoBig.svg"
                            />
                            <p className="text-bgGreen text-[32px]">Certification</p>
                        </div>
                        <div className=" space-y-10">
                            <p className="text-[20px] text-bgGreen">As Nefesol , we offer our customers the opportunity to reduce their environmental impact and compensate for carbon emissions with our carbon equalization services. The verifiability and reliability of your carbon equalization efforts are important when managing your carbon footprint. Therefore, with our certification service, we certify your carbon equalization activities in accordance with international standards.</p>
                            
                            <div className="space-y-5">
                                <p className="text-bgGreen text-[24px]">What You Get with the Nefesol Certification Service?</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Accuracy and Reliability: </span>Certification is an important way to verify and prove the reliability of your carbon equalization activities. Your customers know that you are effectively managing your carbon emissions through certification, and that the carbon offset projects you carry out are verified. This is a strong statement that your business fulfills its environmental responsibilities and is committed to a sustainable future. transmits a message.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Compliance with International Standards: </span>Nefesol Certification Service is carried out in accordance with internationally accepted carbon standards. This allows you to align your operations with best practices for carbon monitoring, reporting and verification.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Image and Competitive Advantage: </span>Certification allows you to gain image and competitive advantage as well as proving your business commitments to environmental sustainability. Verifying your carbon footprint and supporting your equalization efforts with certificates can be an important factor in choosing you by your customers and stakeholders. You can also gain a competitive advantage by emphasizing your leadership role in sustainability in the market.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Traceability and Transparency: </span>Certification ensures that your carbon equalization activities are traceable and transparent. It clearly documents the details of your projects and compensation efforts, the methods for reducing carbon emissions and contributing to nature. This allows you to gain the trust of your stakeholders, customers and society.</p>
                            </div>
                            <div>
                                <p className="text-bgGreen text-[20px]">Nefesol Certification Service guides you to validate your carbon equalization efforts and take an important step in your sustainability journey. Our experts manage the certification process in accordance with international carbon standards and cooperate with you. It determines the most suitable certification path for you and ensures its successful completion.</p>
                                <p className="text-bgGreen text-[20px]">Contact us to prove your environmental commitments and step towards a sustainable future by certifying your carbon equalization activities.</p>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col space-y-10 section" id="digitalMarketing">
                        <div className="flex flex-row items-start justify-start space-x-2">
                            <img
                            src="./assets/digitalMarketingLogoBig.svg"
                            />
                            <p className="text-bgGreen text-[32px]">Digital Marketing</p>
                        </div>
                        <div className=" space-y-10">
                            <div className="space-y-5">
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Website and SEO Optimization: </span>To strengthen your business's digital presence, you need an impressive website and SEO (Search Engine Optimization) strategy. As Nefesol, we offer a customized web design to your business, while we do SEO optimization to get better rankings in search engines.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Social Media Management: </span>Social media has the power to announce your brand to large audiences and provide interaction; is a tool. As Nefesol, we manage your social media platforms and support you in content creation, publishing, community management and advertising campaigns.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Content Marketing: </span>Effective content is important to attract and impress your target audience as well as demonstrating your brand's value and expertise. As Nefesol, we create original and interesting content, and offer content in various formats such as blog posts, articles, infographics and videos.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Email Marketing: </span>Email marketing is an effective way to reach potential customers and current customers directly. As Nefesol, we create impressive e-mail campaigns, send personalized e-mails and apply automation processes to increase customer loyalty.</p>
                            </div>
                            <div>
                                <p className="text-bgGreen text-[20px]">Digital marketing strategies support your business to grow and achieve your goals. As Nefesol, we offer custom digital marketing solutions for your business together with our expert team.</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-10 section" id="carbonFootprintOptimisation">
                        <div className="flex flex-row items-start justify-start space-x-2">
                            <img
                            src="./assets/carbonFootprintLogoServicesBig.svg"
                            />
                            <p className="text-bgGreen text-[32px]">Carbon Footprint Optimisation</p>
                        </div>
                        <p className="text-bgGreen text-[20px]">Today, it is of great importance to manage the environmental impacts of businesses and to contribute to a sustainable future. Carbon footprint is a metric used to measure and evaluate greenhouse gas emissions from the activities of businesses. As Nefesol, we help businesses increase their environmental efficiency with our carbon footprint optimization service and help businesses maximize their environmental efficiency with our carbon footprint optimization service.</p>
                        <div className=" space-y-10">
                            <div className="space-y-5">
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Carbon Footprint Assessment: </span>In the first step, we analyze the activities of your business as a team of experts and make a detailed assessment to determine the carbon footprint and measure the current environmental impacts of your business. . This includes energy consumption, transportation, waste management and other factors.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Data Collection and Analysis: </span>We collect and analyze the data necessary to calculate the carbon footprint. This includes factors such as your business's energy consumption, transportation activities, production processes and supply chain. Using the data we have obtained, we identify the main sources that affect the carbon emissions of your business.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Optimization Strategies: </span>As a result of analyzing the data and evaluating the current situation, we determine customized optimization strategies to reduce the carbon footprint. These strategies include topics such as increasing energy efficiency, using renewable energy, reducing waste, and green supply chain management. In addition, improvements in business processes and technological innovations are also considered.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Implementation and Monitoring: </span>We work in cooperation with your business during the implementation of optimization strategies. We guide you and follow the process for the successful implementation of the strategies. We also provide regular reports to monitor progress and evaluate results.</p>
                            </div>
                            <div className="space-y-5">
                                <p className="text-bgGreen text-[24px]">What Can You Achieve with Carbon Footprint Optimization?</p>

                                <ul className="ml-6">
                                    <li className="text-[20px]">You increase your environmental efficiency by reducing your carbon emissions.</li>
                                    <li className="text-[20px]">You save cost with energy efficiency and sustainable applications.</li>
                                    <li className="text-[20px]">You support your business to achieve its sustainability goals.</li>
                                    <li className="text-[20px]">You gain the trust and loyalty of your customers and stakeholders.</li>
                                    <li className="text-[20px]">You strengthen your reputation by complying with environmental regulations.</li>
                                </ul>
                                <p className="text-bgGreen text-[20px]">As Nefesol, we are here to help you maximize your environmental efficiency by guiding your business through the carbon footprint optimization process.</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-10 section" id="greenTechnologyInscentives">
                        <div className="flex flex-row items-start justify-start space-x-2">
                            <img
                            src="./assets/greenTechLogoBig.svg"
                            />
                            <p className="text-bgGreen text-[32px]">Green Technology Incentives</p>
                        </div>
                        <p className="text-bgGreen text-[20px]">Today, sustainability is among the primary objectives of businesses. Green technologies help businesses reduce their environmental impact by offering solutions that are environmentally friendly and energy efficient. As Nefesol, we provide consultancy and support services to businesses to promote the spread and use of green technologies.</p>
                        <div className=" space-y-10">
                            <div className="space-y-5">
                                <p className="text-bgGreen text-[24px]">Green Technology Incentives and Benefits</p>
                                <ul className="ml-6 space-y-10">
                                    <li className="text-[20px]">Financial Advantages: Green technology incentives provide various financial advantages to businesses. These include incentives such as grant and incentive programs, tax breaks, low-interest loans, and savings on energy costs. These incentives encourage the adoption of green technologies while helping businesses reduce their costs.</li>
                                    <li className="text-[20px]">Competitive Advantage: Green technologies enable businesses to gain competitive advantage. Commitments to sustainability and the use of green technologies are positively perceived by customers and stakeholders. This increases brand reputation and enables you to be the business of choice for customers.</li>
                                    <li className="text-[20px]">Reducing Environmental Impacts: Green technologies help businesses reduce their environmental impact by increasing energy efficiency and using environmentally friendly resources. These technologies provide innovation in areas such as utilizing renewable energy sources, waste management, water conservation and recycling. Thus, it contributes to the protection of natural resources and reduction of carbon emissions.</li>
                                    <li className="text-[20px]">Innovation and R&D Opportunities: Green technology incentives provide support to businesses for innovation and R&D studies. These incentives facilitate the allocation of resources to develop innovative solutions and achieve sustainability goals. Businesses can play a leadership role in their sectors by realizing projects related to green technologies. They can be overtaken.</li>
                                    <li className="text-[20px]">As Nefesol, we are here to raise awareness of green technology incentives and guide businesses in this regard. Our expert team determines the appropriate incentive programs for the needs of your business and assists you in the application process. We also provide strategic advice and solutions on the adoption of green technologies. You too can benefit from green technology incentives to reduce the environmental impact of your business and contribute to sustainability.</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col space-y-10 section" id="techSupport">
                        <div className="flex flex-row items-start justify-start space-x-2">
                            <img
                            src="./assets/technicalSupportLogoBig.svg"
                            />
                            <p className="text-bgGreen text-[32px]">Technical Support</p>
                        </div>
                        <p className="text-bgGreen text-[20px]">Technology plays a critical role in increasing the efficiency of businesses and gaining competitive advantage. However, there is always the possibility of encountering technical issues or updates. As Nefesol, we provide technical support services to our customers, ensuring smooth business processes and an uninterrupted working environment.</p>
                        <div className=" space-y-10">
                            <div className="space-y-5">
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Troubleshooting and Debugging: </span>When you encounter technical problems, our expert technical support team diagnoses the problems and provides solutions quickly. The team guides you through debugging processes and finds the most suitable solution. strives to provide.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Update and Upgrade: </span>The world of technology is constantly changing and may require updates. Our technical support service helps you keep your business's existing systems and software up to date. It also provides support during upgrade processes and guides you through the implementation of new technologies.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Remote and On-Site Support: </span>Our technical support services offer remote access tools and on-site intervention options. With remote support, you can quickly solve your technical problems and prevent your business processes from being interrupted. Additionally, with our on-site support service, our expert technical team comes to your business's location and solves problems on-site.</p>
                                <p className="text-bgGreen text-[20px]"><span className="font-bold">Consultancy and Training: </span>Our technical support service advises you in determining your business' technology-oriented strategies. We also provide training for your staff on technology use and troubleshooting. This allows you to increase the technical capabilities of your business.</p>
                            </div>
                            <div>
                                <p className="text-bgGreen text-[20px]">As Nefessol, we are here to offer solutions that meet the technical needs of your business and ensure smooth business processes. Our technical support team is always ready to assist you</p>
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