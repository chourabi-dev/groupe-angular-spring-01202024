import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = [
    { id:1, name:"Hp pavillion", price:2500 },
    { id:2, name:"Loud speaker", price:360 },
    { id:3, name:"Keyboard", price:256 },
    { id:4, name:"Sony headset", price:3900 },
    
  ]
  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }


  addToCart(p:any){
    // 
    this.cart.add(p);
  }

}
