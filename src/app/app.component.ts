import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  template: `<header>
  <div class="inner">
    <div class="wow fadeIn">
      <figure id="profilpicture" class="text-center">
        <img class="rounded-circle" src="{{ 'header.image' | translate }}">
        <figcaption class="text-primary text-center h2">
          <em class="main-title">{{ 'header.title' | translate }}</em>
        </figcaption>
      </figure>
      <div class="fa fa-arrow-down fa-4x text-center pt-3 mt-3"></div>
    </div>
  </div>
  <app-carousel></app-carousel>
</header>
<app-navbar></app-navbar>
<main role="main" id="main">
  <section class="my-5 py-5 wow fadeIn" id="services"><app-home-services></app-home-services></section>
  <section class="my-5 py-5 wow fadeIn bgc-white" id="contactme"><app-home-contactme></app-home-contactme></section>
  <section class="my-5 py-5 wow fadeIn" id="portfolio"><app-home-portfolio></app-home-portfolio></section>
  <section class="my-5 py-5 wow fadeIn bgc-white" id="blog"><app-home-blog></app-home-blog></section>
  <section class="my-5 py-5 wow fadeIn" id="aboutme"><app-home-aboutme></app-home-aboutme></section>
  <section class="my-5 py-5 wow fadeIn" id="partners"><app-home-partners></app-home-partners></section>
</main>
<footer class="page-footer font-small unique-color-dark pt-0 mt-5">
  <app-footer></app-footer>
</footer>`,
  styles: ['#profilpicture img{border:.25em solid rgba(255,255,255,1);box-shadow:0 0 .5em #000}#profilpicture>figcaption{margin-top:-10%;z-index:999}'],
})
export class AppComponent implements OnInit, OnDestroy {
  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
  }
  ngOnDestroy() {
    this.wowSubscription.unsubscribe();
  }
}
