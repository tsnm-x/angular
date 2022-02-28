import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  constructor() { }

  getProductCount(){
    return this.counter;
  }

  setProductCount(productCount: number){
    this.counter.next(productCount);
  }
}
