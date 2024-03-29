import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.email] ),
    password: new FormControl('', [Validators.required,Validators.minLength(10)]),
    
  });


  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    // get the data from the form !!!
    const body = this.form.value;


    console.log(body);
    
  }


}
