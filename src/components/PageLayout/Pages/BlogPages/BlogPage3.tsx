import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import BeatLoader from "react-spinners/BeatLoader";
import useScrollToTop from "@/hooks/ScrollToTop";


const BlogPage3 = () => {
  useScrollToTop()
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const imageUrls = ["./assets/carbonImageBig.svg"]; // Replace with your image URLs

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    if (totalHeight > 0) {
      const progressPercentage = (scrollPosition / totalHeight) * 100;
      setProgress(progressPercentage);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  if (loading) {
    return (
      <div className="w-screen h-screen bg-white flex items-center transition ease-in-out justify-center min-h-[100vh]">
       <BeatLoader color="#0A4519" />
      </div>
    );
  }

  return (
    <div className="py-[6.5rem]">
      <div className="w-full fixed top-[4rem]">
        <Progress value={progress} id="progress-bar" className="w-full h-[12px]" />
      </div>

      <div className="py-10 px-4 md:px-8 lg:px-16">
        <p className="text-bgGreen text-[24px] md:text-[32px] lg:text-[40px] ml-0 md:ml-[80px] lg:ml-[159px]">Karbon Kredileri ve Karbon Piyasaları Nedir?</p>

        <div className="flex py-10 items-center justify-center flex-col">
          <img src="./assets/blogImage3Full.jpg" alt="Blog Image 3" className="w-full max-w-[1100px]"/>
          <p className="font bold opacity-80 text-bgGreen text-[16px] md:text-[18px] lg:text-[20px]">Karbon Kredileri ve Karbon Piyasaları: Yatırımcılar İçin Rehber</p>

          <div className="w-full max-w-[1058px] flex-col py-10 justify-center space-y-10 flex">

            <div className="space-y-5">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Karbon Kredileri ve Önemi</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
              Dünya genelinde iklim değişikliğiyle mücadelede önemli bir araç olan karbon kredileri, çevre dostu projelerin finansmanını sağlayarak sürdürülebilirlik alanında büyük bir etki yaratıyor. Nefesol.com işbirliği ile bu karbon kredileri ve karbon piyasalarında yatırım yapmanın detaylarına bir göz atalım.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Karbon Piyasalarında Yatırımcı Olmanın Avantajları</p>
              <div className="space-y-5">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
                Karbon piyasaları, çeşitli projelere yatırım yaparak hem çevre dostu girişimlere destek olma hem de finansal getiriler elde etme fırsatı sunar. Bu pazarlar, yatırımcılara sürdürülebilirlik hedeflerine ulaşmada etkin bir rol oynama şansı verir.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Nefesol.com İşbirliği ile Karbon Borsasında Yatırım</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
              Nefesol.com, karbon kredileri ve karbon piyasalarında yatırım yapmak isteyenlere güvenilir bir platform sunmaktadır. Sadece çevre dostu projelere odaklanarak, yatırımcılarına hem çevresel etki sağlama hem de finansal getiriler elde etme imkanı sunar.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Karbon Kredileri ve Yatırımların Geleceği</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
              Çevre bilincinin artmasıyla birlikte, karbon kredileri ve karbon piyasalarındaki yatırımların geleceği oldukça parlak görünüyor. Yatırımcılar, sürdürülebilirlik odaklı projelerde yer alarak hem dünyaya katkıda bulunma hem de kârlı bir yatırım yapma fırsatını değerlendirebilirler.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Sonuç</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
              Karbon kredileri ve karbon piyasaları, hem çevre hem de finansal açıdan bilinçli yatırımcılar için önemli fırsatlar sunmaktadır. Nefesol.com işbirliğiyle bu alanlarda yatırım yaparak, sürdürülebilir bir geleceğe katkıda bulunabilir ve aynı zamanda kârlı bir yatırım yapma şansını elde edebilirsiniz. Geleceğin yatırımını şimdi yapın!
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage3;
