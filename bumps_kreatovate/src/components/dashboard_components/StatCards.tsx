'use client';
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

// export CSV

function convertToCSV(objArray: unknown): string {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray as string) : objArray;

  if (!array || !array.length) {
    // If the array is empty, return empty string
    return '';
  }

  const headers = Object.keys(array[0]);
  const csvRows = [];

  // Add headers row
  csvRows.push(headers.join(','));

  // Add rows
  (array as Record<string, unknown>[]).forEach(item => {
    const values = headers.map(header => {
      let val = item[header];
      if (typeof val === 'object') val = JSON.stringify(val); // convert objects to string
      if (typeof val === 'string') val = `"${val.replace(/"/g, '""')}"`;
      return val;
    });
    csvRows.push(values.join(','));
  });

  return csvRows.join('\n');
}

function downloadCSV(data: unknown, filename: string = 'export.csv'): void {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

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
        <Btn
          btnText="Export CSV"
          className="cursor-pointer"
          onClick={() => {
            if (!metricsData || metricsData.length === 0) {
              alert('No data to export!');
              return;
            }

            const flatData = metricsData.map(b => ({
              id: b.id,
              title: b.title,
              value: b.value, 
              change: b.change,
              changeType: b.changeType,
              subtitle: b.subtitle,
              
            }));

            downloadCSV(flatData, 'bookings.csv');
          }}
        />
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
