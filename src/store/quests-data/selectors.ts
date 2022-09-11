import { LoadingStatus, NameSpace } from 'const/const';
import { StateType } from 'types/state-type';
import { QuestType } from 'types/types';

export const getQuests = (state: StateType): QuestType[] =>
  state[NameSpace.Quests].quests;

export const getQuestsDataLoadedStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.Quests].questsLoadingStatus;
