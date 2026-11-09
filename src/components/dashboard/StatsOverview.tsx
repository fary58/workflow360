import type { StatCard } from "@/types/user";
import StatCard from "@/components/dashboard/StatCard";

interface StatsOverviewProps {
  cards: StatCard[];
}

function StatsOverview({ cards }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <StatCard key={card.title} card={card} />
      ))}
    </div>
  );
}

export default StatsOverview;
