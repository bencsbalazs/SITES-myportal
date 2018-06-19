import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
  styles: ['.carousel img {width: 100%;height: 100%;}']
})
export class CarouselComponent implements OnInit {
  images: Array<string>;
  slides;
  constructor(private _http: HttpClient) { }
  ngOnInit() {
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }
  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}
