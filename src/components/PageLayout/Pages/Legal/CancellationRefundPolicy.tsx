import { useTranslation } from "react-i18next"

const CancellationRefundPolicy = () => {
    const {t} = useTranslation();
  return (
    <div className="py-10 md:py-20 mt-5 md:mt-10 w-full">
    <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="text-linkGreen font-semibold text-[16px] md:text-[18px] text-center">
        {t('cancellationAndReturnPolicy.title')}
      </p>
      <p className="text-bgGreen text-[40px] max-sm:text-[20px] text-center font-medium w-[1145px] max-sm:w-[300px]">
        {t('cancellationAndReturnPolicy.description')}
      </p>

      <div className="flex flex-col space-y-2 md:space-y-5 px-4 md:px-0 max-w-[70rem]">
        <div className="flex flex-col space-y-2">
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('generalInfo.title')}</p>
            <div className="flex flex-col space-y-1">
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('generalInfo.content.0')}
                </p>
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('generalInfo.content.1')}
                </p>
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('generalInfo.content.2')}
                </p>
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('generalInfo.content.3')}
                </p>
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('generalInfo.content.4')}
                </p>
                <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('generalInfo.content.5')}
                </p>
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            {/* SATIN ALINAN ÜRÜN BEDELİ ÖDENMEZ İSE */}
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('additionalInfo.unpaidProductPrice.title')}</p>
            <div className="flex flex-col space-y-1">
            <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('additionalInfo.unpaidProductPrice.content')}
            </p>
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            {/* KREDİ KARTININ YETKİSİZ KULLANIMI İLE YAPILAN ALIŞVERİŞLER */}
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('additionalInfo.unauthorizedCreditCardUsage.title')}</p>
            <div className="flex flex-col space-y-1">
            <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('additionalInfo.unauthorizedCreditCardUsage.content')}
            </p>
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            {/* ÖNGÖRÜLEMEYEN SEBEPLERLE ÜRÜN SÜRESİNDE TESLİM EDİLEMEZ İSE */}
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('additionalInfo.undeliverableProductDueToUnforeseenReasons.title')}</p>
            <div className="flex flex-col space-y-1">
            <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('additionalInfo.undeliverableProductDueToUnforeseenReasons.content')}
            </p>
            </div>
        </div>

        <div className="flex flex-col space-y-2">
            {/* ALICININ ÜRÜNÜ KONTROL ETME YÜKÜMLÜLÜĞÜ */}
            <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('additionalInfo.buyerResponsibilityToInspectProduct.title')}</p>
            <div className="flex flex-col space-y-1">
            <p className="text-[14px] md:text-[16px] text-bgGreen">
                {t('additionalInfo.buyerResponsibilityToInspectProduct.content')}
            </p>
            </div>
        </div>

        <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('withdrawalRight.title')}</p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('withdrawalRight.content')}
          </p>
        </div>
      </div>

      {/* SATICININ CAYMA HAKKI BİLDİRİMİ YAPILACAK İLETİŞİM BİLGİLERİ */}
      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('sellerWithdrawalContact.title')}</p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('sellerWithdrawalContact.company')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('sellerWithdrawalContact.address')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('sellerWithdrawalContact.email')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('sellerWithdrawalContact.phone')}
          </p>
        </div>
      </div>

      {/* CAYMA HAKKININ SÜRESİ */}
      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('withdrawalPeriod.title')}</p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('withdrawalPeriod.content.0')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('withdrawalPeriod.content.1')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('withdrawalPeriod.content.2')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('withdrawalPeriod.content.3')}
          </p>
        </div>
      </div>

      {/* CAYMA HAKKININ KULLANIMI */}
      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">{t('useOfWithdrawalRight.title')}</p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('useOfWithdrawalRight.content')}
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
          {t('returnConditions.title')}
        </p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('returnConditions.content.0')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('returnConditions.content.1')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('returnConditions.content.2')}
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
          {t('nonReturnableProducts.title')}
        </p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('nonReturnableProducts.content.0')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('nonReturnableProducts.content.1')}
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
          {t('defaultAndLegalConsequences.title')}
        </p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('defaultAndLegalConsequences.content.0')}
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
          {t('paymentAndDelivery.title')}
        </p>
        <div className="flex flex-col space-y-1">
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('paymentAndDelivery.content.0')}
          </p>
          <p className="text-[14px] md:text-[16px] text-bgGreen">
            {t('paymentAndDelivery.content.1')}
          </p>
        </div>
      </div>



      </div>
    </div>
  </div>
  )
}

export default CancellationRefundPolicy