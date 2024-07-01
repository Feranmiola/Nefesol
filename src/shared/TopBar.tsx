import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import TurkeyLogo from "./TurkeyLogo";
import EnglishLogo from "./EnglishLogo";
import { useTranslation } from "react-i18next";

const TopBar = () => {
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

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.8, y: "-20%" },
    visible: { opacity: 1, scale: 1, y: "0%" },
    exit: { opacity: 0, scale: 0.8, y: "-20%" },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 1, x: "-10%" },
    visible: { opacity: 1, scale: 1, x: "0%" },
    exit: { opacity: 0, scale: 1, x: "-10%" },
  };

  const itemVariantsX = {
    hidden: { 
      opacity: 1, x: "-5%" },
    visible: (custom: any) => ({
      opacity: 1,
      x: "0%",
      transition: {
        delay: custom * 0.1, // Increase the delay for each item
      },
    }),
    exit: { opacity: 1, x: "-5%" },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: "10%" },
    visible: (custom: any) => ({
      opacity: 1,
      y: "0%",
      transition: {
        delay: custom * 0.1, // Increase the delay for each item
      },
    }),
    exit: { opacity: 0, y: "10%" },
  };

  const mobineContainer = {
    hidden: { opacity: 0, scale: 1, x: "-100%" },
    visible: { opacity: 1, scale: 1, x: "0%" },
    exit: { opacity: 0, scale: 1, x: "-100%" },
  }

  

  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showSubDropdown, setshowsubdropdown] = useState(false);

  const toggleMobileDropdown = () => {
    setshowsubdropdown(!showSubDropdown);
  };

  const setobileDropdown = (newStatus:boolean) => {
    setShowMobileDropdown(newStatus);
  };

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (location.pathname === "/") {
        if (window.scrollY >= 200) {
          setColor(true);
        } else {
          setColor(false);
        }
      } else {
        setColor(true);
      }
    };

    changeColor();

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [location, window.scrollY, window.location]);

  const isActiveLink = (path:any) => location.pathname === path;

  const {t} = useTranslation();
  const {i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(1);

  useEffect(() => {
    console.log(i18n.language)

    // const storedLang = localStorage.getItem('lang');
    // if (storedLang) {
    //   i18n.changeLanguage(storedLang);
    // }
    
      if(i18n.language === 'en'){
        setSelectedLanguage(1);
      }else{
        setSelectedLanguage(2);
      }
    if(i18n.language != 'en' && i18n.language != 'tr'){
      setSelectedLanguage(1);
    }
  }, []);

  const handleLanguageChange = () => {
    if(selectedLanguage === 1){
      
      i18n.changeLanguage('tr');
      setSelectedLanguage(2);
    }else{
      i18n.changeLanguage('en');
      setSelectedLanguage(1);
    }

  }

  return (
    <div>
      <div className="navbar max-lg:hidden w-screen" onMouseLeave={() => setShowDropdown(false)}>
        <div className={`bg-transparent h-[73px] px-10 justify-between items-center transition ease-in-out flex navbar ${color ? 'bg-white border-b-[1px]' : ''}`}>
          <a href="/" className="cursor-pointer">
            {color ? (
              <img src="./assets/topBarLogo.svg" alt="logo" />
            ) : (
              <img src="./assets/logoWhite.svg" alt="logo" className="pt-2" />
            )}
          </a>
          <div className="flex flex--row space-x-14">
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setShowDropdown(true)}
                className="flex flex-row cursor-pointer items-center space-x-1"
              >
                <p className={`text-[14px] ${!color ? 'text-white' : 'text-[#1F2721]'} hover:text-linkGreen`}>{t('breathPack')}</p>
                {color ? (
                  <img src="./assets/down.svg" />
                ) : (
                  <img src="./assets/dropdownWhite.svg" />
                )}
              </motion.div>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/about-us"
              onMouseEnter={() => setShowDropdown(false)}
              className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer ${isActiveLink('/about-us') ? 'text-[#25B567]' : ''}`}
            >
              {t('aboutUs')}
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/blog"
              onMouseEnter={() => setShowDropdown(false)}
              className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer ${isActiveLink('/blog') ? 'text-[#25B567]' : ''}`}
            >
              {t('blog')}
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/ourservices"
              onMouseEnter={() => setShowDropdown(false)}
              className={`text-[14px] ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer ${isActiveLink('/ourservices') ? 'text-[#25B567]' : ''}`}
            >
              {t('ourServices')}
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setShowDropdown(false)}
              onClick={handleLanguageChange}
              className={`text-[14px] flex flex-row items-center ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer`}
            >
              
              {selectedLanguage === 1 && (
                <>
                  <div className="pr-1">
                    <EnglishLogo/>
                  </div>
                  EN
                </>
              )}

              {selectedLanguage === 2 && (
                <>
                  <div className="pr-1">
                    <TurkeyLogo/>
                  </div>

                  TR
                </>
              )}

            </motion.div>
          </div>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/co2-calculator"
            className={`px-4 h-[48px] bg-[#25B567] hover:bg-[#1a8249] transition ease-in-out flex flex-row space-x-2 items-center justify-center rounded-[56px] cursor-pointer ${!color ? 'bg-transparent ring-[1px] ring-white hover:ring-transparent' : 'text-[#1F2721]'} hover:text-linkGreen `}
          >
            <p className="text-white text-[16px] font-medium">{t('breatheNow')}</p>
            <img src="./assets/ButtonArrow.svg" alt="arrow" />
          </motion.a>
        </div>

        {showDropdown && (
          <motion.div 
          variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              
              transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed pt-[10.6srem] top-[4.55rem] h-[340px] ml-[28rem] flex shadow-2xl flex-row rounded-[4px]">
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
                animate="visible"
                
                transition={{ duration: 0.1, ease: "easeOut" }}
              className="w-[298px] h-[340px] bg-white rounded-l-[4px] transition ease-in-out"
            >
              <div className="py-10 flex flex-col space-y-3">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  
                  animate={showDropdown ? "visible" : "hidden"}
                  custom={0}
                  className="flex px-10 flex-row items-center justify-center space-x-2"
                >
                  <img src="./assets/greenTree.svg" />
                  <p className="text-[#1F2721] text-[14px] font-bold tracking-wider">{t('BREATH PACK')}</p>
                </motion.div>

                <div className="flex items-center justify-center w-full flex-col space-y-2">
                  <a
                    className="w-full px-5"
                    onMouseEnter={() => {
                      setShowTracking(false);
                      setHoverTracking(false);
                      setShowTreePacks(false);
                      setHoverTreePacks(false);
                      setshowFootPrint(false);
                      setHoverFootprint(false);
                      setshowCo2(true);
                      setHoverCO2(true);
                    }}
                    onMouseLeave={() => { setshowCo2(false); setHoverCO2(false); }}
                    onClick={() => { setShowDropdown(false); }}
                    href="/co2-calculator"
                  >
                    <motion.div
                      className={`flex items-center text-[16px] text-bgGreen cursor-pointer pl-3 transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverC02 || isActiveLink('/co2-calculator') ? 'bg-[#25B567] font-semibold text-white' : ''}`}
                    >
                      {t('co2Calculation')}
                    </motion.div>
                  </a>

                  <a
                    className="w-full px-5"
                    onMouseEnter={() => {
                      setShowTracking(false);
                      setHoverTracking(false);
                      setShowTreePacks(false);
                      setHoverTreePacks(false);
                      setshowFootPrint(true);
                      setHoverFootprint(true);
                      setshowCo2(false);
                      setHoverCO2(false);
                    }}
                    onMouseLeave={() => { setshowFootPrint(false); setHoverFootprint(false); }}
                    onClick={() => {  setShowDropdown(false); }}
                    href="/carbon-footprint"

                  >
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      
                      animate={showDropdown ? "visible" : "hidden"}
                      custom={2}
                      className={`flex items-center text-[16px] text-bgGreen pl-3 cursor-pointer transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverFootprint || isActiveLink('/carbon-footprint') ? 'bg-[#25B567] font-semibold text-white' : ''}`}
                    >
                      {t('carbonFootprint')}
                    </motion.div>
                  </a>

                  <a
                    className="w-full px-5"
                    onMouseEnter={() => {
                      setShowTracking(false);
                      setHoverTracking(false);
                      setShowTreePacks(true);
                      setHoverTreePacks(true);
                      setshowFootPrint(false);
                      setHoverFootprint(false);
                      setshowCo2(false);
                      setHoverCO2(false);
                    }}
                    onMouseLeave={() => { setShowTreePacks(false); setHoverTreePacks(false); }}
                    onClick={() => {  setShowDropdown(false); }}
                    href="/treePacks"
                  >
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      
                      animate={showDropdown ? "visible" : "hidden"}
                      custom={3}
                      className={`flex items-center text-[16px] text-bgGreen pl-3 transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverTreePacks || isActiveLink('/treePacks') ? 'bg-[#25B567] font-semibold text-white' : ''}`}
                    >
                      {t('treePacks')}
                    </motion.div>
                  </a>

                  <a
                    className="w-full px-5"
                    onMouseEnter={() => {
                      setShowTracking(true);
                      setHoverTracking(true);
                      setShowTreePacks(false);
                      setHoverTreePacks(false);
                      setshowFootPrint(false);
                      setHoverFootprint(false);
                      setshowCo2(false);
                      setHoverCO2(false);
                    }}
                    onMouseLeave={() => { setShowTracking(false); setHoverTracking(false); }}
                    onClick={() => {  setShowDropdown(false); }}
                    href="/plant-trees-tracking"
                  >
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      
                      animate={showDropdown ? "visible" : "hidden"}
                      custom={4}
                      className={`flex items-center text-[16px] text-bgGreen pl-3 transition ease-in-out navDropdownBreathPack rounded-[8px] h-[54px] w-[266px] ${hoverTracking || isActiveLink('/plant-trees-tracking') ? 'bg-[#25B567] font-semibold text-white' : ''}`}
                    >
                      {t('treesTrackingVerification')}
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={!showCo2 ? 'hidden' : ''}
              onMouseEnter={() => {
                setShowTracking(false);
                setHoverTracking(false);
                setShowTreePacks(false);
                setHoverTreePacks(false);
                setshowFootPrint(false);
                setHoverFootprint(false);
                setshowCo2(true);
                setHoverCO2(true);
              }}
              variants={contentVariants}
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
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="flex flex-col space-y-6 mt-12">
                      <p className="text-bgGreen text-[20px] font-bold">{t('co2Calculation')}</p>
                      <p className="text-bgGreen text-[16px] w-[237px]">{t('calculateCo2')}</p>
                    </div>
                    <div className="flex">
                      <p className="text-[8px] text-bgGreen w-[237px]">{t('treesCalculationNote')}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariantsX} initial="hidden" animate={showCo2 ? "visible" : "hidden"} custom={1}>
                    <img src="./assets/C02calculation.svg" className="rounded-[12px]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={!showFootprint ? 'hidden' : ''}
              onMouseEnter={() => {
                setShowTracking(false);
                setHoverTracking(false);
                setShowTreePacks(false);
                setHoverTreePacks(false);
                setshowFootPrint(true);
                setHoverFootprint(true);
                setshowCo2(false);
                setHoverCO2(false);
              }}
              variants={contentVariants}
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
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="flex flex-col space-y-6 mt-12">
                      <p className="text-bgGreen text-[20px] font-bold">{t('carbonFootprint')}</p>
                      <p className="text-bgGreen text-[16px] w-[237px]">{t('calculateCo2')}</p>
                    </div>
                    <div className="flex">
                      <p className="text-[8px] text-bgGreen w-[237px]">{t('treesCalculationNote')}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariantsX} initial="hidden" animate={showFootprint ? "visible" : "hidden"} custom={1}>
                    <img src="./assets/carbonFootprintImage.svg" className="rounded-[12px]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={!showTreePacks ? 'hidden' : ''}
              onMouseEnter={() => {
                setShowTracking(false);
                setHoverTracking(false);
                setShowTreePacks(true);
                setHoverTreePacks(true);
                setshowFootPrint(false);
                setHoverFootprint(false);
                setshowCo2(false);
                setHoverCO2(false);
              }}
              variants={contentVariants}
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
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="flex flex-col space-y-6 mt-12">
                      <p className="text-bgGreen text-[20px] font-bold">{t('treePacks')}</p>
                      <p className="text-bgGreen text-[16px] w-[237px]">{t('calculateCo2')}</p>
                    </div>
                    <div className="flex">
                      <p className="text-[8px] text-bgGreen w-[237px]">{t('treesCalculationNote')}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariantsX} initial="hidden" animate={showTreePacks ? "visible" : "hidden"} custom={1}>
                    <img src="./assets/treePacksImage.svg" className="rounded-[12px]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={!showTracking ? 'hidden' : ''}
              onMouseEnter={() => {
                setShowTracking(true);
                setHoverTracking(true);
                setShowTreePacks(false);
                setHoverTreePacks(false);
                setshowFootPrint(false);
                setHoverFootprint(false);
                setshowCo2(false);
                setHoverCO2(false);
              }}
              variants={contentVariants}
              initial="hidden"
              animate={showTracking ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-[620px] bg-[#F7F9F8] p-8 h-full rounded-r-[4px]">
                <div className="flex flex-row justify-between h-full">
                  <motion.div
                    variants={itemVariantsX}
                    initial="hidden"
                    
                    animate={showTracking ? "visible" : "hidden"}
                    custom={0}
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="flex flex-col space-y-6 mt-12">
                      <p className="text-bgGreen text-[20px] font-bold w-[161px]">{t('treesTrackingVerification')}</p>
                      <p className="text-bgGreen text-[16px] w-[237px]">{t('calculateCo2')}</p>
                    </div>
                    <div className="flex">
                      <p className="text-[8px] text-bgGreen w-[237px]">{t('treesCalculationNote')}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariantsX} initial="hidden" animate={showTracking ? "visible" : "hidden"} custom={1}>
                    <img src="./assets/treeTrackingImage.svg" className="rounded-[12px]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div>
        
      </div>
      <div className="flex navbar w-screen">
        <div className={`bg-transparent lg:hidden w-screen h-[50px] px-8 transition ease-in-out py-3 ${color ? 'bg-white h-[55px] border-b-[1px]' : ''}`}>
          <div className="w-full items-center flex flex-row justify-between">
            <a href="/"  className="cursor-pointer">
              {color ? (
                <img src="./assets/greenTree.svg" alt="logo" />
              ) : (
                <img src="./assets/whiteTree.svg" alt="logo" />
              )}
            </a>
            <div className="cursor-pointer" onClick={() => setobileDropdown(true)}>
              {color ? (
                <img src="./assets/menu.svg" />
              ) : (
                <img src="./assets/menuWHite.svg" />
              )}
            </div>
          </div>
        </div>
        <motion.div
         variants={mobineContainer}
         initial="hidden"
         animate="visible"
         
         transition={{ duration: 0.3, ease: "easeInOut" }}
      > 
        <div className={!showMobileDropdown ? 'hidden' : ' mobileIndex h-screen'} 
        // onMouseLeave={() => { setshowsubdropdown(false); setShowMobileDropdown(false); }}
        >
          <div className="w-screen bg-bgGreen mobileIndex fixed right-0 top-0 h-full rounded-[8px]">
            <div className="flex flex-col space-y-5 px-7 w-full">
              <div className="flex flex-col mt-5 items-start justify-start">
                <div className="flex flex-row items-center justify-between w-full">
                  <img
                  src="./assets/whiteTree.svg"
                  />
                  
                  <img
                    src="./assets/closeWhite.svg"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={() => { setobileDropdown(false); setshowsubdropdown(false); }}
                  />
                </div>

                <div className="py-5">
                  <p className="text-white text-[28px] font-medium pt-5">{t('menu')}</p>
                </div>
              </div>
              <div className="flex flex-row space-x-2 cursor-pointer" onClick={toggleMobileDropdown}>
                <p className=" text-white text-[16px]">{t('breathPack')}</p>
                <img
                  src="./assets/downWhite.svg"
                  className={showSubDropdown ? 'rotate-[180deg] transition ease-in-out' : 'transition ease-in-out'}
                />
              </div>

              <motion.div 
              initial={{ y: '100%' }}
              animate={showSubDropdown ? { y: 0 } : { y: '-20%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}

              className={!showSubDropdown ? 'hidden' : ''}>
                <div className={"ml-5 flex flex-col space-y-5"}>
                  <a href="/co2-calculator" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                    <p className=" text-white text-[14px]">{t('co2Calculation')}</p>
                  </a>

                  <a href="/carbon-footprint" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                    <p className=" text-white text-[14px]">{t('carbonFootprint')}</p>
                  </a>

                  <a href="/treePacks" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                    <p className=" text-white text-[14px]">{t('treePacks')}</p>
                  </a>

                  <a href="/plant-trees-tracking" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                    <p className=" text-white text-[14px]">{t('treesTrackingVerification')}</p>
                  </a>
                </div>
              </motion.div>

              <a href="/about-us" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                <p className=" text-white text-[16px]">{t('aboutUs')}</p>
              </a>

              <a href="/blog" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                <p className=" text-white text-[16px]">{t('blog')}</p>
              </a>

              <a href="/ourservices" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
                <p className=" text-white text-[16px]">{t('ourServices')}</p>
              </a>

              <motion.div
              
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setShowDropdown(false)}
              onClick={handleLanguageChange}
              className={`text-[16px] flex flex-row items-center w-max p-2  border-[1px] bg-white bg-opacity-5 rounded-lg ${!color ? 'text-white cursor-pointer' : 'text-[#1F2721]'} hover:text-linkGreen cursor-pointer`}
            >
              
              {selectedLanguage === 1 && (
                <>
                  <div className="pr-1">
                    <EnglishLogo/>
                  </div>
                  EN
                </>
              )}

              {selectedLanguage === 2 && (
                <>
                  <div className="pr-1">
                    <TurkeyLogo/>
                  </div>

                  TR
                </>
              )}

            </motion.div>

              <div className="flex flex-row py-10 space-x-7 items-center justify-center">
                <motion.a 
                href="https://www.facebook.com/settings/?tab=your_facebook_information"
                target="blank"
                className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <img
                  src="./assets/facebookWhite.svg"
                  className="w-[30px] h-[30px]"
                  />
                </motion.a>
                <motion.a 
                href="https://x.com/nefesolcom"
                target="blank"
                className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <img
                  src="./assets/xWhite.svg"
                  className="w-[30px] h-[30px]"
                  />
                </motion.a>
                <motion.a 
                href="https://www.instagram.com/nefesolcom/"
                target="blank"
                className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <img
                  src="./assets/instagramWhite.svg"
                  className="w-[30px] h-[30px]"
                  />
                </motion.a>
                <motion.a 
                href="https://www.linkedin.com/company/nefesolcom/"
                target="blank"
                className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <img
                  src="./assets/linkedInWhite.svg"
                  className="w-[30px] h-[30px]"
                  />
                </motion.a>
                <motion.a 
                href="https://www.youtube.com/@Nefesolcom"
                target="blank"
                className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <img
                  src="./assets/youtubeWhite.svg"
                  className="w-[30px] h-[30px]"
                  />
                </motion.a>
                <motion.a 
                href="https://www.tiktok.com/@nefesol.com?is_from_webapp=1&sender_device=pc"
                target="blank"
                className="cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <img
                  src="./assets/tiktokWhite.svg"
                  className="w-[30px] h-[30px]"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopBar;

// oldMenu
// <motion.div
// initial={{ x: '100%' }}
// animate={showMobileDropdown ? { x: 0 } : { x: '100%' }}
// transition={{ duration: 0.3, ease: 'easeInOut' }}
// > 
// <div className={!showMobileDropdown ? 'hidden' : ' mobileIndex h-[500px]'} onMouseLeave={() => { setshowsubdropdown(false); setShowMobileDropdown(false); }}>
//  <div className="w-[300px] bg-white mobileIndex fixed right-0 pr-6 pt-5 rounded-[8px] shadow-2xl border-t-[2px] border-l-[2px] border-r-[2px]">
//    <div className="flex flex-col space-y-5 py-5 px-7 w-full">
//      <div className="flex flex-row justify-between items-center">
//        <a
//        href="/"
//        onClick={() => { setobileDropdown(false); setshowsubdropdown(false); }}
//        >
//        <img
//          src="./assets/greenTree.svg"
//          alt="logo"
//          className="cursor-pointer"
//        />
//        </a>
//        <img
//          src="./assets/close.svg"
//          className="cursor-pointer"
//          onClick={() => { setobileDropdown(false); setshowsubdropdown(false); }}
//        />
//      </div>
//      <div className="flex flex-row space-x-2 cursor-pointer" onClick={toggleMobileDropdown}>
//        <p className="text-[16px]">Breath Pack</p>
//        <img
//          src="./assets/down.svg"
//          className={showSubDropdown ? 'rotate-[180deg] transition ease-in-out' : 'transition ease-in-out'}
//        />
//      </div>

//      <motion.div 
//      initial={{ y: '100%' }}
//      animate={showSubDropdown ? { y: 0 } : { y: '-20%' }}
//      transition={{ duration: 0.3, ease: 'easeInOut' }}

//      className={!showSubDropdown ? 'hidden' : ''}>
//        <div className={"ml-5 space-y-5"}>
//          <a href="/co2-calculator" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//            <p className="text-[14px]">C02 Calculation</p>
//          </a>

//          <a href="/carbon-footprint" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//            <p className="text-[14px]">Carbon footprint</p>
//          </a>

//          <a href="/treePacks" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//            <p className="text-[14px]">Tree Packs</p>
//          </a>

//          <a href="/plant-trees-tracking" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//            <p className="text-[14px]">Tree Tracking and Verification</p>
//          </a>
//        </div>
//      </motion.div>

//      <a href="/about-us" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//        <p className="text-[16px]">About Us</p>
//      </a>

//      <a href="/blog" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//        <p className="text-[16px]">Blog</p>
//      </a>

//      <a href="/ourservices" onClick={() => {  setobileDropdown(false); setshowsubdropdown(false); }}>
//        <p className="text-[16px]">Our Services</p>
//      </a>
//    </div>
//  </div>
// </div>
// </motion.div>