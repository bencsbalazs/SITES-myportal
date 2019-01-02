import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.service';
import { AuthService } from '../login/login.service';
@Component({
  template: `
  <div class="row" *ngIf="this.authService.isLoggedOut()">
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
      <login></login>
      <button (click)='SyncData()' class="btn btn-info">Sync documents</button>
      <h4 class="font-italic">Archives</h4>
      <ol class="list-unstyled mb-0" *ngFor="let title of blogposts">
        <li><a href="/blog/{{ title._id }}">{{title.title}}</a></li>
      </ol>
    </div>
  </aside>
</div>
<div *ngIf="this.authService.isLoggedIn()">
  <div class="col-12">
    <div class="row" *ngFor="let post of blogposts">
      <div class="col-4"><h3>{{post.title}}</h3></div>
      <div class="col-4">{{post.tags}}</div>
      <div class="col-4">
        <button class="m-2 btn btn-lg btn-warning fa fa-edit"></button>
        <button class="m-2 btn btn-lg btn-danger fa fa-remove"></button>
        <button class="m-2 btn btn-lg btn-success fa fa-upload"></button>
      </div>
    </div>
    <div class="row">
      <a (click)="this.authService.logout()" class="btn btn-lg btn-warning m-2">LogOut</a>
      <a href="http://localhost:4200/newpost#blog" class="btn btn-lg btn-primary m-2">NewPost</a>
      <a (click)="this.SyncData()" class="btn btn-lg btn-info m-2">SyncData</a>
    </div>
  </div>
</div>
  `,
  styles: [''],
  providers: [Blog, AuthService]
})
export class BlogMainComponent implements OnInit {
  constructor(private blog: Blog, private authService: AuthService) { }
  blogposts
  ngOnInit() {
    this.authService.isLoggedIn()
    this.blog.getData('http://localhost:3000/api/blog/list', '').subscribe(
      data => this.blogposts = data,
      error => console.log(error),
    )
  }
  SyncData = () => {
    console.log('Sync started...')
    this.blog.postData('http://localhost:3000/api/blog/fill', '').subscribe(
      data => console.log(data),
      error => console.log(error),
    )
  }
}
