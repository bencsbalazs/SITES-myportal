import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.service';
import { AuthService } from '../login/login.service';
@Component({
  template: `
  {{ isLoggedIn }}
  <div class="row" ng-hide="isLoggedIn">
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
      <a (click)="logout" class="btn btn-lg btn-primary">LogOut</a>
      <a href="http://localhost:4200/newpost#blog" class="btn btn-lg btn-primary">NewPost</a>
    </div>
  </div>
</ng-template>
  `,
  styles: [''],
  providers: [Blog, AuthService]
})
export class BlogMainComponent implements OnInit {
  constructor(private blog: Blog, private authService: AuthService) { }
  isLoggedIn
  blogposts
  logout = this.authService.logout()
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn()
    this.blog.getData('http://localhost:3000/api/blog/list', '').subscribe(
      data => this.blogposts = data,
      error => console.log(error),
    )
  }
}
