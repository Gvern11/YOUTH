
import React from 'react';

interface LibraryScreenProps {
  onBack: () => void;
}

const LibraryScreen: React.FC<LibraryScreenProps> = ({ onBack }) => {
  const categories = ['All', 'Faith', 'Purpose', 'Relationships', 'Identity'];
  const sermons = [
    { id: '1', title: 'Finding Purpose in Chaos', speaker: 'Pastor Michael Todd', date: 'Oct 12, 2023', duration: '45:12', tag: 'Faith Series', img: 'https://picsum.photos/id/20/400/225' },
    { id: '2', title: 'The Power of Silence', speaker: 'Sarah Jakes Roberts', date: 'Oct 05, 2023', duration: '32:05', tag: 'Prayer', img: 'https://picsum.photos/id/21/400/225' },
    { id: '3', title: 'Building Stronger Relationships', speaker: 'Pastor Steven Furtick', date: 'Sep 28, 2023', duration: '58:30', tag: 'Community', img: 'https://picsum.photos/id/22/400/225' }
  ];

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 pt-12 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark z-10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-dark transition-colors"><span className="material-symbols-outlined">arrow_back</span></button>
        <h1 className="text-lg font-bold">Sermon Library</h1>
        <button className="p-2 rounded-full hover:bg-surface-dark transition-colors"><span className="material-symbols-outlined">notifications</span></button>
      </header>

      <div className="p-4 space-y-6 flex-1">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input 
            type="text" 
            placeholder="Search sermons, speakers..." 
            className="w-full bg-surface-dark border-transparent rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"><span className="material-symbols-outlined">tune</span></button>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat, idx) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${idx === 0 ? 'bg-primary text-white' : 'bg-surface-dark text-slate-400'}`}>
              {cat}
            </button>
          ))}
        </div>

        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold">New Arrivals</h2>
            <button className="text-xs font-bold text-primary">View all</button>
          </div>
          {sermons.map(sermon => (
            <div key={sermon.id} className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all">
              <div className="aspect-video relative group cursor-pointer">
                <img src={sermon.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={sermon.title}/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40"><span className="material-symbols-outlined text-white">play_arrow</span></div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold">{sermon.duration}</div>
              </div>
              <div className="p-4 flex justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold mb-1 leading-tight group-hover:text-primary transition-colors">{sermon.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{sermon.speaker}</p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                    <span>{sermon.date}</span>
                    <span>•</span>
                    <span>{sermon.tag}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="text-slate-500 hover:text-primary"><span className="material-symbols-outlined text-[20px]">bookmark</span></button>
                  <button className="text-slate-500 hover:text-primary"><span className="material-symbols-outlined text-[20px]">share</span></button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LibraryScreen;
