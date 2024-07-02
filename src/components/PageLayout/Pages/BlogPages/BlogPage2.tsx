import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import BeatLoader from "react-spinners/BeatLoader";
import useScrollToTop from "@/hooks/ScrollToTop";


const BlogPage2 = () => {
  useScrollToTop();
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
        <p className="text-bgGreen text-[24px] md:text-[32px] lg:text-[40px] ml-0 md:ml-[80px] lg:ml-[159px]">Nefes Ol: Çevresel Bilinçliliğe Katkıda Bulunmanın Adresi</p>

        <div className="flex py-10 items-center justify-center flex-col">
          <img src="./assets/blog2ImageFull.jpg" alt="Blog2 Image Full" className="w-full max-w-[1100px]"/>

          <div className="w-full max-w-[1058px] flex-col py-10 justify-center space-y-10 flex">
            <p className="text-bgGreen text-[16px] md:text-[18px] lg:text-[20px]">
            Günümüzde, dünya çapında artan çevre sorunları, insanlığın karşı karşıya olduğu en büyük zorluklardan biri olarak öne çıkıyor. İklim değişikliği, doğal kaynakların tükenmesi, denizlerin ve ormanların hızla yok olması gibi tehditler, sadece şimdi değil, gelecek nesiller için de büyük endişe kaynağı. Ancak, bu sorunların üstesinden gelme konusunda birlikte hareket edebilir ve sürdürülebilir bir gelecek için çözümler üretebiliriz. İşte tam da bu noktada, Nefesol.com devreye giriyor.
            </p>

            <div className="space-y-5">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Nefesol.com Nedir?</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
              Nefesol.com, çevresel bilinçliliğin artırılmasına ve sürdürülebilirlik için adımlar atılmasına katkıda bulunmayı hedefleyen bir platformdur. Birçok kişi için sadece bir internet sitesi gibi görünebilir, ancak aslında çok daha fazlasını sunar. Nefesol.com, gezegenimizin geleceği için kritik olan yeşil teknolojiler, çevre dostu ürünler ve sürdürülebilir projeler hakkında kapsamlı bir bilgi kaynağıdır.
              </p>

              <p className="text-[24px] md:text-[28px] lg:text-[32px] text-bgGreen">Çevresel Bilinçlilik ve Farkındalık</p>
              <div className="flex flex-col">
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">
                    Nefesol.com, çevresel bilinçliliği artırmak için güçlü bir araç olarak görüyor. Peki, bu bilinçlilik neden bu kadar önemli? İlk olarak, çevre sorunlarının farkında olmak, bu sorunların çözümü için bir adım atmamıza yardımcı olur. İkincisi, çevresel bilinçlilik, bireylerin ve toplulukların daha sürdürülebilir yaşam tarzlarına geçiş yapmasını teşvik eder.
                    </p>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">Nefesol.com'da, çevresel bilinçliliği artırmak için bir dizi kaynak sunuyoruz. Bunlar arasında:</p>
                </div>
            </div>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Yeşil Teknolojiler Hakkında Bilgilendirici Makaleler:</span> 
              Geleceğin teknolojilerini anlamak, çevre sorunlarına karşı daha iyi hazırlıklı olmamıza yardımcı olur. Nefesol.com'da, yeşil teknolojileri inceleyen makaleler bulabilirsiniz. Güneş enerjisi, rüzgar enerjisi, elektrikli taşıtlar ve daha fazlası hakkında bilgi sahibi olabilirsiniz.
              </p>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Çevre Dostu Ürünler ve Projeler Hakkında Haberler:</span> 
              Sürdürülebilir ürünler ve çevre projeleri, çevremizi korumak ve iyileştirmek için önemlidir. Nefesol.com, bu alandaki güncel haberleri ve bilgileri sizinle paylaşır.
              </p>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Bireysel ve Toplumsal Değişim İçin İlham:</span> 
              Her birimizin yapabileceği bir şeyler vardır. Nefesol.com'da, çevre dostu yaşam tarzına geçiş yapmak için ilham alabileceğiniz ipuçları ve rehberler bulabilirsiniz. Bu, atılacak küçük adımların büyük bir etkiye sahip olabileceği bir dönüşümü başlatmanıza yardımcı olabilir.
              </p>
              
              <div className="flex flex-col ">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen font-bold">Sürdürülebilir Bir Gelecek İçin Teknolojinin Gücü</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">Nefesol.com olarak, sürdürülebilir bir geleceği şekillendirmek için teknolojinin gücüne inanıyoruz. İnovasyon ve teknoloji, çevresel sorunlara çözüm bulma konusunda büyük bir potansiyele sahiptir. Bu nedenle, platformumuzda çevre dostu teknolojileri ve sürdürülebilir uygulamaları yakından takip ediyoruz ve bu konuda detaylı içerikler sunuyoruz.</p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">Sürdürülebilir bir gelecek, yenilikçi teknolojilerle mümkün olacaktır. Bu bağlamda, Nefesol.com üzerinde şunları bulabilirsiniz:</p>
              </div>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Yeşil Enerji Çözümleri:</span> 
              Güneş panelleri, rüzgar türbinleri, hidroelektrik enerji ve diğer yenilenebilir enerji kaynakları hakkında derinlemesine bilgi.
              </p>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Enerji Verimliliği Stratejileri:</span> 
              Evlerin, işyerlerinin ve endüstrilerin enerji verimliliğini artırmak için kullanabilecekleri stratejiler.
              </p>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Sürdürülebilir Ulaşım:</span> 
              Elektrikli araçlar, halka açık ulaşım sistemleri ve bisiklet paylaşım programları gibi sürdürülebilir ulaşım seçenekleri hakkında kılavuzlar.
              </p>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen"><span className="font-bold mr-2">Çevre Dostu Ürün İncelemeleri:</span> 
              Sürdürülebilir malzemelerden üretilmiş ürünler hakkında ayrıntılı incelemeler.
              </p>

              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen font-bold opacity-70">Siz de Nefes Olun!</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">Dünyamızın geleceği hepimizin sorumluluğundadır. Nefesol.com olarak, her bireyin çevresel bilinçlilik konusunda katkıda bulunabileceğine inanıyoruz. Sizleri Nefesol.com'a katılmaya ve çevre dostu bir dünya için birlikte çalışmaya davet ediyoruz. Sağlıklı ve sürdürülebilir bir gelecek için adım atmak için Nefesol.com'a katılın ve değişime katkıda bulunun.</p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-bgGreen">Unutmayın, bir nefes almak sadece sizin için değil, tüm yaşamı sürdüren doğa için önemlidir. Nefes olun, dünyayı yeşil ve temiz bir yer yapmak için birlikte çalışalım. Gezegenimizin geleceği sizin elinizde.</p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage2;
