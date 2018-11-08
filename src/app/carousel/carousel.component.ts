import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import $ from 'jquery';
import * as data from '../../assets/i18n/en.json';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  template: `
  <ngb-carousel *ngIf="images">
  <ng-template ngbSlide *ngFor="let carousel of ('header.carousel' | translate); index as i">
    <img [src]="images[i]" alt="">
    <div class="carousel-caption">
      <h3>{{ carousel.slogan }}</h3>
      <p>{{ carousel.author }}</p>
    </div>
  </ng-template>
</ngb-carousel>`,
  // tslint:disable-next-line:max-line-length
  styles: ['.carousel{position:fixed;width: 100%;height: 100%;z-index:-1}.carousel div{position:absolute;}.carousel img {width: 100%;height: 100%;} .carousel-control { display: none; visibility: hidden;}']
})
export class CarouselComponent implements OnInit {
  images: Array<string>;
  slides = (<any>data).header.carousel.length;
  list = [];
  i = 1;
  prevScrollPos = window.innerHeight * 0.1;
  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
  ngOnInit() {
    window.onload = window.onscroll = this.sloganToggle;
    while (this.list.push(this.i++) <= this.slides) { }
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }
  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return this.list.map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
  private sloganToggle = () => {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
      if (this.prevScrollPos >= currentScrollPos) {
        $('.carousel-caption').css('display', 'block');
      } else {
        $('.carousel-caption').css('display', 'none');
      }
  }
}
