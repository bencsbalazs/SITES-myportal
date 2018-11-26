import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.service';
import { environment } from '../../environments/environment'
import { NgForm } from '@angular/forms';

@Component({
  template: `
  <div class="row" *ngIf="environment.notLoggedIn; else elseBlock">
    <div class="col-md-8 blog-main">
    <div class="blog-post" *ngFor="let post of blogposts">
      <h2 class="blog-post-title">{{post.title}}</h2>
      <p class="blog-post-meta">{{ post.tags }}</p>
      <p class="blog-post-meta">{{ post.date }} by {{ 'header.title' | translate }}</p>
      {{ post.content }}
    </div>
  </div>
  <aside class="col-md-4 blog-sidebar">
    <div class="p-3">
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
      <button type="button" class="btn btn-outline-secondary" placement="bottom" [ngbPopover]="popContent" [popoverTitle]="popTitle">Login</button>
      <h4 class="font-italic">Archives</h4>
      <ol class="list-unstyled mb-0" *ngFor="let title of blogposts">
        <li><a href="/blog/{{ title._id }}">{{title.title}}</a></li>
      </ol>
    </div>
  </aside>
</div>
<ng-template #elseBlock>
  <div class="col-12">
    <div class="row"></div>
    <div class="row">
      <a (click)="environment.notLoggedIn = !environment.notLoggedIn" class="btn btn-lg btn-primary">LogOut</a>
      <a href="http://localhost:4200/newpost#blog" class="btn btn-lg btn-primary">NewPost</a>
    </div>
  </div>
</ng-template>
  `,
  styles: [''],
  providers: [Blog]
})
export class BlogMainComponent implements OnInit {
  environment = environment
  constructor(private blog: Blog) {}
  blogposts
  error
  ngOnInit() {
    this.blog.getData('http://localhost:3000/api/blog/list', '').subscribe(
      data => this.blogposts = data,
      error => console.log(error),
    )
  }
  onSubmit(loginForm: NgForm) {
      this.blog.postData('http://localhost:3000/api/user/login', loginForm.value).subscribe(
        data => {
          if (data.status == "success"){
            environment.notLoggedIn = false
          } else {
            this.error = data.message
          }
        },
        error => console.log(error)
      )
    }
}
