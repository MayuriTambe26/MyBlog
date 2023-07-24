import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  registerUser() {
    let name = this.registerForm.value.name;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    let confirmPassword = this.registerForm.value.confirmPassword;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      console.log('Fields can\'t be empty');
    } else {
      if (password === confirmPassword) {
        console.log('User has been registered success');
        this.router.navigate(['/']);
      } else {
        console.log(password, 'and', confirmPassword);
        console.log('Password did not match');
      }
    }
  }
}
