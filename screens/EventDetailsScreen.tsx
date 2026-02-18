
import React from 'react';

interface EventDetailsScreenProps {
  onBack: () => void;
}

const EventDetailsScreen: React.FC<EventDetailsScreenProps> = ({ onBack }) => {
  return (
    <div className="relative flex flex-col h-full bg-background-dark pb-24">
      {/* Top Banner */}
      <div className="relative h-[45vh] shrink-0">
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-between p-4 pt-12 bg-gradient-to-b from-black/60 to-transparent">
          <button onClick={onBack} className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white"><span className="material-symbols-outlined">arrow_back</span></button>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white"><span className="material-symbols-outlined">favorite</span></button>
            <button className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white"><span className="material-symbols-outlined">ios_share</span></button>
          </div>
        </div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4t9DvInvbyVlekKymKoBY9fuwZ_XHD6qhnQr-3Wl3NsZKHCSvJnA-_06aM3l-dsmX69dHeKprwCBYKVeR0w5HUECDEl_UMR5U8hY6tT-fL6QmCbsiOnV1UK2v_cOdCn8gLG27CE0BsvVo8ahAhkZsH10ROuQwjruHSnE_B96lszCqxMQOyvuQvaupB2TX3dbQaVP022JGyWb4ng6RK4b_ekqw8L9Q7sluQa64OexPly5i7RF4AcTUNQsQ_Kg1eRAeYqLOFFGyUXo" className="w-full h-full object-cover" alt="Summer Camp"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-5 pb-8 space-y-3 translate-y-6">
           <div className="flex gap-2">
             <span className="px-3 py-1 bg-primary rounded-full text-[10px] font-bold uppercase tracking-wider">Spiritual Retreat</span>
             <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">🔥 Popular</span>
           </div>
           <h1 className="text-3xl font-extrabold leading-tight">Youth Summer Camp 2024</h1>
           <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold">
              <span className="material-symbols-outlined text-primary-light text-base filled">star</span>
              <span className="text-white">4.9</span>
              <span className="text-slate-500 mx-1">•</span>
              <span>Hosted by Impact Team</span>
           </div>
        </div>
      </div>

      <main className="px-5 pt-8 space-y-8 flex-1">
        <div className="space-y-3">
          {[ 
            { l: 'Date', v: 'Aug 14 - Aug 16, 2024', i: 'calendar_month' },
            { l: 'Time', v: '10:00 AM Start', i: 'schedule' },
            { l: 'Location', v: 'Camp Zion, Pine Valley', i: 'location_on', arrow: true }
          ].map(item => (
            <div key={item.l} className="flex items-center gap-4 p-3 bg-surface-dark rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-default">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary-light"><span className="material-symbols-outlined">{item.i}</span></div>
              <div className="flex-1"><p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{item.l}</p><p className="text-sm font-bold">{item.v}</p></div>
              {item.arrow && <span className="material-symbols-outlined text-slate-600">chevron_right</span>}
            </div>
          ))}
        </div>

        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-bold text-lg">Who's Going?</h3>
            <button className="text-xs font-bold text-primary">View All</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => <img key={i} src={`https://picsum.photos/id/${i+50}/100/100`} className="w-11 h-11 rounded-full border-2 border-background-dark object-cover shadow-lg" alt="User"/>)}
              <div className="w-11 h-11 rounded-full bg-surface-dark border-2 border-background-dark flex items-center justify-center text-[10px] font-bold shadow-lg">+124</div>
            </div>
            <p className="text-xs text-slate-500 font-bold italic">Friends are going!</p>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="font-bold text-lg">About Event</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Join us for an unforgettable weekend at Camp Zion! This year's theme is "Renewal," focusing on reconnecting with faith through nature, worship, and community. Perfect balance of structured sessions and free time.
          </p>
        </section>

        <section className="space-y-4">
           <h3 className="font-bold text-lg">Highlights</h3>
           <ul className="space-y-4">
             {[ 
               {i: 'hiking', t: 'Sunset hike to Prayer Rock with panoramic views.'},
               {i: 'music_note', t: 'Live worship sessions by the lake every evening.'},
               {i: 'groups', t: 'Small group breakout sessions for deeper connection.'}
             ].map(h => (
               <li key={h.i} className="flex items-start gap-3">
                 <span className="material-symbols-outlined text-primary-light text-xl mt-0.5">{h.i}</span>
                 <p className="text-sm text-slate-400 font-medium">{h.t}</p>
               </li>
             ))}
           </ul>
        </section>

        <section className="pb-12">
          <h3 className="font-bold text-lg mb-4">Location</h3>
          <div className="relative h-44 rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/id/28/600/400" className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Map"/>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
               <button className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-base">map</span> Open Map
               </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full max-w-md mx-auto p-4 bg-background-dark/80 backdrop-blur-xl border-t border-white/5 z-40">
        <div className="flex items-center justify-between gap-6">
           <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Price</p>
              <p className="text-2xl font-black">$150<span className="text-[11px] text-slate-500 font-bold ml-1">/ person</span></p>
           </div>
           <button className="flex-1 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-background-dark font-black rounded-2xl shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
              Register Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
           </button>
        </div>
      </footer>
    </div>
  );
};

export default EventDetailsScreen;
