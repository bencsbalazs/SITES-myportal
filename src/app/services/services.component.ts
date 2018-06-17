import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  template: `<section class="my-5 wow fadeIn" id="services">
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.services.title' | translate }}</h2>
      <small class="text-center">{{ 'home.services.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
  <div class="card col-4 px-3 my-3" *ngFor="let tile of ( 'home.services.tiles' | translate); let i=index">
      <div class="card-header">{{tile.title}}</div>
      <div class="card-body">{{tile.text}}</div>
    </div>
  </div>
</section>`,
  styles: ['']
})

export class ServicesComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
