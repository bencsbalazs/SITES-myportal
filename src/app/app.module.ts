import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgStickyDirective } from 'ng-sticky';
import { NgwWowModule } from 'ngx-wow';
import { NgxGalleryModule } from 'ngx-gallery';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonService } from './common.service';

import { BlogComponent } from './blog/blog.component';

import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NgStickyDirective,
    CarouselComponent,
    ServicesComponent,
    PartnersComponent,
    ContactmeComponent,
    AboutmeComponent,
    PortfolioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxGalleryModule,
    Ng2PageScrollModule,
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
