
import React from 'react';

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="p-4 pt-12 flex items-center justify-between sticky top-0 bg-background-dark z-20">
        <h1 className="text-xl font-bold">My Profile</h1>
        <button className="p-2 rounded-full hover:bg-surface-dark transition-colors"><span className="material-symbols-outlined text-slate-400">settings</span></button>
      </header>

      <main className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar">
        {/* Hero */}
        <div className="flex flex-col items-center">
          <div className="relative group cursor-pointer">
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-primary to-purple-500 shadow-xl shadow-primary/20">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background-dark bg-slate-800">
                <img src="https://picsum.photos/id/66/200/200" className="w-full h-full object-cover" alt="Avatar"/>
              </div>
            </div>
            <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary rounded-full border-2 border-background-dark flex items-center justify-center text-white"><span className="material-symbols-outlined text-sm">edit</span></button>
          </div>
          <h2 className="text-2xl font-bold mt-4">Jordan Smith</h2>
          <div className="mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">Worship Team</div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
           {[ {l: 'Events', v: 24}, {l: 'Badges', v: 12}, {l: 'Attendance', v: '89%'} ].map(s => (
             <div key={s.l} className="p-3 bg-surface-dark border border-white/5 rounded-2xl text-center shadow-sm">
                <p className="text-lg font-bold text-primary">{s.v}</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase">{s.l}</p>
             </div>
           ))}
        </div>

        {/* Info Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Personal Info</h3>
            <div className="space-y-4">
              <div className="relative">
                <label className="text-[10px] font-bold text-slate-500 mb-1 ml-1 block uppercase">Phone Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">call</span>
                  <input type="tel" value="+1 (555) 019-2834" className="w-full bg-surface-dark border-transparent rounded-xl py-3 pl-11 pr-10 text-sm font-semibold" readOnly/>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"><span className="material-symbols-outlined text-xl">edit</span></button>
                </div>
              </div>
              <div className="relative">
                <label className="text-[10px] font-bold text-slate-500 mb-1 ml-1 block uppercase">Department</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">groups</span>
                  <select className="w-full bg-surface-dark border-transparent rounded-xl py-3 pl-11 pr-10 text-sm font-semibold appearance-none">
                    <option>Media & Tech</option>
                    <option selected>Worship Team</option>
                    <option>Outreach</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Talents & Interests</h3>
              <button className="text-[10px] font-bold text-primary uppercase">Edit</button>
            </div>
            <div className="p-4 bg-surface-dark border border-white/5 rounded-2xl flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">music_note</span> Guitar</span>
              <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">design_services</span> Graphic Design</span>
              <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">auto_stories</span> Bible Study</span>
              <button className="w-8 h-8 rounded-full border border-dashed border-slate-700 flex items-center justify-center text-slate-500"><span className="material-symbols-outlined text-sm">add</span></button>
            </div>
          </div>

          <div className="space-y-4">
             <div className="flex justify-between items-center px-1">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Achievements</h3>
              <button className="text-[10px] font-bold text-primary uppercase">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gradient-to-br from-surface-dark to-surface-darker border border-white/5 rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-amber-500 shadow-inner"><span className="material-symbols-outlined">wb_sunny</span></div>
                 <div><p className="text-xs font-bold leading-tight">Early Riser</p><p className="text-[8px] text-slate-500 font-bold">Devotional Streak</p></div>
              </div>
              <div className="p-3 bg-gradient-to-br from-surface-dark to-surface-darker border border-white/5 rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shadow-inner"><span className="material-symbols-outlined">volunteer_activism</span></div>
                 <div><p className="text-xs font-bold leading-tight">Community Hero</p><p className="text-[8px] text-slate-500 font-bold">Volunteer Hours</p></div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-12">
            <button className="w-full py-4 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-500 font-bold flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all group active:scale-[0.98]">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">logout</span> Log Out
            </button>
            <p className="text-center text-[9px] text-slate-700 font-bold uppercase tracking-widest mt-6">Version 2.4.0 • Impact Youth App</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;
