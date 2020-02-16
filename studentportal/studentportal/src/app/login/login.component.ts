import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  templateUrl: './login.component.html',
  selector: 'login'
})
export class LoginComponent {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder,private router: Router, private service: LoginService) {

    /*this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)])]
    });*/
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['' ]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {

    this.submitted = true;
     if ( this.email.value === 'admin' &&  this.password.value === 'admin' ) {

          this.router.navigate(['/widget/main']);

     } else if( this.email.value === 'student' &&  this.password.value === 'student'){

      this.router.navigate(['/student/form']);
        
     }else{

      alert('Invalid Creditionals!');

     }



  }

}
