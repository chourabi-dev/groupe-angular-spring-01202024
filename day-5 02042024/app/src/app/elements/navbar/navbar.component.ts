import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products:any[] = [];
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.products = this.cart.shop; // []
    console.log("init navbar");
    
  }

}
