import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading:boolean = false;
  
  products:Product[] =  [];


  somme:number = 0;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loading = true;
    
    this.productService.getProducts().toPromise().then(
      (res:any)=>{
        console.log(res);

        this.products = res;


        this.products.map((p)=>{

          this.somme = this.somme + p.price;

        })
        
      }
    ).catch((err)=>{

      console.log(err);
      

    }).finally(
      ()=>{
        this.loading = false;
      }
    );
  }


  deleteProduct(id:number){
    console.log(id);
    this.productService.deleteProductByID(id).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.getData();
      }
    })
  }
}
