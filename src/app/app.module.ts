import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ConfigService
  ]
})

export class AppModule { }
