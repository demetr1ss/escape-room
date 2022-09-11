/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatchType, StateType } from '../types/state-type';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
