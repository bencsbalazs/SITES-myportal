import { Component } from '@angular/core';
import { Post } from '../models/post.model';
import { NewPostService } from './newpost.service';

@Component({
    selector: 'app-new-post',
    template: `<div class="row">
    <div class="container">
        <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
            <form>
                <input type="text" class="form-control" name="title" [(ngModel)]="NewPost.title" placeholder="Title">
                <textarea class="form-control" [(ngModel)]="NewPost.content" placeholder="Content" required name="content"></textarea>
                <button class="btn btn-success btn-lg" (click)="SavePost();">Save</button>
            </form>
        </div>
        </div>
    </div>`,
    styleUrls: [],
    providers: [NewPostService]
})

export class NewPostComponent{
    public NewPost:Post;
    constructor(private newpostservice: NewPostService){
        this.NewPost = new Post();
    }
    SavePost(){
        this.newpostservice.CreatePost(this.NewPost).subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
        console.log(this.NewPost);
    }
}

