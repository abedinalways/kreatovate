import AIWorkforce from '@/components/meet-the-os/AIWorkforce'
import CoreModel from '@/components/meet-the-os/CoreModel'
import GetStarted from '@/components/meet-the-os/GetStarted'
import Hero from '@/components/meet-the-os/Hero'
import OperatingSystem from '@/components/meet-the-os/OperatingSystem'
import OrganizationNeed from '@/components/meet-the-os/OrganizationNeed'
import OrganizationStartSection from '@/components/meet-the-os/OrganizationStartSection'
import WorkforceCard from '@/components/shared/cards/WorkforceCard'
import React from 'react'

export default function MeetTheOsPage() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <OrganizationStartSection />
      <OperatingSystem />
      <AIWorkforce />
      <WorkforceCard />
      <CoreModel />
      <OrganizationNeed />
      <GetStarted/>
    </div>
  )
}
