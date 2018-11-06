import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-partners',
  template: `
  <div class="row">
    <div class="col-12 my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.partners.title' | translate }}</h2>
      <small class="description">{{ 'home.partners.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
    <div class="col-2 text-center partner" *ngFor="let partner of ('home.partners.images' | translate)">
      <img src="{{ partner.src }}" alt="" title="">
    </div>
  </div>`,
  // tslint:disable-next-line:max-line-length
  styles: ['#partners{background-color: rgba(255,255,255,.8;)} .partner{filter: grayscale(100%);height:150px;}.partner img{display: block;width:100%;height:100%;object-fit: contain;overflow: hidden;}']
})
export class PartnersComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
