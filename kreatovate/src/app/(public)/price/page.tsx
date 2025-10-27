
import BusinessWorkForceV2 from '@/components/modules/Business_Workforce_v2/BusinessWorkforceV2';
import BusinessWorkForceV3 from '@/components/modules/Business_Workforce_v3/BusinessWorkforceV3';
import BusinessWorkForce from '@/components/modules/business_workforce/BusinessWorkforce';
import BusinessWorkForceV4 from '@/components/modules/business_workforce_v4/BusinessWorkforceV4';
import PersonalPricelist from '@/components/modules/personal_pricelist/PersonalPricelist';
import PremiumEnterprise from '@/components/modules/premium_&_enterprise/PremiumEnterprise';
import React from 'react';

const PricePage = () => {
  return (
    <div>
      <PersonalPricelist />
      <BusinessWorkForce />
      <BusinessWorkForceV2 />
      <BusinessWorkForceV3 />
      <BusinessWorkForceV4 />
      <PremiumEnterprise />
    </div>
  );
};

export default PricePage;