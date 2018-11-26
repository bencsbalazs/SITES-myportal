import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <div class="row">
    <div class="col-md-8 blog-main">
    <div class="blog-post" *ngFor="let post of currentpost">
      <h2 class="blog-post-title">{{post.title}}</h2>
      <p class="blog-post-meta">{{ post.tags }}</p>
      <p class="blog-post-meta">{{ post.date }} by {{ 'header.title' | translate }}</p>
      {{ post.content }}
    </div>
  </div>
  <aside class="col-md-4 blog-sidebar">
    <div class="p-3">
      <h4 class="font-italic">Archives</h4>
      <ol class="list-unstyled mb-0" *ngFor="let title of blogposts">
        <li><a href="/blog/{{ title._id }}">{{title.title}}</a></li>
      </ol>
    </div>
  </aside>
</div>
  `,
  styles: [''],
  providers: [Blog]
})
export class BlogPostComponent implements OnInit {
  constructor(private blog: Blog, private route: ActivatedRoute) {}
  blogposts
  id
  currentpost
  prewid
  nextid
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.blog.getData('http://localhost:3000/api/blog/list','').subscribe(
      data => this.blogposts = data,
      error => console.log(error),
    )
    this.blog.getData('http://localhost:3000/api/blog/',this.id).subscribe(
      data => this.currentpost = data,
      error => console.log(error),
    )

  }
}
