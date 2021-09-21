import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '@environment/environment';
import { counterReducer } from './reducers/counter.reducer';

// interface
export interface AppState {
  router: RouterReducerState;
  count: Readonly<number>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  count: counterReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [] // can use ngrx-store-freeze
  : [];
