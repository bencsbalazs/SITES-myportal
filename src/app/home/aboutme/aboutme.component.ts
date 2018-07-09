import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
    <div class="card-columns">
      <div class="card" *ngFor="let cert of ('home.aboutme.certificates' | translate)">
        <img class="card-img-top" src="{{ cert.image }}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: ['.card-body, .card-footer{display:none;} .card:hover .card-body, .card:hover .card-footer{display:block;}']
})
export class AboutmeComponent implements OnInit {

  constructor() {}

  ngOnInit() {


  }

}
