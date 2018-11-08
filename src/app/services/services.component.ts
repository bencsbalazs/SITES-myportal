import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-services',
  template: `<div class="container">
  <div class="row">
      <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
          <h2>{{ 'home.services.title' | translate }}</h2>
          <small class="description">{{ 'home.services.slogan' | translate }}</small>
      </div>
  </div>
  <div class="row card-column">
      <div class="card col-md-4 p-4" *ngFor="let tile of ( 'home.services.tiles' | translate); let i=index">
          <i class="fa fa-{{tile.icon}} fa-2x mx-auto"></i>
          <h3 class="description pt-3">{{tile.title}}</h3>
          <div class="card-body text-justify">{{tile.text}}</div>
      </div>
  </div>
</div>`,
  styles: ['.card,.card>.fa,.card>div,.card>h2{transition:linear 1s}.card{transform:scale(.95);border:0 solid #fff}.card>.fa{transform:scale(2)}.card>div,.card>h2{transform:scale(.8);text-align:center}.card:hover>div,.card:hover>h2{transform:scale(1)}.card:hover{transform:scale(1.1);z-index:999;border:.2em solid #000;box-shadow:0 0 .8em #fff}.card:hover>.fa{transform:scale(.6)}']
})
export class ServicesComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
