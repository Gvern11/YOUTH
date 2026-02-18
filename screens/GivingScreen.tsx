
import React from 'react';

interface GivingScreenProps {
  onBack: () => void;
}

const GivingScreen: React.FC<GivingScreenProps> = ({ onBack }) => {
  const projects = [
    { title: 'Youth Hall Renovation', desc: 'Upgrading the AV system and seating for better experiences.', raised: 7500, goal: 10000, img: 'https://picsum.photos/id/111/400/225', urgent: true, funded: 75 },
    { title: 'Community Outreach Bus', desc: 'Transport for our mission trips to rural areas.', raised: 2100, goal: 15000, img: 'https://picsum.photos/id/112/400/225', funded: 14 },
    { title: 'New Instruments', desc: 'Replacing worn out drums and keyboards.', raised: 4800, goal: 5000, img: 'https://picsum.photos/id/113/400/225', funded: 96 }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="p-4 pt-12 flex items-center justify-between sticky top-0 bg-background-dark/95 backdrop-blur-md z-20">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-dark"><span className="material-symbols-outlined">arrow_back</span></button>
        <h1 className="text-lg font-bold">Impact & Giving</h1>
        <button className="p-2 rounded-full hover:bg-surface-dark"><span className="material-symbols-outlined">notifications</span></button>
      </header>

      <main className="p-4 space-y-6 flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Lifetime Impact Hero */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-indigo-900 shadow-xl shadow-primary/20 text-center relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1 block">Your Lifetime Impact</span>
          <h2 className="text-4xl font-extrabold mb-3">$1,250.00</h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full border border-white/10 text-[10px] font-bold text-blue-100">
             <span className="material-symbols-outlined text-sm">trending_up</span> Top 5% of contributors
          </div>
        </div>

        <div className="flex p-1 bg-surface-darker rounded-xl border border-white/5">
          <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-surface-dark">Active Projects</button>
          <button className="flex-1 py-2 text-xs font-medium text-slate-500">My History</button>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Ongoing Campaigns</h3>
          {projects.map((proj, i) => (
            <div key={i} className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 group hover:border-primary/40 transition-all">
              <div className="aspect-video relative">
                <img src={proj.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={proj.title}/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
                {proj.urgent && <div className="absolute bottom-3 left-4 bg-primary px-2 py-0.5 rounded text-[9px] font-bold uppercase">Urgent</div>}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold mb-1">{proj.title}</h4>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">{proj.desc}</p>
                
                <div className="space-y-1.5 mb-5">
                   <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-primary">${proj.raised.toLocaleString()} raised</span>
                      <span className="text-slate-500">Goal: ${proj.goal.toLocaleString()}</span>
                   </div>
                   <div className="h-2 w-full bg-surface-darker rounded-full overflow-hidden">
                      <div className={`h-full ${proj.funded > 90 ? 'bg-accent-gold' : 'bg-primary'}`} style={{width: `${proj.funded}%`}}></div>
                   </div>
                   <p className={`text-right text-[10px] font-bold ${proj.funded > 90 ? 'text-accent-gold' : 'text-slate-500'}`}>
                      {proj.funded > 90 ? 'Almost There! ' : ''}{proj.funded}% Funded
                   </p>
                </div>

                <div className="flex gap-3">
                   <button className="flex-1 py-3 bg-surface-darker border border-primary/20 text-primary text-xs font-bold rounded-xl">Details</button>
                   <button className="flex-1 py-3 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-1">Donate <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Give Now */}
      <div className="fixed bottom-24 left-0 w-full px-6 flex justify-center pointer-events-none z-30">
        <button className="pointer-events-auto w-full max-w-sm py-4 bg-accent-gold hover:bg-accent-gold-hover text-background-dark font-extrabold rounded-full shadow-2xl shadow-accent-gold/20 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined filled">volunteer_activism</span>
          Give Now
        </button>
      </div>
    </div>
  );
};

export default GivingScreen;
