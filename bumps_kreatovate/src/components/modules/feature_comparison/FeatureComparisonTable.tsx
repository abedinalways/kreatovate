'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface Feature {
  name: string;
  availability: ('available' | 'unavailable' | 'comingSoon')[];
}

interface FeatureData {
  title: string;
  subtitle: string;
  columns: string[];
  features: Feature[];
}

const FeatureComparisonTable = () => {
  const [data, setData] = useState<FeatureData | null>(null);

  useEffect(() => {
    fetch('/featureComparison.json')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data)
    return <p className="text-center py-10 text-gray-400">Loading...</p>;

  
  const renderIcon = (status: 'available' | 'unavailable' | 'comingSoon') => {
    let iconSrc = '';
    switch (status) {
      case 'available':
        iconSrc = '/images/icons/check.png';
        break;
      case 'comingSoon':
        iconSrc = '/images/icons/clock.png';
        break;
      case 'unavailable':
      default:
        iconSrc = '/images/icons/cross.png';
        break;
    }

    return (
      <div className="flex justify-center">
        <Image
          src={iconSrc}
          alt={status}
          width={22}
          height={22}
          className="object-contain"
        />
      </div>
    );
  };

  return (
    <div className="w-full px-4 md:px-10 py-20 bg-[#0d0f1a] text-gray-100 ">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl text-color-gradient md:text-5xl font-bold">
          {data.title}
        </h2>
        <p className="text-gray-400">{data.subtitle}</p>
      </div>

      {/* Table Section */}
<div className="relative rounded-xl p-[1px] ">
  <Card className="overflow-auto bg-[#11121a] shadow-lg custom-container py-12 rounded-xl border-0">
    <table className="min-w-full border-collapse rounded-xl">
      <thead>
        <tr className="bg-[#151823] text-sm md:text-base text-gray-300">
          {data.columns.map((col, i) => (
            <th
              key={i}
              className={`px-4 py-3 text-left border-b border-red-400/20 ${
                i === 0 ? 'sticky left-0 bg-[#151823]' : ''
              }`}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.features.map((feature, index) => (
          <tr
            key={index}
            className="hover:bg-[#181b28] transition-colors border-b border-red-400/20 text-sm md:text-base"
          >
            <td className="px-4 py-3 font-medium text-gray-300 sticky left-0 bg-[#11121a]">
              {feature.name}
            </td>

            {feature.availability.map((status, idx) => (
              <td key={idx} className="px-4 py-3 text-center">
                {renderIcon(status)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
</div>
</div>
  );
};

export default FeatureComparisonTable;
