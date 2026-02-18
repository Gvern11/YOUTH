
import React from 'react';

interface LessonsScreenProps {
  onBack: () => void;
}

const LessonsScreen: React.FC<LessonsScreenProps> = ({ onBack }) => {
  const lessons = [
    { id: '1', week: 4, title: 'The Power of Prayer', status: 'in-progress', progress: 45, icon: 'church', desc: 'Learn how to communicate effectively with God through daily prayer habits.' },
    { id: '2', week: 5, title: 'The Armor of God', status: 'new', progress: 0, icon: 'shield', desc: 'Equip yourself with spiritual tools to stand firm against challenges.' },
    { id: '3', week: 3, title: 'Fruits of the Spirit', status: 'completed', progress: 100, icon: 'local_florist', desc: 'Exploring the character traits of a believer empowered by the Holy Spirit.' },
    { id: '4', week: 6, title: 'Walking in Faith', status: 'locked', progress: 0, icon: 'menu_book', desc: 'Discovering the path laid out for you and trusting the process.' }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="p-4 pt-12 flex items-center justify-between border-b border-white/5 bg-background-dark/95 backdrop-blur-md z-10 sticky top-0">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-dark transition-colors"><span className="material-symbols-outlined">arrow_back</span></button>
        <h1 className="text-lg font-bold">Bible Study Lessons</h1>
        <button className="p-2 rounded-full hover:bg-surface-dark transition-colors"><span className="material-symbols-outlined">filter_list</span></button>
      </header>

      <div className="p-4 space-y-6">
        {/* Scripture Hero */}
        <div className="relative rounded-2xl bg-primary p-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
          <div className="relative z-10 flex flex-col gap-4">
             <div className="flex items-center gap-2 text-white/70">
                <span className="material-symbols-outlined text-sm">light_mode</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Scripture of the Day</span>
             </div>
             <blockquote className="border-l-4 border-accent-gold pl-4 text-lg font-bold italic leading-relaxed">
               "Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity."
             </blockquote>
             <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white/90">1 Timothy 4:12</span>
                <button className="flex items-center gap-1 font-bold text-white hover:text-accent-gold"><span className="material-symbols-outlined text-xs">share</span> SHARE</button>
             </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Weekly Curriculum</h2>
          <span className="text-[10px] text-slate-500 font-bold uppercase">3 of 10 Completed</span>
        </div>

        <div className="space-y-4">
          {lessons.map(lesson => (
            <div key={lesson.id} className={`bg-surface-dark border border-white/5 p-4 rounded-2xl transition-all relative ${lesson.status === 'locked' ? 'opacity-50 grayscale' : 'hover:border-primary/40'}`}>
              {lesson.status === 'locked' && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[1px] rounded-2xl">
                  <span className="material-symbols-outlined text-3xl text-slate-400">lock</span>
                </div>
              )}
              
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl flex items-center justify-center ${lesson.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-primary/10 text-primary'}`}>
                    <span className="material-symbols-outlined">{lesson.icon}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Week {lesson.week}</span>
                    <h3 className="font-bold leading-tight">{lesson.title}</h3>
                  </div>
                </div>
                <span className={`text-[9px] font-bold uppercase px-2 py-1 rounded-full border ${
                  lesson.status === 'in-progress' ? 'bg-primary/10 border-primary text-primary' : 
                  lesson.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500' :
                  'bg-white/5 border-white/10 text-slate-300'
                }`}>
                  {lesson.status.replace('-', ' ')}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 line-clamp-2">{lesson.desc}</p>
              
              {lesson.status !== 'new' && (
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                    <span>Progress</span>
                    <span>{lesson.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-500 ${lesson.status === 'completed' ? 'bg-emerald-500' : 'bg-primary'}`} style={{width: `${lesson.progress}%`}}></div>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                {lesson.status === 'completed' ? (
                  <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-base">restart_alt</span> Review
                  </button>
                ) : (
                  <button className="flex items-center gap-1 bg-accent-gold text-background-dark px-4 py-2 rounded-lg text-xs font-bold active:scale-95 transition-transform">
                    <span className="material-symbols-outlined text-lg">play_arrow</span> {lesson.status === 'in-progress' ? 'Continue' : 'Start'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonsScreen;
