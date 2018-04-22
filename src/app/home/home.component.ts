import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: [{
    title: string,
    text: string
  }];

  constructor() {
    this.tiles = [
      {
        title: 'Title1',
        text: 'Lorem ipsum'
      }
    ];
  }

  ngOnInit() {
  }

}
