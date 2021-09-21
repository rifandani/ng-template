import { Action, createReducer, on } from '@ngrx/store';
import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_BY_VALUE,
  DECREMENT_BY_VALUE,
} from '../actions/counter.action';

export type CounterState = Readonly<number>;

export const counterState: CounterState = 0;

const _counterReducer = createReducer(
  counterState,
  on(INCREMENT, (state) => state + 1),
  on(DECREMENT, (state) => state - 1),
  on(INCREMENT_BY_VALUE, (state, { value }) => state + value),
  on(DECREMENT_BY_VALUE, (state, { value }) => state - value),
  on(RESET, (_state) => 0)
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
