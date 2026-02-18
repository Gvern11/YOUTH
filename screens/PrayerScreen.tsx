
import React from 'react';

interface PrayerScreenProps {
  onBack: () => void;
}

const PrayerScreen: React.FC<PrayerScreenProps> = ({ onBack }) => {
  const requests = [
    { id: '1', user: 'Sarah M.', avatar: 'https://picsum.photos/id/101/100/100', content: 'Please pray for my grandmother, she is going in for surgery tomorrow morning. We are hoping for a quick recovery and peace for the family.', time: '2h ago', category: 'Health', prayers: 24, comments: 3, online: true },
    { id: '2', user: 'Anonymous', avatar: '', content: 'Going through a tough time with anxiety about upcoming exams. I feel overwhelmed and need peace and focus to study effectively.', time: '5h ago', category: 'Personal', prayers: 12, comments: 0, online: false },
    { id: '3', user: 'David K.', avatar: 'https://picsum.photos/id/102/100/100', content: 'My little brother got accepted into his dream college! Praising God for this opportunity, but asking for prayer regarding finances.', time: '8h ago', category: 'Family', prayers: 56, comments: 8, online: false }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="p-4 pt-12 border-b border-white/5 bg-background-dark sticky top-0 z-20">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-dark"><span className="material-symbols-outlined">arrow_back</span></button>
          <h1 className="text-xl font-bold">Prayer Room</h1>
          <button className="p-2 rounded-full hover:bg-surface-dark"><span className="material-symbols-outlined">tune</span></button>
        </div>
        <div className="flex p-1 bg-surface-darker rounded-xl">
          <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-surface-dark shadow-sm">Requests</button>
          <button className="flex-1 py-2 text-xs font-medium text-slate-500">Answered</button>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4">
        {/* Community Topic */}
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-5 relative overflow-hidden shadow-lg">
          <div className="absolute -top-4 -right-4 opacity-10">
            <span className="material-symbols-outlined text-[100px]">volunteer_activism</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <span className="material-symbols-outlined">church</span>
             </div>
             <div>
                <h3 className="text-sm font-bold">Community Focus</h3>
                <p className="text-[10px] text-white/80 uppercase font-bold tracking-widest">Weekly Topic</p>
             </div>
          </div>
          <p className="text-sm font-medium leading-relaxed mb-4">
            Let's join hearts this week to pray for the upcoming youth retreat. May every student encounter peace and purpose.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/id/${i+100}/50/50`} className="w-6 h-6 rounded-full border border-primary object-cover" alt="User"/>)}
            </div>
            <span className="text-[10px] font-bold">+142 praying</span>
          </div>
        </div>

        {/* Feed */}
        {requests.map(req => (
          <article key={req.id} className="bg-surface-dark rounded-2xl p-5 border border-white/5 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {req.avatar ? (
                    <img src={req.avatar} className="w-10 h-10 rounded-full object-cover" alt={req.user}/>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center"><span className="material-symbols-outlined text-slate-500">person</span></div>
                  )}
                  {req.online && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-dark"></div>}
                </div>
                <div>
                  <h3 className="text-sm font-bold">{req.user}</h3>
                  <p className="text-[10px] text-slate-500 font-medium">{req.time} • {req.category}</p>
                </div>
              </div>
              <button className="text-slate-500"><span className="material-symbols-outlined">more_horiz</span></button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{req.content}</p>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors group">
                <span className="material-symbols-outlined group-active:scale-90 transition-transform filled text-lg">volunteer_activism</span>
                <span className="text-xs font-bold">Pray ({req.prayers})</span>
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-white"><span className="material-symbols-outlined text-xl">chat_bubble</span><span className="text-xs font-medium">{req.comments || 'Write Encouragement'}</span></button>
              <button className="text-slate-500 hover:text-white"><span className="material-symbols-outlined text-xl">share</span></button>
            </div>
          </article>
        ))}
      </main>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-tr from-accent-gold to-accent-gold-hover rounded-full shadow-lg shadow-accent-gold/20 flex items-center justify-center text-background-dark transform hover:scale-105 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl font-bold">add</span>
      </button>
    </div>
  );
};

export default PrayerScreen;
