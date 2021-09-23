import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '@store/index';
import {
  DECREMENT,
  DECREMENT_BY_VALUE,
  INCREMENT,
  INCREMENT_BY_VALUE,
  RESET,
} from '@store/actions/counter.action';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePageComponent implements OnInit {
  count$: Observable<number>;
  count: number = 1;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}

  onIncrement(): void {
    this.store.dispatch(INCREMENT());
  }
  onIncrementByValue(): void {
    this.store.dispatch(INCREMENT_BY_VALUE({ value: this.count }));
  }
  onDecrement(): void {
    this.store.dispatch(DECREMENT());
  }
  onDecrementByValue(): void {
    this.store.dispatch(DECREMENT_BY_VALUE({ value: this.count }));
  }
  onReset(): void {
    this.store.dispatch(RESET());
  }
}
