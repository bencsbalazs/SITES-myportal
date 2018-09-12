import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  <div class="col-4 offset-4">
     <h2 class="form-signin-heading">Please sign in</h2>
     <form>
     <div class="form-group">
        <label for="username">Email address</label>
        <input type="email" class="form-control" id="username" [(ngModel)]="user.username" name="username" placeholder="Username" required autofocus>
     </div>
     <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" [(ngModel)]="user.password" name="password" placeholder="Password" required>
     </div>
    <button class="btn btn-lg btn-primary btn-block" (click)="validateLogin();" type="button">Sign in</button>
    </form>
    </div>
  `,
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {
    onSubmit(f: NgForm){
        console.log(f.value);
    }

  public user : User;

  constructor(private loginService: LoginService) {
  	this.user = new User();
  }

  validateLogin() {
  	if(this.user.username) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
      }, error => {
        console.log('Error is: ', error);
      });
  	} else {
  		alert('Enter your username and password!');
  	}
  }

}
