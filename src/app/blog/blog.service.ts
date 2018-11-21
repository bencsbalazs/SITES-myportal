import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class Blog {
  constructor(private http: HttpClient) { }
  getData(url: string) {
    return this.http.get(url)
  }
  postData(url: string, data: any){
    return this.http.post(url, data,{
    })
  }
}
