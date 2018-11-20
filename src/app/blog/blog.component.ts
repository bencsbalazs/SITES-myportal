import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  template: `
  <div class="container maincontainer">
    <div class="row">
      <div class="col-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `,
  styles: ['']
})
export class BlogComponent implements OnInit {
  /* dashBoard = `
  <div class="col-12">
      <div class="row blog-post my-4" *ngFor="let post of blogposts">
        <h2 class="col-lg-4 blog-post-title">{{post.title}}</h2>
        <p class="col-lg-3 blog-post-meta">{{post._id}}</p>
        <div class="col-lg-3"></div>
        <div class="col-lg-2">
          <button class="btn-sm btn-danger fa fa-trash"></button>
          <button class="btn-sm btn-warning fa fa-pencil"></button>
        </div>
      </div>
      <div class="row">
        <button *ngIf="login" class="btn btn-lg btn-primary m-4">New post</button>
        <button (click)="login = !login" class="btn btn-lg btn-primary m-4">Logout</button>
      </div>
    </div>` */

  constructor() {
  }

  ngOnInit() {
  }

}
