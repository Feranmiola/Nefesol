import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
.init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false, 
    },
  resources: {
    en: {
      translation: {
        breathPack: "Breath Pack",
        aboutUs: "About Us",
        blog: "Blog",
        ourServices: "Our Services",
        breatheNow: "Breathe Now",
        co2Calculation: "CO2 Calculation",
        carbonFootprint: "Carbon Footprint",
        treePacks: "Tree Packs",
        treesTrackingVerification: "Trees Tracking and Verification",
        calculateCo2: "Calculate the amount of carbon CO2 used daily.",
        treesCalculationNote: "The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree.",
        menu: "Menu",
        everyTree: "Every Tree",
        oneBreath: "One Breath",
        takeAction: "TAKE ACTION FOR A GREEN FUTURE",
        getInformation: "Get Information",
        chooseForest: "Choose Forest",
        wePlantInTurkey: "We plant across various forests in Turkey, you can select any of the forest of your choice.",
        determineQuantity: "Determine preferred quantity",
        co2Info: "If you are not sure, take a look at our information on CO2 emissions. There are also packages that correspond to the typical annual CO2 emissions of consumers in",
        wePlant: "We Plant",
        howManyTrees: "How many trees do you want to plant in the forest?",
        slider: "Slider",
        co2Quantity: "CO2 Quantity",
        examples: "Examples",
        small: "Small",
        medium: "Medium",
        large: "Large",
        mobility: "Mobility",
        nutrition: "Nutrition",
        housingPower: "Housing and Power",
        doingGreat: "You're doing great!",
        youreAwesome: "You're Awesome",
        unitPrice: "Unit Price",
        averageValues: "The figures are average values based on the binding potential of the trees. According to the latest scientific findings, the average lifespan of trees is between 30 and 50 years and can bind up to 150 kg of CO2 per year. Calculations are based on average data and may vary according to tree type and age.",
        chooseTreePack: "Choose your tree pack",
        smallTrees: "Small Trees",
        trees: "Trees",
        mediumTrees: "Medium Trees",
        largeTrees: "Large Trees",
        breatheNowMax: "BREATHE NOW",
        greeningPolicy: "Our Greening Policy",
        encourageConservation: "Our aim is to encourage people to conserve natural resources and to contribute to the stabilization of the ecosystem.",
        learnMore: "Learn More",
        buildingFuture: "We are building an environmentally friendly future",
        millionTrees: "million trees",
        perYear: "per year",
        greenCollection: "Green collection",
        environmental: "Environmental",
        awarenessEducation: "Awareness Education",
        zeroCarbon: "Zero carbon",
        sustainable: "Sustainable",
        production: "Production",

        //fix
        carbonFootprintReduction: "Carbon Footprint Reduction",
        contributionCircularEconomy: "Contribution to the Circular Economy",
        greenTechnologies: "Development of green Technologies",
        communityParticipation: "Community Participation",


        carbonConsultancy: "Carbon Consultancy",
        providingEqualization: "While we are providing carbon equalization services to our individual and corporate customers",
        certification: "Certification",
        reduceImpact: "We offer our customers the opportunity to reduce their environmental impact and",
        digitalMarketingTitle: "Digital Marketing",
        websiteSeo: "Web Site and SEO Optimization To strengthen your business's digital presence, you need an impressive website",
        carbonFootprintOptimisation: "Carbon Footprint Optimisation",
        importanceToday: "Today, it is of great importance to manage the environmental impacts",
        greenTechIncentives: "Green Technology Incentives",
        sustainabilityObjectiveTitle: "Today, sustainability is among the primary objectives of businesses",
        technicalSupport: "Technical Support",
        techRole: "Technology plays a critical role in increasing the efficiency of businesses and gaining competitive advantage.",
        peopleSaying: "What people have been saying about us",
        ermaGroupImpressive: "The products and services of Erma Group A.§ are really impressive. We are very pleased with the solutions we use to increase energy efficiency in our business. I would recommend Erma Group A.$ to anyone who wants to be environmentally friendly and reduce.",
        environmentalSpecialist: "Environmental Specialist",
        trustedBy: "We are trusted by",
        karbonBlockchain: "Karbon is harnessing the power of blockchain to address real-world challenges!",
        aboutUsMax: "ABOUT US",
        environmentallyFriendlyFuture: "We are building an environmentally friendly future",
        ermaGroup: "Erma Group A.Ş is a software company founded in 2020 at Gaziantep University Technopark. Our Mission is to build an environmentally friendly future by offering solutions to the global warming problem with green technologies. The protection and sustainability of our environment is one of our company's core values. In 2015, our CEO's Kyoto Protocol; Inspired by the Paris Agreement and the Paris Agreement, his vision is the power of technology in the fight against global warming; is to use. This vision has become the focal point of our company and has led us to produce green technologies.",
        nefesolMission: "Our website, Nefesol.com, is a platform that shares this mission and brings together a community with high environmental awareness around the world. Our aim is to encourage people to conserve natural resources and to contribute to the stabilization of the ecosystem. Our motto is \"Every Tree\" One Breath\" and tells us the values that nature offers us. One breath of a tree is the oxygen that shapes our future. With this slogan, we emphasize the importance of respecting nature and taking responsibility for a sustainable future.",
        
        //fix
        everyTreeHope: "Each tree; a breath, every breath is a hope!",
        
        contributeNefesol: "You too can contribute to environmental awareness and sustainability by joining  Nefesol.com. In our content, you can find informative articles about green technologies, news about environmentally friendly products and projects. At the same time, you can learn what you can do individually and switch to an eco-friendly lifestyle. Conservation of natural resources and combating climate change are the responsibility of all of us. As Nefesol.com, the power of technology for a sustainable future; We are committed to using We invite you to Nefesol.com and hope to work together for an environmentally friendly world. Take a step for a healthy and sustainable future.",
        ecosystemContribution: "Learn more about contribution to the ecosystem",
        carbonCycle: "Carbon Cycle",
        carbonCycleDetail: "The carbon cycle, located at the heart of our planet's environmental processes, is the biogeochemical world that provides carbon exchange between biosphere, pedosphere (earth), geosphere (earth)...",
        nefesOlAwareness: "Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi",
        nefesOlEnvironmental: "Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi Günümüzde, dünya çapında artan çevre sorunları",
        carbonCreditsMarkets: "Karbon Kredileri ve Karbon Piyasaları Nedir?",
        carbonCreditsGuide: "Karbon Kredileri ve Karbon Piyasaları: Yatırımcılar İçin Rehber Karbon Kredileri ve Önemi Dünya genelinde iklim değişikliğiyle m&",
        readMore: "Read More",

        nefesolCarbonConsulting: "As Nefesol , while providing carbon equalization services to our individual and corporate customers, we also take a solution-oriented approach with our Carbon Consulting service. Our carbon consultants guide our clients in identifying, reducing and compensating for their carbon footprints. In this way, you can effectively manage your carbon emissions and contribute to reducing your environmental impact.",
        carbonAssessment: "Carbon Footprint Assessment: In the first step, our expert consultants conduct a detailed analysis to determine the carbon footprint based on our customers' activities. By considering energy consumption, transportation, waste management and other factors, the main sources and amount of carbon emissions are determined.",
        carbonReduction: "Carbon Reduction Strategies: It is important to identify effective strategies to reduce the carbon footprint. Our consultants provide our clients with customized solutions in areas such as energy efficiency, renewable energy use, waste reduction and recycling. These strategies can be applied both to reduce environmental impact and to increase operational efficiency.",
        carbonCompensation: "Carbon Compensation Services: It may not always be possible to completely eliminate carbon emissions. This is where our carbon offset services come into play. We help our customers balance their carbon emissions through methods such as forest planting, afforestation projects and renewable energy investments. In this way, our customers have the opportunity to give back to nature while reducing their impact on the environment.",
        monitoringReporting: "Monitoring and Reporting: During the carbon consulting process, it is important to monitor and report on our clients' progress. Tracking carbon emissions enables effective strategies to be implemented and allows for continuous improvement. Our consultants regularly provide reports and provide our clients with the necessary information to evaluate their performance",
        nefesolRoadmap: "With our carbon consultancy service, we offer our customers a comprehensive roadmap to fulfill their environmental responsibilities. As Nefesol, we are happy to help you reduce carbon emissions and contribute to a sustainable future by working together.",
        nefesolCertification: "As Nefesol , we offer our customers the opportunity to reduce their environmental impact and compensate for carbon emissions with our carbon equalization services. The verifiability and reliability of your carbon equalization efforts are important when managing your carbon footprint. Therefore, with our certification service, we certify your carbon equalization activities in accordance with international standards.",
        nefesolCertBenefits: "What You Get with the Nefesol Certification Service?",
        

        // Fix
        accuracyReliability: "Accuracy and Reliability: Certification is an important way to verify and prove the reliability of your carbon equalization activities. Your customers know that you are effectively managing your carbon emissions through certification, and that the carbon offset projects you carry out are verified. This is a strong statement that your business fulfills its environmental responsibilities and is committed to a sustainable future. transmits a message.",
        complianceStandards: "Compliance with International Standards: Nefesol Certification Service is carried out in accordance with internationally accepted carbon standards. This allows you to align your operations with best practices for carbon monitoring, reporting and verification.",
        imageAdvantage: "Image and Competitive Advantage: Certification allows you to gain image and competitive advantage as well as proving your business commitments to environmental sustainability. Verifying your carbon footprint and supporting your equalization efforts with certificates can be an important factor in choosing you by your customers and stakeholders. You can also gain a competitive advantage by emphasizing your leadership role in sustainability in the market.",
        traceabilityTransparency: "Traceability and Transparency: Certification ensures that your carbon equalization activities are traceable and transparent. It clearly documents the details of your projects and compensation efforts, the methods for reducing carbon emissions and contributing to nature. This allows you to gain the trust of your stakeholders, customers and society.",
        
        nefesolCertify: "Nefesol Certification Service guides you to validate your carbon equalization efforts and take an important step in your sustainability journey. Our experts manage the certification process in accordance with international carbon standards and cooperate with you. It determines the most suitable certification path for you and ensures its successful completion.",
        contactUs: "Contact us to prove your environmental commitments and step towards a sustainable future by certifying your carbon equalization activities.",
        
        //fix
        websiteSeoOptimization: "Website and SEO Optimization: To strengthen your business's digital presence, you need an impressive website and SEO (Search Engine Optimization) strategy. As Nefesol, we offer a customized web design to your business, while we do SEO optimization to get better rankings in search engines.",
        socialMedia: "Social Media Management: Social media has the power to announce your brand to large audiences and provide interaction; is a tool. As Nefesol, we manage your social media platforms and support you in content creation, publishing, community management and advertising campaigns.",
        contentMarketing: "Content Marketing: Effective content is important to attract and impress your target audience as well as demonstrating your brand's value and expertise. As Nefesol, we create original and interesting content, and offer content in various formats such as blog posts, articles, infographics and videos.",
        emailMarketing: "Email Marketing: Email marketing is an effective way to reach potential customers and current customers directly. As Nefesol, we create impressive e-mail campaigns, send personalized e-mails and apply automation processes to increase customer loyalty.",
        
        digitalMarketing: "Digital marketing strategies support your business to grow and achieve your goals. As Nefesol, we offer custom digital marketing solutions for your business together with our expert team.",
        environmentalImpacts: "Today, it is of great importance to manage the environmental impacts of businesses and to contribute to a sustainable future. Carbon footprint is a metric used to measure and evaluate greenhouse gas emissions from the activities of businesses. As Nefesol, we help businesses increase their environmental efficiency with our carbon footprint optimization service and help businesses maximize their environmental efficiency with our carbon footprint optimization service.",
        
        //fix
        carbonFootprintAssessment: "Carbon Footprint Assessment: In the first step, we analyze the activities of your business as a team of experts and make a detailed assessment to determine the carbon footprint and measure the current environmental impacts of your business. . This includes energy consumption, transportation, waste management and other factors.",
        dataCollection: "Data Collection and Analysis: We collect and analyze the data necessary to calculate the carbon footprint. This includes factors such as your business's energy consumption, transportation activities, production processes and supply chain. Using the data we have obtained, we identify the main sources that affect the carbon emissions of your business.",
        optimizationStrategies: "Optimization Strategies: As a result of analyzing the data and evaluating the current situation, we determine customized optimization strategies to reduce the carbon footprint. These strategies include topics such as increasing energy efficiency, using renewable energy, reducing waste, and green supply chain management. In addition, improvements in business processes and technological innovations are also considered.",
        implementationMonitoring: "Implementation and Monitoring: We work in cooperation with your business during the implementation of optimization strategies. We guide you and follow the process for the successful implementation of the strategies. We also provide regular reports to monitor progress and evaluate results.",
        
        
        carbonFootprintOptimization: "What Can You Achieve with Carbon Footprint Optimization?",
        
        //fix
        achieveCarbonFootprint: "You increase your environmental efficiency by reducing your carbon emissions. You save cost with energy efficiency and sustainable applications. You support your business to achieve its sustainability goals. You gain the trust and loyalty of your customers and stakeholders. You strengthen your reputation by complying with environmental regulations. As Nefesol, we are here to help you maximize your environmental efficiency by guiding your business through the carbon footprint optimization process.",
        
        sustainabilityObjective: "Today, sustainability is among the primary objectives of businesses. Green technologies help businesses reduce their environmental impact by offering solutions that are environmentally friendly and energy efficient. As Nefesol, we provide consultancy and support services to businesses to promote the spread and use of green technologies.",
        greenTechIncentivesTitle: "Green Technology Incentives and Benefits",
        
        //fix
        financialAdvantages: "Financial Advantages: Green technology incentives provide various financial advantages to businesses. These include incentives such as grant and incentive programs, tax breaks, low-interest loans, and savings on energy costs. These incentives encourage the adoption of green technologies while helping businesses reduce their costs.",
        competitiveAdvantage: "Competitive Advantage: Green technologies enable businesses to gain competitive advantage. Commitments to sustainability and the use of green technologies are positively perceived by customers and stakeholders. This increases brand reputation and enables you to be the business of choice for customers.",
        reducingEnvironmental: "Reducing Environmental Impacts: Green technologies help businesses reduce their environmental impact by increasing energy efficiency and using environmentally friendly resources. These technologies provide innovation in areas such as utilizing renewable energy sources, waste management, water conservation and recycling. Thus, it contributes to the protection of natural resources and reduction of carbon emissions.",
        innovationOpportunities: "Innovation and R&D Opportunities: Green technology incentives provide support to businesses for innovation and R&D studies. These incentives facilitate the allocation of resources to develop innovative solutions and achieve sustainability goals. Businesses can play a leadership role in their sectors by realizing projects related to green technologies. They can be overtaken.",

        raiseAwareness: "As Nefesol, we are here to raise awareness of green technology incentives and guide businesses in this regard. Our expert team determines the appropriate incentive programs for the needs of your business and assists you in the application process. We also provide strategic advice and solutions on the adoption of green technologies. You too can benefit from green technology incentives to reduce the environmental impact of your business and contribute to sustainability.",
        technicalSupportRole: "Technology plays a critical role in increasing the efficiency of businesses and gaining competitive advantage. However, there is always the possibility of encountering technical issues or updates. As Nefesol, we provide technical support services to our customers, ensuring smooth business processes and an uninterrupted working environment.",
        
        //fix
        troubleshootingDebugging: "Troubleshooting and Debugging: When you encounter technical problems, our expert technical support team diagnoses the problems and provides solutions quickly. The team guides you through debugging processes and finds the most suitable solution. strives to provide.",
        updateUpgrade: "Update and Upgrade: The world of technology is constantly changing and may require updates. Our technical support service helps you keep your business's existing systems and software up to date. It also provides support during upgrade processes and guides you through the implementation of new technologies.",
        remoteOnsite: "Remote and On-Site Support: Our technical support services offer remote access tools and on-site intervention options. With remote support, you can quickly solve your technical problems and prevent your business processes from being interrupted. Additionally, with our on-site support service, our expert technical team comes to your business's location and solves problems on-site.",
        consultancyTraining: "Consultancy and Training: Our technical support service advises you in determining your business' technology-oriented strategies. We also provide training for your staff on technology use and troubleshooting. This allows you to increase the technical capabilities of your business.",
        
        nefesolTechnicalSupport: "As Nefesol, we are here to offer solutions that meet the technical needs of your business and ensure smooth business processes. Our technical support team is always ready to assist you.",


              distanceSalesContract: "Distance Sales Contract",
              distanceSalesContractTitle: "DISTANCE SALES CONTRACT",
              parties: "1. PARTIES",
              partiesDetail: "This Agreement is signed within the framework of the following terms and conditions between the following parties. A. 'BUYER'; (hereinafter referred to as \"BUYER\" in the contract) B. 'SELLER'; (hereinafter referred to as \"SELLER\" in the contract) NAME-SURNAME: ERMA GROUP TOURISM INDUSTRY TRADE JOINT STOCK COMPANY ADDRESS: Çamtepe neighborhood. Mahmut Tevfik Atay Bulv. Gaziantep Technopark No: 4 A inner door no: 1 Şahinbey GAZIANTEP By accepting this contract, the BUYER acknowledges in advance that if the BUYER approves the order subject to the contract, the BUYER will be under the obligation to pay the price of the order subject and any additional fees specified such as shipping fees and taxes, and that the BUYER has been informed about it.",
              definitions: "2. DEFINITIONS",
              definitionsDetail: "In the implementation and interpretation of this contract, the terms written below will express the written explanations against them. MINISTER: The Minister of Customs and Trade, MINISTRY: The Ministry of Customs and Trade, LAW: The Law No. 6502 on the Protection of the Consumer, REGULATION: Regulation on Distance Contracts (RG:27.11.2014/29188), SERVICE: The subject of any consumer transaction other than providing goods made or committed to be made in return for a fee or benefit, SELLER: The company offering goods to the consumer within the scope of its commercial or professional activities or acting on behalf or account of the supplier of goods, BUYER: The real or legal person who acquires, uses, or benefits from a good or service for non-commercial or non-professional purposes, SITE: The internet site owned by the SELLER, ORDERING PARTY: The real or legal person requesting a good or service through the internet site of the SELLER, PARTIES: The SELLER and the BUYER, CONTRACT: This contract concluded between the SELLER and the BUYER, GOODS: Refers to movable goods that are the subject of shopping and software, sound, image, and similar intangible goods prepared for use in electronic environment and the transactions performed on these goods.",
              subject: "3. SUBJECT",
              subjectDetail: "This Agreement regulates the rights and obligations of the parties in accordance with the provisions of the Law No. 6502 on the Protection of Consumers and the Regulation on Distance Contracts regarding the sale and delivery of the product, the qualifications and sales price of which are specified below, that the BUYER has ordered electronically from the website of the SELLER. The prices listed and announced on the site are the sales prices. The announced prices and promises are valid until they are updated and changed. The prices announced for a period are valid until the end of the specified period.",
              sellerInformation: "4. SELLER INFORMATION",
              sellerInformationDetail: "Title: ERMA GROUP TOURISM INDUSTRY TRADE JOINT STOCK COMPANY Address: Çamtepe neighborhood. Mahmut Tevfik Atay Bulv. Gaziantep Technopark No: 4 A inner door no: 1 Şahinbey GAZIANTEP Phone: 0850 309 8804 Email: info@nefesol.com",
              generalProvisions: "9. GENERAL PROVISIONS",
              generalProvision_1: "9.1. The BUYER acknowledges, declares, and undertakes that the BUYER has read the preliminary information about the basic qualities, sales price, and payment method and delivery of the product subject to the contract on the website of the SELLER and has given the necessary confirmation in the electronic environment.",
              generalProvision_2: "9.2. The BUYER accepts, declares, and undertakes that the BUYER has confirmed the preliminary information electronically, and before the conclusion of the distance sales contract, the BUYER has received the address to be given by the SELLER to the BUYER, the basic features of the ordered products, the prices of the products including taxes, and the payment and delivery information accurately and completely.",
              generalProvision_3: "9.3. Each product subject to the contract is delivered to the BUYER or the person and/or organization at the address indicated by the BUYER, provided that it does not exceed the legal period of 14 days, depending on the distance of the BUYER's place of residence. If the product is not delivered to the BUYER within this period, the BUYER has the right to terminate the contract.",
              generalProvision_4: "9.4. The SELLER accepts, declares, and undertakes to deliver the product subject to the contract completely, in accordance with the qualifications specified in the order, and with the information and documents required for the job, such as warranty certificates, user manuals, if any, in accordance with the legal legislation, free from any defects, in accordance with the standards, in accordance with the principles of accuracy and honesty, to preserve and increase the service quality, to show the necessary care and attention during the performance of the work, and to act with caution and foresight.",
              generalProvision_5: "9.5. The SELLER may supply a different product of equal quality and price by informing the BUYER and obtaining the BUYER's explicit approval before the contractual performance obligation expires.",
              generalProvision_6: "9.6. If the SELLER cannot fulfill its contractual obligations in case the fulfillment of the product or service subject to the order becomes impossible, the SELLER accepts, declares, and undertakes that the SELLER will notify the consumer in writing within 3 days from the date of learning about this situation and will refund the total price to the BUYER within 14 days.",
              generalProvision_7: "9.7. The BUYER accepts, declares, and undertakes that the BUYER will confirm this Agreement electronically for the delivery of the product subject to the contract, and if for any reason the price of the product subject to the contract is not paid and/or is canceled in the bank records, the SELLER's obligation to deliver the product subject to the contract will end.",
              generalProvision_8: "9.8. The BUYER accepts, declares, and undertakes that in case the product subject to the contract is delivered to the BUYER or the person and/or organization at the address indicated by the BUYER and the price of the product subject to the contract is not paid to the SELLER by the relevant bank or financial institution due to the unfair use of the BUYER's credit card by unauthorized persons after the delivery of the product, the BUYER will return the product subject to the contract to the SELLER within 3 days at the expense of the SELLER.",
              generalProvision_9: "9.9. The SELLER accepts, declares, and undertakes to notify the BUYER if the SELLER cannot deliver the product subject to the contract in due time due to the occurrence of force majeure situations such as the development of events that are not foreseen and not developed by the parties, and if the BUYER does not approve the delay, the BUYER may request the order to be canceled, the product subject to the contract to be replaced with its equivalent if any, and/or the delivery period to be postponed until the impeding situation is eliminated. In case the BUYER cancels the order, the amount paid by the BUYER in cash is paid back to the BUYER in cash and in full within 14 days. For the payments made by the BUYER with a credit card, the product amount is returned to the relevant bank within 14 days after the cancellation of the order by the BUYER. The BUYER accepts, declares, and undertakes that the average process of reflecting the amount returned to the credit card by the SELLER to the BUYER's account by the bank may take 2 to 3 weeks, and the reflection of this amount to the BUYER's accounts after the return to the bank is entirely related to the bank transaction process, and the BUYER cannot hold the SELLER responsible for possible delays.",
              generalProvision_10: "9.10. The SELLER has the right to reach the BUYER for communication, marketing, notification, and other purposes via the address, email address, fixed and mobile phone lines, and other contact information specified by the BUYER in the registration form on the site or updated by the BUYER later. By accepting this Agreement, the BUYER accepts and declares that the SELLER may engage in the above-mentioned communication activities towards the BUYER.",
              generalProvision_11: "9.11. The BUYER will inspect the goods/service subject to the contract before receiving it; crushed, broken, torn packaging, etc. will not receive the damaged and defective goods/services from the cargo company. The received goods/services will be considered undamaged and intact. The careful protection of the goods/services after delivery belongs to the BUYER. If the right of withdrawal is to be used, the goods/services should not be used. The invoice must be returned.",
              generalProvision_12: "9.12. In the event that the credit card holder used during the order is not the same person as the BUYER or a security gap is detected regarding the credit card used in the order before the product is delivered to the BUYER, the SELLER may request the BUYER to submit the identity and contact information of the credit card holder, the statement of the credit card used in the order for the previous month, or a letter from the bank of the cardholder stating that the credit card belongs to the BUYER. The order will be frozen until the BUYER provides the requested information/documents, and if the mentioned requests are not met within 24 hours, the SELLER has the right to cancel the order.",
              generalProvision_13: "9.13. The BUYER declares and undertakes that the BUYER's personal and other information provided while subscribing to the SELLER's website is true, and the BUYER will indemnify all damages incurred by the SELLER immediately, in cash, and in full upon the first notification of the SELLER due to the untruthfulness of this information.",
              generalProvision_14: "9.14. The BUYER accepts and undertakes to comply with the provisions of the legal legislation and not to violate them while using the SELLER's website. Otherwise, all legal and penal obligations to arise will bind the BUYER exclusively and solely.",
              generalProvision_15: "9.15. The BUYER cannot use the SELLER's website in any way that disrupts public order, violates general morality, disturbs and harasses others, violates the laws, violates the material and moral rights of others. In addition, the member cannot engage in activities (spam, virus, trojan horse, etc.) that prevent or make it difficult for others to use the services.",
              generalProvision_16: "9.16. Links to other websites and/or other content that are not under the control of the SELLER and/or owned and/or operated by other third parties may be provided through the SELLER's website. These links are provided for the convenience of the BUYER and do not support any website or the person who operates that site and do not constitute any guarantee for the information contained in the linked website.",
              generalProvision_17: "9.17. The member who violates one or more of the articles listed in this contract will be personally responsible for this violation and will keep the SELLER free from the legal and penal consequences of these violations. Also; in the event that the violation is referred to the legal field, the SELLER reserves the right to claim compensation against the member for non-compliance with the membership contract.",
              rightOfWithdrawal2: "10. RIGHT OF WITHDRAWAL",
              rightOfWithdrawalDetail: "10.1. The BUYER may exercise the right of withdrawal from the contract by rejecting the goods without assuming any legal or criminal liability and without giving any reason, within 14 (fourteen) days from the date of delivery of the product to the BUYER or the person/organization at the address indicated by the BUYER, in distance contracts related to the sale of goods.",
              rightOfWithdrawal_2: "10.2. In distance contracts related to service provision, this period starts from the date of signing the contract. The right of withdrawal cannot be exercised in service contracts where the performance of the service has been initiated with the approval of the consumer before the expiry of the right of withdrawal period. The expenses arising from the use of the right of withdrawal belong to the SELLER. By accepting this contract, the BUYER accepts in advance that the BUYER has been informed about the right of withdrawal.",
              rightOfWithdrawal_3: "10.3. To use the right of withdrawal, it is necessary to notify the SELLER in writing by registered mail, fax or email within 14 days, and the product must not be used within the framework of the provisions of \"Products for which the Right of Withdrawal cannot be exercised\" set forth in this contract.",
              rightOfWithdrawal_4: "a) The invoice of the product delivered to the 3rd party or the BUYER, (If the invoice of the product to be returned is corporate, it must be sent with the return invoice issued by the institution when returning it. Order returns whose invoices are issued on behalf of institutions cannot be completed unless the RETURN INVOICE is issued.)",
              rightOfWithdrawal_5: "b) Return form,",
              rightOfWithdrawal_6: "c) The products to be returned must be delivered complete and undamaged, together with their box, packaging, and standard accessories, if any.",
              rightOfWithdrawal_7: "d) The SELLER is obliged to return the total price and the documents that put the BUYER under debt to the BUYER within 10 days from the receipt of the withdrawal notification, and to receive the goods back within 20 days.",
              rightOfWithdrawal_8: "e) If there is a decrease in the value of the goods due to the BUYER's fault or if the return becomes impossible, the BUYER is obliged to compensate the SELLER's damages at the rate of the BUYER's fault. However, the BUYER is not responsible for the changes and deteriorations that occur due to the proper use of the goods or products within the right of withdrawal period.",
              rightOfWithdrawal_9: "f) If the campaign limit amount set by the SELLER is lowered due to the exercise of the right of withdrawal, the amount of the discount used within the scope of the campaign is canceled.",
              nonReturnableProducts2: "11. PRODUCTS FOR WHICH THE RIGHT OF WITHDRAWAL CANNOT BE EXERCISED",
              nonReturnableProductsDetail: "Products that are prepared in line with the BUYER's requests or clearly personalized and that are not suitable for return, underwear bottom pieces, swimwear and bikini bottoms, makeup materials, disposable products, goods that are in danger of rapid deterioration or are likely to expire, goods that are not suitable for health and hygiene to be returned if the package is opened by the BUYER after delivery, goods that are mixed with other products after delivery and cannot be separated due to their nature, periodicals such as newspapers and magazines other than those provided under the subscription agreement, services performed instantly in electronic environment or intangible goods delivered instantly to the consumer, and audio or video recordings, books, digital content, software programs, data recording and data storage devices, computer consumables cannot be returned if their packages have been opened by the BUYER. In addition, before the expiry of the right of withdrawal period, the exercise of the right of withdrawal is not possible in the services initiated with the approval of the consumer. For cosmetics and personal care products, underwear products, swimwear, bikini, books, reproducible software and programs, DVDs, VCDs, CDs and tapes, and stationery consumables (toner, cartridge, ribbon, etc.) to be returned, their packages must be unopened, untested, undamaged, and unused.",
              defaultLegalConsequences2: "12. DEFAULT AND LEGAL CONSEQUENCES",
              defaultLegalConsequencesDetail: "The BUYER accepts, declares, and undertakes that if the BUYER defaults in the case of making payment transactions with a credit card, the BUYER will pay interest within the framework of the credit card agreement with the cardholder bank and will be liable to the bank. In this case, the relevant bank may apply for legal remedies; the BUYER may be required to bear the costs and attorney fees arising, and under any circumstances, if the BUYER defaults due to the BUYER's debt, the BUYER accepts, declares, and undertakes that the BUYER will pay the SELLER's damages and losses due to the delayed performance of the debt.",
              authorizedCourt: "13. AUTHORIZED COURT",
              authorizedCourtDetail: "In disputes arising from this contract, the consumer problems arbitration committees and consumer courts in the place where the BUYER purchases the goods or services and where the BUYER resides are authorized up to the value declared by the Ministry of Industry and Trade. The monetary limit is specified below: Effective from 28/05/2014: a) 2,000.00 (two thousand) TL or less in disputes to district consumer arbitration committees, b) 3,000.00 (three thousand) TL or less in disputes to provincial consumer arbitration committees, c) In disputes between 2,000.00 (two thousand) TL and 3,000.00 (three thousand) TL in provinces with metropolitan status, applications can be made to the provincial consumer arbitration committees. This Agreement is made for commercial purposes.",
              enforcement: "14. ENFORCEMENT",
              enforcementDetail: "When the BUYER makes the payment for the order placed through the site, the BUYER is deemed to have accepted all the terms of this contract. The SELLER is obliged to make the necessary software arrangements to obtain confirmation that this contract has been read and accepted by the BUYER on the site before the realization of the order. SELLER: ERMA GROUP TOURISM INDUSTRY TRADE JOINT STOCK COMPANY BUYER: DATE:",

              "membership": {
                "agreement": "Membership Agreement"
            },
            "site": {
                "usage": {
                    "terms": "SITE USAGE TERMS AND MEMBERSHIP AGREEMENT"
                }
            },
            "usage": {
                "terms": {
                    "notice": "Please carefully read these 'site usage terms' before using our site.",
                    "acceptance": "Customers using and shopping on our shopping site are deemed to have accepted the following terms:",
                    "siteOwnership": "The web pages on our site and all associated pages ('site') are owned by ERMA GROUP TOURISM INDUSTRY AND TRADE JOINT STOCK COMPANY ('Company') and operated by it. You (‘User’) are deemed to be subject to the following terms when using all the services offered on the site, and by benefiting from and continuing to use the site; According to the laws you are subject to, you have the right to sign contracts, authority and legal capacity, and that you are over 18 years of age, that you have read, understood and accepted the terms written in the contract.",
                    "agreement": "This agreement imposes rights and obligations on the parties regarding the subject matter of the contract site, and the parties declare that they will fulfill the mentioned rights and obligations in full, correct, timely and within the terms requested in this contract when they accept this contract."
                }
            },
            "responsibilities": {
                "title": "1. RESPONSIBILITIES",
                "itemA": "a. The Company reserves the right to change prices and the products and services offered at any time.",
                "itemB": "b. The Company undertakes to provide the Member with the services subject to the contract, except for the conditions mentioned.",
                "itemC": "c. The Member is responsible for the accuracy and currency of the information entered during membership.",
                "itemD": "d. The member is responsible for the protection and confidentiality of the member name and password belonging to him."
            },
            "intellectualProperty": {
                "title": "2. INTELLECTUAL PROPERTY",
                "itemA": "a. All proprietary or licensed rights of the content, design, structure and visual elements of the website belong to the Company and its licensors.",
                "itemB": "b. The use, reproduction, distribution, display or transmission of any content on the website without the written permission of the Company is prohibited."
            },
            "confidentialInfo": {
                "title": "3. CONFIDENTIAL INFORMATION",
                "itemA": "a. The Member acknowledges and undertakes that the information transmitted to the Company in the context of this Agreement is not considered confidential.",
                "itemB": "b. The company undertakes not to disclose the personal information of the members to third parties and institutions. It can only be disclosed by order of the legal authorities and authorized administrative and judicial authorities."
            },
            "noGuarantee": {
                "title": "4. NO GUARANTEE",
                "content": "The Company does not guarantee that the website and its content will be error-free and uninterrupted at all times."
            },
            "registrationSecurity": {
                "title": "5. REGISTRATION AND SECURITY",
                "itemA": "a. The Member agrees to inform the Company immediately of any unauthorized use or security breach regarding the Member's account.",
                "itemB": "b. The Company cannot be held responsible for any damages arising from the failure of the Member to keep the member name and password confidential."
            },
            "forceMajeure": {
                "title": "6. FORCE MAJEURE",
                "content": "In case of force majeure situations such as natural disasters, riots, wars, strikes, communication problems, infrastructure and internet failures, the Company's obligations under this Agreement shall be suspended."
            },
            "entireAgreement": {
                "title": "7. ENTIRE AGREEMENT",
                "content": "This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior agreements and understandings, whether written or oral."
            },
            "changesToAgreement": {
                "title": "8. CHANGES TO THE AGREEMENT",
                "content": "The Company reserves the right to change the terms of this Agreement at any time. The Member is responsible for regularly reviewing the Agreement for changes."
            },
            "notification": {
                "title": "9. NOTIFICATION",
                "content": "All notifications to be made by the parties regarding this Agreement shall be made to the e-mail addresses specified during the membership registration."
            },
            "evidenceAgreement": {
                "title": "10. EVIDENCE AGREEMENT",
                "content": "In case of any dispute arising from this Agreement, the records and documents of the Company's own database and server systems will constitute binding, definitive and exclusive evidence."
            },
            "disputeResolution": {
                "title": "11. DISPUTE RESOLUTION",
                "content": "In case of disputes that may arise from this Agreement, the Istanbul Central Courts and Execution Offices are authorized."
            },

            "personalDataProtectionAuthority": {
                "title": "Personal Data Protection Authority",
                "informationText": "INFORMATION TEXT ON THE PROTECTION OF PERSONAL DATA",
                "personalDataDisclosure": "ERMA Group Tourism Industry and Trade Inc. (hereinafter referred to as 'Erma Group' or 'Company') considers the privacy and security of your personal data among its top priorities. In this context, we would like to inform you about the personal data processed by Erma Group through www.nefesol.com, www.enucuz24.com, www.baumabo.com websites and/or mobile applications, as required by Article 10 of the Law on the Protection of Personal Data No. 6698 ('KVKK'). Personal data refers to any information that identifies or makes your identity identifiable. Below, we provide information about your personal data processed by Erma Group, the purposes of processing, the groups to whom it may be transferred, the methods of collection, legal reasons, and your rights regarding this personal data.",
                "processedData": "Which of your personal data is processed by the websites and mobile applications of Erma Group?",
                "processedDataDescription": "Individuals who follow and/or purchase products on the platform and log in from the website or mobile application by accepting the membership terms of Erma Group's websites and mobile applications are defined as members. If you are a member, the following personal data may be processed: Your Identity Information: name, surname, Turkish Republic ID number (processed only in accordance with relevant legislation for certain product categories), gender, date of birth, height and weight information if provided by you. Contact Information: phone number, delivery address, email address. Customer Transaction Information: order and billing information, delivery transaction information, transaction history related to your purchases, your requests and complaints, comments and/or questions if you comment on products on the platform and/or ask questions. Information you personally share in your questions, information about conversations with Erma Group customer representatives via chat or WhatsApp channel, your order information. Transaction Security Information: IP address information, password and password information, cookie information. Marketing Information: shopping history information, campaign information used, profiling and segmentation information, cookie records. Legal Transaction Information: correspondence with authorized individuals, institutions and organizations, information in lawsuits and enforcement files, legal information request information. Audio Recording Information: your voice recordings in case you contact the call center. Visual and Institutional Information: images, logos, titles, names at events, information, pictures, images, and information about duties and responsibilities at events.",
                "processingPurposes": "What are the purposes of processing your personal data and collection methods?",
                "processingPurposesDescription": "Your identity, contact, and customer transaction information are automatically collected and processed electronically from you, the mobile application, or the website within the scope of our contractual relationship for the following purposes: executing processes related to the establishment and performance of contracts; executing and supervising financial and accounting processes; executing company business activities and controls; executing billing processes; executing logistics, cargo activities, and delivery tracking processes; ensuring a better shopping experience and increasing satisfaction, especially by adding and confirming identity information during transactions; using it for various marketing and advertising activities with your explicit consent; presenting products suitable for your preferences; conducting related activities; increasing customer satisfaction; recognizing our customers who shop on the platform and using them in customer environment analysis; developing and improving the products and services offered by our company; conducting strategic analysis studies; conducting communication activities; presenting products of interest to you based on your interests; distance selling; contacting and informing you about the conditions, current status, and updates of contracts concluded on our platform in accordance with the relevant articles of the Law on Agreements and Protection of Consumers, if applicable, informing you about developments, opportunities, and innovations regarding transactions at Erma Group with your explicit consent; conducting activities to inform you about developments, opportunities, and innovations regarding transactions at Erma Group; recognizing our customers who shop from the website and/or mobile applications and using them in customer environment analysis; conducting surveys electronically and/or physically through contracted institutions; evaluating your requests, complaints, and suggestions regarding our products and services; ensuring that you receive information about products; and providing after-sales support services. Information Security Processes: conducting information security activities; ensuring the security of operations as Erma Group; conducting activities in accordance with the legislation; providing information to authorized persons, public institutions, and organizations.",
                "legalBasis": "What is the legal reason for processing your personal data?",
                "legalBasisDescription": "Erma Group processes your personal data mentioned above through its websites and mobile applications based on legal grounds for compliance specified in Articles 5, 8, and 9 of the KVKK, as listed below: compliance with laws and regulations applicable to our company, including Law No. 6563 on the Regulation of Electronic Commerce, Turkish Commercial Code No. 6102, Turkish Penal Code No. 5237, and Law No. 6502 on Consumer Protection; ensuring the security of operations on the company platform; conducting information security activities; ensuring compliance with legislative obligations, especially those arising from related legislation; fulfilling obligations directly related to the establishment or performance of contracts concluded on our platform under the relevant articles of the Law on Protection of Consumers, such as distance sales contracts; conducting activities related to the realization of your purchase transactions; conducting business activities of the company; supervising delivery processes; evaluating your requests, complaints, and suggestions regarding our products and services; conducting finance and accounting processes; conducting communication activities; fulfilling legal obligations; providing information to authorized persons, public institutions, and organizations; ensuring compliance with legislation; following up and executing legal affairs; conducting information security activities; ensuring the security of operations as Erma Group; ensuring compliance with legislation; providing information to authorized persons, institutions, and organizations; and ensuring the establishment and exercise of rights.",
                "dataTransfer": "To whom and for what purposes does Erma Group transfer your personal data?",
                "dataTransferDescription": "Erma Group operates on the principles of 'need to know' and 'need to use' regarding your personal data, striving to comply with data minimization requirements and implementing necessary technical and administrative security measures. Due to the nature of conducting or controlling business activities, ensuring business continuity, and operating digital infrastructures, continuous data flow with various stakeholders is necessary for certain purposes related to personal data processed by us. Therefore, we are obliged to transfer your personal data to third parties. Furthermore, it is crucial that your personal data is accurate and up-to-date to fully and properly fulfill our contractual and legal obligations. Therefore, we collaborate with various business partners and service providers. Your personal data may be shared with third parties such as sellers of products purchased, courier companies delivering products on behalf of Erma Group, and service providers providing support for business operations, activities to enhance your experience and satisfaction, development and improvement of products and services offered by our company, and better shopping experiences. Specifically, your personal data may be shared with sellers of products, service providers, business partners, banks, financial advisors, business partners providing call center services for sales and after-sales support services, quality control service providers, business partners providing complaints management and risk analysis services, business partners providing financial and accounting services, risk management and financial reporting service providers, IT infrastructure service providers, business partners providing private integration, independent audit, customs, and financial advisor/accounting services, officials of the Ministry of Treasury and Finance for invoicing and collection receipts, and business partners and service providers in Turkey or abroad, such as our domestic and/or foreign affiliates and suppliers, business partners, contracted banks, and third parties from whom products or services are purchased."
              },

              
        "generalInfo": {
        "title": "GENERAL:",
        "content": [
            "By placing an electronic order through the website you are using, you are deemed to have accepted the preliminary information form and the distance sales contract offered to you.",
            "Buyers are subject to the provisions of Law No. 6502 on Consumer Protection and the Regulation on Distance Contracts (Official Gazette: 27.11.2014/29188) and other applicable laws regarding the sale and delivery of the purchased product.",
            "Buyers are responsible for shipping costs associated with the product delivery.",
            "Each purchased product will be delivered to the person and/or organization at the address provided by the buyer within the legal period of 30 days. If the product is not delivered within this period, Buyers may terminate the contract.",
            "The purchased product must be delivered complete and in accordance with the specified qualities in the order, along with any warranty certificate, user manual, or similar documents.",
            "In case the sale of the purchased product becomes impossible, the seller must notify the buyer in writing within 3 days of learning about this situation. The total amount must be refunded to the Buyer within 14 days."
        ]
        },

        "additionalInfo": {
            "unpaidProductPrice": {
              "title": "IF THE PURCHASED PRODUCT PRICE IS NOT PAID:",
              "content": "If the Buyer does not pay for the purchased product or service or cancels it in the bank records, the Seller's obligation to deliver the product or service ends."
            },
            "unauthorizedCreditCardUsage": {
              "title": "PURCHASES MADE WITH UNAUTHORIZED USE OF CREDIT CARD:",
              "content": "After the product is delivered, if it is determined that the credit card used for payment by the Buyer has been fraudulently used by unauthorized persons and the sold product or service fee is not paid to the Seller by the relevant bank or financial institution, the Buyer must return the contract subject product to the SELLER within 3 days, with shipping costs paid by the SELLER."
            },
            "undeliverableProductDueToUnforeseenReasons": {
              "title": "IF THE PRODUCT CANNOT BE DELIVERED ON TIME DUE TO UNFORESEEN REASONS:",
              "content": "If unforeseen force majeure events occur for the Seller and the product cannot be delivered on time, the situation will be notified to the Buyer. The Buyer may request cancellation of the order, replacement of the product with a similar one, or postponement of the delivery until the obstacle is removed. If the Buyer cancels the order; if payment is made in cash, the amount will be refunded within 14 days from the cancellation. If payment is made by credit card and canceled, the product price will be refunded to the bank within 14 days from the cancellation, but it may take 2-3 weeks for the bank to transfer it to the Buyer's account."
            },
            "buyerResponsibilityToInspectProduct": {
              "title": "BUYER'S RESPONSIBILITY TO INSPECT THE PRODUCT:",
              "content": "The Buyer will inspect the subject goods/services before receiving them; damaged or defective goods/services such as dented, broken, torn packaging, etc., will not be accepted from the courier company. The received goods/services will be deemed undamaged and intact. The BUYER must carefully protect the goods/services after delivery. If the right of withdrawal is to be exercised, the goods/services must not be used. The invoice must also be returned with the product."
            }
          },

          "withdrawalRight": {
            "title": "RIGHT OF WITHDRAWAL:",
            "content": "The BUYER may exercise the right of withdrawal from the contract by refusing the goods without assuming any legal or criminal liability and without any justification within 14 (fourteen) days from the delivery date to himself or the person/organization at the address provided."
        },
        "sellerWithdrawalContact": {
            "title": "COMMUNICATION DETAILS FOR SELLER'S RIGHT OF WITHDRAWAL NOTIFICATION:",
            "company": "COMPANY NAME: ERMA GROUP TOURISM INDUSTRY TRADE JOINT STOCK COMPANY",
            "address": "ADDRESS: ÇAMTEPE NEIGHBORHOOD, MAHMUT TEVFİK ATAY BOULEVARD, GAZIANTEP TECHNOPARK NO:4-A, INNER DOOR NO:1 ŞEHİTKAMİL GAZİANTEP",
            "email": "EMAIL: info@nefesol.com",
            "phone": "TEL: 0850 309 8804"
        },
        "withdrawalPeriod": {
            "title": "DURATION OF WITHDRAWAL RIGHT:",
            "content": [
            "If the product purchased is a service, the 14-day period starts from the date the contract is signed. In service contracts where the service performance has started with the consumer's consent before the end of the withdrawal right period, the right of withdrawal cannot be exercised.",
            "Expenses arising from the exercise of the right of withdrawal shall be borne by the SELLER.",
            "In order to exercise the right of withdrawal, written notification must be sent to the SELLER by registered mail, fax or email within 14 (fourteen) days, and the product must not have been used within the framework of the 'Products for Which the Right of Withdrawal Cannot be Used' provisions regulated in this contract."
            ]
        },
        "useOfWithdrawalRight": {
            "title": "USE OF WITHDRAWAL RIGHT:",
            "content": "If the product delivered to a third party or the BUYER's is invoiced, (If the invoice of the product to be returned is corporate, it must be sent together with the return invoice issued by the institution. Return transactions for orders issued on behalf of institutions cannot be completed if the RETURN INVOICE is not issued.) The invoice of the product delivered, Return form, The boxes, packaging, and standard accessories of the products to be returned must be delivered complete and undamaged."
        },

        // "returnConditions": {
        //     "title": "RETURN CONDITIONS:",
        //     "content": [
        //       "The SELLER is obliged to refund the total amount and return the documents that commit the BUYER within 10 days at the latest from the date the withdrawal notification reaches them.",
        //       "If there is a decrease in the value of the goods due to the BUYER's fault or if it becomes impossible to return the goods, the BUYER is obliged to compensate for the damages of the SELLER in proportion to the fault. However, the BUYER is not responsible for changes and deteriorations that occur due to the proper use of the goods or product within the withdrawal period.",
        //       "If the campaign limit amount set by the SELLER is exceeded due to the exercise of the right of withdrawal, the amount of discount benefited from within the scope of the campaign is canceled."
        //     ]
        //   },
        //   "nonReturnableProducts": {
        //     "title": "PRODUCTS FOR WHICH THE RIGHT OF WITHDRAWAL CANNOT BE USED:",
        //     "content": [
        //       "Goods prepared in line with the consumer's request or explicitly for personal needs and not suitable for return, underwear bottoms, swimsuits and bikinis, makeup products, disposable products, goods with a risk of rapid deterioration or a possibility of expiration date passing after delivery to the BUYER, products unsuitable for return due to health and hygiene reasons once their packaging is opened by the BUYER, products mixed with other goods after delivery and inherently inseparable, Goods related to periodicals such as newspapers and magazines, except those provided under a subscription agreement, non-material goods delivered instantly via electronic means or instantly to the consumer, and audio or video recordings, books, digital content, software programs, data storage and data recording devices, computer consumables, whose packaging has been opened by the BUYER, cannot be returned as required by the Regulation. Trees, plants customized for individuals or companies, and specially customized software also cannot be returned. In addition, the right of withdrawal cannot be exercised for services for which the performance has started with the consumer's consent before the end of the withdrawal period as required by the Regulation."
        //     ]
        //   },
        //   "defaultAndLegalConsequences": {
        //     "title": "DEFAULT AND LEGAL CONSEQUENCES",
        //     "content": [
        //       "If the BUYER defaults on payment transactions made by credit card, the BUYER accepts, declares, and undertakes that he/she will pay interest in accordance with the credit card agreement between the cardholder bank and himself/herself, and be liable to the bank. In this case, the relevant bank may apply legal remedies; may request expenses and attorney's fees from the BUYER, and in any case, the BUYER accepts to compensate for the damages incurred by the SELLER due to the delayed performance of the debt."
        //     ]
        //   },
        //   "paymentAndDelivery": {
        //     "title": "PAYMENT AND DELIVERY",
        //     "content": [
        //       "You can make a Bank Transfer or EFT (Electronic Fund Transfer) to our account with Iban: TR79 0001 2009 3710 0010 2618 55 Halk Bank (TL) through our website.",
        //       "Through our website with your credit cards, you can take advantage of online single payment or online installment options for all kinds of credit cards. In your online payments, the amount will be debited from your credit card at the end of your order."
        //     ]
        //   },

          "returnConditions": {
            "title": "RETURN CONDITIONS:",
            "content": [
              "The SELLER is obliged to refund the total amount and return the documents that commit the BUYER within 10 days at the latest from the date the withdrawal notification reaches them.",
              "If there is a decrease in the value of the goods due to the BUYER's fault or if it becomes impossible to return the goods, the BUYER is obliged to compensate for the damages of the SELLER in proportion to the fault. However, the BUYER is not responsible for changes and deteriorations that occur due to the proper use of the goods or product within the withdrawal period.",
              "If the campaign limit amount set by the SELLER is exceeded due to the exercise of the right of withdrawal, the amount of discount benefited from within the scope of the campaign is canceled."
            ]
          },
          "nonReturnableProducts": {
            "title": "PRODUCTS FOR WHICH THE RIGHT OF WITHDRAWAL CANNOT BE USED:",
            "content": [
              "Goods prepared in line with the consumer's request or explicitly for personal needs and not suitable for return, underwear bottoms, swimsuits and bikinis, makeup products, disposable products, goods with a risk of rapid deterioration or a possibility of expiration date passing after delivery to the BUYER, products unsuitable for return due to health and hygiene reasons once their packaging is opened by the BUYER, products mixed with other goods after delivery and inherently inseparable, Goods related to periodicals such as newspapers and magazines, except those provided under a subscription agreement, non-material goods delivered instantly via electronic means or instantly to the consumer, and audio or video recordings, books, digital content, software programs, data storage and data recording devices, computer consumables, whose packaging has been opened by the BUYER, cannot be returned as required by the Regulation. Trees, plants customized for individuals or companies, and specially customized software also cannot be returned. In addition, the right of withdrawal cannot be exercised for services for which the performance has started with the consumer's consent before the end of the withdrawal period as required by the Regulation."
            ]
          },
          "defaultAndLegalConsequences": {
            "title": "DEFAULT AND LEGAL CONSEQUENCES",
            "content": [
              "If the BUYER defaults on payment transactions made by credit card, the BUYER accepts, declares, and undertakes that he/she will pay interest in accordance with the credit card agreement between the cardholder bank and himself/herself, and be liable to the bank. In this case, the relevant bank may apply legal remedies; may request expenses and attorney's fees from the BUYER, and in any case, the BUYER accepts to compensate for the damages incurred by the SELLER due to the delayed performance of the debt."
            ]
          },
          "paymentAndDelivery": {
            "title": "PAYMENT AND DELIVERY",
            "content": [
              "You can make a Bank Transfer or EFT (Electronic Fund Transfer) to our account with Iban: TR79 0001 2009 3710 0010 2618 55 Halk Bank (TL) through our website.",
              "Through our website with your credit cards, you can take advantage of online single payment or online installment options for all kinds of credit cards. In your online payments, the amount will be debited from your credit card at the end of your order."
            ]
          },

          "cancellationAndReturnPolicy": {
            "title": "Cancellation and Return Policy",
            "description": "CONSUMER RIGHTS – WITHDRAWAL – CANCELLATION AND RETURN CONDITIONS"
          },

        "reduction": "Reduction",
        "developmentGreenTechnologies": "Development of green Technologies",
         "eachTreeBreath": "Each tree; a breath,",
        "everyBreathHope": "every breath is a hope!.",
        "takeActionGreenFuture": "Take Action for a green future",

        "co2Calculator": "Calculator",
        "vehicles": "Vehicles",
        "airplane": "Airplane",
        "home": "Home",
        "food": "Food",
        "clearAll": "Clear All",
        "prev": "Prev",
        "nextCategory": "Next Category",
        "totalCO2": "Total CO2 you produce across your usage",
        "eliminateCO2": "To eliminate this CO2, you need to plant",
        "proceedToPlant": "Proceed to Plant Trees",

        "every100km": "Every 100km of use",
        "liters": "Liters",
        "carsPerYear": "How many cars do you drive per year (Average)",
        "kilometers": "Kilometer",
        "yearlyUsage": "Therefore every year, you use",
        "litersPerYear": "Litre per year",
        "calculationNote": "The calculated data was made according to personal carbon calculation. Personal accounts must be balanced according to the tree account. The trees calculated per unit are calculated according to the data in the EU CTS system and may vary depending on the species and age of the tree. This balancing is within the scope of the Afforestation Offset Project.",

        "edit": "Edit",
        "delete": "Delete",
        "routeDescription": "Sample route description",
        "departureAirport": "Departure Airport",
        "selectAirport": "Select an airport",
        "arrivalAirport": "Arrival Airport",
        "tripType": "Trip Type",
        "roundTrip": "Round Trip",
        "oneWayTrip": "One Way Trip",
        "averageFlightTimes": "Average Flight Times",
        "averageCalculatedDistance": "Average Calculated Distance",
        "kWhPerYear": "kWh per year",
        "averageAnnualFlights": "Average Annual Flights",
        "addMoreRoutes": "Add More Routes",
        "clickToAddRoutes": "Click to add more routes",


        "howBigIsYourHouse": "How big is your house?",
        
        "howManyBedrooms": "How many bedrooms are in your house?",
        "howMuchElectricity": "How much electricity do you use?",
        "low": "Low",
        "normal": "Normal",
        "high": "High",
        "defineElectricityUse": "How would you define your electricity use?",
        "energySource" : "Where does your energy come from?",
        "ecoPower": "Eco Power",
        "power": "Power",
        "naturalGas": "Natural Gas",
        "oil": "Oil",
        "regionalHeating": "Regional Heating",
        "wood": "Wood",
        "annualAveragePowerConsumption": "Annual Average Power Consumption",
        "kWhPerYearValue": "KWh per year",

        "whatIsYourFoodLike": "What is your food like?",
        "selectFoodType": "Select",
        "whatFoodProductsDoYouMainlyBuy": "What food products do you mainly buy?",
        "doYouExercise": "Do you exercise?",
        "doYouBuyOrganicFood": "Do you buy organic food?",
        "howOftenDoYouEatFrozenFoods": "How often do you eat frozen foods?",
        "annualAverageFoodConsumption": "Annual average food consumption",
        "kgPerYear": "KG per year",

    
      }
    },
    tr: {
      translation: {
        breathPack: "Nefes Paketi",
        aboutUs: "Hakkımızda",
        blog: "Blog",
        ourServices: "Hizmetlerimiz",
        breatheNow: "Şimdi Nefes Al",
        co2Calculation: "CO2 Hesaplama",
        carbonFootprint: "Karbon Ayak İzi",
        treePacks: "Ağaç Paketleri",
        treesTrackingVerification: "Ağaç Takip ve Doğrulama",
        calculateCo2: "Günlük olarak kullanılan karbon CO2 miktarını hesaplayın.",
        treesCalculationNote: "Birim başına hesaplanan ağaçlar, AB CTS sistemindeki verilere göre hesaplanır ve ağacın türüne ve yaşına bağlı olarak değişebilir.",
        menu: "Menü",
        everyTree: "Her Ağaç",
        oneBreath: "Bir Nefes",
        takeAction: "YEŞİL BİR GELECEK İÇİN HAREKETE GEÇ",
        getInformation: "Bilgi Al",
        chooseForest: "Ormanı Seç",
        wePlantInTurkey: "Türkiye'nin çeşitli ormanlarına ağaç dikiyoruz, istediğiniz ormanı seçebilirsiniz.",
        determineQuantity: "Tercih edilen miktarı belirleyin",
        co2Info: "Emin değilseniz, CO2 emisyonları hakkındaki bilgilerimize bir göz atın. Ayrıca, tüketicilerin yıllık CO2 emisyonlarına karşılık gelen paketler de vardır.",
        wePlant: "Dikiyoruz",
        howManyTrees: "Ormana kaç ağaç dikmek istiyorsunuz?",
        slider: "Kaydırıcı",
        co2Quantity: "CO2 Miktarı",
        examples: "Örnekler",
        small: "Küçük",
        medium: "Orta",
        large: "Büyük",
        mobility: "Hareketlilik",
        nutrition: "Beslenme",
        housingPower: "Konut ve Güç",
        doingGreat: "Harika gidiyorsun!",
        youreAwesome: "Harikasın",
        unitPrice: "Birim Fiyat",
        averageValues: "Veriler, ağaçların bağlayıcı potansiyeline dayalı ortalama değerlerdir. Son bilimsel bulgulara göre, ağaçların ortalama ömrü 30 ila 50 yıl arasında olup, yılda 150 kg'a kadar CO2 bağlayabilir. Hesaplamalar ortalama verilere dayanmaktadır ve ağaç türüne ve yaşına göre değişebilir.",
        chooseTreePack: "Ağaç paketinizi seçin",
        smallTrees: "Küçük Ağaçlar",
        trees: "Ağaçlar",
        mediumTrees: "Orta Ağaçlar",
        largeTrees: "Büyük Ağaçlar",
        breatheNowMax: "ŞİMDİ NEFES AL",
        greeningPolicy: "Yeşillendirme Politikamız",
        encourageConservation: "Amacımız insanları doğal kaynakları korumaya teşvik etmek ve ekosistemin istikrarına katkıda bulunmaktır.",
        learnMore: "Daha Fazla Bilgi Edinin",
        buildingFuture: "Çevre dostu bir gelecek inşa ediyoruz",
        millionTrees: "milyon ağaç",
        perYear: "yılda",
        greenCollection: "Yeşil koleksiyon",
        environmental: "Çevresel",
        awarenessEducation: "Farkındalık Eğitimi",
        zeroCarbon: "Sıfır karbon",
        sustainable: "Sürdürülebilir",
        production: "Üretim",
        carbonFootprintReduction: "Karbon Ayak İzi Azaltma",
        contributionCircularEconomy: "Dairesel Ekonomiye Katkı",
        greenTechnologies: "Yeşil Teknolojilerin Geliştirilmesi",
        communityParticipation: "Toplum Katılımı",
        carbonConsultancy: "Karbon Danışmanlığı",
        providingEqualization: "Bireysel ve kurumsal müşterilerimize karbon dengeleme hizmetleri sağlarken",
        certification: "Sertifikasyon",
        reduceImpact: "Müşterilerimize çevresel etkilerini azaltma fırsatı sunuyoruz",
        digitalMarketingTitle: "Dijital Pazarlama",
        websiteSeo: "İşletmenizin dijital varlığını güçlendirmek için etkileyici bir web sitesine ihtiyacınız var",
        carbonFootprintOptimisation: "Karbon Ayak İzi Optimizasyonu",
        importanceToday: "Bugün, çevresel etkileri yönetmek büyük önem taşımaktadır",
        greenTechIncentivesTitle: "Yeşil Teknoloji Teşvikleri",
        sustainabilityObjectiveTitle: "Bugün, sürdürülebilirlik işletmelerin öncelikli hedefleri arasındadır",
        technicalSupport: "Teknik Destek",
        techRole: "Teknoloji, işletmelerin verimliliğini artırmada ve rekabet avantajı sağlamada kritik bir rol oynar.",
        peopleSaying: "Hakkımızda söylenenler",
        ermaGroupImpressive: "Erma Group A.Ş.'nin ürün ve hizmetleri gerçekten etkileyici. İşletmemizde enerji verimliliğini artırmak için kullandığımız çözümlerden çok memnunuz. Erma Group A.Ş.'yi çevre dostu olmak ve azaltmak isteyen herkese tavsiye ederim.",
        environmentalSpecialist: "Çevre Uzmanı",
        trustedBy: "Bize Güvenenler",
        karbonBlockchain: "Karbon, gerçek dünya sorunlarını ele almak için blockchain teknolojisinin gücünü kullanıyor!",
        aboutUsMax: "HAKKIMIZDA",
        environmentallyFriendlyFuture: "Çevre dostu bir gelecek inşa ediyoruz",
        ermaGroup: "Erma Group A.Ş., 2020 yılında Gaziantep Üniversitesi Teknopark'ta kurulmuş bir yazılım şirketidir. Misyonumuz, yeşil teknolojilerle küresel ısınma sorununa çözüm sunarak çevre dostu bir gelecek inşa etmektir. Çevremizin korunması ve sürdürülebilirliği, şirketimizin temel değerlerinden biridir. 2015 yılında CEO'muzun Kyoto Protokolü; Paris Anlaşması ve Paris Anlaşması'ndan ilham alan vizyonu, küresel ısınmayla mücadelede teknolojinin gücünü kullanmaktır. Bu vizyon, şirketimizin odak noktası haline gelmiş ve yeşil teknolojiler üretmemize yol açmıştır.",
        nefesolMission: "Web sitemiz, Nefesol.com, bu misyonu paylaşan ve dünya genelinde yüksek çevre bilincine sahip bir topluluğu bir araya getiren bir platformdur. Amacımız, insanları doğal kaynakları korumaya teşvik etmek ve ekosistemin istikrarına katkıda bulunmaktır. Sloganımız \"Her Ağaç Bir Nefes\" ve doğanın bize sunduğu değerleri anlatır. Bir ağacın bir nefesi, geleceğimizi şekillendiren oksijendir. Bu sloganla, doğaya saygı duymanın ve sürdürülebilir bir gelecek için sorumluluk almanın önemini vurguluyoruz.",
        everyTreeHope: "Her ağaç; bir nefes, her nefes bir umuttur!",
        contributeNefesol: "Nefesol.com'a katılarak çevre bilincine ve sürdürülebilirliğe katkıda bulunabilirsiniz. İçeriklerimizde yeşil teknolojiler hakkında bilgilendirici makaleler, çevre dostu ürünler ve projelerle ilgili haberler bulabilirsiniz. Aynı zamanda bireysel olarak neler yapabileceğinizi öğrenebilir ve çevre dostu bir yaşam tarzına geçiş yapabilirsiniz. Doğal kaynakların korunması ve iklim değişikliğiyle mücadele hepimizin sorumluluğudur. Nefesol.com olarak, sürdürülebilir bir gelecek için teknolojinin gücünü kullanmaya kararlıyız. Sizi Nefesol.com'a davet ediyor ve çevre dostu bir dünya için birlikte çalışmayı umuyoruz. Sağlıklı ve sürdürülebilir bir gelecek için bir adım atın.",
        ecosystemContribution: "Ekosisteme katkı hakkında daha fazla bilgi edinin",
        carbonCycle: "Karbon Döngüsü",
        carbonCycleDetail: "Gezegenimizin çevresel süreçlerinin kalbinde yer alan karbon döngüsü, biyosfer, pedosfer (toprak), jeosfer (yeryüzü) arasında karbon değişimi sağlayan biyokimyasal dünyadır...",
        nefesOlAwareness: "Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi",
        nefesOlEnvironmental: "Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi Günümüzde, dünya çapında artan çevre sorunları",
        carbonCreditsMarkets: "Karbon Kredileri ve Karbon Piyasaları Nedir?",
        carbonCreditsGuide: "Karbon Kredileri ve Karbon Piyasaları: Yatırımcılar İçin Rehber Karbon Kredileri ve Önemi Dünya genelinde iklim değişikliğiyle m&",
        readMore: "Devamını Oku",
        nefesolCarbonConsulting: "Nefesol olarak, bireysel ve kurumsal müşterilerimize karbon dengeleme hizmetleri sağlarken, aynı zamanda Karbon Danışmanlık hizmetimizle çözüm odaklı bir yaklaşım benimsiyoruz. Karbon danışmanlarımız, müşterilerimize karbon ayak izlerini belirleme, azaltma ve telafi etme konusunda rehberlik eder. Bu şekilde, karbon emisyonlarınızı etkili bir şekilde yönetebilir ve çevresel etkinizi azaltmaya katkıda bulunabilirsiniz.",
        carbonAssessment: "Karbon Ayak İzi Değerlendirmesi: Uzman danışmanlarımız, müşterilerimizin faaliyetlerine dayalı olarak karbon ayak izini belirlemek için ayrıntılı bir analiz yapar. Enerji tüketimi, ulaşım, atık yönetimi ve diğer faktörler göz önünde bulundurularak ana kaynaklar ve karbon emisyon miktarı belirlenir.",
        carbonReduction: "Karbon Azaltma Stratejileri: Karbon ayak izini azaltmak için etkili stratejilerin belirlenmesi önemlidir. Danışmanlarımız, enerji verimliliği, yenilenebilir enerji kullanımı, atık azaltma ve geri dönüşüm gibi alanlarda müşterilerimize özel çözümler sunar. Bu stratejiler, hem çevresel etkinin azaltılmasına hem de operasyonel verimliliğin artırılmasına uygulanabilir.",
        carbonCompensation: "Karbon Telafi Hizmetleri: Karbon emisyonlarını tamamen ortadan kaldırmak her zaman mümkün olmayabilir. Bu noktada, karbon telafi hizmetlerimiz devreye girer. Orman dikimi, ağaçlandırma projeleri ve yenilenebilir enerji yatırımları gibi yöntemlerle müşterilerimize karbon emisyonlarını dengeleme konusunda yardımcı oluruz. Bu şekilde, müşterilerimiz çevreye verdikleri etkileri azaltırken doğaya da geri kazandırma fırsatı bulurlar.",
        monitoringReporting: "İzleme ve Raporlama: Karbon danışmanlığı sürecinde, müşterilerimizin ilerlemesini izlemek ve raporlamak önemlidir. Karbon emisyonlarının takibi, etkili stratejilerin uygulanmasını sağlar ve sürekli iyileştirme imkanı tanır. Danışmanlarımız, düzenli olarak raporlar sunar ve müşterilerimize performanslarını değerlendirmeleri için gerekli bilgileri sağlar.",
        nefesolRoadmap: "Karbon danışmanlığı hizmetimizle müşterilerimize çevresel sorumluluklarını yerine getirmek için kapsamlı bir yol haritası sunuyoruz. Nefesol olarak, karbon emisyonlarını azaltmaya ve sürdürülebilir bir geleceğe katkıda bulunmak için birlikte çalışmaktan mutluluk duyuyoruz.",
        nefesolCertification: "Nefesol olarak, karbon dengeleme hizmetlerimizle müşterilerimize çevresel etkilerini azaltma ve karbon emisyonlarını telafi etme fırsatı sunuyoruz. Karbon dengeleme çabalarınızın doğrulanabilirliği ve güvenilirliği, karbon ayak izinizi yönetirken önemlidir. Bu nedenle, sertifikasyon hizmetimizle, karbon dengeleme faaliyetlerinizi uluslararası standartlara uygun olarak belgelendiriyoruz.",
        nefesolCertBenefits: "Nefesol Sertifikasyon Hizmeti ile Ne Elde Edersiniz?",
        accuracyReliability: "Doğruluk ve Güvenilirlik: Sertifikasyon, karbon dengeleme faaliyetlerinizin doğruluğunu ve güvenilirliğini doğrulamanın ve kanıtlamanın önemli bir yoludur. Müşterileriniz, sertifikasyon sayesinde karbon emisyonlarınızı etkin bir şekilde yönettiğinizi ve gerçekleştirdiğiniz karbon dengeleme projelerinin doğrulandığını bilir. Bu, işletmenizin çevresel sorumluluklarını yerine getirdiğini ve sürdürülebilir bir geleceğe bağlı olduğunu gösteren güçlü bir mesaj iletir.",
        complianceStandards: "Uluslararası Standartlara Uygunluk: Nefesol Sertifikasyon Hizmeti, uluslararası kabul görmüş karbon standartlarına uygun olarak gerçekleştirilir. Bu, operasyonlarınızı karbon izleme, raporlama ve doğrulama için en iyi uygulamalarla uyumlu hale getirmenizi sağlar.",
        imageAdvantage: "İmaj ve Rekabet Avantajı: Sertifikasyon, işletmenizin çevresel sürdürülebilirlik taahhütlerini kanıtlamanın yanı sıra imaj ve rekabet avantajı sağlamanızı da sağlar. Karbon ayak izinizi doğrulamak ve dengeleme çabalarınızı sertifikalarla desteklemek, müşterilerinizin ve paydaşlarınızın sizi tercih etmesinde önemli bir faktör olabilir. Ayrıca, piyasada sürdürülebilirlikte liderlik rolünüzü vurgulayarak rekabet avantajı elde edebilirsiniz.",
        traceabilityTransparency: "İzlenebilirlik ve Şeffaflık: Sertifikasyon, karbon dengeleme faaliyetlerinizin izlenebilir ve şeffaf olmasını sağlar. Projelerinizin ve telafi çabalarınızın detaylarını, karbon emisyonlarını azaltma ve doğaya katkı sağlama yöntemlerini açıkça belgeler. Bu, paydaşlarınızın, müşterilerinizin ve toplumun güvenini kazanmanızı sağlar.",
        nefesolCertify: "Nefesol Sertifikasyon Hizmeti, karbon dengeleme çabalarınızı doğrulamanıza ve sürdürülebilirlik yolculuğunuzda önemli bir adım atmanıza rehberlik eder. Uzmanlarımız, sertifikasyon sürecini uluslararası karbon standartlarına uygun olarak yönetir ve sizinle işbirliği yapar. Sizin için en uygun sertifikasyon yolunu belirler ve başarılı bir şekilde tamamlanmasını sağlar.",
        contactUs: "Çevresel taahhütlerinizi kanıtlamak ve karbon dengeleme faaliyetlerinizi belgelendirerek sürdürülebilir bir geleceğe adım atmak için bizimle iletişime geçin.",
        websiteSeoOptimization: "Web Sitesi ve SEO Optimizasyonu: İşletmenizin dijital varlığını güçlendirmek için etkileyici bir web sitesi ve SEO (Arama Motoru Optimizasyonu) stratejisine ihtiyacınız var. Nefesol olarak, işletmenize özel bir web tasarımı sunarken, arama motorlarında daha iyi sıralamalar elde etmek için SEO optimizasyonu yapıyoruz.",
        socialMedia: "Sosyal Medya Yönetimi: Sosyal medya, markanızı geniş kitlelere duyurmanın ve etkileşim sağlamanın gücüne sahip bir araçtır. Nefesol olarak, sosyal medya platformlarınızı yönetiyor ve içerik oluşturma, yayınlama, topluluk yönetimi ve reklam kampanyalarında size destek sağlıyoruz.",
        contentMarketing: "İçerik Pazarlaması: Etkili içerik, hedef kitlenizi çekmek ve etkilemek için önemlidir ve markanızın değerini ve uzmanlığını göstermenin yanı sıra. Nefesol olarak, orijinal ve ilgi çekici içerikler oluşturuyor ve blog yazıları, makaleler, infografikler ve videolar gibi çeşitli formatlarda içerik sunuyoruz.",
        emailMarketing: "E-posta Pazarlaması: E-posta pazarlaması, potansiyel müşterilere ve mevcut müşterilere doğrudan ulaşmanın etkili bir yoludur. Nefesol olarak, etkileyici e-posta kampanyaları oluşturuyor, kişiselleştirilmiş e-postalar gönderiyor ve müşteri sadakatini artırmak için otomasyon süreçlerini uyguluyoruz.",
        digitalMarketing: "Dijital pazarlama stratejileri, işletmenizin büyümesini destekler ve hedeflerinize ulaşmanıza yardımcı olur. Nefesol olarak, uzman ekibimizle işletmenize özel dijital pazarlama çözümleri sunuyoruz.",
        environmentalImpacts: "Bugün, işletmelerin çevresel etkilerini yönetmek ve sürdürülebilir bir geleceğe katkıda bulunmak büyük önem taşımaktadır. Karbon ayak izi, işletmelerin faaliyetlerinden kaynaklanan sera gazı emisyonlarını ölçmek ve değerlendirmek için kullanılan bir metriktir. Nefesol olarak, karbon ayak izi optimizasyonu hizmetimizle işletmelere çevresel verimliliklerini artırma konusunda yardımcı oluyor ve işletmelerin çevresel verimliliklerini en üst düzeye çıkarmalarına yardımcı oluyoruz.",
        carbonFootprintAssessment: "Karbon Ayak İzi Değerlendirmesi: İlk adımda, uzman bir ekip olarak işletmenizin faaliyetlerini analiz ediyor ve karbon ayak izini belirlemek ve mevcut çevresel etkileri ölçmek için ayrıntılı bir değerlendirme yapıyoruz. Bu, enerji tüketimi, ulaşım, atık yönetimi ve diğer faktörleri içerir.",
        dataCollection: "Veri Toplama ve Analiz: Karbon ayak izini hesaplamak için gerekli verileri toplar ve analiz ederiz. Bu, işletmenizin enerji tüketimi, ulaşım faaliyetleri, üretim süreçleri ve tedarik zinciri gibi faktörleri içerir. Elde ettiğimiz verileri kullanarak, işletmenizin karbon emisyonlarını etkileyen ana kaynakları belirleriz.",
        optimizationStrategies: "Optimizasyon Stratejileri: Verilerin analiz edilmesi ve mevcut durumun değerlendirilmesi sonucunda, karbon ayak izini azaltmak için özelleştirilmiş optimizasyon stratejileri belirleriz. Bu stratejiler, enerji verimliliğinin artırılması, yenilenebilir enerji kullanımı, atık azaltma ve yeşil tedarik zinciri yönetimi gibi konuları içerir. Ayrıca, iş süreçlerinde iyileştirmeler ve teknolojik yenilikler de değerlendirilir.",
        implementationMonitoring: "Uygulama ve İzleme: Optimizasyon stratejilerinin uygulanması sırasında işletmenizle işbirliği içinde çalışırız. Stratejilerin başarılı bir şekilde uygulanması için size rehberlik eder ve süreci takip ederiz. Ayrıca, ilerlemeyi izlemek ve sonuçları değerlendirmek için düzenli raporlar sunarız.",
        carbonFootprintOptimization: "Karbon Ayak İzi Optimizasyonu ile Neler Elde Edebilirsiniz? Karbon emisyonlarınızı azaltarak çevresel verimliliğinizi artırırsınız. Enerji verimliliği ve sürdürülebilir uygulamalarla maliyet tasarrufu sağlarsınız. İşletmenizin sürdürülebilirlik hedeflerine ulaşmasına destek olursunuz. Müşterilerinizin ve paydaşlarınızın güvenini ve sadakatini kazanırsınız. Çevresel düzenlemelere uyarak itibarınızı güçlendirirsiniz. Nefesol olarak, işletmenizi karbon ayak izi optimizasyon sürecinde yönlendirerek çevresel verimliliğinizi en üst düzeye çıkarmanıza yardımcı olmak için buradayız.",
        sustainabilityObjective: "Bugün, sürdürülebilirlik işletmelerin öncelikli hedefleri arasındadır. Yeşil teknolojiler, çevre dostu ve enerji verimli çözümler sunarak işletmelerin çevresel etkilerini azaltmasına yardımcı olur. Nefesol olarak, işletmelere yeşil teknolojilerin yaygınlaştırılması ve kullanımı konusunda danışmanlık ve destek hizmetleri sunuyoruz.",
        greenTechIncentives: "Yeşil Teknoloji Teşvikleri ve Faydaları",
        financialAdvantages: "Finansal Avantajlar: Yeşil teknoloji teşvikleri, işletmelere çeşitli finansal avantajlar sağlar. Bu teşvikler, hibe ve teşvik programları, vergi indirimleri, düşük faizli krediler ve enerji maliyetlerinde tasarruf gibi avantajları içerir. Bu teşvikler, yeşil teknolojilerin benimsenmesini teşvik ederken işletmelerin maliyetlerini azaltmasına yardımcı olur.",
        competitiveAdvantage: "Rekabet Avantajı: Yeşil teknolojiler, işletmelere rekabet avantajı sağlar. Sürdürülebilirlik taahhütleri ve yeşil teknolojilerin kullanımı, müşteriler ve paydaşlar tarafından olumlu algılanır. Bu, marka itibarını artırır ve müşteriler için tercih edilen işletme olmanızı sağlar.",
        reducingEnvironmental: "Çevresel Etkilerin Azaltılması: Yeşil teknolojiler, enerji verimliliğini artırarak ve çevre dostu kaynaklar kullanarak işletmelerin çevresel etkilerini azaltmasına yardımcı olur. Bu teknolojiler, yenilenebilir enerji kaynaklarının kullanımı, atık yönetimi, su tasarrufu ve geri dönüşüm gibi alanlarda yenilik sağlar. Böylece, doğal kaynakların korunmasına ve karbon emisyonlarının azaltılmasına katkıda bulunur.",
        innovationOpportunities: "İnovasyon ve Ar-Ge Fırsatları: Yeşil teknoloji teşvikleri, işletmelere inovasyon ve Ar-Ge çalışmaları için destek sağlar. Bu teşvikler, yenilikçi çözümler geliştirmek ve sürdürülebilirlik hedeflerine ulaşmak için kaynakların tahsis edilmesini kolaylaştırır. İşletmeler, yeşil teknolojilerle ilgili projeleri hayata geçirerek sektörlerinde liderlik rolü üstlenebilirler.",
        raiseAwareness: "Nefesol olarak, yeşil teknoloji teşvikleri konusunda farkındalık yaratmak ve işletmelere bu konuda rehberlik etmek için buradayız. Uzman ekibimiz, işletmenizin ihtiyaçlarına uygun teşvik programlarını belirler ve başvuru sürecinde size destek olur. Ayrıca, yeşil teknolojilerin benimsenmesi konusunda stratejik tavsiyeler ve çözümler sunuyoruz. İşletmenizin çevresel etkilerini azaltmak ve sürdürülebilirliğe katkıda bulunmak için yeşil teknoloji teşviklerinden yararlanabilirsiniz.",
        technicalSupportRole: "Teknoloji, işletmelerin verimliliğini artırmada ve rekabet avantajı sağlamada kritik bir rol oynar. Ancak, teknik sorunlar veya güncellemelerle karşılaşma olasılığı her zaman vardır. Nefesol olarak, müşterilerimize teknik destek hizmetleri sunarak iş süreçlerinin sorunsuz işlemesini ve kesintisiz bir çalışma ortamı sağlamalarını sağlıyoruz.",
        troubleshootingDebugging: "Sorun Giderme ve Hata Ayıklama: Teknik sorunlarla karşılaştığınızda, uzman teknik destek ekibimiz sorunları teşhis eder ve hızlı çözümler sunar. Ekip, hata ayıklama süreçlerinde size rehberlik eder ve en uygun çözümü bulmaya çalışır.",
        updateUpgrade: "Güncelleme ve Yükseltme: Teknoloji dünyası sürekli değişiyor ve güncellemeler gerektirebilir. Teknik destek hizmetimiz, işletmenizin mevcut sistemlerini ve yazılımlarını güncel tutmanıza yardımcı olur. Ayrıca, yükseltme süreçlerinde destek sağlar ve yeni teknolojilerin uygulanmasında size rehberlik eder.",
        remoteOnsite: "Uzaktan ve Yerinde Destek: Teknik destek hizmetlerimiz, uzaktan erişim araçları ve yerinde müdahale seçenekleri sunar. Uzaktan destek ile teknik sorunlarınızı hızlı bir şekilde çözebilir ve iş süreçlerinizin kesintiye uğramasını önleyebilirsiniz. Ayrıca, yerinde destek hizmetimizle uzman teknik ekibimiz işletmenizin bulunduğu yere gelerek sorunları yerinde çözer.",
        consultancyTraining: "Danışmanlık ve Eğitim: Teknik destek hizmetimiz, işletmenizin teknoloji odaklı stratejilerini belirlemenize danışmanlık yapar. Ayrıca, personelinize teknoloji kullanımı ve sorun giderme konularında eğitim veririz. Bu, işletmenizin teknik yeteneklerini artırmanızı sağlar.",
        nefesolTechnicalSupport: "Nefesol olarak, işletmenizin teknik ihtiyaçlarına uygun çözümler sunmak ve iş süreçlerinin sorunsuz işlemesini sağlamak için buradayız. Teknik destek ekibimiz, her zaman size yardımcı olmaya hazırdır.",
        
    


        distanceSalesContract: "Uzaktan Satış Sözleşmesi",
    distanceSalesContractTitle: "UZAKTAN SATIŞ SÖZLEŞMESİ",
    parties: "1. TARAFLAR",
    partiesDetail: "Bu Anlaşma, aşağıda belirtilen taraflar arasındaki şartlar çerçevesinde imzalanmıştır. A. 'ALICI'; (bundan sonra sözleşmede 'ALICI' olarak anılacaktır) B. 'SATICI'; (bundan sonra sözleşmede 'SATICI' olarak anılacaktır) AD-SOYAD: ERMA GROUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ ADRES: Çamtepe Mahallesi. Mahmut Tevfik Atay Bulv. Gaziantep Teknopark No: 4 A iç kapı no: 1 Şahinbey GAZİANTEP Bu sözleşmeyi kabul ederek, ALICI, sözleşme konusu siparişi onaylarsa, ALICI'nın sipariş konusu bedeli ve kargo ücretleri, vergiler gibi belirtilen ek ücretleri ödeme yükümlülüğünde olduğunu ve ALICI'nın bu konuda bilgilendirildiğini peşinen kabul eder.",
    definitions: "2. TANIMLAR",
    definitionsDetail: "Bu sözleşmenin uygulanması ve yorumlanmasında, aşağıda yazılı terimler, karşılarında yazılı açıklamaları ifade eder. BAKAN: Gümrük ve Ticaret Bakanı, BAKANLIK: Gümrük ve Ticaret Bakanlığı, KANUN: Tüketiciyi Koruma Kanunu No. 6502, YÖNETMELİK: Uzaktan Satış Sözleşmelerine İlişkin Yönetmelik (RG:27.11.2014/29188), HİZMET: Mal sağlanmasından farklı olarak herhangi bir tüketici işlemi konusu olan ve karşılığında ücret veya menfaat ödenen ya da ödeneceği taahhüt edilen hizmet, SATICI: Ticari veya mesleki faaliyetleri kapsamında tüketicilere mal sunan veya malın tedarikçisi adına veya hesabına hareket eden şirket, ALICI: Gayri ticari veya gayri mesleki amaçlarla bir malı veya hizmeti edinen, kullanan veya yararlanan gerçek veya tüzel kişi, SİTE: SATICI'ya ait internet sitesi, SİPARİŞ VEREN: SATICI'nın internet sitesi üzerinden mal veya hizmet talep eden gerçek veya tüzel kişi, TARAFLAR: SATICI ve ALICI, SÖZLEŞME: SATICI ve ALICI arasında akdedilen bu sözleşme, MAL: Alışveriş konusu olan taşınır mallar ve kullanılmak üzere elektronik ortamda hazırlanan yazılım, ses, görüntü ve benzeri gayri maddi mallar ile bunlar üzerinde yapılan işlemler anlamına gelir.",
    subject: "3. KONU",
    subjectDetail: "Bu Sözleşme, ALICI'nın SATICI'nın internet sitesi üzerinden elektronik ortamda sipariş verdiği ve aşağıda belirtilen ürünün satışı ve teslimi ile ilgili olarak Tüketiciyi Koruma Kanunu No. 6502 ve Uzaktan Satış Sözleşmelerine İlişkin Yönetmelik hükümleri doğrultusunda tarafların hak ve yükümlülüklerini düzenler. Site üzerinde belirtilen ve ilan edilen fiyatlar satış fiyatıdır. Belirtilen fiyatlar ve vaatler güncelleninceye ve değiştirilinceye kadar geçerlidir. Bir süre için ilan edilen fiyatlar belirtilen sürenin sonuna kadar geçerlidir.",
    sellerInformation: "4. SATICI BİLGİLERİ",
    sellerInformationDetail: "Ünvan: ERMA GROUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ Adres: Çamtepe Mahallesi. Mahmut Tevfik Atay Bulv. Gaziantep Teknopark No: 4 A iç kapı no: 1 Şahinbey GAZİANTEP Telefon: 0850 309 8804 E-posta: info@nefesol.com",
    generalProvisions: "9. GENEL HÜKÜMLER",
    generalProvision_1: "9.1. ALICI, SATICI'nın web sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ve teslimatı ile ilgili ön bilgilendirme ve mesafeli satış sözleşmesinin şartlarını elektronik ortamda okuduğunu ve gerekli onayı verdiğini beyan ve taahhüt eder.",
    generalProvision_2: "9.2. ALICI, SATICI'nın elektronik ortamda ön bilgilendirme ve sipariş verilen ürünlerin temel özellikleri, vergiler dahil ürün fiyatları ve ödeme ve teslimat bilgilerini doğru ve eksiksiz olarak aldığını ve onayladığını kabul, beyan ve taahhüt eder.",
    generalProvision_3: "9.3. Sözleşme konusu her bir ürün, ALICI'nın ikametgahının uzaklığına bağlı olarak gesi mevzuatı 14 günü aşmamak kaydıyla ALICI veya ALICI tarafından gösterilen adresteki kişi ve/veya kuruluşa teslim edilir. Ürün bu süre içinde ALICI'ya teslim edilmezse, ALICI'nın sözleşmeyi feshetme hakkı bulunmaktadır.",
    generalProvision_4: "9.4. SATICI, sözleşme konusu ürünü, siparişte belirtilen niteliklere uygun olarak, garanti belgeleri, kullanım kılavuzları varsa, yasal mevzuata uygun olarak, ayıpsız, standartlara uygun, doğruluk ve dürüstlük kuralları çerçevesinde, hizmet kalitesini korumak ve artırmak, işi yaparken gerekli özeni göstermek, dikkat ve öngörüyle hareket etmek ve bu hususta gereken bakımı göstermeyi kabul, beyan ve taahhüt eder.",
    generalProvision_5: "9.5. SATICI, sözleşme ifa yükümlülüğü süresi dolmadan önce, ALICI'ya bilgi vererek eşit kalite ve fiyatta başka bir ürün tedarik edebilir ve ALICI'nın açık onayını alır.",
    generalProvision_6: "9.6. SATICI, siparişe konu olan ürün veya hizmetin ifasının imkansızlaşması halinde, söz konusu durumu öğrendiği tarihten itibaren 3 gün içinde tüketiciyi yazılı olarak bilgilendirerek, 14 gün içinde ALICI'ya toplam bedeli iade edeceğini kabul, beyan ve taahhüt eder.",
    generalProvision_7: "9.7. ALICI, ürünün teslimi için bu Sözleşmeyi elektronik olarak onaylayacağını kabul, beyan ve taahhüt eder ve ürünün sözleşme konusu bedeli banka kayıtlarında ödenmemiş veya iptal edilmiş olması halinde SATICI'nın ürünü teslim etme yükümlülüğünün sona ereceğini kabul, beyan ve taahhüt eder.",
    generalProvision_8: "9.8. Sözleşme konusu ürün, ALICI'nın veya ALICI tarafından gösterilen adresteki kişinin ve/veya kuruluşun eline teslim edilir ve ürünün bedeli teslimden sonra ALICI'nın kredi kartının yetkisiz kişilerce haksız kullanımı sonucu ilgili banka veya finansal kuruluş tarafından SATICI'ya ödenmemiş ise, ALICI'nın SATICI'ya ürünü 3 gün içinde SATICI'nın masrafı ile geri göndereceğini kabul, beyan ve taahhüt eder.",
    generalProvision_9: "9.9. SATICI, tarafların öngöremeyeceği ve gelişmemiş olayların gelişmesi gibi zorlayıcı sebeplerin meydana gelmesi nedeniyle sözleşme konusu ürünü belirtilen sürede teslim edemezse, ALICI'yı bilgilendirir ve ALICI'nın gecikmeyi onaylamaması halinde ALICI, siparişi iptal etme, varsa sözleşme konusu ürünün eşdeğeri ile değiştirilmesini veya teslim süresinin engellenen durumun ortadan kaldırılmasına kadar ertelenmesini talep edebilir. ALICI'nın siparişi iptal etmesi halinde, ALICI'dan nakden ödenen miktar nakden ve tamamen 14 gün içinde iade edilir. ALICI tarafından kredi kartı ile yapılan ödemelerde ise, ALICI'nın siparişi iptal etmesinden sonra 14 gün içinde ürün tutarı ilgili bankaya iade edilir. SATICI'nın ALICI'nın kredi kartına iade edilen tutarın banka tarafından ALICI'nın hesabına yansıtılma sürecinin 2 ila 3 hafta sürebileceğini ve bu tutarın bankaya iadesinden sonra hesaplara yansıtılmasının tamamen banka işlem sürecine bağlı olduğunu, olası gecikmelerden dolayı SATICI'yı sorumlu tutmayacağını ALICI kabul, beyan ve taahhüt eder.",
    generalProvision_10: "9.10. SATICI, ALICI'nın kayıt formunda belirttiği veya daha sonra ALICI tarafından güncellenen adres, e-posta adresi, sabit ve mobil telefon hatları ve diğer iletişim bilgileri aracılığıyla iletişim, pazarlama, bildirim ve diğer amaçlarla ALICI'ya ulaşma hakkına sahiptir. Bu Sözleşmeyi kabul ederek, ALICI, SATICI'nın ALICI'ya yönelik yukarıda belirtilen iletişim faaliyetlerini gerçekleştirebileceğini kabul ve beyan eder.",
    generalProvision_11: "9.11. ALICI, mal/hizmetin tesliminden önce, mal/hizmeti inceleyecektir; ezilmiş, kırılmış, yırtılmış ambalaj vb. zarar görmüş ve/veya defolu mal/hizmeti kargo şirketinden teslim almaz. Teslim alınan mal/hizmet hasarsız ve sağlam kabul edilecektir. Teslimat sonrası mal/hizmetin dikkatli korunması ALICI'ya aittir. Cayma hakkının kullanılması gerektiğinde, mal/hizmetin kullanılmamış olması gerekmektedir. Fatura geri gönderilmelidir.",
    generalProvision_12: "9.12. Sipariş sırasında kullanılan kredi kartının kart sahibi ALICI değilse veya siparişte kullanılan kredi kartında bir güvenlik açığı tespit edilirse, SATICI, siparişi gerçekleştirilmeden önce kredi kartı sahibinin kimlik ve iletişim bilgilerini, önceki ayın kredi kartı ekstresini veya kredi kartının ALICI'ya ait olduğunu gösteren banka yazısını sunmasını isteyebilir. İstenen bilgi/dokümanların ALICI tarafından sağlanana kadar sipariş dondurulur ve belirtilen talepler 24 saat içinde karşılanmazsa SATICI'nın siparişi iptal etme hakkı saklıdır.",
    generalProvision_13: "9.13. SATICI'nın web sitesine üye olurken sağladığı kişisel ve diğer bilgilerin doğru olduğunu ALICI beyan ve taahhüt eder ve bu bilgilerin doğruluğunun SELLER tarafından ilk bildirimde doğruluğu durumunda SELLER'in tüm zararlarını derhal, nakden ve tam olarak tazmin edeceğini beyan eder ve taahhüt eder.",
    generalProvision_14: "9.14. ALICI, SATICI'nın web sitesini kullanırken yasal mevzuata uygun olarak hareket edeceğini ve bunları ihlal etmeyeceğini kabul ve taahhüt eder. Aksi takdirde, ortaya çıkacak tüm yasal ve cezai yükümlülüklerin ALICI'yı bağlayacağını kabul eder ve sadece ve sadece ALICI'nın sorumluluğunu taşıyacaktır.",
    generalProvision_15: "9.15. ALICI, genel ahlaka aykırı, genel ahlaka aykırı, rahatsız edici ve rahatsız edici şekilde halk düzenini bozan, yasaları ihlal eden ve başkalarının maddi ve manevi haklarını ihlal eden bir şekilde SATICI'nın web sitesini kullanamaz. Ayrıca, üyeler hizmetlerin kullanımını engelleyen veya zorlaştıran faaliyetlerde (spam, virüs, truva atı vb.) bulunamazlar.",
    generalProvision_16: "9.16. SATICI'nın kontrolü altında olmayan ve/veya başka üçüncü şahıslar tarafından sahip olunmayan ve/veya işletilen diğer web siteleri ve/veya içeriklere, SATICI'nın web sitesi üzerinden bağlantılar sağlanabilir. Bu bağlantılar, ALICI'nın kolaylığı için sağlanmış olup, ilgili web sitesini veya o siteyi işleten kişiyi desteklememekte ve bağlantı verilen web sitesindeki bilgiler için herhangi bir garanti teşkil etmemektedir.",
    generalProvision_17: "9.17. Bu sözleşmede yer alan maddelerden birini veya birkaçını ihlal eden üye, bu ihlalden kişisel olarak sorumlu olacak ve bu ihlallerin yasal ve cezai sonuçlarından SATICI'yı tazmin etmekten kurtaracaktır. Ayrıca; ihlal hukuki alana gönderildiğinde, SATICI, üyenin üyelik sözleşmesine uymaması nedeniyle tazminat talebinde bulunma hakkını saklı tutar.",
    rightOfWithdrawal2: "10. CAYMA HAKKI",
    rightOfWithdrawalDetail: "10.1. ALICI, herhangi bir hukuki veya cezai sorumluluk üstlenmeksizin ve herhangi bir sebep göstermeksizin, ürünün ALICI'ya veya ALICI tarafından gösterilen adresteki kişi/örgüte teslim tarihinden itibaren 14 (on dört) gün içinde, mal satışına ilişkin mesafeli sözleşmelerde, malı reddederek sözleşmeden cayma hakkını kullanabilir.",
    rightOfWithdrawal_2: "10.2. Hizmet sunumu ile ilgili mesafeli sözleşmelerde, bu süre sözleşmenin imzalandığı tarihten itibaren başlar. Cayma hakkı süresi dolmadan önce hizmetin ifası ALICI'nın onayıyla başlatılan hizmet sözleşmelerinde cayma hakkı kullanılamaz. Cayma hakkının kullanılmasından doğan masraflar SATICI'ya aittir. Bu sözleşmeyi kabul ederek, ALICI, cayma hakkı hakkında bilgilendirildiğini önceden kabul eder.",
    rightOfWithdrawal_3: "10.3. Cayma hakkını kullanmak için, 14 gün içinde SATICI'ya iadeli taahhütlü posta, faks veya e-posta ile yazılı olarak bildirimde bulunmak ve ürünün, bu sözleşmede belirtilen \"Cayma Hakkının Kullanılamayacağı Ürünler\" hükümleri çerçevesinde kullanılmamış olması gerekmektedir.",
    rightOfWithdrawal_4: "a) ALICI'ya veya 3. şahısa teslim edilen ürünün faturası, (İade edilecek ürünün faturası kurumsal ise, iade ederken iade eden kurum tarafından düzenlenen iade faturası ile birlikte gönderilmelidir. Kurumlar adına düzenlenen iade faturalı sipariş iadeleri iade faturası olmadan tamamlanamaz.)",
    rightOfWithdrawal_5: "b) İade formu,",
    rightOfWithdrawal_6: "c) İade edilmek istenen ürünler, varsa standart aksesuarları, ambalajı ve kutusu ile birlikte hasarsız ve kullanılmamış olarak teslim edilmelidir.",
    rightOfWithdrawal_7: "d) SATICI, cayma bildiriminin kendisine ulaşmasından itibaren 10 gün içinde toplam ücreti ve ALICI'yi borç altına sokan belgeleri ALICI'ya iade etmek ve ürünü 20 gün içinde geri almakla yükümlüdür.",
    rightOfWithdrawal_8: "e) Eğer ürünün değerinde bir azalma, ALICI'nın kusuru nedeniyle meydana gelmişse veya iade imkansızlaşmışsa, ALICI, SATICI'nın zararlarını kendi kusur oranında tazmin etmekle yükümlüdür. Ancak, cayma hakkı süresi içinde ürünlerin doğru kullanımından kaynaklanan değişiklikler ve bozulmalar için ALICI sorumlu değildir.",
    rightOfWithdrawal_9: "f) SATICI tarafından belirlenen kampanya sınır miktarının cayma hakkı kullanımı nedeniyle düşürülmesi halinde, kampanya kapsamında kullanılan indirim miktarı iptal edilir.",
    nonReturnableProducts2: "11. CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER",
    nonReturnableProductsDetail: "ALICI'nın istekleri veya açıkça kişiselleştirilmiş olarak hazırlanan ve iade edilmeye uygun olmayan, iç çamaşırı alt parçaları, mayo ve bikini altları, makyaj malzemeleri, tek kullanımlık ürünler, hızlı bozulma tehlikesi olan veya son kullanma tarihi geçme tehlikesi bulunan mallar, sağlık ve hijyen açısından iade edilmesi uygun olmayan malların ambalajı ALICI tarafından teslim alındıktan sonra açıldığında iade edilemeyen mallar, teslimattan sonra diğer ürünlerle karışan ve doğaları gereği ayrılamayan mallar, abonelik sözleşmesi kapsamında sağlanan gazete ve dergiler hariç, elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayri maddi mallar, ses veya görüntü kayıtları, kitaplar, dijital içerik, yazılım programları, veri kaydı ve veri depolama cihazları, bilgisayar tüketim malzemeleri ALICI tarafından açılmış ambalajı ile iade edilemez. Ayrıca, cayma hakkı süresi dolmadan önce, tüketici onayı ile başlanan hizmetlerde cayma hakkı kullanılamaz. Kozmetik ve kişisel bakım ürünleri, iç çamaşırı ürünleri, mayo, bikini, kitaplar, çoğaltılabilir yazılım ve programlar, DVD'ler, VCD'ler, CD'ler ve kasetler ve kırtasiye tüketim malları (toner, kartuş, şerit, vb.) iade edilecekse, paketleri açılmamış, denenmemiş, hasarsız ve kullanılmamış olmalıdır.",
    defaultLegalConsequences2: "12. TEMERRÜT HALİ VE HUKUKİ SONUÇLARI",
    defaultLegalConsequencesDetail: "ALICI, kredi kartı ile yapılacak ödeme işlemlerinde temerrüde düşmesi halinde, ALICI'nın, kart sahibi banka ile kart aracılığıyla gerçekleştirdiği kredi kartı sözleşmesi çerçevesinde faiz ödeyeceğini ve bankaya karşı sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara başvurabilir; ALICI'nın, temerrüt nedeniyle bankaya karşı yükümlü olacağı masrafları ve avukatlık ücretlerini ödemek zorunda kalabilir ve her koşulda, ALICI'nın borcunun gecikmesinden dolayı SATICI'nın uğradığı zararları ve kayıpları ALICI'nın kabul, beyan ve taahhüt eder.",
    authorizedCourt: "13. YETKİLİ MAHKEME",
    authorizedCourtDetail: "Bu sözleşmeden doğan uyuşmazlıklarda ALICI'nın mal veya hizmeti satın aldığı yer veya ALICI'nın ikametgahının bulunduğu yerdeki tüketici sorunları arabuluculuk komiteleri ve tüketici mahkemeleri yetkilidir. Sanayi ve Ticaret Bakanlığı tarafından ilan edilen değere kadar etkilidir. Para sınırı aşağıda belirtilmiştir: 28/05/2014 tarihinden itibaren geçerlidir: a) Tüketici sorunları arabuluculuk komitelerine uyuşmazlıklarda 2.000,00 (iki bin) TL'ye kadar, b) İl tüketici arabuluculuk komitelerine 3.000,00 (üç bin) TL'ye kadar, c) Büyükşehir statüsünde olan illerde, 2.000,00 (iki bin) TL ile 3.000,00 (üç bin) TL arasında olan uyuşmazlıklarda il tüketici arabuluculuk komitelerine başvurulabilir. Bu Sözleşme ticari amaçlarla yapılmıştır.",
    enforcement: "14. YÜRÜRLÜK",
    enforcementDetail: "ALICI, site üzerinden yerleştirdiği sipariş için ödeme yapar yapmaz, ALICI, bu sözleşmenin tüm şartlarını kabul etmiş sayılır. SATICI, siparişin gerçekleşmeden önce ALICI tarafından bu sözleşmenin okunduğunu ve kabul edildiğine dair onay almak için gerekli yazılım düzenlemelerini yapmakla yükümlüdür. SATICI: ERMA GRUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ ALICI: TARİH:",


    "membership": {
        "agreement": "Üyelik Sözleşmesi"
    },
    "site": {
        "usage": {
            "terms": "SİTE KULLANIM ŞARTLARI VE ÜYELİK SÖZLEŞMESİ"
        }
    },
    "usage": {
        "terms": {
            "notice": "Lütfen sitemizi kullanmadan evvel bu ‘site kullanım şartları’nı dikkatlice okuyunuz.",
            "acceptance": "Bu alışveriş sitesini kullanan ve alışveriş yapan müşterilerimiz aşağıdaki şartları kabul etmiş varsayılmaktadır:",
            "siteOwnership": "Sitemizdeki web sayfaları ve ona bağlı tüm sayfalar (‘site’) www.nefesol.com adresindeki ERMA GROUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ firmasının (Firma) malıdır ve onun tarafından işletilir. Sizler (‘Kullanıcı’) sitede sunulan tüm hizmetleri kullanırken aşağıdaki şartlara tabi olduğunuzu, sitedeki hizmetten yararlanmakla ve kullanmaya devam etmekle; Bağlı olduğunuz yasalara göre sözleşme imzalama hakkına, yetkisine ve hukuki ehliyete sahip ve 18 yaşın üzerinde olduğunuzu, bu sözleşmeyi okuduğunuzu, anladığınızı ve sözleşmede yazan şartlarla bağlı olduğunuzu kabul etmiş sayılırsınız.",
            "agreement": "İşbu sözleşme taraflara sözleşme konusu site ile ilgili hak ve yükümlülükler yükler ve taraflar işbu sözleşmeyi kabul ettiklerinde bahsi geçen hak ve yükümlülükleri eksiksiz, doğru, zamanında, işbu sözleşmede talep edilen şartlar dâhilinde yerine getireceklerini beyan ederler."
        }
    },
    "responsibilities": {
        "title": "1. SORUMLULUKLAR",
        "itemA": "a. Firma, her zaman fiyatları ve teklif edilen ürünleri ve hizmetleri değiştirme hakkını saklı tutar.",
        "itemB": "b. Firma, sözleşme konusu hizmetleri, yukarıda belirtilen şartlar dışında, Üyeye sağlamayı taahhüt eder.",
        "itemC": "c. Üye, üyelik sırasında girilen bilgilerin doğruluğu ve güncelliğinden sorumludur.",
        "itemD": "d. Üye, kendisine ait olan üye adı ve şifresini koruma ve gizliliğini sağlama konusundan sorumludur."
    },
    "intellectualProperty": {
        "title": "2. FİKRİ MÜLKİYET HAKLARI",
        "itemA": "a. İnternet sitesinin içeriği, tasarımı, yapısı ve görsel unsurlarına ilişkin tüm mülkiyet veya lisans hakları Firma ve lisans sahiplerine aittir.",
        "itemB": "b. Firma izni olmaksızın web sitesindeki herhangi bir içeriğin kullanımı, çoğaltılması, dağıtılması, görüntülenmesi veya iletilmesi yasaktır."
    },
    "confidentialInfo": {
        "title": "3. GİZLİ BİLGİLER",
        "itemA": "a. Üye, bu Sözleşme çerçevesinde Şirkete iletilen bilgilerin gizli olarak kabul edilmediğini ve taahhüt eder.",
        "itemB": "b. Şirket, üyelerin kişisel bilgilerini üçüncü kişilere ve kurumlara açıklamamayı taahhüt eder. Yalnızca yasal otoritelerin ve yetkili idari ve adli makamların emri ile açıklanabilir."
    },
    "noGuarantee": {
        "title": "4. GARANTİ YOK",
        "content": "Firma, web sitesinin ve içeriğinin her zaman hatasız ve kesintisiz olacağını garanti etmez."
    },
    "registrationSecurity": {
        "title": "5. KAYIT VE GÜVENLİK",
        "itemA": "a. Üye, hesabıyla ilgili herhangi bir yetkisiz kullanım veya güvenlik ihlali durumunda Şirketi derhal bilgilendirmeyi kabul eder.",
        "itemB": "b. Firma, üye adını ve şifresini gizli tutmamaktan kaynaklanan herhangi bir zarardan sorumlu tutulamaz."
    },
    "forceMajeure": {
        "title": "6. MÜCBİR SEBEP",
        "content": "Doğal afetler, ayaklanmalar, savaşlar, grevler, iletişim sorunları, altyapı ve internet arızaları gibi mücbir sebep durumlarında Firma'nın bu Sözleşme kapsamındaki yükümlülükleri askıya alınır."
    },
    "entireAgreement": {
        "title": "7. TAM SÖZLEŞME",
        "content": "Bu Sözleşme, taraflar arasında işbu konuyla ilgili tüm anlaşma ve anlayışları içerir ve tüm önceki yazılı veya sözlü anlaşmaları ortadan kaldırır."
    },
    "changesToAgreement": {
        "title": "8. SÖZLEŞME DEĞİŞİKLİKLERİ",
        "content": "Firma, bu Sözleşme şartlarını her zaman değiştirme hakkını saklı tutar. Üye, değişiklikleri düzenli olarak gözden geçirmekle yükümlüdür."
    },
    "notification": {
        "title": "9. BİLDİRİM",
        "content": "Bu Sözleşme'ye ilişkin taraflarca yapılacak tüm bildirimler, üyelik kaydı sırasında belirtilen e-posta adreslerine yapılacaktır."
    },
    "evidenceAgreement": {
        "title": "10. DELİL ANLAŞMASI",
        "content": "Bu Sözleşme’den kaynaklanan herhangi bir ihtilaf durumunda, Şirketin kendi veri tabanı ve sunucu sistemlerindeki kayıtları ve belgeleri bağlayıcı, kesin ve münhasır delil teşkil eder."
    },
    "disputeResolution": {
        "title": "11. UYUŞMAZLIK ÇÖZÜMÜ",
        "content": "Bu Sözleşme’den kaynaklanabilecek uyuşmazlıklarda İstanbul Merkez Mahkemeleri ve İcra Daireleri yetkilidir."
    },

    "personalDataProtectionAuthority": {
        "title": "Kişisel Verilerin Korunması Kurumu",
        "informationText": "KİŞİSEL VERİLERİN KORUNMASI HAKKINDA BİLGİLENDİRME METNİ",
        "personalDataDisclosure": "Erma Group Turizm Sanayi ve Ticaret A.Ş. ('Erma Group' veya 'Şirket' olarak anılacaktır), kişisel verilerinizin gizliliği ve güvenliğini en önemli önceliklerimizden biri olarak kabul eder. Bu bağlamda, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ('KVKK') 10. maddesinden kaynaklanan açıklama yükümlülüğümüz gereği, www.nefesol.com, www.enucuz24.com, www.baumabo.com web siteleri ve/veya mobil uygulamaları üzerinden Erma Group tarafından işlenen kişisel verileriniz hakkında sizi bilgilendirmek istiyoruz. Kişisel veri, kimliğinizi belirli veya belirlenebilir kılan her türlü bilgiyi ifade eder. Aşağıda, Erma Group tarafından işlenen kişisel verileriniz, işleme amaçları, aktarılabilecek alıcı grupları, toplama yöntemleri, hukuki nedenler ve bu kişisel verilerle ilgili haklarınız hakkında bilgi sunuyoruz.",
        "processedData": "Erma Group'un web siteleri ve mobil uygulamaları tarafından hangi kişisel verileriniz işlenmektedir?",
        "processedDataDescription": "Erma Group'un web siteleri ve mobil uygulamaları üzerinden üyelik sözleşmesini kabul ederek web sitesine veya mobil uygulamaya giriş yapan ve platform üzerindeki ürünleri takip eden ve/veya satın alan kişiler üye olarak tanımlanır. Eğer üye iseniz, aşağıdaki kişisel verileriniz işlenebilir: Kimlik Bilgileriniz: ad, soyad, Türkiye Cumhuriyeti Kimlik Numarası (sadece belirli ürün kategorileri için ilgili mevzuata uygun olarak işlenir), cinsiyet, doğum tarihi, yükseklik ve ağırlık bilgileri tarafınızca sağlanmışsa. İletişim Bilgileri: telefon numarası, teslimat adresi, e-posta adresi. Müşteri İşlem Bilgileri: sipariş ve fatura bilgileri, teslimat işlem bilgileri, satın alımlarınıza ilişkin işlem geçmişi, yorumlarınız ve/veya sorularınız varsa ürünlerle ilgili platform üzerinde yorum yapmanız ve/veya soru sorma. Sorularınız hakkında kişisel olarak paylaştığınız bilgiler, Erma Group müşteri temsilcileri ile sohbet veya WhatsApp kanalı üzerinden yaptığınız konuşmalar hakkında bilgi. Sipariş bilgileriniz. İşlem Güvenlik Bilgileri: IP adresi bilgileri, parola ve parola bilgileri, çerez bilgileri. Pazarlama Bilgileri: alışveriş geçmişi bilgileri, kullanılan kampanya bilgileri, profil oluşturma ve segmentasyon bilgileri, çerez kayıtları. Yasal İşlem Bilgileri: yetkili kişilerle yazışmalar, kurum ve kuruluşlar, dava ve icra dosyalarındaki bilgiler, yasal bilgi talep bilgileri. Ses Kaydı Bilgileri: çağrı merkezi ile iletişime geçtiğinizde ses kayıtlarınız. Görsel ve Kurumsal Bilgiler: etkinliklerdeki resimler, logolar, başlıklar, isimler, bilgiler, resimler ve etkinliklerdeki görev ve sorumluluklar hakkındaki bilgiler.",
        "processingPurposes": "Kişisel verilerinizin işlenme amaçları ve toplama yöntemleri nelerdir?",
        "processingPurposesDescription": "Kimlik, iletişim ve müşteri işlem bilgileriniz, aşağıdaki amaçlar doğrultusunda sözleşmesel ilişkimiz kapsamında sizden, mobil uygulama veya web sitesinden otomatik olarak elektronik ortamda toplanır ve işlenir: sözleşme kurulması ve yerine getirilmesi ile ilgili işlemleri gerçekleştirmek; finansal ve muhasebe süreçlerini yürütmek ve denetlemek; şirket iş faaliyetlerini ve kontrollerini yürütmek; fatura süreçlerini yürütmek; lojistik, kargo faaliyetleri ve teslimat takibi süreçlerini yürütmek; özellikle işlem sırasında kimlik bilgilerinizi eklemek ve onaylamak suretiyle, özellikle daha iyi bir alışveriş deneyimi sağlamak ve memnuniyeti artırmak; açık rıza ile çeşitli pazarlama ve reklam faaliyetleri için kullanmak; sizin tercihlerinize uygun ürünleri sunmak; ilgili faaliyetleri yürütmek; müşteri memnuniyetini artırmak; platformda alışveriş yapan müşterilerimizi tanımak ve müşteri ortam analizi yapmak; şirketimizin sunduğu ürün ve hizmetleri geliştirmek ve iyileştirmek; stratejik analiz çalışmaları yürütmek; iletişim faaliyetleri yürütmek; ilgi alanlarınıza göre size uygun ürünleri sunmak; uzaktan satış; ilgili tüketici hakları ve korunması yasasının ilgili maddeleri uyarınca platformumuzda yapılan sözleşmelerle ilgili koşulları, mevcut durumu ve güncellemeleri size bildirmek, belirli bir yasa hükmü gereği, tüketicilere sağlanan mesafeli satış sözleşmeleri gibi sözleşmelerle ilgili etkinlikler yapmak; size Erma Group'taki işlemlerle ilgili gelişmeler, fırsatlar ve yenilikler hakkında bilgi vermek amacıyla size bilgi verme faaliyetleri yürütmek; size Erma Group ile ilgili gelişmeler, fırsatlar ve yenilikler hakkında bilgi vermek; web sitesi üzerinden ve/veya mobil uygulamalar üzerinden elektronik ve/veya fiziksel olarak anketler yapmak için anketleri yürütmek; ürünlerimiz hakkında bilgi almanızı sağlamak; satış sonrası destek hizmetleri sağlamak. Bilgi Güvenliği Süreçleri: bilgi güvenliği faaliyetleri yürütmek; Erma Group olarak operasyonların güvenliğini sağlamak; yasal mevzuata uygun olarak faaliyetlerini yürütmek; yetkili kişilere, kamu kurum ve kuruluşlarına bilgi sağlamak.",
        "legalBasis": "Kişisel verilerinizin işlenmesinin hukuki nedeni nedir?",
        "legalBasisDescription": "Erma Group, web siteleri ve mobil uygulamaları üzerinden yukarıda belirtilen kişisel verilerinizi KVKK'nın 5, 8 ve 9. maddelerinde belirtilen uyumluluk için yasal gerekçeler doğrultusunda işler: Erma Group'un faaliyet gösterdiği elektronik ticaret düzenlemesi hakkında 6563 sayılı Kanun, Türk Ticaret Kanunu 6102, Türk Ceza Kanunu 5237 ve 6502 sayılı Tüketicinin Korunması Hakkında Kanun da dahil olmak üzere şirketimize uygulanan yasalar ve düzenlemelere uyum; platform üzerinde operasyonların güvenliğini sağlamak; bilgi güvenliği faaliyetleri yürütmek; ilgili mevzuattan kaynaklanan yasal yükümlülüklerin yerine getirilmesi, özellikle tüketici koruma konusundaki ilgili yasalar ve uzak satış sözleşmeleri gibi platformumuzda yapılan sözleşmelerin ilgili maddeleri altında sözleşme kurma işlemlerinin yerine getirilmesi; satın alma işlemleri ile ilgili faaliyetlerin gerçekleştirilmesi; şirket iş faaliyetlerini yürütmek; teslimat süreçlerini denetlemek; ürün ve hizmetlerimizin geliştirilmesi ve iyileştirilmesi için faaliyetlerde bulunmak; alışveriş deneyimlerini geliştirme ve memnuniyeti artırma; müşteri ortam analizinde kullanma ve platformda alışveriş yapan müşterilerimizi tanıma; şirketimizin sunduğu ürün ve hizmetlerin geliştirilmesi ve iyileştirilmesi; stratejik analiz çalışmaları yapma; iletişim faaliyetleri yürütme; ilgi alanlarınıza göre size uygun ürünleri sunma; uzaktan satış yapma; Erma Group platformumuzda yapılan sözleşmeler hakkında koşulları, mevcut durumu ve güncellemeleri size bildirme; tüketici hakları ve korunması yasasının ilgili maddeleri gereğince uzak satış sözleşmeleri gibi sözleşmelerle ilgili koşulları, mevcut durumu ve güncellemeleri size bildirme; gelişmeler, fırsatlar ve yenilikler hakkında size bilgi verme; Erma Group'taki işlemlerle ilgili gelişmeler, fırsatlar ve yenilikler hakkında bilgi verme; web sitesi üzerinden ve/veya mobil uygulamalar üzerinden elektronik ve/veya fiziksel olarak anketler yapma; ürünlerimiz hakkında bilgi verme; satış sonrası destek hizmetleri sağlama; iş süreçlerinin yürütülmesi; bilgi güvenliği faaliyetlerinin yürütülmesi; Erma Group olarak operasyon güvenliğinin sağlanması; mevzuata uyumun sağlanması; yetkili kişilere, kamu kurum ve kuruluşlarına bilgi sağlama.",
        "dataTransfer": "Erma Group, kişisel verilerinizi kime ve hangi amaçlarla aktarır?",
        "dataTransferDescription": "Erma Group, kişisel verilerinizle ilgili olarak 'bilmeye' ve 'kullanmaya' yönelik ilkeler üzerinde işlem yapar, veri minimalizasyon gereksinimlerine uyum sağlamaya çalışır ve gerekli teknik ve idari güvenlik önlemlerini uygular. İşletme veya kontrol etme faaliyetlerinin doğası gereği, iş sürekliliğini sağlama ve dijital altyapıları işletme ile ilgili belirli amaçlar için sürekli veri akışı gereklidir. Bu nedenle, sizin tarafınızdan işlenen kişisel verilerle ilgili olarak üçüncü şahıslara aktarmak zorundayız. Ayrıca, kişisel verilerinizin tam ve doğru bir şekilde işleme ve yasal yükümlülüklerimizi tam ve doğru bir şekilde yerine getirmeniz gerekmektedir. Bu nedenle, çeşitli iş ortakları ve hizmet sağlayıcılarla iş birliği yaparız. Kişisel verileriniz, satın alınan ürünlerin satıcıları, Erma Group adına ürün teslimatı yapan kurye şirketleri ve iş süreçlerine destek sağlayan hizmet sağlayıcılar gibi üçüncü taraflarla paylaşılabilir. Özellikle, kişisel verileriniz, ürün satıcıları, hizmet sağlayıcıları, iş ortakları, bankalar, finansal danışmanlar, satış sonrası destek hizmetleri için çağrı merkezi hizmetleri sağlayan iş ortakları, kalite kontrol hizmet sağlayıcıları, şikayet yönetimi ve risk analizi hizmetleri sağlayan iş ortakları, finans ve muhasebe hizmetleri sağlayıcıları, risk yönetimi ve finansal raporlama hizmet sağlayıcıları, IT altyapı hizmet sağlayıcıları, özel entegrasyon, bağımsız denetim, gümrük ve finansal danışman/muhasebe hizmet sağlayıcıları, Hazine ve Maliye Bakanlığı yetkililerine fatura ve tahsilat makbuzu için bilgi sağlamak ve Türkiye veya yurtdışında yer alan iş ortaklarımız ve tedarikçilerimiz gibi üçüncü taraflarla paylaşılabilir."
      },

      
      "generalInfo": {
        "title": "GENEL:",
        "content": [
          "Kullanmakta olduğunuz web sitesi üzerinden elektronik ortamda sipariş verdiğiniz takdirde, size sunulan ön bilgilendirme formunu ve mesafeli satış sözleşmesini kabul etmiş sayılırsınız.",
          "Alıcılar, satın aldıkları ürünün satış ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği (RG:27.11.2014/29188) hükümleri ile yürürlükteki diğer yasalara tabidir.",
          "Ürün sevkiyat masrafı olan kargo ücretleri alıcılar tarafından ödenecektir.",
          "Satın alınan her bir ürün, 30 günlük yasal süreyi aşmamak kaydı ile alıcının gösterdiği adresteki kişi ve/veya kuruluşa teslim edilir. Bu süre içinde ürün teslim edilmez ise, Alıcılar sözleşmeyi sona erdirebilir.",
          "Satın alınan ürün, eksiksiz ve siparişte belirtilen niteliklere uygun ve varsa garanti belgesi, kullanım klavuzu gibi belgelerle teslim edilmek zorundadır.",
          "Satın alınan ürünün satılmasının imkansızlaşması durumunda, satıcı bu durumu öğrendiğinden itibaren 3 gün içinde yazılı olarak alıcıya bu durumu bildirmek zorundadır. 14 gün içinde de toplam bedel Alıcı’ya iade edilmek zorundadır."
        ]
      },

      "additionalInfo": {
        "unpaidProductPrice": {
          "title": "SATIN ALINAN ÜRÜN BEDELİ ÖDENMEZ İSE:",
          "content": "Alıcı, satın aldığı ürün veya hizmetin bedelini ödemez veya banka kayıtlarında iptal ederse, Satıcının ürünü veya hizmeti teslim yükümlülüğü sona erer."
        },
        "unauthorizedCreditCardUsage": {
          "title": "KREDİ KARTININ YETKİSİZ KULLANIMI İLE YAPILAN ALIŞVERİŞLER:",
          "content": "Ürün teslim edildikten sonra, alıcının ödeme yaptığı kredi kartının yetkisiz kişiler tarafından haksız olarak kullanıldığı tespit edilirse ve satılan ürün veya hizmet bedeli ilgili banka veya finans kuruluşu tarafından Satıcı'ya ödenmez ise, Alıcı, sözleşme konusu ürünü 3 gün içerisinde nakliye gideri SATICI’ya ait olacak şekilde SATICI’ya iade etmek zorundadır."
        },
        "undeliverableProductDueToUnforeseenReasons": {
          "title": "ÖNGÖRÜLEMEYEN SEBEPLERLE ÜRÜN SÜRESİNDE TESLİM EDİLEMEZ İSE:",
          "content": "Satıcı’nın öngöremeyeceği mücbir sebepler oluşursa ve ürün süresinde teslim edilemez ise, durum Alıcı’ya bildirilir. Alıcı, siparişin iptalini, ürünün benzeri ile değiştirilmesini veya engel ortadan kalkana dek teslimatın ertelenmesini talep edebilir. Alıcı siparişi iptal ederse; ödemeyi nakit ile yapmış ise iptalinden itibaren 14 gün içinde kendisine nakden bu ücret ödenir. Alıcı, ödemeyi kredi kartı ile yapmış ise ve iptal ederse, bu iptalden itibaren yine 14 gün içinde ürün bedeli bankaya iade edilir, ancak bankanın alıcının hesabına 2-3 hafta içerisinde aktarması olasıdır."
        },
        "buyerResponsibilityToInspectProduct": {
          "title": "ALICININ ÜRÜNÜ KONTROL ETME YÜKÜMLÜLÜĞÜ:",
          "content": "Alıcı, sözleşme konusu mal/hizmeti teslim almadan önce muayene edecek; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı mal/hizmeti kargo şirketinden teslim almayacaktır. Teslim alınan mal/hizmetin hasarsız ve sağlam olduğu kabul edilecektir. ALICI , Teslimden sonra mal/hizmeti özenle korunmak zorundadır. Cayma hakkı kullanılacaksa mal/hizmet kullanılmamalıdır. Ürünle birlikte Fatura da iade edilmelidir."
        }
      },

      "withdrawalRight": {
        "title": "CAYMA HAKKI:",
        "content": "ALICI; satın aldığı ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren 14 (on dört) gün içerisinde, SATICI’ya aşağıdaki iletişim bilgileri üzerinden bildirmek şartıyla hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkını kullanabilir."
      },
      "sellerWithdrawalContact": {
        "title": "SATICININ CAYMA HAKKI BİLDİRİMİ YAPILACAK İLETİŞİM BİLGİLERİ:",
        "company": "ŞİRKET ADI/UNVANI: ERMA GROUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ",
        "address": "ADRES: ÇAMTEPE MAH. MAHMUT TEVFİK ATAY BULV. GAZİANTEP TEKNOPARK NO:4-A İÇ KAPO NO:1 ŞEHİTKAMİL GAZİANTEP",
        "email": "EPOSTA: info@nefesol.com",
        "phone": "TEL: 0850 309 8804"
      },
      "withdrawalPeriod": {
        "title": "CAYMA HAKKININ SÜRESİ:",
        "content": [
          "Alıcı, satın aldığı eğer bir hizmet ise, bu 14 günlük süre sözleşmenin imzalandığı tarihten itibaren başlar. Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile hizmetin ifasına başlanan hizmet sözleşmelerinde cayma hakkı kullanılamaz.",
          "Cayma hakkının kullanımından kaynaklanan masraflar SATICI’ ya aittir.",
          "Cayma hakkının kullanılması için 14 (ondört) günlük süre içinde SATICI' ya iadeli taahhütlü posta, faks veya eposta ile yazılı bildirimde bulunulması ve ürünün işbu sözleşmede düzenlenen 'Cayma Hakkı Kullanılamayacak Ürünler' hükümleri çerçevesinde kullanılmamış olması şarttır."
        ]
      },
      "useOfWithdrawalRight": {
        "title": "CAYMA HAKKININ KULLANIMI:",
        "content": "3. kişiye veya ALICI’ ya teslim edilen ürünün faturası, (İade edilmek istenen ürünün faturası kurumsal ise, iade ederken kurumun düzenlemiş olduğu iade faturası ile birlikte gönderilmesi gerekmektedir. Faturası kurumlar adına düzenlenen sipariş iadeleri İADE FATURASI kesilmediği takdirde tamamlanamayacaktır.) İade formu, İade edilecek ürünlerin kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi gerekmektedir."
      },

    //   "returnConditions": {
    //     "title": "İADE KOŞULLARI:",
    //     "content": [
    //       "SATICI, cayma bildiriminin kendisine ulaşmasından itibaren en geç 10 günlük süre içerisinde toplam bedeli ve ALICI’yı borç altına sokan belgeleri ALICI’ya iade etmek ve 20 günlük süre içerisinde malı iade almakla yükümlüdür.",
    //       "ALICI’nın kusurundan kaynaklanan bir nedenle malın değerinde bir azalma olursa veya iade imkânsızlaşırsa, ALICI kusuru oranında SATICI’nın zararlarını tazmin etmekle yükümlüdür. Ancak cayma hakkı süresi içinde malın veya ürünün usulüne uygun kullanılması sebebiyle meydana gelen değişiklik ve bozulmalardan ALICI sorumlu değildir.",
    //       "Cayma hakkının kullanılması nedeniyle SATICI tarafından düzenlenen kampanya limit tutarının altına düşülmesi halinde, kampanya kapsamında faydalanılan indirim miktarı iptal edilir."
    //     ]
    //   },
    //   "nonReturnableProducts": {
    //     "title": "CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER:",
    //     "content": [
    //       "ALICI’nın isteği veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan ve geri gönderilmeye müsait olmayan, iç giyim alt parçaları, mayo ve bikini altları, makyaj malzemeleri, tek kullanımlık ürünler, çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan mallar, ALICI’ya teslim edilmesinin ardından ALICI tarafından ambalajı açıldığı takdirde iade edilmesi sağlık ve hijyen açısından uygun olmayan ürünler, teslim edildikten sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan ürünler, Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınlara ilişkin mallar, Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallar, ile ses veya görüntü kayıtlarının, kitap, dijital içerik, yazılım programlarının, veri kaydedebilme ve veri depolama cihazlarının, bilgisayar sarf malzemelerinin, ambalajının ALICI tarafından açılmış olması halinde iadesi Yönetmelik gereği mümkün değildir. Kişiye özel dikimi yapılan ağaçlar, bitkiler, firma veya kişiye özel yapılmış yazılımlar, Ayrıca Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile ifasına başlanan hizmetlere ilişkin cayma hakkının kullanılması da Yönetmelik gereği mümkün değildir."
    //     ]
    //   },
    //   "defaultAndLegalConsequences": {
    //     "title": "TEMERRÜT HALİ VE HUKUKİ SONUÇLARI",
    //     "content": [
    //       "ALICI, ödeme işlemlerini kredi kartı ile yaptığı durumda temerrüde düştüğü takdirde, kart sahibi banka ile arasındaki kredi kartı sözleşmesi çerçevesinde faiz ödeyeceğini ve bankaya karşı sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara başvurabilir; doğacak masrafları ve vekâlet ücretini ALICI’dan talep edebilir ve her koşulda ALICI’nın borcundan dolayı temerrüde düşmesi halinde, ALICI, borcun gecikmeli ifasından dolayı SATICI’nın uğradığı zarar ve ziyanını ödeyeceğini kabul eder."
    //     ]
    //   },
    //   "paymentAndDelivery": {
    //     "title": "ÖDEME VE TESLİMAT",
    //     "content": [
    //       "Web sitemiz üzerinden Halk bankası hesabımıza Iban numaramız:TR79 0001 2009 3710 0010 2618 55 nolu hesabımıza yatırma işlemi gerçekleştirebilirsiniz.",
    //       "Sitemiz üzerinden kredi kartlarınız ile, Her türlü kredi kartınıza online tek ödeme ya da online taksit imkânlarından yararlanabilirsiniz. Online ödemelerinizde siparişiniz sonunda kredi kartınızdan tutar çekim işlemi gerçekleşecektir."
    //     ]
    //   },

      "returnConditions": {
        "title": "İADE KOŞULLARI:",
        "content": [
          "SATICI, cayma bildiriminin kendisine ulaşmasından itibaren en geç 10 günlük süre içerisinde toplam bedeli ve ALICI’yı borç altına sokan belgeleri ALICI’ya iade etmek ve 20 günlük süre içerisinde malı iade almakla yükümlüdür.",
          "ALICI’nın kusurundan kaynaklanan bir nedenle malın değerinde bir azalma olursa veya iade imkânsızlaşırsa, ALICI kusuru oranında SATICI’nın zararlarını tazmin etmekle yükümlüdür. Ancak cayma hakkı süresi içinde malın veya ürünün usulüne uygun kullanılması sebebiyle meydana gelen değişiklik ve bozulmalardan ALICI sorumlu değildir.",
          "Cayma hakkının kullanılması nedeniyle SATICI tarafından düzenlenen kampanya limit tutarının altına düşülmesi halinde, kampanya kapsamında faydalanılan indirim miktarı iptal edilir."
        ]
      },
      "nonReturnableProducts": {
        "title": "CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER:",
        "content": [
          "ALICI’nın isteği veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan ve geri gönderilmeye müsait olmayan, iç giyim alt parçaları, mayo ve bikini altları, makyaj malzemeleri, tek kullanımlık ürünler, çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan mallar, ALICI’ya teslim edilmesinin ardından ALICI tarafından ambalajı açıldığı takdirde iade edilmesi sağlık ve hijyen açısından uygun olmayan ürünler, teslim edildikten sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan ürünler, Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınlara ilişkin mallar, Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallar, ile ses veya görüntü kayıtlarının, kitap, dijital içerik, yazılım programlarının, veri kaydedebilme ve veri depolama cihazlarının, bilgisayar sarf malzemelerinin, ambalajının ALICI tarafından açılmış olması halinde iadesi Yönetmelik gereği mümkün değildir. Kişiye özel dikimi yapılan ağaçlar, bitkiler, firma veya kişiye özel yapılmış yazılımlar, Ayrıca Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile ifasına başlanan hizmetlere ilişkin cayma hakkının kullanılması da Yönetmelik gereği mümkün değildir."
        ]
      },
      "defaultAndLegalConsequences": {
        "title": "TEMERRÜT HALİ VE HUKUKİ SONUÇLARI",
        "content": [
          "ALICI, ödeme işlemlerini kredi kartı ile yaptığı durumda temerrüde düştüğü takdirde, kart sahibi banka ile arasındaki kredi kartı sözleşmesi çerçevesinde faiz ödeyeceğini ve bankaya karşı sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara başvurabilir; doğacak masrafları ve vekâlet ücretini ALICI’dan talep edebilir ve her koşulda ALICI’nın borcundan dolayı temerrüde düşmesi halinde, ALICI, borcun gecikmeli ifasından dolayı SATICI’nın uğradığı zarar ve ziyanını ödeyeceğini kabul eder."
        ]
      },
      "paymentAndDelivery": {
        "title": "ÖDEME VE TESLİMAT",
        "content": [
          "Web sitemiz üzerinden Halk bankası hesabımıza Iban numaramız:TR79 0001 2009 3710 0010 2618 55 nolu hesabımıza yatırma işlemi gerçekleştirebilirsiniz.",
          "Sitemiz üzerinden kredi kartlarınız ile, Her türlü kredi kartınıza online tek ödeme ya da online taksit imkânlarından yararlanabilirsiniz. Online ödemelerinizde siparişiniz sonunda kredi kartınızdan tutar çekim işlemi gerçekleşecektir."
        ]
      },

      "cancellationAndReturnPolicy": {
      "title": "İptal İade Politikası",
      "description": "TÜKETİCİ HAKLARI – CAYMA – İPTAL İADE KOŞULLARI"
    },

        "reduction": "Azaltma",
        "developmentGreenTechnologies": "Yeşil Teknolojilerin Geliştirilmesi",
        "eachTreeBreath": "Her ağaç; bir nefes,",
        "everyBreathHope": "her nefes bir umut!",
         "takeActionGreenFuture": "Yeşil bir gelecek için harekete geçin",

         "co2Calculator": "Hesaplayıcı",
         "vehicles": "Araçlar",
         "airplane": "Uçak",
         "home": "Ev",
         "food": "Yiyecek",
         "clearAll": "Hepsini Temizle",
         "prev": "Önceki",
         "nextCategory": "Sonraki Kategori",
         "totalCO2": "Kullanımınız boyunca ürettiğiniz toplam CO2",
         "eliminateCO2": "Bu CO2'yi ortadan kaldırmak için",
         "proceedToPlant": "Ağaç Dikmeye Devam Edin",

         "every100km": "Her 100 km kullanımda",
         "liters": "Litre",
         "carsPerYear": "Yılda ortalama kaç araba kullanıyorsunuz",
         "kilometers": "Kilometre",
         "yearlyUsage": "Bu nedenle her yıl şunları kullanıyorsunuz",
         "litersPerYear": "Litre yılda",
         "calculationNote": "Hesaplanan veriler kişisel karbon hesaplamasına göre yapılmıştır. Kişisel hesaplar ağaç hesabına göre dengelemelidir. Ünite başına hesaplanan ağaçlar, Avrupa Birliği CTS sistemindeki verilere göre hesaplanır ve ağacın türüne ve yaşına bağlı olarak değişebilir. Bu dengeleme Ağaçlandırma Telafi Projesi kapsamındadır.",
         
         "edit": "Düzenle",
         "delete": "Sil",
         "routeDescription": "Örnek rota açıklaması",
         "departureAirport": "Kalkış Havalimanı",
         "selectAirport": "Havalimanı seçin",
         "arrivalAirport": "Varış Havalimanı",
         "tripType": "Seyahat Türü",
         "roundTrip": "Gidiş Dönüş",
         "oneWayTrip": "Tek Yön",
         "averageFlightTimes": "Ortalama Uçuş Süreleri",
         "averageCalculatedDistance": "Ortalama Hesaplanan Mesafe",
         "kWhPerYear": "kWh yılda",
         "averageAnnualFlights": "Ortalama Yıllık Uçuşlar",
         "addMoreRoutes": "Daha Fazla Rota Ekle",
         "clickToAddRoutes": "Daha fazla rota eklemek için tıklayın",

         "howBigIsYourHouse": "Ev ne kadar büyük?",
         
         "howManyBedrooms": "Evde kaç yatak odası var?",
         "howMuchElectricity": "Ne kadar elektrik kullanıyorsunuz?",
         "low": "Düşük",
         "normal": "Normal",
         "high": "Yüksek",
         "defineElectricityUse": "Elektrik kullanımınızı nasıl tanımlarsınız?",
         "energySource" : "Enerjiniz nereden geliyor?",
         "ecoPower": "Eko Güç",
         "power": "Güç",
         "naturalGas": "Doğal Gaz",
         "oil": "Yağ",
         "regionalHeating": "Bölgesel Isıtma",
         "wood": "Odun",
         "annualAveragePowerConsumption": "Yıllık Ortalama Enerji Tüketimi",
         "kWhPerYearValue": "Yılda KWh",

         "whatIsYourFoodLike": "Yemeğiniz nasıl?",
         "selectFoodType": "Seçiniz",
         "whatFoodProductsDoYouMainlyBuy": "Hangi gıda ürünlerini genellikle satın alıyorsunuz?",
         "doYouExercise": "Egzersiz yapıyor musunuz?",
         "doYouBuyOrganicFood": "Organik gıda alıyor musunuz?",
         "howOftenDoYouEatFrozenFoods": "Ne sıklıkta dondurulmuş gıdalar tüketirsiniz?",
         "annualAverageFoodConsumption": "Yıllık ortalama gıda tüketimi",
         "kgPerYear": "KG yılda"
      }
    }
  }
});

export default i18n;
