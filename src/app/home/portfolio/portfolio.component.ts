import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  template: `<div class="row">
  <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
    <h2>{{ 'home.portfolio.title' | translate }}</h2>
    <small class="description">{{ 'home.portfolio.slogan' | translate }}</small>
  </div>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" style="background: #000;" src="" allowfullscreen="allowfullscreen"></iframe>
  </div>
</div>`,
  styles: ['']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
