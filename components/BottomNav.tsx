
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'library', icon: 'video_library', label: 'Library' },
    { id: 'prayer', icon: 'volunteer_activism', label: 'Prayer' },
    { id: 'growth', icon: 'trending_up', label: 'Growth' },
    { id: 'profile', icon: 'person', label: 'Profile' }
  ];

  return (
    <nav className="absolute bottom-0 w-full bg-surface-darker/95 backdrop-blur-lg border-t border-white/5 pt-2 pb-6 px-2 z-50">
      <div className="flex justify-around items-end">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Screen)}
            className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 w-16
              ${currentScreen === item.id ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
          >
            <div className="relative">
              <span className={`material-symbols-outlined text-2xl ${currentScreen === item.id ? 'filled' : ''}`}>
                {item.icon}
              </span>
              {currentScreen === item.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
              )}
            </div>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
