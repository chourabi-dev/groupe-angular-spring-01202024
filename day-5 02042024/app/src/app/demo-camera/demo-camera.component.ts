import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-camera',
  templateUrl: './demo-camera.component.html',
  styleUrls: ['./demo-camera.component.css']
})
export class DemoCameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initApp();
  }


  /**
   * 10000000000000000% promise will return a success !!!
   * async initApp(){
    let camera = await this.getCamera(); 

    console.log(camera);
    
  }
   */


  initApp(){
    this.getCamera().then((camera)=>{
      console.log(camera);
      
    }).catch((err)=>{
      console.log(err);

      
      
    });
  }
  


  getCamera(){

    let promise = new Promise( (success,failure)=>{

      // .....

      // failure(  { success: false, message:"error camera" } )

      setTimeout(()=>{
        failure( { success:false, code:0 } );
      },5000)


    });

    return promise;

  }
}
