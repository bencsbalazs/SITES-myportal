import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTING } from './app-routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgStickyDirective } from 'ng-sticky';
import { NgwWowModule } from 'ngx-wow';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog/blog.component';
import { LoginComponent} from './blog/login/login.component';

import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './home/services/services.component';
import { PartnersComponent } from './home/partners/partners.component';
import { ContactmeComponent } from './home/contactme/contactme.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent,
    NgStickyDirective,
    CarouselComponent,
    ServicesComponent,
    PartnersComponent,
    ContactmeComponent,
    AboutmeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ROUTING,
    NgwWowModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
  ],
  bootstrap: [AppComponent],
  providers: [
    CommonService
  ]
})

export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
