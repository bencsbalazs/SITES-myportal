import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
      (item:HTMLElement) => {
      });
  }
  ngOnDestroy() {
    this.wowSubscription.unsubscribe();
  }
}
