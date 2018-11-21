import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-navbar",
  template: `
  <nav class="navbar navbar-expand-md navbar-dark bg-dark" ng-sticky="ng-sticky" [offSet]="0" [addClass]="'is-sticky'">
  <a class="navbar-brand" href="/">{{ 'navbar.title' | translate }}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse pull-left" id="navbarCollapse">
    <ul class="navbar-nav mr-auto" data-spy="scroll" data-offset="0" data-target="navbarCollapse">
      <li *ngFor="let item of ('navbar.menu' | translate)" class='nav-item'>
        <a class="nav-link" pageScroll href='{{item.link}}'>{{item.title}}</a>
      </li>
    </ul>
    <form class="form-inline mt-2 mt-md-0">
      <input class="form-control mr-sm-2" type="text" placeholder="{{ 'navbar.search' | translate }}">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ 'navbar.search' | translate }}</button>
    </form>
    <div>
      <button type="button" class="btn btn-outline-info mx-2" (click)="translate.use('hu')">HU</button>
      <button type="button" class="btn btn-outline-info mr-2" (click)="translate.use('en')">EN</button>
    </div>
  </div>
  </nav>`,
  styles: ['']
})

export class NavbarComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
}
