import { Injectable } from '@angular/core';
import { LogLevel } from '@core/enums/log-level.enum';
import { LogEntry } from '@core/utils/log-entry';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;

  constructor() {}

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if (
      (level >= this.level && level !== LogLevel.Off) ||
      this.level === LogLevel.All
    ) {
      ret = true;
    }
    return ret;
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      console.log(entry.buildLogString());
    }
  }

  debug(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }
}
