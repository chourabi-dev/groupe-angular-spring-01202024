import { Component } from '@angular/core';
import { ProductModel } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  email?:string;

  username:string="chourabi";

  year:number = 2024;


  date:Date = new Date()


  access:boolean = false;


  user:any = { username:"chourbai", email:"tchourabi@gmail.com" }


  employees:string[] = [
    'john wick',
    'jason stathem',
    'john wick',
    'jason stathem',
    'john wick',
    'jason stathem'
  ]



  products:ProductModel[] = [
    { id: 1 , product:"Hp pavillion", price:2500, quantity: 0 },
    { id: 2 , product:"Sony headset", price:25, quantity: 15 },
    { id: 3 , product:"IPhone 15 pro max", price:6000, quantity: 3 }
    
  ]





}
