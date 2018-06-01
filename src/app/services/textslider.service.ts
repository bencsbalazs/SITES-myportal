import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextsliderService {
  messages: Array<string>;
  actmsg: string;
  constructor() {
    this.messages = [
      "Elso", "Masodik"
    ]
   }
   let t=
    t.subscribe(i => this.actmsg = this.messages[i]);
      if (i >= this.messages.length-1) {i=0;} else {i++;}
}
