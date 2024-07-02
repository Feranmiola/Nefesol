import useScrollToTop from "@/hooks/ScrollToTop";
import { useTranslation } from "react-i18next"


const DistanceSellingContract = () => {
    useScrollToTop()
    const {t} = useTranslation();
  return (
    <div className="py-10 md:py-20 mt-5 md:mt-10 w-full">
        <div className="flex flex-col space-y-5 items-center justify-center">
            <p className="text-linkGreen font-semibold text-[16px] md:text-[18px] text-center">
            {t('distanceSalesContract')}
            </p>
        <p className='text-bgGreen text-[40px] max-sm:text-[20px] text-center font-medium w-[1145px] max-sm:w-[300px]'>{t('distanceSalesContractTitle')}</p>

        <div className="flex flex-col space-y-2 md:space-y-5 px-4 md:px-0 max-w-[70rem]">
            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                    {t('parties')}
                </p>
                <div className="flex flex-col space-y-1">
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                        {t('partiesDetail')}
                        </p>
                        {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                        A.'ALICI' ; (sözleşmede bundan sonra "ALICI" olarak anılacaktır)
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                        B.'SATICI' ; (sözleşmede bundan sonra "SATICI" olarak anılacaktır)
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                        AD- SOYAD: ERMA GROUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                        ADRES:Çamtepe mah. Mahmut Tevfik Atay Bulv. Gaziantep Teknopark No:4 A iç kapı no:1 Şahinbey GAZİANTEP
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                        İş bu sözleşmeyi kabul etmekle ALICI, sözleşme konusu siparişi onayladığı takdirde sipariş konusu bedeli ve varsa kargo ücreti, vergi gibi belirtilen ek ücretleri ödeme yükümlülüğü altına gireceğini ve bu konuda bilgilendirildiğini peşinen kabul eder.
                        </p> */}
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                    {t('definitions')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('definitionsDetail')}
                    </p>
                    {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                    BAKAN: Gümrük ve Ticaret Bakanı'nı,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    BAKANLIK: Gümrük ve Ticaret  Bakanlığı'nı,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    KANUN: 6502 sayılı Tüketicinin Korunması Hakkında Kanun'u,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    YÖNETMELİK: Mesafeli Sözleşmeler Yönetmeliği'ni (RG:27.11.2014/29188)
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    HİZMET: Bir ücret veya menfaat karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işleminin konusunu ,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    SATICI: Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan veya mal sunan adına veya hesabına hareket eden şirketi,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    ALICI: Bir mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen, kullanan veya yararlanan gerçek ya da tüzel kişiyi,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    SİTE: SATICI'ya ait internet sitesini,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    SİPARİŞ VEREN: Bir mal veya hizmeti SATICI'ya ait internet sitesi üzerinden talep eden gerçek ya da tüzel kişiyi,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    TARAFLAR: SATICI ve ALICI'yı,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    SÖZLEŞME: SATICI ve ALICI arasında akdedilen işbu sözleşmeyi,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    MAL: Alışverişe konu olan taşınır eşyayı ve elektronik ortamda kullanılmak üzere hazırlanan yazılım, ses, görüntü ve benzeri gayri maddi malları ve bu mallar üzerinde yapılacak işlemleri ifade eder
                    </p> */}
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                    {t('subject')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('subjectDetail')}
                    </p>
                    {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                    Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.
                    </p> */}
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('sellerInformation')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('sellerInformationDetail')}
                    </p>
                    {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                    Adres Çamtepe mah. Mahmut Tevfik Atay Bulv. Gaziantep Teknopark No:4 A iç kapı no:1 Şahinbey GAZİANTEP
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    Telefon 0850 309 8804
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    Eposta info@nefesol.com
                    </p> */}
                </div>
            </div>

            
            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('generalProvisions')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_1')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_2')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_3')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_4')}
                    </p>

                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_5')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_6')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_7')}
                    </p>

                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_8')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_9')}
                    </p>

                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_10')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_11')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_12')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_13')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_14')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_15')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_16')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('generalProvision_17')}
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('rightOfWithdrawal2')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawalDetail')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_2')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_3')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_4')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_5')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_6')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_7')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_8')}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('rightOfWithdrawal_9')}
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('nonReturnableProducts2')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('nonReturnableProductsDetail')}
                    </p>
                    {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                    Kozmetik ve kişisel bakım ürünleri, iç giyim ürünleri, mayo, bikini, kitap, kopyalanabilir yazılım ve programlar, DVD, VCD, CD ve kasetler ile kırtasiye sarf malzemeleri (toner, kartuş, şerit vb.) iade edilebilmesi için ambalajlarının açılmamış, denenmemiş, bozulmamış ve kullanılmamış olmaları gerekir.
                    </p> */}
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('defaultLegalConsequences2')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('defaultLegalConsequencesDetail')}
                    </p>
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('authorizedCourt')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('authorizedCourtDetail')}
                    </p>
                    {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                    28/05/2014 tarihinden itibaren geçerli olmak üzere:
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    a) 6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 68. Maddesi gereği değeri 2.000,00 (ikibin) TL'nin altında olan uyuşmazlıklarda ilçe tüketici hakem heyetlerine,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    b) Değeri 3.000,00(üçbin)TL' nin altında bulunan uyuşmazlıklarda il tüketici hakem heyetlerine,
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    c) Büyükşehir statüsünde bulunan illerde ise değeri 2.000,00 (ikibin) TL ile 3.000,00(üçbin)TL'  arasındaki uyuşmazlıklarda il tüketici hakem heyetlerine başvuru yapılmaktadır.
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    İşbu Sözleşme ticari amaçlarla yapılmaktadır.
                    </p> */}
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                {t('enforcement')}
                </p>
                <div className="flex flex-col space-y-1">
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    {t('enforcementDetail')}
                    </p>
                    {/* <p className="text-[14px] md:text-[16px] text-bgGreen">
                    SATICI: ßERMA GROUP TURİZM SANAYİ TİCARET ANONİM ŞİRKETİ
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    ALICI:
                    </p>
                    <p className="text-[14px] md:text-[16px] text-bgGreen">
                    TARİH:
                    </p> */}
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default DistanceSellingContract