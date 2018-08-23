import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-aboutme',
  template: `
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.aboutme.title' | translate }}</h2>
      <small class="description">{{ 'home.aboutme.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
    <div class="card-columns">
      <div class="card" *ngFor="let cert of ('home.aboutme.certificates' | translate)">
        <img class="card-img-top" src="{{ cert.image }}" alt="Card image cap" data-toggle="tooltip" data-placement="top" title="{{ cert.text }}">
        <div class="card-footer">
          <small class="text-muted">Provider: {{ cert.provider }}</small>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: ['']
})
export class AboutmeComponent implements OnInit {

  constructor() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
  }

  ngOnInit() {

  }

}
