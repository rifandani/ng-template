import { createAction, props } from '@ngrx/store';
import { CounterModel } from '../models/counter.model';

export const INCREMENT = createAction('[Counter] Increment');
export const DECREMENT = createAction('[Counter] Decrement');
export const INCREMENT_BY_VALUE = createAction(
  '[Counter] IncrementByValue',
  props<CounterModel>()
);
export const DECREMENT_BY_VALUE = createAction(
  '[Counter] DecrementByValue',
  props<CounterModel>()
);
export const RESET = createAction('[Counter] Reset');
