
import React, { useState } from 'react';
import { Screen } from './types';
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import LessonsScreen from './screens/LessonsScreen';
import PrayerScreen from './screens/PrayerScreen';
import GrowthScreen from './screens/GrowthScreen';
import GivingScreen from './screens/GivingScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'library': return <LibraryScreen onBack={() => setCurrentScreen('home')} />;
      case 'lessons': return <LessonsScreen onBack={() => setCurrentScreen('home')} />;
      case 'prayer': return <PrayerScreen onBack={() => setCurrentScreen('home')} />;
      case 'growth': return <GrowthScreen onBack={() => setCurrentScreen('home')} />;
      case 'giving': return <GivingScreen onBack={() => setCurrentScreen('home')} />;
      case 'chat': return <ChatScreen onBack={() => setCurrentScreen('home')} />;
      case 'profile': return <ProfileScreen onBack={() => setCurrentScreen('home')} />;
      case 'event-details': return <EventDetailsScreen onBack={() => setCurrentScreen('home')} />;
      default: return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen relative bg-background-dark shadow-2xl flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderScreen()}
      </div>
      
      {currentScreen !== 'event-details' && currentScreen !== 'chat' && (
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}
    </div>
  );
};

export default App;
