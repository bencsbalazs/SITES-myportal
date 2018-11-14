import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BlogList } from './blog.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[BlogList]
})
export class BlogComponent implements OnInit {
  blogposts=[];
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.post('http://localhost:3000/api/blog/list','').subscribe(
      data => this.blogposts.push(...data),
      error => console.log(error)
    )
  }

}
