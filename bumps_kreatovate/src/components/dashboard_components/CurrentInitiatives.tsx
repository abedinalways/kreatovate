
import InitiativeCard from './InitiativeCard';
import AddInitiativeCard from './AddInitiativeCard';
import { initiatives } from '@/data/initiatives';

export default function CurrentInitiatives() {
  return (
    <section className="mt-16 space-y-6 font-jakarta">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white">Current Initiatives</h2>
        <p className="text-gray-400 text-sm mt-1">
          Manage and track your active initiatives in real-time
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map(item => (
          <InitiativeCard key={item.id} initiative={item} />
        ))}

        <AddInitiativeCard />
      </div>
    </section>
  );
}
