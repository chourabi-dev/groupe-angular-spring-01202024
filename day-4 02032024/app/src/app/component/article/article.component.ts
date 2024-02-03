import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() id?:number;
  @Input() title?:string;
  @Input() content?:string;
  @Input() likes:number = 0;

  liked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  updateLike(){

    if (this.liked == false) {
      this.likes++;
    } else {
      this.likes--;
    }

    this.liked = ! this.liked;


    // API
    // ID USER + ID ARTICLE 
  }

}
