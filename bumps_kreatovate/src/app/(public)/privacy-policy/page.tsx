import PrivacyPolicyCard from "@/components/modules/privacy-policy-page/PrivacyPolicyCard";
import DynamicBanner from "@/components/shared/banner/DynamicBanner";

const PrivacyPolicyPage = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/privacy_policy_banner.png"
        title="PRIVACY"
        titleGradient="POLICY"
      />
      <PrivacyPolicyCard />
    </div>
  );
};

export default PrivacyPolicyPage;
