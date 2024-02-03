import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // API ...
  articles:any[] = [
    { id:1, title:"Angualr apps",  nbrLikes:52, content:'lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem  ' },
    { id:2, title:"Springboot vs symfony",  nbrLikes:12, content:'lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem  ' },
    { id:3, title:"ReactJS",  nbrLikes:120, content:'lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem lreemlreem lreem  ' },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
