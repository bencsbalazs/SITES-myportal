import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TextsliderService } from './services/textslider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TextsliderService]
})

export class AppComponent {
  slider: string;
  constructor(private translate: TranslateService, private textslider: TextsliderService) {
    translate.setDefaultLang('en');
    this.slider = textslider.actmsg;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }



}
