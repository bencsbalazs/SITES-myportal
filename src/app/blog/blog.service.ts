import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class Blog {
  constructor(private http: HttpClient) { }
  getData(url: string, data:string) {
    return this.http.get(url + data)
  }
  postData(url: string, data: any){
    return this.http.post(url, data)
  }
}
