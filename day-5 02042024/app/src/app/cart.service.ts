import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shop:any[] = [];


  constructor() { }


  add(p:any){
    this.shop.push(p);

    console.log(this.shop);
    
  }


}
