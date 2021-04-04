import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxStripeModule.forRoot('***your-stripe-publishable-key***'),
    CookieModule.forRoot()
  ],
  providers: [HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
