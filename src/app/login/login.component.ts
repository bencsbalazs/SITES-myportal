import { Component } from '@angular/core';
import { AuthService } from '../login/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  template: `
  <ng-template #popContent>
    <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
      <label for="name">Name:</label>
      <input type="text" name="username" ngModel class="form-control input-md">
      <label for="password">Password:</label>
      <input type="password" name="password" ngModel class="form-control input-md">
      {{ error }}
      <hr>
      <button type="submit" class="btn btn-primary m-4">Login</button>
    </form>
  </ng-template>
  <ng-template #popTitle>Login form</ng-template>
  <button type="button" class="btn btn-outline-secondary" placement="bottom" [ngbPopover]="popContent" [popoverTitle]="popTitle">Login</button>`,
  styles: [''],
  providers: [AuthService]
})
export class LoginComponent {
  constructor(private authService: AuthService) { }
  onSubmit(loginForm: NgForm) {
    if (loginForm.value.username && loginForm.value.password) {
      this.authService.login(loginForm.value.username, loginForm.value.password)
    }
  }
}
