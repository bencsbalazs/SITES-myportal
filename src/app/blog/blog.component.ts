import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.service';

@Component({
  selector: 'app-home-blog',
  template: `
  <div class="container maincontainer">
  <div class="row">
    <div class="col-md-8 blog-main">
      <div class="blog-post" *ngFor="let post of blogposts">
        <h2 class="blog-post-title">{{post.title}}</h2>
        <p class="blog-post-meta">January 1, 2014 by
          <a href="#">Mark</a>
        </p>
        {{ post.content }}
      </div>
      <nav class="blog-pagination w-100">
        <a class="btn btn-outline-primary col-6" href="#">Older</a>
        <a class="btn btn-outline-secondary col-6" href="#">Newer</a>
      </nav>
    </div>
    <aside class="col-md-4 blog-sidebar">
      <div class="p-3">
        <h4 class="font-italic">Archives</h4>
        <ol class="list-unstyled mb-0" *ngFor="let title of blogposts">
          <li><a href="{{title.id}}">{{title.title}}</a></li>
        </ol>
      </div>
      <button class="btn btn-lg btn-primary">New post</button>
    </aside>
  </div>
</div>`,
  styles: [''],
  providers:[Blog],
})
export class BlogComponent implements OnInit {
  blogposts;
  constructor(private blog: Blog) {
  }

  ngOnInit() {
    this.blog.getData('http://localhost:3000/api/blog/list').subscribe(
      data => this.blogposts = data,
      error => console.log(error)
    )
  }

}
