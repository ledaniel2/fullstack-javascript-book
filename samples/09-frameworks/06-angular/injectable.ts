import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }
}

@Injectable()
export class DataService {
  constructor(private logger: LoggerService) {
    // LoggerService is injected into this service
  }
}
