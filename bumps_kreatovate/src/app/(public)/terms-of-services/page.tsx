import TermsOfServiceCard from "@/components/modules/terms-of-services-page/TermsOfServiceCard";
import DynamicBanner from "@/components/shared/banner/DynamicBanner";

const TermsOfServicesPage = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/terms-of-services.png"
        title="Terms of"
        titleGradient="Service"
      />
      <TermsOfServiceCard />
    </div>
  );
};

export default TermsOfServicesPage;
