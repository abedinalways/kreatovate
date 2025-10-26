import BusinessWorkForceV2 from '@/components/modules/Business Workforce v2/BusinessWorkforceV2';
import BusinessWorkForce from '@/components/modules/business_workforce/BusinessWorkforce';
import PersonalPricelist from '@/components/modules/personal_pricelist/PersonalPricelist';
import React from 'react';

const PricePage = () => {
  return (
    <div>
      <PersonalPricelist />
      <BusinessWorkForce />
      <BusinessWorkForceV2 />
    </div>
  );
};

export default PricePage;