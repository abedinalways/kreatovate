import Contact from '@/components/modules/contact/Contact';
import Service from '@/components/modules/service/Service';
import Team from '@/components/modules/team/Team';
import Partners from '@/components/shared/partners/Partners';
import React from 'react';

const ServicePage = () => {
  return (
    <div className='overflow-hidden'>
      <Service />
      <Team />
      <Partners />
      <Contact/>
    </div>
  );
};

export default ServicePage;