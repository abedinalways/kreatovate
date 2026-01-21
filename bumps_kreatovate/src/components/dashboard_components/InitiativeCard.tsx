
'use client';

import { Initiative } from '@/types/initiative';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const statusConfig = {
  active: {
    label: 'Active',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    button: 'Enter Sale →',
    enabled: true,
  },
  coming: {
    label: 'Coming Soon',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    button: 'Enter Sale →',
    enabled: false,
  },
  closed: {
    label: 'Closed',
    badge: 'bg-red-500/10 text-red-400 border-red-500/30',
    button: 'View Report →',
    enabled: true,
  },
};

export default function InitiativeCard({
  initiative,
}: {
  initiative: Initiative;
}) {
  const config = statusConfig[initiative.status];

  return (
    <div className="btnOne-bg-gradient p-px rounded-[16px]">
      <Card className="bg-black rounded-[16px] border-0">
        <CardContent className="p-6 space-y-6">
          {/* Status Badge */}
          <span
            className={cn(
              'inline-block text-xs px-3 py-1 rounded-full border',
              config.badge,
            )}
          >
            {config.label}
          </span>

          {/* Title */}
          <h3 className="text-white font-semibold text-lg">
            {initiative.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {initiative.description}
          </p>

          {/* Metrics */}
          <div className="flex gap-4 text-sm">
            <Metric label="Views" value={initiative.views} />
            <Metric label="Clicks" value={initiative.clicks} />
            <Metric label="Raised" value={initiative.raised} />
          </div>

          {/* CTA */}
          <div className="btnOne-bg-gradient rounded-[6px] p-px ">
            <div className="bg-black rounded-[6px] text-center px-6 py-[6px] text-center">
              <button
                disabled={!config.enabled}
                className={cn(
                  'text-sm font-medium mt-2',
                  config.enabled
                    ? 'text-white hover:underline'
                    : 'text-gray-600 cursor-not-allowed',
                )}
              >
                {config.button}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-700 rounded-full px-3 py-1 text-gray-300">
      {label}: <span className="text-white">{value}</span>
    </div>
  );
}
