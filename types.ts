
export type Screen = 'home' | 'library' | 'lessons' | 'prayer' | 'growth' | 'giving' | 'chat' | 'profile' | 'event-details';

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  series?: string;
  thumbnail: string;
}

export interface Lesson {
  id: string;
  week: number;
  title: string;
  description: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'new' | 'locked';
  icon: string;
}

export interface PrayerRequest {
  id: string;
  user: {
    name: string;
    avatar: string;
    isOnline?: boolean;
    isAnonymous?: boolean;
  };
  timeAgo: string;
  category: string;
  content: string;
  prayersCount: number;
  commentsCount: number;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
  isUrgent?: boolean;
}

export interface AppState {
  currentScreen: Screen;
  user: {
    name: string;
    department: string;
    avatar: string;
  };
}
