
import React from 'react';

interface ChatScreenProps {
  onBack: () => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onBack }) => {
  const messages = [
    { id: '1', user: 'Pastor Mike', role: 'Admin', text: 'Hey team! 👋 Excited for practice tonight. We\'re trying out the new arrangement for "Oceans". 🎸', time: '9:41 AM', avatar: 'https://picsum.photos/id/101/50/50', type: 'incoming' },
    { id: '2', user: 'Sarah J.', text: 'Sounds awesome! What time should we arrive to set up?', time: '9:43 AM', avatar: 'https://picsum.photos/id/103/50/50', type: 'incoming' },
    { id: '3', user: 'Me', text: 'I\'ll be there at 6 PM sharp to help with the sound check! 🎚️', time: '9:45 AM', type: 'outgoing', status: 'read' },
    { id: '4', user: 'David K.', text: 'Checking if I need to bring my amp or if we\'re using the house one?', time: '9:52 AM', avatar: 'https://picsum.photos/id/105/50/50', type: 'incoming' },
    { id: '5', user: 'Me', text: 'Bring yours just in case.', time: '9:55 AM', type: 'outgoing', status: 'sent' }
  ];

  return (
    <div className="flex flex-col h-screen bg-background-dark">
      <header className="p-4 pt-12 border-b border-white/5 flex items-center gap-4 bg-background-dark/95 backdrop-blur-md sticky top-0 z-20">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-dark"><span className="material-symbols-outlined">arrow_back</span></button>
        <div className="flex-1 text-center">
          <h1 className="font-bold leading-tight">Worship Team</h1>
          <p className="text-[10px] text-primary font-bold">24 Members Online</p>
        </div>
        <button className="p-2 rounded-full hover:bg-surface-dark"><span className="material-symbols-outlined">info</span></button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar pb-8">
        <div className="flex justify-center py-2"><span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Today</span></div>
        <div className="text-center"><p className="text-[10px] text-slate-500 italic">Pastor Mike created this group "Worship Team"</p></div>

        {messages.map(msg => (
          <div key={msg.id} className={`flex items-end gap-3 ${msg.type === 'outgoing' ? 'justify-end' : ''}`}>
            {msg.type === 'incoming' && <img src={msg.avatar} className="w-8 h-8 rounded-full border border-white/10" alt={msg.user}/>}
            <div className={`flex flex-col max-w-[75%] gap-1 ${msg.type === 'outgoing' ? 'items-end' : 'items-start'}`}>
              {msg.type === 'incoming' && (
                <div className="flex items-center gap-1.5 ml-1">
                  <span className="text-xs font-bold text-slate-300">{msg.user}</span>
                  {msg.role && (
                    <span className="bg-amber-500/10 text-amber-500 px-1.5 rounded text-[8px] font-black uppercase flex items-center gap-0.5 border border-amber-500/20">
                      <span className="material-symbols-outlined text-[10px]">verified_user</span> ADMIN
                    </span>
                  )}
                </div>
              )}
              <div className={`p-3 rounded-2xl shadow-sm border border-white/5 ${msg.type === 'outgoing' ? 'bg-primary text-white rounded-br-none' : 'bg-card-dark text-slate-100 rounded-bl-none'}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <div className="flex items-center gap-1 mt-0.5 mx-1">
                <span className="text-[9px] text-slate-500">{msg.time}</span>
                {msg.type === 'outgoing' && (
                  <span className={`material-symbols-outlined text-[12px] ${msg.status === 'read' ? 'text-primary' : 'text-slate-500'}`}>
                    {msg.status === 'read' ? 'done_all' : 'check'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="p-4 bg-background-dark border-t border-white/5 pb-8">
        <div className="flex items-end gap-3 max-w-xl mx-auto">
          <button className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-slate-400"><span className="material-symbols-outlined">add</span></button>
          <div className="flex-1 relative">
            <textarea 
              rows={1}
              className="w-full bg-surface-dark border-transparent rounded-2xl p-3 pr-10 text-sm focus:ring-1 focus:ring-primary resize-none no-scrollbar"
              placeholder="Share your thoughts..."
            />
            <button className="absolute right-3 bottom-3 text-slate-500"><span className="material-symbols-outlined text-[20px] filled">mood</span></button>
          </div>
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"><span className="material-symbols-outlined ml-0.5">send</span></button>
        </div>
      </footer>
    </div>
  );
};

export default ChatScreen;
