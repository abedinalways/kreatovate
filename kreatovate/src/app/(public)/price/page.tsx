
import BusinessWorkForceV2 from '@/components/modules/Business_Workforce_v2/BusinessWorkforceV2';
import BusinessWorkForceV3 from '@/components/modules/Business_Workforce_v3/BusinessWorkforceV3';
import AddOnsUpgrades from '@/components/modules/add_ons/AddOnsUpgrades';
import BusinessWorkForce from '@/components/modules/business_workforce/BusinessWorkforce';
import BusinessWorkForceV4 from '@/components/modules/business_workforce_v4/BusinessWorkforceV4';
import ContactUs from '@/components/modules/contact_us/ContactUs';
import CustomAutomation from '@/components/modules/custom_automation/CustomAutomation';
import Explore from '@/components/modules/explore/Explore';
import FeatureComparisonTable from '@/components/modules/feature_comparison/FeatureComparisonTable';
import PersonalPricelist from '@/components/modules/personal_pricelist/PersonalPricelist';
import PremiumEnterprise from '@/components/modules/premium_&_enterprise/PremiumEnterprise';
import PriceBanner from '@/components/modules/price-page/price_banner/PriceBanner';
import ValueVsCost from '@/components/modules/value_vs_cost/ValueVsCost';
import React from 'react';

const PricePage = () => {
  return (
    <div>
      <PriceBanner />
      <PersonalPricelist />
      <BusinessWorkForce />
      <BusinessWorkForceV2 />
      <BusinessWorkForceV3 />
      <BusinessWorkForceV4 />
      <PremiumEnterprise />
      <Explore />
      
      <FeatureComparisonTable />
      <ValueVsCost />
      <AddOnsUpgrades />
      <CustomAutomation />
      <ContactUs/>
    </div>
  );
};

export default PricePage;
