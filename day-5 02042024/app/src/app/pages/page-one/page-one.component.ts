import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  counter:number = 0;
  
  // INJECTION SERVIE SHARE DATA
  constructor( private share:ShareDataService ) { }

  ngOnInit(): void {
  }


  addOne(){
    this.counter++;

    this.share.updateCounter(this.counter);

  }

}
