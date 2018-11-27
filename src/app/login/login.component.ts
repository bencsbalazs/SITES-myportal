import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog/blog.service';
import { environment } from '../../environments/environment'
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
  providers: [Blog]
})
export class LoginComponent implements OnInit {

  constructor(private blog: Blog) {}

  ngOnInit() {}
  onSubmit(loginForm: NgForm) {
    this.blog.postData('http://localhost:3000/api/user/login', loginForm.value).subscribe(
      data => {

      },
      error => console.log(error)
    )
  }

}
