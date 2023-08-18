import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NglModule,  NGL_ICON_CONFIG, NglIconConfig} from 'ng-lightning';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NglModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NGL_ICON_CONFIG, useValue: <NglIconConfig>{ svgPath: 'assets/icons' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
