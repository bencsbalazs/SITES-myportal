import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-portfolio',
  template: `
  <div class="container">
  <div class="row">
  <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
    <h2>{{ 'home.portfolio.title' | translate }}</h2><small class="description">{{ 'home.portfolio.slogan' | translate }}</small>
  </div>
  <div class="col-lg-12">
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <h4 class='fa fa-user'></h4>
                </div>
              </li>
              <li *ngFor="let step of ( 'home.portfolio.steps' | translate ); let i=index; let even=even;" [class.even]="even">
                <div class="timeline-image">
                  <h4 class='fa fa-{{ step.icon }}'></h4>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>{{ step.date }}</h4>
                    <h4 class="subheading">{{ step.title }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">{{ step.text }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <h3 class="m-auto">Be<br>part of<br>the<br>story</h3>
                </div>
              </li>
            </ul>
</div>
</div>`,
  styleUrls: ['portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
