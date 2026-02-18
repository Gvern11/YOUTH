
import React from 'react';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const quickAccess = [
    { id: 'lessons', title: 'Bible Study', sub: 'Daily Reading', icon: 'menu_book', color: 'text-primary', bg: 'bg-primary/10' },
    { id: 'prayer', title: 'Prayer Room', sub: 'Join Request', icon: 'volunteer_activism', color: 'text-accent-gold', bg: 'bg-accent-gold/10' },
    { id: 'giving', title: 'Donations', sub: 'Support Us', icon: 'favorite', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { id: 'chat', title: 'Connect', sub: 'Worship Team', icon: 'groups', color: 'text-purple-400', bg: 'bg-purple-500/10' }
  ];

  return (
    <div className="p-6 pt-12 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-slate-400 font-medium">Monday, Nov 14</span>
          <h1 className="text-2xl font-bold">Welcome, <span className="text-primary">Joshua</span></h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-surface-dark relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent-gold rounded-full border border-background-dark"></span>
          </button>
          <img src="https://picsum.photos/id/64/100/100" className="w-10 h-10 rounded-full border-2 border-primary p-0.5" alt="Profile"/>
        </div>
      </div>

      {/* Latest Sermon */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Latest Sermon</h2>
          <button onClick={() => onNavigate('library')} className="text-xs font-bold text-primary">View All</button>
        </div>
        <div 
          onClick={() => onNavigate('library')}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
        >
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkOqDEWMiYSrwilkD21rhlS6c7OuvnN7QQB6zQAoMJjd8LjtzNAn8J8bEAbZMhFcK-S847a2Pz6Q2MN5EJ7DhayHnOiPm5Xh3BGy9YX9TWiJBjxE8YMYzFlYzKQULXUrmJpHUPt0m_RvBBHZ6P2DRW9WvzZXLAyIEcmzAAVVgEyOZ55XJmwmzgaxXMoXOmgfmH0H34t6l3Ukt7hdM-fgqoWyLtj8Rpy4wW-MpgSvReTBzgAgXG28OXU7qXJNDLyzbU0GgBrv50Ufo" alt="Sermon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-accent-gold flex items-center justify-center shadow-lg shadow-accent-gold/40 pl-1">
              <span className="material-symbols-outlined text-background-dark text-3xl font-bold">play_arrow</span>
            </div>
          </div>
          <div className="absolute bottom-5 left-5">
            <div className="flex gap-2 mb-2">
              <span className="px-2 py-0.5 bg-primary rounded text-[10px] font-bold uppercase">New</span>
              <span className="flex items-center gap-1 text-[10px] text-slate-300"><span className="material-symbols-outlined text-xs">schedule</span> 45m</span>
            </div>
            <h3 className="text-xl font-bold">The Power of Purpose</h3>
            <p className="text-xs text-slate-400">Pastor Michael Todd • Series: Anchored</p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-lg font-bold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickAccess.map(item => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id as Screen)}
              className="p-4 bg-surface-dark border border-white/5 rounded-2xl flex flex-col items-start gap-1 hover:border-primary/50 transition-colors"
            >
              <div className={`p-2 rounded-xl ${item.bg} ${item.color} mb-2`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <span className="text-sm font-bold">{item.title}</span>
              <span className="text-[10px] text-slate-500">{item.sub}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Upcoming Events</h2>
          <div className="flex gap-2">
             <button className="w-8 h-8 rounded-full bg-surface-dark flex items-center justify-center"><span className="material-symbols-outlined text-sm">arrow_back</span></button>
             <button className="w-8 h-8 rounded-full bg-surface-dark flex items-center justify-center"><span className="material-symbols-outlined text-sm">arrow_forward</span></button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
          <div 
            onClick={() => onNavigate('event-details')}
            className="snap-center shrink-0 w-64 bg-surface-dark rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="h-28 relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtDpk-MlLffyh6TH-XL7_aGZgqqlWB-OtJXXgURtUjYQmLRqjLxtOLQQY3XFQOpKf0avD1NhwaxsJBcwoQvvG1CIoSaTLNoNXFQcfmQVQQ3E1TgCT-hayhwEos8E6p__uUyWNKkzPuB8usKgmolMQIjozEyVVBNeyJc4nUX0FfBor94jeCbmmZz2mcMfi-bw3SiQrNR051YIM-nxklc0y-R9ExJtkTZ0Omp_PgNLMqDox0A9_DP_AMVg_HqK8-1QYECyTiBqFBnTk" className="w-full h-full object-cover" alt="Event"/>
              <div className="absolute top-2 right-2 bg-background-dark/80 px-2 py-1 rounded text-[10px] font-bold">Nov 12</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Youth Worship Night</h3>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-3">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span> Main Hall</span>
                <span>•</span>
                <span>7:00 PM</span>
              </div>
              <button className="w-full py-2 bg-primary/10 text-primary rounded-lg text-xs font-bold">RSVP Now</button>
            </div>
          </div>
          <div className="snap-center shrink-0 w-64 bg-surface-dark rounded-2xl overflow-hidden cursor-pointer">
            <div className="h-28 relative">
              <img src="https://picsum.photos/id/12/300/200" className="w-full h-full object-cover" alt="Event"/>
              <div className="absolute top-2 right-2 bg-background-dark/80 px-2 py-1 rounded text-[10px] font-bold">Nov 15</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Community Outreach</h3>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-3">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span> Downtown</span>
                <span>•</span>
                <span>9:00 AM</span>
              </div>
              <button className="w-full py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold">Details</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
