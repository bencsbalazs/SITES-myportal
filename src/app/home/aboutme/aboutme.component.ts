import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-aboutme',
  template: `
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.aboutme.title' | translate }}</h2>
      <small class="text-center">{{ 'home.aboutme.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12 px-4">
      <div class="row" *ngFor="let work of ('home.aboutme.rows' | translate)">
        <div class="col-1 mr-3">
          <i class="fa fa-{{work.icon}} fa-2x indigo-text"></i>
        </div>
        <div class="col-10">
          <h5 class="feature-title">{{ work.title }}</h5>
          <p class="grey-text">{{work.text}}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <p class="h5 text-center mb-4">Watch our "5 min Quick Start" tutorial</p>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" allowfullscreen></iframe>
      </div>
    </div>
  </div>`,
  styles: ['']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
