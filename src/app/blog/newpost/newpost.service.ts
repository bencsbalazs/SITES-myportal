import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/post.model';

@Injectable()
export class NewPostService{
    constructor(private http: HttpClient){}
    CreatePost(newpost: Post){
        return this.http.post('/api/blog/add',{
            title: newpost.title,
            content: newpost.content
        })
    }
}