import { Component } from '@angular/core';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: {
    slogan: Array<string>
  };
  navbar: {
    title: string,
    menu: Array<{
      title: string,
      link: string,
      scroll: string
    }>
  };
  social: {
    text: string,
    icons: Array<{
      class: string,
      link: string
    }>
  };
  footer: {
    name: string,
    desc: string,
    apps: Array<{
      link: string,
      name: string
    }>,
    links: Array<{
      link: string,
      name: string
    }>
  };

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) { return b; }
                if (t === d) { return b + c; }
                if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    this.header = {
      slogan: [
        'Every problems....',
        'A lot of knowledge...'
      ]
    };
    this.navbar = {
      title: 'Example angular page',
      menu: [
        {title: 'Home', link: '/home', scroll: ''},
        {title: 'Blog', link: '/blog', scroll: ''}
      ]
    };
    this.social = {
      text: 'Find me on social networks as well!',
      icons: [
        {class: 'fa-facebook-square', link: ''},
        {class: 'fa-twitter-square', link: ''},
        {class: 'fa-google-plus-square', link: ''},
        {class: 'fa-linkedin', link: ''},
        {class: 'fa-instagram', link: ''},
        {class: 'fa-github', link: ''}
      ]
    };
    this.footer = {
      name: 'Balazs Bencs',
      desc: '',
      apps: [
        {name: '', link: ''}
      ],
      links: [
        {name: '', link: ''}
      ]
    };
  }
}
