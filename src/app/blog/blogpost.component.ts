import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <div class="row">
    <div class="col-md-8 blog-main">
    <h1>Plogpost: {{ id }}</h1>
    <div class="blog-post">
      <h2 class="blog-post-title">{{post.title}}</h2>
      <p class="blog-post-meta">{{ currentpost.tags }}</p>
      <p class="blog-post-meta">{{ currentpost.date }} by {{ 'header.title' | translate }}</p>
      {{ currentpost.content }}
    </div>
    <nav class="blog-pagination w-100">
      <a class="btn btn-outline-primary col-6" href="#">{{ 'blog.home.olderpost' | translate }}</a>
      <a class="btn btn-outline-secondary col-6" href="#">{{ 'blog.home.newerpost' | translate }}</a>
    </nav>
  </div>
  <aside class="col-md-4 blog-sidebar">
    <div class="p-3">
      <a href="http://localhost:4200/newpost#blog" class="btn btn-lg btn-primary">NewPost</a>
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
  constructor(private blog: Blog, private route: ActivatedRoute) {
  }
  blogposts
  id
  currentpost
  prewid
  nextid
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.blog.getData('http://localhost:3000/api/blog/list').subscribe(
    data => this.blogposts = data,
      error => console.log(error),
    )
    for(const e of this.blogposts){
      if (e.id == this.id){
        this.currentpost = e
      }
    }
  }
}
