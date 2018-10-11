import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-services',
  template: `
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.services.title' | translate }}</h2>
      <small class="description">{{ 'home.services.slogan' | translate }}</small>
    </div>
  <div class="col-12 card-column">
  <div class="card col-md-4 p-4" *ngFor="let tile of ( 'home.services.tiles' | translate); let i=index">
    <i class="fa fa-pencil fa-2x mx-auto"></i>
        <h2 class="description pt-3">{{tile.title}}</h2>
      <div class="card-body text-justify">{{tile.text}}</div>
    </div>
</div>`,
  styleUrls: ['services.components.css']
})
export class ServicesComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
