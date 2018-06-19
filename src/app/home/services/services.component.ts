import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-services',
  template: `
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2 class="p-0">{{ 'home.services.title' | translate }}</h2>
      <small class="text-center">{{ 'home.services.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
  <div class="card col-4 my-3" *ngFor="let tile of ( 'home.services.tiles' | translate); let i=index">
      <div class="card-header">{{tile.title}}</div>
      <div class="card-body">{{tile.text}}</div>
    </div>
  </div>`,
  styles: ['.card{transition: ease-in-out 500;}.card:hover{box-shadow: 0 0 1em #ccc inset, 0 0 1em #000;z-index:999;transform: rotate(10deg);}']
})
export class ServicesComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
