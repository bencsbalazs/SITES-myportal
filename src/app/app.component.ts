import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  footer: {
    name: string,
    desc: string,
    apps: {
      title: string,
      links: Array<{
        link: string,
        name: string
      }>
    }
    links: {
      title: string,
      links: Array<{
        link: string,
        name: string
      }>
    },
    contact: {
      title: string,
      links: Array<{
        icon: string,
        link: string,
        text: string
      }>
    }
  };

  constructor(private translate: TranslateService) {

    translate.setDefaultLang('en');

    this.footer = {
      name: 'Balazs Bencs',
      // tslint:disable-next-line:max-line-length
      desc: 'Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      apps: {
        title: 'Products',
        links: [
          { name: 'E-learning site', link: '' },
          { name: 'Content frame', link: '' }
        ]
      },
      links: {
        title: '',
        links: [
          { name: '', link: '' }
        ]
      },
      contact: {
        title: 'Contact',
        links: [
          {
            icon: 'home',
            // tslint:disable-next-line:max-line-length
            link: 'https://www.google.com/maps/place/Budapest,+M%C3%B3r+u.+14,+1135+Magyarorsz%C3%A1g/@47.5244039,19.08082,17z/data=!3m1!4b1!4m5!3m4!1s0x4741db90036ba625:0xf315f50b114f1c35!8m2!3d47.5244039!4d19.083014',
            text: '1135 Budapest, Mór utca 14/2, HU'
          },
          { icon: 'envelope', link: 'mailto:bencsbalazs@gmail.com', text: 'bencsbalazs@gmail.com' },
          { icon: 'viber', link: '', text: '' },
          { icon: 'skype', link: '', text: '' }
        ]
      }
    };

  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
