
import {
  Database,
  GitBranch,
  DollarSign,
  AlertCircle,
  Zap,
  BarChart3,
  Layers,
  TrendingUp,
} from 'lucide-react';
import ComparisonCard from '../shared/cards/ComparisonCard';
import ProcessIcon from '../shared/icons/ProcessIcon';
import GraphIcon from '../shared/icons/GraphIcon';
import ConnectionIcon from '../shared/icons/ConnectionIcon';
import BrainIcon from '../shared/icons/BrainIcon';

export default function OrganizationStartSection() {
  return (
    <section className="py-24 font-jakarta">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl leading-[120%] font-bold mb-16">
          How Organizations Get Started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OLD WAY */}
          <ComparisonCard
            tag="Legacy Systems"
            title="The Old Way"
            className="old-card-bg border-red-500/20"
            badgeClassName="legacy-card-bg border-[#e93d3d] text-[#e93d3d] rounded-full"
            iconClassName="old-icon-bg border border-[#e93d3d]"
            items={[
              {
                icon: <ProcessIcon className="text-red-400" />,
                label: 'Manual processes',
              },
              {
                icon: <Database className="text-red-400" />,
                label: 'Siloed data',
              },
              {
                icon: <GraphIcon className="text-red-400" />,
                label: 'Low cash flow',
              },
              {
                icon: <ConnectionIcon className="text-red-400" />,
                label: 'Disconnected systems',
              },
            ]}
          />

          {/* NEW STANDARD */}
          <ComparisonCard
            tag="Modern OS"
            title="The New Standard"
            className="new-card-bg  border-indigo-500/30"
            badgeClassName="modern-card-bg border-indigo-400 text-indigo-400 rounded-full"
            iconClassName="modern-icon-bg border border-indigo-400 "
            items={[
              {
                icon: <Zap className="text-indigo-400" />,
                label: 'Automated workflows',
              },
              {
                icon: <BrainIcon className="text-indigo-400" />,
                label: 'Unified intelligence',
              },
              {
                icon: <TrendingUp className="text-indigo-400" />,
                label: 'Intelligent growth',
              },
              {
                icon: <DollarSign className="text-indigo-400" />,
                label: 'Optimized revenue',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
