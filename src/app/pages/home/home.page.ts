import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@core/services/logger.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePageComponent implements OnInit {
  count: number = 0;

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.count++;
    this.logger.info(`onIncrement() method called`);
  }
  onDecrement(): void {
    this.count--;
    this.logger.info(`onDecrement() method called`);
  }
}
