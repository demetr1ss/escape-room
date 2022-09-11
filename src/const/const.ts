export const AppRoute = {
  Main: '/',
  Contacts: '/contacts',
  Quest: '/detailed-quest/:id',
  NotFound: '*',
} as const;

export const APIRoute = {
  Quests: '/quests',
  Quest: '/quests/:id',
  Orders: '/orders'
} as const;

export const enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export const NameSpace = {
  App: 'APP',
  DetailedQuest: 'DETAILED_QUEST',
  Quests: 'QUESTS',
  Orders: 'ORDERS',
} as const;

export const DEFAULT_FILTER = 'all-quests';

export const QuestGenresName: {[key: string]: string} = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export const Levels: {[key: string]: string} = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий'
} as const;

export const LocationSetting = {
  lat: 59.968306,
  lng: 30.317605,
  zoom: 17,
} as const;

