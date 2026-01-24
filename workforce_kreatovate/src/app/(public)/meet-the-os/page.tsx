import AIWorkforce from '@/components/meet-the-os/AIWorkforce'
import CoreModel from '@/components/meet-the-os/CoreModel'
import Hero from '@/components/meet-the-os/Hero'
import OperatingSystem from '@/components/meet-the-os/OperatingSystem'
import OrganizationStartSection from '@/components/meet-the-os/OrganizationStartSection'
import WorkforceCard from '@/components/shared/cards/WorkforceCard'
import React from 'react'

export default function MeetTheOsPage() {
  return (
    <div>
      <Hero />
      <OrganizationStartSection />
      <OperatingSystem />
      <AIWorkforce />
      <WorkforceCard />
      <CoreModel/>
    </div>
  )
}
