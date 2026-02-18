
import React from 'react';

interface GrowthScreenProps {
  onBack: () => void;
}

const GrowthScreen: React.FC<GrowthScreenProps> = ({ onBack }) => {
  const stats = [
    { label: 'Attendance', value: '85%', sub: 'Last 30 Days', color: 'text-primary', dash: '85, 100' },
    { label: 'Bible Study', value: '12/20', sub: 'Sessions', color: 'text-accent-gold', dash: '60, 100' },
    { label: 'Volunteering', value: '5h', sub: 'Hours Served', color: 'text-purple-500', dash: '25, 100' }
  ];

  const goals = [
    { title: 'Daily Prayer (Morning)', sub: 'Start your day with gratitude.', tag: 'Today', checked: false, progress: 33 },
    { title: 'Finish "Purpose Driven Life"', sub: 'Chapter 4 completed.', tag: 'Done', checked: true },
    { title: 'Invite a friend to Youth Group', sub: 'Friday night service.', tag: 'Fri', checked: false },
    { title: 'Read Psalms 23', sub: 'Meditation & Reflection.', tag: 'Sun', checked: false }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="pt-12 px-6 pb-4 flex items-center justify-between sticky top-0 bg-background-dark/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://picsum.photos/id/65/100/100" className="w-12 h-12 rounded-full border-2 border-accent-gold/30 p-0.5 object-cover" alt="Profile"/>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background-dark"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold">My Growth</h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Keep pushing forward, Sarah!</p>
          </div>
        </div>
        <button className="p-2 rounded-full bg-surface-dark"><span className="material-symbols-outlined text-slate-400">settings</span></button>
      </header>

      <main className="p-4 space-y-8">
        <section>
          <div className="flex justify-between items-center px-2 mb-4">
            <h2 className="text-lg font-bold">Weekly Highlights</h2>
            <button className="text-xs font-bold text-accent-gold">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-2 pb-2">
            {stats.map(stat => (
              <div key={stat.label} className="shrink-0 w-40 bg-surface-dark border border-white/5 p-4 rounded-2xl flex flex-col items-center">
                <div className="relative w-24 h-24 mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-800" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path className={`${stat.color} transition-all duration-1000`} strokeWidth="3" strokeDasharray={stat.dash} strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold">{stat.value}</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold">{stat.label}</h3>
                <p className="text-[10px] text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Personal Goals</h2>
            <button className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase"><span className="material-symbols-outlined text-sm">add</span> Add New</button>
          </div>
          <div className="space-y-3">
            {goals.map((goal, i) => (
              <div key={i} className={`p-4 bg-surface-dark border rounded-2xl flex items-start gap-4 transition-all ${goal.checked ? 'border-transparent opacity-60' : 'border-white/5 hover:border-primary/30'}`}>
                <div className="mt-1">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${goal.checked ? 'bg-accent-gold border-accent-gold' : 'border-slate-600'}`}>
                    {goal.checked && <span className="material-symbols-outlined text-background-dark text-xs font-bold">check</span>}
                  </div>
                </div>
                <div className="flex-1">
                   <h4 className={`text-sm font-bold ${goal.checked ? 'line-through text-slate-500' : ''}`}>{goal.title}</h4>
                   <p className="text-xs text-slate-500 mt-0.5">{goal.sub}</p>
                   {goal.progress && (
                     <div className="mt-3 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-gold/80" style={{width: `${goal.progress}%`}}></div>
                     </div>
                   )}
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${goal.tag === 'Done' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-slate-500'}`}>{goal.tag}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-2">
          <h2 className="text-lg font-bold mb-4">Latest Badges</h2>
          <div className="p-4 bg-gradient-to-r from-primary/20 to-surface-dark border border-primary/20 rounded-2xl flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                <span className="material-symbols-outlined text-2xl">military_tech</span>
             </div>
             <div className="flex-1">
                <h4 className="text-sm font-bold">Consistent Prayer</h4>
                <p className="text-xs text-slate-400">You've prayed for 7 days in a row!</p>
             </div>
             <button className="bg-primary text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase">Claim</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GrowthScreen;
