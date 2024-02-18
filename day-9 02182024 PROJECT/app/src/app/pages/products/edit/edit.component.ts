import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  id:any = '';

  categories:Category[] = [];

  success:string = '';

  form = new FormGroup({
    product : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required) 
  })


  constructor( private service:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];


    this.initForm();

    this.initCategoriesList();
  }


  initCategoriesList(){
    this.service.getCategories().toPromise().then((categoreis:any)=>{
      this.categories = categoreis;
    }).catch()
  }

  initForm(){
    this.service.getProductByID(this.id).toPromise().then((res:any)=>{
      this.form.setValue(res);
    })
  }


  update(){
    
    let body = this.form.value;

    console.log(body);

    this.service.updateProduct(body,this.id).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.success = res.message;
        
        
      }
    }).catch(
      (err)=>{

      }
    )
    

    

  }


}
