import React, { useLayoutEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { useEffect } from "react"
import { ThreeDots } from 'react-loader-spinner'


const CarbonCycle = () => {
    const [progress, setProgress] = React.useState(100)

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

      
      const [loading, setLoading] = useState(true);
      useLayoutEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500); // Delay of 2 seconds
    }, []);

    if(loading){
        return (
            <div className='w-screen h-screen bg-white flex items-center transition ease-in-out justify-center minw-[100vh]'>
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
            <div className="py-[4.5rem]">
                <div className="w-full fixed">
                    <Progress value={progress}  id="progress-bar" className=" w-full  h-[4px]"/>
                </div>
        
                <div className="py-10">
                    <p className="text-bgGreen text-[40px] ml-[159px]">Carbon Cycle</p>
        
                    <div className="flex py-10 items-center justify-center flex-col">
                        <img
                        src="./assets/carbonImageBig.svg"
                        alt="carbonImageBig"
                        />
                        <div className="w-[1058px] flex-col py-10 justify-center space-y-10 flex">
                            <p className="text-bgGreen text-[20px]">The carbon cycle, located at the heart of our planet's environmental processes, is the biogeochemical world that provides carbon exchange between biosphere, pedosphere (earth), geosphere (earth), hydrosphere (water) and Earth's atmosphere. ; means. The movement and conversion of carbon between carbon sinks (carbon storage sites) and carbon sources (where carbon is released into the atmosphere); Contains.</p>
                            
                            <div className="space-y-5">
                                <p className="text-[32px] text-bgGreen">Carbon Cycle; What is Diagram?</p>
                                <p className="text-[20px] text-bgGreen">The carbon cycle Visualizing can be complicated due to the large number of operations involved. However, in a simplified form, it looks like this:</p>
        
                                <ul >
                                    <li className="text-[20px]">Carbon dioxide (CO2) in the world's atmosphere.</li>
                                    <li className="text-[20px]">Plants absorb CO2 and sunlight to create glucose (stored energy) and release oxygen.</li>
                                    <li className="text-[20px]">Plants give some carbon back to the atmosphere through respiration. When they die and decompose, they release additional carbon into the soil.</li>
                                    <li className="text-[20px]">Animals add carbon to their bodies by consuming plants. They also release CO2 into the atmosphere through respiration. When they fall, their bodies decompose and release carbon into the soil.</li>
                                    <li className="text-[20px]">The ocean absorbs and releases CO2 from the atmosphere at the same time. Organisms in the ocean use carbon to create shells that turn into sedimentary rock when they fall and fall to the seafloor.</li>
                                    <li className="text-[20px]">For millions of years, "dead" remains of plants and animals can be converted to fossil fuels. When these fuels are burned for energy, they release CO2 back into the atmosphere.</li>
                                    <li className="text-[20px]">Volcanic activity releases CO2 stored on Earth into the atmosphere. Weathering of rocks also plays a role in the carbon cycle, locking atmospheric carbon into new rocks.</li>
                                </ul>
                            </div>
        
                            <div className="space-y-5">
                                <p className="text-[32px] text-bgGreen">Moisture of Carbon Cycle?</p>
                                <div className=" space-y-5">
                                    <p className="text-[20px] text-bgGreen">Our planet Earth is a multitude of interiors that coexist and complement each other. It develops on a balance that is meticulously protected by the system of the past. One such critical system that is often under-appreciated but is an integral part of our survival is the carbon cycle. The carbon cycle, a marvelous shopping process, is the biogeochemical power that sustains life, protects our climate and shapes our world. It's a show.</p>
                                    
                                    <ul>
                                        <li className="text-[20px]">Allows energy to be stored and released.</li>
                                        <li className="text-[20px]">Carbon in the form of carbohydrates, fats and proteins stores energy. The cycle is when this energy is needed by organisms. when heard and needed allows it to oscillate when heard.</li>
                                        <li className="text-[20px]">It regulates the world's climate</li>
                                        <li className="text-[20px]">strength in the atmosphere by controlling the amount of CO2, a greenhouse gas, the carbon cycle; It plays an important role in regulating global temperature.</li>
                                        <li className="text-[20px]">It forms the basis of life</li>
                                    </ul>
                                    <p className="text-[20px] text-bgGreen">Carbon is the primary component of all organic compounds. The carbon cycle ensures that this element is present to form the basis of life. Due to human activities, especially the burning of fossil fuels and deforestation, the balance of the carbon cycle is significantly disturbed, as a result of which CO2 in the atmosphere increases and contributes to global warming.</p>
                                    <p className="text-[20px] text-bgGreen">As we continue to understand the intricacies of the carbon cycle, it becomes clear that balancing this vital system is necessary for the continued health and diversity of life on our planet. As responsible residents, we must consider the effects of our actions on this delicate balance and strive to live in harmony with nature's indispensable carbon recycling system.</p>
        
                                </div>
                            </div>
        
                        </div>
                    </div>
                </div>
                
            </div>
          )
    }

export default CarbonCycle