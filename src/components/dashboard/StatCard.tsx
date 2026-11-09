import type { StatCard } from "@/types/user";

interface StatCardProps {
  card: StatCard;
}
function StatCard({ card }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      {/* {cards.map((card, index) => ( */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-10">
        <h1 className="text-sm font-medium text-slate-500">{card.title}</h1>
        <p className="text-3xl font-bold text-slate-900">{card.value}</p>
        <p className="text-slate-500">{card.description}</p>
      </div>
      {/* ))} */}
    </div>
  );
}

export default StatCard;
