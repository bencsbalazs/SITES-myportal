import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgForm } from '@angular/forms';
import { Blog } from './blog.service';
@Component({
  template: `
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate class="row">
    <div class="col-md-8">
      <div class="form-group">
        <input type="text" name="title" ngModel required #title="ngModel" class="form-control" placeholder="Title">
      </div>
      <div class="form-group">
        <input type="text" name="tags" ngModel class="form-control" placeholder="Tags">
      </div>
      <div class="form-group">
        <input type="datetime-local" name="date" ngModel class="form-control">
      </div>
      <div class="form-group">
      <textarea name="content" ngModel></textarea>
      </div>
    </div>
    <div class="col-md-4">
    <button type="submit" class="btn btn-lg m-3 btn-success">Submit</button>
    <button type="reset" class="btn btn-lg m-3 btn-warning">Empty</button>
    <a href="/#blog" class="btn btn-lg m-3 btn-danger">Cancel</a>
    <button type="button" class="btn btn-lg m-3 btn-info">Logout</button>
    </div>
    </form>`,
  styles: [''],
  providers: [Blog]
})
export class NewPostComponent implements OnInit {
  constructor(private blog: Blog) {}
  ngOnInit() {}
  onSubmit(f: NgForm) {
    this.blog.postData('http://localhost:3000/api/blog/add', f.value).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
}
