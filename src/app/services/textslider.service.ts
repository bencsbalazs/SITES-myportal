import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsliderService {
  messages: Array<string>;
  constructor() {
    this.messages = [
      "Elso", "Masodik"
    ]
   }
   ShowText(){
     return this.messages[1];
   }
}
