import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

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
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
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

    this.galleryImages = [
      {
        small: '/assets/images/badges/bluemix-essentials.png',
        medium: '/assets/images/badges/bluemix-essentials.png',
        big: '/assets/images/badges/bluemix-essentials.png',
        // tslint:disable-next-line:max-line-length
        description: 'This badge holder has a understanding of the essentials of IBM Cloud. Through an online course they have learned about the IBM Cloud platform and gained hands-on experience using the Cloud Foundry command-line interface and the IBM Eclipse tools for IBM Cloud. The badge earner has used these tools to deploy and modify basic applications using a managed service in IBM Cloud.',
        url: 'https://www.youracclaim.com/badges/b56295bf-abed-48b6-a04e-6c3e69da8bca',
        label: 'IBM Cloud Essentials'
      },
      {
        small: '/assets/images/badges/node-red-basics-to-bots.png',
        medium: '/assets/images/badges/node-red-basics-to-bots.png',
        big: '/assets/images/badges/node-red-basics-to-bots.png'
      },
      {
        small: '/assets/images/badges/build-chatbots-with-watson-conversation.png',
        medium: '/assets/images/badges/build-chatbots-with-watson-conversation.png',
        big: '/assets/images/badges/build-chatbots-with-watson-conversation.png'
      },
      {
        small: '/assets/images/badges/enterprise-design-thinking-practitioner.png',
        medium: '/assets/images/badges/enterprise-design-thinking-practitioner.png',
        big: '/assets/images/badges/enterprise-design-thinking-practitioner.png'
      },
      {
        small: '/assets/images/badges/ibm-agile-explorer.png',
        medium: '/assets/images/badges/ibm-agile-explorer.png',
        big: '/assets/images/badges/ibm-agile-explorer.png',
        // tslint:disable-next-line:max-line-length
        description: 'The Agile Explorer has a foundational understanding of Agile values, principles, and practices that allows them to initiate an Agile conversation with co-workers and colleagues.',
        url: 'https://www.youracclaim.com/badges/2e9d7b8c-5d79-4bdf-9df5-7349dafefed8'
      },
      {
        small: '/assets/images/badges/ibm-mentor.png',
        medium: '/assets/images/badges/ibm-mentor.png',
        big: '/assets/images/badges/ibm-mentor.png'
      },
      {
        small: '/assets/images/badges/html.jpg',
        medium: '/assets/images/badges/html.jpg',
        big: '/assets/images/badges/html.jpg'
      },
      {
        small: '/assets/images/badges/css.jpg',
        medium: '/assets/images/badges/css.jpg',
        big: '/assets/images/badges/css.jpg'
      },
      {
        small: '/assets/images/badges/sql.jpg',
        medium: '/assets/images/badges/sql.jpg',
        big: '/assets/images/badges/sql.jpg'
      },
      {
        small: '/assets/images/badges/javascript.jpg',
        medium: '/assets/images/badges/javascript.jpg',
        big: '/assets/images/badges/javascript.jpg'
      },
      {
        small: '/assets/images/badges/php.jpg',
        medium: '/assets/images/badges/php.jpg',
        big: '/assets/images/badges/php.jpg'
      }
    ];
  }
}
