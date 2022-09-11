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


export const QuestGenresName: {[key: string]: string} = {
  AllQuests: 'Все квесты',
  Adventures: 'Приключения',
  Horrors: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  Scifi: 'Sci-fi',
} as const;

export const Levels: {[key: string]: string} = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий'
} as const;
