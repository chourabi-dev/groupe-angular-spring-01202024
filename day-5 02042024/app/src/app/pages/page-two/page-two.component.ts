import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  counter:number= 0;
  constructor(private share:ShareDataService) { }

  // CYCLE DE VIE 
  ngOnInit(): void {

    this.counter = this.share.getCounter();

  }

}
