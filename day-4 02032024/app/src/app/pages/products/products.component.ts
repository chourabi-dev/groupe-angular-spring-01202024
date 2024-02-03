import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form = new FormGroup({
    product: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    
  })

  products:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    const p = this.form.value;
    this.products.push(p);
    // reset form 
    this.form.reset();

    
  }

}
