import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private dataSource = new BehaviorSubject<string>('default message');
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: string) {
    this.dataSource.next(data)
  }
}
