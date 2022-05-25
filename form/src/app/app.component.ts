import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  loginForm = new FormGroup({
    first: new FormControl('', [Validators.required,Validators.pattern('[a-z A-Z]*$')]),
    last: new FormControl('', [Validators.required,Validators.pattern('[a-z A-Z]*$')]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
    cnfpassword: new FormControl('', Validators.required),

  })
  loginUser() {
    console.warn(this.loginForm.value);
  }
  get first() {
    return this.loginForm.get('first')
  }
  get last() {
    return this.loginForm.get('last')
  }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }
  get cnfpassword() {
    return this.loginForm.get('cnfpassword')
  }

  fnameLnameisEqual(){

    if(this.loginForm.controls['first'].value == this.loginForm.controls['last'].value && (this.loginForm.controls['first'].value!='' && this.loginForm.controls['last'].value!='')){
      return true;
    }
    else{
      return false;
    }
  }
  passwordisEqual(){

    if(this.loginForm.controls['password'].value != this.loginForm.controls['cnfpassword'].value && (this.loginForm.controls['password'].value!='' && this.loginForm.controls['cnfpassword'].value!='')){
      return true;
    }
    else{
      return false;
    }
  }

}
