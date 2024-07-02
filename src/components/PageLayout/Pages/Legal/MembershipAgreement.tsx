import useScrollToTop from "@/hooks/ScrollToTop";
import { useTranslation } from "react-i18next";

const MembershipAgreement = () => {
    const { t } = useTranslation();
    useScrollToTop()
    return (
        <div className="py-10 md:py-20 mt-5 md:mt-10 w-full">
            <div className="flex flex-col space-y-5 items-center justify-center">
                <p className="text-linkGreen font-semibold text-[16px] md:text-[18px] text-center">
                    {t('membership.agreement')}
                </p>
                <p className='text-bgGreen text-[40px] max-sm:text-[20px] text-center font-medium w-[1145px] max-sm:w-[300px]'>
                    {t('site.usage.terms')}
                </p>

                <div className="flex flex-col space-y-2 md:space-y-5 px-4 md:px-0 max-w-[70rem]">
                    <div className="flex  flex-col space-y-1">
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('usage.terms.notice')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('usage.terms.acceptance')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('usage.terms.siteOwnership')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('usage.terms.agreement')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('responsibilities.title')}
                        </p>
                        <div className="flex  flex-col space-y-1">
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('responsibilities.itemA')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('responsibilities.itemB')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('responsibilities.itemC')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('responsibilities.itemD')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('responsibilities.itemE')}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('intellectualProperty.title')}
                        </p>
                        <div className="flex  flex-col space-y-1">
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('intellectualProperty.itemA')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('intellectualProperty.itemB')}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('confidentialInfo.title')}
                        </p>
                        <div className="flex  flex-col space-y-1">
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('confidentialInfo.itemA')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('confidentialInfo.itemB')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('confidentialInfo.itemC')}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('noGuarantee.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('noGuarantee.content')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('registrationSecurity.title')}
                        </p>
                        <div className="flex  flex-col space-y-1">
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('registrationSecurity.itemA')}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-bgGreen">
                                {t('registrationSecurity.itemB')}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('forceMajeure.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('forceMajeure.content')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('entireAgreement.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('entireAgreement.content')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('changesToAgreement.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('changesToAgreement.content')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('notification.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('notification.content')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('evidenceAgreement.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('evidenceAgreement.content')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[14px] md:text-[16px] text-bgGreen font-semibold">
                            {t('disputeResolution.title')}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-bgGreen">
                            {t('disputeResolution.content')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipAgreement;
