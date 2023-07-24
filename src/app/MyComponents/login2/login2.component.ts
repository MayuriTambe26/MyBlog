import { Component } from '@angular/core';
import{FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  });

constructor(private router:Router){}


  loginUser(){
    let email=this.loginForm.value.email;
    let password=this.loginForm.value.password;

    if(email==="test@gmail.com" && password==="12345678"){
      console.log("login successful");
      //write code to open dashboard
    this.router.navigate(['/dashboard/home']);
    
      
    }else{
      console.log("invalid credentials");
      this.loginForm.reset();
    }
  }
}
