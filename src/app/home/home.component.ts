import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="container">
  <section class="my-5 py-5 wow fadeIn" id="services"><app-home-services></app-home-services></section>
  <section class="my-5 wow fadeIn" id="portfolio"><app-home-portfolio></app-home-portfolio></section>
  <section class="my-5 wow fadeIn" id="aboutme"><app-home-aboutme></app-home-aboutme></section>
  <section class="my-5 wow fadeIn bg-grey" id="partners"><app-home-partners></app-home-partners></section>
  <section class="my-5 wow fadeIn" id="contactme"><app-home-contactme></app-home-contactme></section>
</div>`,
  styles: ['']
})
export class HomeComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
