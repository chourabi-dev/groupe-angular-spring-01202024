import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private counter:number = 0;

  constructor() { }


  updateCounter(number:number){
    this.counter = number;
  }


  getCounter(){
    return this.counter; 
  }
}
