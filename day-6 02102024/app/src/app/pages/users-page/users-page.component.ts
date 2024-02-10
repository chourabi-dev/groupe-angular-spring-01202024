import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit,OnDestroy {

  users:User[] = []

  loading:boolean = false;
  errorMessage:string = '';

  constructor(private api:ApiService) {  }

  ngOnDestroy(): void { 

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loading = true;
    this.errorMessage='';
    
    this.api.getDataFromServer().toPromise().then( (res:any)=>{

      
      this.users = res;
 
       
    } ).catch((err)=>{ 

      this.errorMessage="Semething went wrong, please check internet connection and try again";

    }).finally(()=>{
      this.loading = false;
    })
  }
}
