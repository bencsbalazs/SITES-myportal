import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgStickyDirective } from 'ng-sticky';
import { NgwWowModule } from 'ngx-wow';
import { NgxGalleryModule } from 'ngx-gallery';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';

import { BlogComponent } from './blog/blog/blog.component';
import { LoginComponent } from './blog/login/login.component';
import { NewPostComponent } from './blog/newpost/newpost.component';

import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    NewPostComponent,
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
    FormsModule,
    HttpClientModule,
    NgxGalleryModule,
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
