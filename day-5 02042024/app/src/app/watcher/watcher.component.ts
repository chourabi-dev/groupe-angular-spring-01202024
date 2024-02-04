import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.css']
})
export class WatcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  startWatch(){
    this.watchMyPC().subscribe(
     (res)=>{ console.log(res);  },
     
     
     (err)=>{
      console.log(err);
      
     }
     )
  }




  watchMyPC(){
    let observable = new Observable((observer)=>{

        navigator.geolocation.watchPosition((res)=>{
          observer.next(res);
        },(err)=>{
          observer.error(err);
        })

    })

    return observable;
  }

}
