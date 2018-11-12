import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-aboutme',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.aboutme.title' | translate }}</h2>
      <small class="description">{{ 'home.aboutme.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
  <ngx-gallery [options]="galleryOptions" [images]="galleryImages"></ngx-gallery>
  </div>
  </div>
  `,
  styles: ['']
})
export class AboutmeComponent implements OnInit {
  galleryImages: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[];
  constructor(private translate: TranslateService){}
  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Contain,
        imageDescription: true,
        imageInfinityMove: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 4000,
        imageAutoPlayPauseOnHover: true,
        thumbnailSize: NgxGalleryImageSize.Contain
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.translate.get('home.aboutme.slides').subscribe(value => {this.galleryImages = value;})
  }
}
