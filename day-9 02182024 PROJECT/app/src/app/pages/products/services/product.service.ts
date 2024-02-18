import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:8081/api/v1/product');
  }
  deleteProductByID(id:number){
    return this.http.delete('http://localhost:8081/api/v1/product/'+id);
  }

  getProductByID(id:any){
    
    return this.http.get('http://localhost:8081/api/v1/product/details/'+id);
  }

  getCategories(){
    return this.http.get('http://localhost:8081/api/v1/category');
  }

  addProduct(body:any){
    return this.http.post('http://localhost:8081/api/v1/product',body)
  }

  updateProduct(body:any,id:any){
    return this.http.put('http://localhost:8081/api/v1/product/'+id,body)
  }
}
