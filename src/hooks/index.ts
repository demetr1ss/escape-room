import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatchType, StateType } from '../types/state-type';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatchType>();
