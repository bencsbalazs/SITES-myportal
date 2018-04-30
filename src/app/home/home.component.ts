import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles = {};
  images = {};

  constructor() {
    this.tiles = [
      {
        'title': 'Title1',
        // tslint:disable-next-line:max-line-length
        'text': 'This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.'
      },
      {
        'title': 'Title1',
        // tslint:disable-next-line:max-line-length
        'text': 'This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.'
      },
      {
        'title': 'Title1',
        // tslint:disable-next-line:max-line-length
        'text': 'This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.'
      },
      {
        'title': 'Title1',
        // tslint:disable-next-line:max-line-length
        'text': 'This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.'
      },
      {
        'title': 'Title1',
        // tslint:disable-next-line:max-line-length
        'text': 'This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.'
      },
      {
        'title': 'Title1',
        // tslint:disable-next-line:max-line-length
        'text': 'This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.'
      }
    ];
    this.images = [
      {
        'src': 'http://via.placeholder.com/200x200',
        'title': 'Place',
        'alt': 'Placeholder'
      },
      {
        'src': 'http://via.placeholder.com/200x200',
        'title': 'Place',
        'alt': 'Placeholder'
      },
      {
        'src': 'http://via.placeholder.com/200x200',
        'title': 'Place',
        'alt': 'Placeholder'
      },
      {
        'src': 'http://via.placeholder.com/200x200',
        'title': 'Place',
        'alt': 'Placeholder'
      },
      {
        'src': 'http://via.placeholder.com/200x200',
        'title': 'Place',
        'alt': 'Placeholder'
      },
      {
        'src': 'http://via.placeholder.com/200x200',
        'title': 'Place',
        'alt': 'Placeholder'
      }
    ];
  }

  ngOnInit() {
  }

}
