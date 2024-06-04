import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCo2, setshowCo2] = useState(false);
  const [showFootprint, setshowFootPrint] = useState(false);
  const [showTreePacks, setShowTreePacks] = useState(false);
  const [showTracking, setShowTracking] = useState(false);

  // hovers

  const [hoverC02, setHoverCO2] = useState(false);
  const [hoverFootprint, setHoverFootprint] = useState(false);
  const [hoverTreePacks, setHoverTreePacks] = useState(false);
  const [hoverTracking, setHoverTracking] = useState(false);

  const handleNavigate = (link:string) =>{
    navigate(link)
  }

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.8, y: "-20%" },
    visible: { opacity: 1, scale: 1, y: "0%" },
  };


  const contentVarients = {
    hidden: { opacity: 0, scale: 1, x: "-10%" },
    visible: { opacity: 1, scale: 1, x: "0%" },
  };

  const itemVariantsX = {
    hidden: { opacity: 1, x: "-5%" },
    visible: (custom:any) => ({
      opacity: 1,
      x: "0%",
      transition: {
        delay: custom * 0.1, // Increase the delay for each item
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: "10%" },
    visible: (custom:any) => ({
      opacity: 1,
      y: "0%",
      transition: {
        delay: custom * 0.1, // Increase the delay for each item
      },
    }),
  };


  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showSubDropdown, setshowsubdropdown] = useState(false);

  const actovatMobileSubdropdown = () =>{
    if(showSubDropdown){
      setshowsubdropdown(false);
    }else{
      setshowsubdropdown(true);
    }
  }

  const setobileDropdown = (newStatus: boolean) =>{
    setShowMobileDropdown(newStatus);
  }


  const [color, setColor] = useState(false);


  
  // useEffect(() => {
  //   if(location.pathname !== '/') {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }

  //   if(!color) {
  //     setTriggerHeight(200);
  //   }else{
  //     setTriggerHeight(0);
  //   }

  //   const changeColor = () => {
  //     if(window.scrollY >= triggerHeight){
  //       setColor(true);
  //     } else {
  //       setColor(false);
  //     }
  //   };

  //   window.addEventListener('scroll', changeColor);

  //   // Cleanup function to remove the event listener
  //   return () => window.removeEventListener('scroll', changeColor);
  // }, [window.location.pathname, window.scrollY]);


  useEffect(() => {
    const changeColor = () => {
      if(location.pathname === '/'){
        if(window.scrollY >=200){
          setColor(true);
        } else {
          setColor(false);
        }
      } else {
        setColor(true);
      }
    }
  
    // Call the function directly to update the color immediately
    changeColor();
  
    window.addEventListener('scroll', changeColor);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, [location, window.scrollY, window.location]);
  


  return (
    <div>
      <div className="navbar max-lg:hidden w-screen" onMouseLeave={() => setShowDropdown(false)}>
       <div className={`bg-transparent h-[73px] px-10 justify-between items-center transition ease-in-out flex navbar ${color ? 'bg-white border-b-[1px]' : ''}`}>
        <div className=" cursor-pointer" onClick={()=>handleNavigate('/')}>
          {color ? (
            <img
            src="./assets/topBarLogo.svg"
            alt="logo"
            />
          ):(
            <img
            src="./assets/logoWhite.svg"
            alt="logo"
            className="pt-2"
            />
          )}
        </div>
        <div className="flex flex--row space-x-14">
          <div className="flex flex-col">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onMouseEnter={() => setShowDropdown(true)}
            className="flex flex-row cursor-pointer items-center space-x-1">
              <p className={`text-[14px] ${!color ? 'text-white' : 'text-[#1F2721]'} hover:text-linkGreen`}>Breath Pack</p>
              {color ? (
                <img
                src="./assets/down.svg"
                />
              ):(
                <img
                src="./assets/dropdownWhite.svg"
                />
              )}

            </motion.div>
          </div>
          
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}   
          onClick={()=>handleNavigate('/about-us')}
          onMouseEnter={() => setShowDropdown(false)}>
            <p className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer`}>About Us</p></motion.div>
          
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={()=>handleNavigate('/blog')}
          onMouseEnter={() => setShowDropdown(false)}>
            <p className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer`}>Blog</p></motion.div>
          
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={()=>handleNavigate('/ourservices')}
          onMouseEnter={() => setShowDropdown(false)}>
            <p className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer`}>Our Services</p></motion.div>
          
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onMouseEnter={() => setShowDropdown(false)}>
            <p className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer`}>EN</p></motion.div>

        </div>
        <motion.a
          whileTap={{ scale: 0.9 }} 
          onClick={()=>handleNavigate('/co2-calculator')}
          className={`w-[163px] h-[48px] bg-[#25B567] hover:bg-[#1a8249]  transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer ${!color ? 'bg-transparent ring-[1px] ring-white hover:ring-transparent' : 'text-[#1F2721]'} hover:text-linkGreen`}
          >
            <p className="text-white text-[16px] font-medium">Breathe Now</p>
            
            <img
            src="./assets/ButtonArrow.svg"
            alt="arrow"
            />

        </motion.a>
      </div>

      {showDropdown && (
        <div className=" fixed pt-[10.6srem] top-[4.55rem] h-[340px] ml-[28rem] flex shadow-2xl flex-row rounded-[4px]">
        
        <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate={showDropdown ? "visible" : "hidden"}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="w-[298px] h-[340px] bg-white rounded-l-[4px] transition ease-in-out">
          <div className="py-10 flex flex-col space-y-3">
              <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate={showDropdown ? "visible" : "hidden"}
              custom={0}
              className="flex px-10 flex-row items-center justify-center space-x-2">
                <img
                src="./assets/greenTree.svg"
                />
                <p className="text-[#1F2721] text-[14px] font-bold tracking-wider">BREATH PACK</p>
              </motion.div>

              <div className="flex items-center justify-center w-full flex-col space-y-2">
                <div className="w-full px-5" 
                onMouseEnter={() => {
                  setShowTracking(false); 
                  setHoverTracking(false); 
                  setShowTreePacks(false); 
                  setHoverTreePacks(false); 
                  setshowFootPrint(false); 
                  setHoverFootprint(false);
                  setshowCo2(true); 
                  setHoverCO2(true);}}

                onMouseLeave={() => {setshowCo2(false); setHoverCO2(false);}}
                onClick={()=>{handleNavigate('/co2-calculator'); setShowDropdown(false);}}
                >
                  <motion.div 
                  className={`flex items-center text-[16px] text-bgGreen cursor-pointer pl-3 transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverC02 ? 'bg-[#25B567] font-semibold text-white' : ''}`}>
                    CO2 Calculation
                  </motion.div>
                </div>

                <div
                className="w-full px-5"
                onMouseEnter={() => {
                setShowTracking(false); 
                setHoverTracking(false); 
                setShowTreePacks(false); 
                setHoverTreePacks(false); 
                setshowFootPrint(true); 
                setHoverFootprint(true);
                setshowCo2(false); 
                setHoverCO2(false);}}
                onMouseLeave={() => {setshowFootPrint(false); setHoverFootprint(false);}}
                onClick={()=>{handleNavigate('/carbon-footprint'); setShowDropdown(false);}}
                >
                  <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  animate={showDropdown ? "visible" : "hidden"}
                  custom={2}
                  className={`flex items-center text-[16px] text-bgGreen pl-3 cursor-pointer transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverFootprint ? 'bg-[#25B567] font-semibold text-white' : ''}`}>
                    Carbon Footprint
                  </motion.div>
                </div>

                <div className="w-full px-5"
                onMouseEnter={() => {
                  setShowTracking(false); 
                  setHoverTracking(false); 
                  setShowTreePacks(true); 
                  setHoverTreePacks(true); 
                  setshowFootPrint(false); 
                  setHoverFootprint(false);
                  setshowCo2(false); 
                  setHoverCO2(false);}}
                  onMouseLeave={() => {setShowTreePacks(false); setHoverTreePacks(false);}}
                  onClick={()=>{handleNavigate('/treePacks'); setShowDropdown(false);}}
                >
                  <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  animate={showDropdown ? "visible" : "hidden"}
                  custom={3}
                  className={`flex items-center text-[16px] text-bgGreen pl-3 transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverTreePacks ? 'bg-[#25B567] font-semibold text-white' : ''}`}>
                    Tree Packs
                  </motion.div>
                </div>


                <div className="w-full px-5"
                onMouseEnter={() => {
                  setShowTracking(true); 
                  setHoverTracking(true); 
                  setShowTreePacks(false); 
                  setHoverTreePacks(false); 
                  setshowFootPrint(false); 
                  setHoverFootprint(false);
                  setshowCo2(false); 
                  setHoverCO2(false);}}
                  onMouseLeave={() => {setShowTracking(false); setHoverTracking(false);}}
                  onClick={()=>{handleNavigate('/plant-trees-tracking'); setShowDropdown(false);}}
                >
                  <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  animate={showDropdown ? "visible" : "hidden"}
                  custom={4}
                  className={`flex items-center text-[16px] text-bgGreen pl-3 transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverTracking ? 'bg-[#25B567] font-semibold text-white' : ''}`}
                  >
                    Trees Tracking and Verification
                  </motion.div>
                </div>

              </div>

            </div>
        </motion.div>

        <motion.div className={!showCo2 ? 'hidden': ''} onMouseEnter={() => {
            setShowTracking(false); 
            setHoverTracking(false); 
            setShowTreePacks(false); 
            setHoverTreePacks(false); 
            setshowFootPrint(false); 
            setHoverFootprint(false);
            setshowCo2(true); 
            setHoverCO2(true);}}
            
            variants={contentVarients}
            initial="hidden"
            animate={showCo2 ? "visible" : "hidden"}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="w-[620px] bg-[#F7F9F8] p-8 h-full rounded-r-[4px]">
            <div className="flex flex-row justify-between h-full">
              <motion.div 
              variants={itemVariantsX}
              initial="hidden"
              animate={showCo2 ? "visible" : "hidden"}
              custom={0}
              className="flex flex-col h-full justify-between">
                <div className="flex flex-col space-y-6 mt-12">
                  <p className="text-bgGreen text-[20px] font-bold">CO2 Calculation</p>
                  <p className="text-bgGreen text-[16px] w-[237px]">Calculate the amount of carbon CO2 used daily.</p>
                </div>
                <div className="flex">
                  <p className="text-[8px] text-bgGreen w-[237px]">The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree.</p>
                </div>
              </motion.div>
              <motion.div
              variants={itemVariantsX}
              initial="hidden"
              animate={showCo2 ? "visible" : "hidden"}
              custom={1}
              >
                <img
                src="./assets/C02calculation.svg"
                className="rounded-[12px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div className={!showFootprint ? 'hidden': ''} onMouseEnter={() => {
            setShowTracking(false); 
            setHoverTracking(false); 
            setShowTreePacks(false); 
            setHoverTreePacks(false); 
            setshowFootPrint(true); 
            setHoverFootprint(true);
            setshowCo2(false); 
            setHoverCO2(false);}}
            
            variants={contentVarients}
            initial="hidden"
            animate={showFootprint ? "visible" : "hidden"}
            transition={{ duration: 0.2, ease: "easeOut" }}
            >
          <div className="w-[620px] bg-[#F7F9F8]  p-8 h-full rounded-r-[4px]">
            <div className="flex flex-row justify-between h-full">
              <motion.div
              variants={itemVariantsX}
              initial="hidden"
              animate={showFootprint ? "visible" : "hidden"}
              custom={0}
              className="flex flex-col h-full justify-between">
                <div className="flex flex-col space-y-6 mt-12">
                  <p className="text-bgGreen text-[20px] font-bold">Carbon Footprint</p>
                  <p className="text-bgGreen text-[16px] w-[237px]">Calculate the amount of carbon CO2 used daily.</p>
                </div>
                <div className="flex">
                  <p className="text-[8px] text-bgGreen w-[237px]">The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree.</p>
                </div>
              </motion.div>
              <motion.div
              variants={itemVariantsX}
              initial="hidden"
              animate={showFootprint ? "visible" : "hidden"}
              custom={1}
              >
                <img
                src="./assets/carbonFootprintImage.svg"
                className="rounded-[12px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div className={!showTreePacks ? 'hidden': ''} onMouseEnter={() => {
            setShowTracking(false); 
            setHoverTracking(false); 
            setShowTreePacks(true); 
            setHoverTreePacks(true); 
            setshowFootPrint(false); 
            setHoverFootprint(false);
            setshowCo2(false); 
            setHoverCO2(false);}}
            
            variants={contentVarients}
            initial="hidden"
            animate={showTreePacks ? "visible" : "hidden"}
            transition={{ duration: 0.2, ease: "easeOut" }}
            >
          <div className="w-[620px] bg-[#F7F9F8] p-8 h-full rounded-r-[4px]">
            <div className="flex flex-row justify-between h-full">
              <motion.div
              variants={itemVariantsX}
              initial="hidden"
              animate={showTreePacks ? "visible" : "hidden"}
              custom={0}
              className="flex flex-col h-full justify-between">
                <div className="flex flex-col space-y-6 mt-12">
                  <p className="text-bgGreen text-[20px] font-bold">Tree Packs</p>
                  <p className="text-bgGreen text-[16px] w-[237px]">Calculate the amount of carbon CO2 used daily.</p>
                </div>
                <div className="flex">
                  <p className="text-[8px] text-bgGreen w-[237px]">The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree.</p>
                </div>
              </motion.div>
              <motion.div
              variants={itemVariantsX}
              initial="hidden"
              animate={showTreePacks ? "visible" : "hidden"}
              custom={1}
              >
                <img
                src="./assets/treePacksImage.svg"
                className="rounded-[12px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
          <motion.div className={!showTracking ? 'hidden': ''} 
          onMouseEnter={() => {
            setShowTracking(true); 
            setHoverTracking(true); 
            setShowTreePacks(false); 
            setHoverTreePacks(false); 
            setshowFootPrint(false); 
            setHoverFootprint(false);
            setshowCo2(false); 
            setHoverCO2(false);}}
            
            variants={contentVarients}
            initial="hidden"
            animate={showTracking ? "visible" : "hidden"}
            transition={{ duration: 0.2, ease: "easeOut" }}
            >
            <div className="w-[620px] bg-[#F7F9F8] p-8 h-full rounded-r-[4px]">
              <div className="flex flex-row justify-between h-full">
                <motion.div
                variants={itemVariantsX}
                initial="hidden"
                animate={showTracking ? "visible" : "hidden"}
                custom={0}
                className="flex flex-col h-full justify-between">
                  <div className="flex flex-col space-y-6 mt-12">
                    <p className="text-bgGreen text-[20px] font-bold w-[161px]">Trees Tracking & Verification</p>
                    <p className="text-bgGreen text-[16px] w-[237px]">Calculate the amount of carbon CO2 used daily.</p>
                  </div>
                  <div className="flex">
                    <p className="text-[8px] text-bgGreen w-[237px]">The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree.</p>
                  </div>
                </motion.div>
                <motion.div
                variants={itemVariantsX}
                initial="hidden"
                animate={showTracking ? "visible" : "hidden"}
                custom={1}
                >
                  <img
                  src="./assets/treeTrackingImage.svg"
                  className="rounded-[12px]"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>


      )}
      </div>
      <div className="flex flex-col navbar w-screen">
        <div className={`bg-transparent lg:hidden w-screen h-[50px] px-8 transition ease-in-out py-3 ${color ? 'bg-white h-[55px] border-b-[1px]' : ''}`}>
          <div className="w-full items-center flex flex-row justify-between" >
            <div onClick={() => handleNavigate('/')} className=" cursor-pointer">
              {color ? (
                <img
                src="./assets/greenTree.svg"
                alt="logo"
                />
              ):(
                <img
                src="./assets/whiteTree.svg"
                alt="logo"
                className=""
                />
              )}
            </div>
            <div className=" cursor-pointer" onClick={()=> setobileDropdown(true)}>
              {color ? (
                <img
                src="./assets/menu.svg"
                />
              ):(
                <img
                src="./assets/menuWHite.svg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={!showMobileDropdown ? 'hidden' : ''} onMouseLeave={() => {setshowsubdropdown(false); setShowMobileDropdown(false);}}>
        <div className=" w-[300px] bg-white md:hidden fixed z-[9999] right-0 mr-6 mt-5 rounded-[8px] shadow-2xl border-t-[2px] border-l-[2px] border-r-[2px]">
          <div className="flex flex-col space-y-5 py-5 px-7 w-full">
            <div className="flex flex-row justify-between items-center">
              <img
                  src="./assets/greenTree.svg"
                  alt="logo"
                  className=" cursor-pointer"
                  onClick={()=>{handleNavigate('/'); setobileDropdown(false); setshowsubdropdown(false)}}
                  />
                  <img
                  src="./assets/close.svg"
                  className=" cursor-pointer"
                  onClick={()=> {setobileDropdown(false); setshowsubdropdown(false)}}
                  />
            </div>
            <div className="flex flex-row space-x-2 cursor-pointer" onClick={actovatMobileSubdropdown}>
              <p className="text-[16px]">Breath Pack</p>
                <img
                src="./assets/down.svg"
                className={ showSubDropdown ? 'rotate-[180deg] transition ease-in-out' : ' transition ease-in-out'}
                />
            </div>

            <div className={ !showSubDropdown ? 'hidden' : ''}>
              <div className={"ml-5 space-y-5"}>

                <div onClick={()=> {handleNavigate('/co2-calculator'); setobileDropdown(false); setshowsubdropdown(false)}}>
                  <p className="text-[14px]">C02 Calculation</p>
                </div>

                <div onClick={() => {handleNavigate('/carbon-footprint'); setobileDropdown(false); setshowsubdropdown(false)}}>
                  <p className="text-[14px]">Carbon footprint</p>
                </div>

                <div onClick={() => {handleNavigate('/treePacks'); setobileDropdown(false); setshowsubdropdown(false)}}>
                  <p className="text-[14px]">Tree Packs</p>
                </div>

                <div onClick={() => {handleNavigate('/plant-trees-tracking'); setobileDropdown(false); setshowsubdropdown(false)}}>
                  <p className="text-[14px]">Tree Tracking and Verification</p>
                </div>

              </div>
            </div>

            <div onClick={()=>{handleNavigate('/about-us'); setobileDropdown(false); setshowsubdropdown(false)}}>
              <p className="text-[16px]">About Us</p>
            </div>

            <div onClick={()=>{handleNavigate('/blog'); setobileDropdown(false); setshowsubdropdown(false)}}>
              <p className="text-[16px]">Blog</p>
            </div>

            <div onClick={()=>{handleNavigate('/ourservices'); setobileDropdown(false); setshowsubdropdown(false)}}>
              <p className="text-[16px]">Our Services</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar