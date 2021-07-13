import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-TM2B5C4',
    })
  ],
  providers: [
    { provide: 'googleTagManagerId', useValue: 'GTM-TM2B5C4' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
