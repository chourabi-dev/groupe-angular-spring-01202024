import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
 


  categories:Category[] = [];

  success:string = '';

  form = new FormGroup({
    product : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required) 
  })


  constructor( private service:ProductService ) { }

  ngOnInit(): void {
    this.initCategoriesList();
  }


  initCategoriesList(){
    this.service.getCategories().toPromise().then((categoreis:any)=>{
      this.categories = categoreis;
    }).catch()
  }


  create(){
    // get the data from the form !!
    let body = this.form.value;

    console.log(body);

    this.service.addProduct(body).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.success = res.message;
        this.form.reset();
      }
    }).catch(
      (err)=>{

      }
    )
    

  }

}
