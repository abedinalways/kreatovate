import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

export interface MetricData {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  subtitle: string;
}

interface MetricCardProps {
  metric: MetricData;
  index: number;
}

// Helper function to get border color based on index
const getBorderColor = (index: number): string => {
  const colors = [
    'border-blue-500',
    'border-purple-500',
    'border-emerald-500',
    'border-orange-500',
  ];
  return colors[index] || 'border-gray-500';
};

const MetricCard: React.FC<MetricCardProps> = ({ metric, index }) => {
  const getIcon = () => {
    if (metric.changeType === 'increase') {
      return <TrendingUp className="h-4 w-4" />;
    } else if (metric.changeType === 'decrease') {
      return <TrendingDown className="h-4 w-4" />;
    }
    return <Clock className="h-4 w-4" />;
  };

  const getChangeColor = () => {
    if (metric.changeType === 'increase') return 'text-emerald-400';
    if (metric.changeType === 'decrease') return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div className="btnOne-bg-gradient p-px rounded-[10px]">
      <Card
        className={`bg-black rounded-[10px] ${getBorderColor(
          index,
        )} border-x-0 border-b-0 hover:bg-black transition-colors`}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-400">
            {metric.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-white mb-2">
            {metric.value}
          </div>
          <div
            className={`flex items-center gap-1 text-sm ${getChangeColor()}`}
          >
            <span>
              {metric.change} {metric.subtitle}
            </span>
            {getIcon()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricCard;
