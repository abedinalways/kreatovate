import DynamicBanner from "@/components/shared/banner/DynamicBanner";
import TermsOfServiceCard from "@/components/terms-of-services-page/TermsOfServiceCard";

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
