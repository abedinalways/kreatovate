import React from 'react';
import Btn from '../shared/buttons/Btn';
import MetricCard, { MetricData } from './MatricCard';

// Mock data 
const metricsData: MetricData[] = [
  {
    id: '1',
    title: 'Total Views (24h)',
    value: '12,450',
    change: '12%',
    changeType: 'increase',
    subtitle: 'increase',
  },
  {
    id: '2',
    title: 'Total Clicks',
    value: '12,450',
    change: '25%',
    changeType: 'increase',
    subtitle: 'Conversion',
  },
  {
    id: '3',
    title: 'Total Revenue',
    value: '12,450',
    change: '12%',
    changeType: 'increase',
    subtitle: 'increase',
  },
  {
    id: '4',
    title: 'Active Initiatives',
    value: '12,450',
    change: '02',
    changeType: 'neutral',
    subtitle: 'Coming Soon',
  },
];

export default function StatCards() {
  // TODO: Replace with actual API call
  // const [metrics, setMetrics] = React.useState<MetricData[]>(metricsData);

  // const fetchMetrics = async () => {
  //   try {
  //     const response = await fetch('/api/metrics');
  //     const data = await response.json();
  //     setMetrics(data);
  //   } catch (error) {
  //     console.error('Failed to fetch metrics:', error);
  //   }
  // };

  // React.useEffect(() => {
  //   fetchMetrics();
  // }, []);

  return (
    <div className="space-y-6 mt-40 font-jakarta">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-4xl md:text-[48px] font-bold text-white text-gradient">
            Launchpad Dashboard
          </h2>
          <p className="text-gray-400 mt-1 text-[#FFFFFF] leading-[120%] text-sm md:text-[16px]">
            Manage and track your active initiatives in real-time
          </p>
        </div>
        <Btn btnText="Export CSV" />
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>
    </div>
  );
}
