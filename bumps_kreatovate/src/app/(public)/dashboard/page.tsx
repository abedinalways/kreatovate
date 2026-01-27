import CurrentInitiatives from '@/components/dashboard_components/CurrentInitiatives'
import StatCards from '@/components/dashboard_components/StatCards'
import React from 'react'

export default function DashboardPage() {
  return (
    <div className='mt-20 custom-container py-10 px-4 md:px-0'>
      <StatCards />
      <CurrentInitiatives/>
    </div>
  )
}
