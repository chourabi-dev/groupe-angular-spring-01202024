import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /*photos:string[] = [
    'https://img.freepik.com/premium-photo/wallper-black-oil_387837-81.jpg',
    'https://c4.wallpaperflare.com/wallpaper/617/830/483/spiral-light-lines-circles-wallpaper-preview.jpg'
  ]

  index:number = 0;
  currentURL:string = this.photos[this.index];


  next(){
    this.index++;

    if( this.index == this.photos.length ){
      this.index = 0;
    }
 

    this.currentURL = this.photos[this.index];
    
  }


  previous(){
    this.index--;

    if( this.index < 0 ){
                               // 2
      this.index = this.photos.length - 1
    }

    this.currentURL = this.photos[this.index];
  }*/




  //  APP 2
/*
  todos:any[] = [];

  deleteTodo(i:number){
    this.todos.splice(i,1);
  }

  typing(e:any){
    console.log(e);

    const val = e.target.value;
    
    if( val != '' ){
      const code = e.code;

      if( code == 'Enter'){
        //
        const todo = { date: new Date(), todo: val };
  
        this.todos.push(todo);
  
        e.target.value= '';
      }
   
    }
    
    
  }
*/



  

}
