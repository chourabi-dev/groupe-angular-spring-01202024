import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:any = '';
 

  // INJECTION SERVICE ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.id = this.route.snapshot.params['id'];
    
    
  }

}
